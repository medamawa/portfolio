/**
 * Main entry point
 */

// Global variables
let currentLanguage = 'en';
let isMenuOpen = false;

/**
 * Initialize on DOMContentLoaded event
 */
document.addEventListener('DOMContentLoaded', function() {
    LanguageManager.initialize();
    SkillsRenderer.render();
    ProjectsRenderer.render();
    ExperienceRenderer.render();
    NavigationManager.setupSmoothScrolling();
    LoadingManager.init();
});

/**
 * Handle page load complete
 */
window.addEventListener('load', function() {
    LoadingManager.hideOverlay();
});

/**
 * Header effect on scroll
 */
window.addEventListener('scroll', function() {
    HeaderManager.handleScroll();
});

/**
 * Global event listeners
 */
document.addEventListener('click', function(e) {
    ModalManager.handleOutsideClick(e);
    MobileMenu.handleOutsideClick(e);
});

document.addEventListener('keydown', function(e) {
    EventManager.handleEscapeKey(e);
});
