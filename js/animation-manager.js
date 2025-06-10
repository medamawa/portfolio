/**
 * アニメーション管理機能
 * ページ内の各種アニメーション効果を管理
 */
const AnimationManager = {
    /**
     * Intersection Observerを設定してスクロールアニメーションを初期化
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
     * 要素が画面に入った時の処理
     */
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateElement(entry.target);
            }
        });
    },

    /**
     * 要素にアニメーションを適用
     */
    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    },

    /**
     * アニメーション対象の要素を監視
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
     * 要素をアニメーション準備状態にする
     */
    prepareElementForAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
};

/**
 * バッジアニメーション管理
 */
const BadgeAnimation = {
    // アニメーション状態
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    flipAngle: 0,

    /**
     * バッジアニメーションを初期化
     */
    init() {
        const badge = document.getElementById('badge');
        if (!badge) return;

        this.setupEventListeners(badge);
        this.startAnimationLoop();
    },

    /**
     * イベントリスナーを設定
     */
    setupEventListeners(badge) {
        badge.addEventListener('mousemove', this.handleMove.bind(this));
        badge.addEventListener('mouseleave', this.handleLeave.bind(this));
        badge.addEventListener('click', this.handleClick.bind(this));
        badge.addEventListener('touchmove', this.handleMove.bind(this));
        badge.addEventListener('touchend', this.handleLeave.bind(this));
    },

    /**
     * マウス移動時の処理
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
     * マウスが離れた時の処理
     */
    handleLeave() {
        this.targetRotationX = 0;
        this.targetRotationY = 0;
    },

    /**
     * クリック時の処理
     */
    handleClick() {
        this.flipAngle += 180;
    },

    /**
     * アニメーションループを開始
     */
    startAnimationLoop() {
        this.animate();
    },

    /**
     * アニメーションフレーム処理
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

// バッジアニメーションを初期化
document.addEventListener('DOMContentLoaded', function() {
    BadgeAnimation.init();
});
