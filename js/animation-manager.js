/**
 * Animation management functionality
 * Manages various animation effects within the page
 */
const AnimationManager = {
    /**
     * Setup Intersection Observer for scroll animations
     */
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver(
            this.handleIntersection.bind(this), 
            observerOptions
        );
        this.observeAnimationElements(observer);
    },

    /**
     * Handle when element enters the screen
     */
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateElement(entry.target);
            }
        });
    },

    /**
     * Apply animation to element
     */
    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    },

    /**
     * Observe animation target elements
     */
    observeAnimationElements(observer) {
        const animateElements = document.querySelectorAll(
            '.project-card, .timeline-item, .skill-item'
        );
        
        animateElements.forEach(el => {
            this.prepareElementForAnimation(el);
            observer.observe(el);
        });
    },

    /**
     * Prepare element for animation
     */
    prepareElementForAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
};

/**
 * Badge animation management
 */
const BadgeAnimation = {
    // Animation state
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    flipAngle: 0,

    /**
     * Initialize badge animation
     */
    init() {
        const badge = document.getElementById('badge');
        if (!badge) return;

        this.setupEventListeners(badge);
        this.startAnimationLoop();
    },

    /**
     * Setup event listeners
     */
    setupEventListeners(badge) {
        badge.addEventListener('mousemove', this.handleMove.bind(this));
        badge.addEventListener('mouseleave', this.handleLeave.bind(this));
        badge.addEventListener('click', this.handleClick.bind(this));
        badge.addEventListener('touchmove', this.handleMove.bind(this));
        badge.addEventListener('touchend', this.handleLeave.bind(this));
    },

    /**
     * Handle mouse movement
     */
    handleMove(e) {
        const badge = e.currentTarget;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        const rect = badge.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = clientX - centerX;
        const mouseY = clientY - centerY;

        const maxTilt = 15;
        this.targetRotationX = (mouseY / (rect.height / 2)) * maxTilt;
        this.targetRotationY = (mouseX / (rect.width / 2)) * -maxTilt;
    },

    /**
     * Handle mouse leave
     */
    handleLeave() {
        this.targetRotationX = 0;
        this.targetRotationY = 0;
    },

    /**
     * Handle click
     */
    handleClick() {
        this.flipAngle += 180;
    },

    /**
     * Start animation loop
     */
    startAnimationLoop() {
        this.animate();
    },

    /**
     * Animation frame processing
     */
    animate() {
        const badge = document.getElementById('badge');
        if (!badge) return;

        this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;
        this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;

        badge.style.transform = 
            `rotateX(${this.currentRotationX}deg) ` +
            `rotateY(${this.currentRotationY + this.flipAngle}deg)`;

        requestAnimationFrame(this.animate.bind(this));
    }
};

// Initialize badge animation
document.addEventListener('DOMContentLoaded', function() {
    BadgeAnimation.init();
});
