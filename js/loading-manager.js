/**
 * Loading management functionality
 * Manages page loading state and transitions
 */
const LoadingManager = {
    // Loading state
    isLoading: true,
    // Transition duration (ms)
    TRANSITION_DURATION: 800,
    // Minimum display time (ms)
    MIN_DISPLAY_TIME: 500,

    /**
     * Initialize
     */
    init() {
        this.setupLoadingOverlay();
        this.startLoading();
    },

    /**
     * Setup loading overlay
     */
    setupLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (!overlay) return;

        // Set transition
        overlay.style.transition = `opacity ${this.TRANSITION_DURATION}ms ease`;
        overlay.style.opacity = '1';
    },

    /**
     * Start loading
     */
    startLoading() {
        const startTime = performance.now();
        
        // Wait for content loading
        Promise.all([
            // Load images
            this.preloadImages(),
            // Ensure minimum display time
            new Promise(resolve => setTimeout(resolve, this.MIN_DISPLAY_TIME))
        ]).then(() => {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = Math.max(0, this.TRANSITION_DURATION - elapsedTime);
            
            // Wait remaining time then fade out
            setTimeout(() => {
                this.completeLoading();
            }, remainingTime);
        });
    },

    /**
     * Preload images
     */
    preloadImages() {
        const images = document.querySelectorAll('img');
        const imagePromises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve; // Continue on error
            });
        });

        return Promise.all(imagePromises);
    },

    /**
     * Complete loading
     */
    async completeLoading() {
        if (!this.isLoading) return;

        const startTime = performance.now();
        const elapsedTime = startTime - this.loadStartTime;
        const remainingTime = Math.max(0, this.MIN_DISPLAY_TIME - elapsedTime);

        // Wait for minimum display time
        await new Promise(resolve => setTimeout(resolve, remainingTime));

        // Start fade out
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = `opacity ${this.TRANSITION_DURATION}ms ease-out`;
        }

        // Wait for fade out completion
        await new Promise(resolve => setTimeout(resolve, this.TRANSITION_DURATION));

        // Hide loading overlay
        if (overlay) {
            overlay.style.display = 'none';
        }

        // Add loaded class to body
        document.body.classList.add('loaded');

        // Loading stateを更新
        this.isLoading = false;

        // Initialize scroll animations
        AnimationManager.setupIntersectionObserver();
    },

    /**
     * Hide loading overlay
     */
    hideOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (!overlay) return;
        
        // Start fade out
        overlay.style.opacity = '0';
        
        // Hide overlay completely after 0.8 seconds
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);

        // Add loaded class to bodyしてページをじんわり表示
        document.body.classList.add('loaded');
        this.isLoading = false;
    },

    /**
     * Get loading state
     */
    getLoadingState() {
        return this.isLoading;
    }
}; 