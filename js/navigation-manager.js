/**
 * Navigation management
 */
const NavigationManager = {
    /**
     * Setup smooth scrolling
     */
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
    },

    /**
     * Handle smooth scroll
     */
    handleSmoothScroll(e) {
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (!targetElement) return;
        
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Track navigation with Google Analytics
        Analytics.trackNavigation(targetId);
        
        // Close mobile menu if open
        if (isMenuOpen) {
            MobileMenu.close();
        }
    }
};

/**
 * Header management
 */
const HeaderManager = {
    lastScrollY: 0,
    isHidden: false,

    /**
     * Header effect on scroll
     */
    handleScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const currentScrollY = window.scrollY;
        
        // Determine scroll direction
        if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
            // Hide header when scrolling down past 100px
            if (!this.isHidden) {
                header.classList.add('hidden');
                this.isHidden = true;
            }
        } else if (currentScrollY < this.lastScrollY || currentScrollY <= 50) {
            // Show header when scrolling up or at top
            if (this.isHidden) {
                header.classList.remove('hidden');
                this.isHidden = false;
            }
        }
        
        this.lastScrollY = currentScrollY;
    }
};
