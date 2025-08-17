/**
 * Utility functionality
 * Common processes and event management
 */

/**
 * Event management functionality
 */
const EventManager = {
    /**
     * Handle Escape key
     */
    handleEscapeKey(e) {
        if (e.key !== 'Escape') return;
        
        // Close modal if open
        if (document.getElementById('projectModal')?.classList.contains('active')) {
            ModalManager.closeModal();
        }
        
        // Close mobile menu if open
        if (isMenuOpen) {
            MobileMenu.close();
        }
    }
};
