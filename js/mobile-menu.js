/**
 * Mobile menu management
 */
const MobileMenu = {
    /**
     * Toggle menu open/close
     */
    toggle() {
        const overlay = document.getElementById('mobileNavOverlay');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (!overlay || !menuToggle) return;
        
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            this.open(overlay, menuToggle);
        } else {
            this.close(overlay, menuToggle);
        }
    },

    /**
     * Open menu
     */
    open(overlay, menuToggle) {
        overlay.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * Close menu
     */
    close(overlay = null, menuToggle = null) {
        if (!overlay) overlay = document.getElementById('mobileNavOverlay');
        if (!menuToggle) menuToggle = document.querySelector('.menu-toggle');
        
        if (!overlay || !menuToggle) return;
        
        isMenuOpen = false;
        overlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    },

    /**
     * Handle outside click
     */
    handleOutsideClick(e) {
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        if (e.target === mobileNavOverlay) {
            this.close();
        }
    }
};

/**
 * Global functions (called from existing HTML)
 */
function toggleMenu() {
    MobileMenu.toggle();
}

function closeMenu() {
    MobileMenu.close();
}
