/**
 * Language management functionality
 * Manages multilingual switching and content updates
 */
const LanguageManager = {
    /**
     * Initialize
     */
    initialize() {
        this.loadSavedLanguage();
        this.updateLanguage();
        this.updateLanguageButton();
    },

    /**
     * Load saved language setting
     */
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
            currentLanguage = savedLang;
        }
    },

    /**
     * Toggle language
     */
    toggleLanguage() {
        const fromLang = currentLanguage;
        currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
        
        // Track with Google Analytics
        Analytics.trackLanguageSwitch(fromLang, currentLanguage, 'button');
        
        this.updateLanguage();
        this.updateLanguageButton();
    },

    /**
     * Update content based on language
     */
    updateLanguage() {
        this.updateTextElements();
        this.updateNavigationLinks();
        this.reRenderDynamicContent();
        this.saveLanguagePreference();
    },

    /**
     * Update text elements
     */
    updateTextElements() {
        const elementsWithText = document.querySelectorAll('[data-text]');
        elementsWithText.forEach(element => {
            const textKey = element.getAttribute('data-text');
            const text = content.text[currentLanguage]?.[textKey];
            if (text) {
                element.textContent = text;
            }
        });
    },

    /**
     * Update navigation links
     */
    updateNavigationLinks() {
        const navLinks = document.querySelectorAll('[data-nav]');
        navLinks.forEach(link => {
            const navKey = link.getAttribute('data-nav');
            const text = content.text[currentLanguage]?.[navKey];
            if (text) {
                link.textContent = text;
            }
        });
    },

    /**
     * Re-render dynamic content
     */
    reRenderDynamicContent() {
        SkillsRenderer.render();
        ProjectsRenderer.render();
        ExperienceRenderer.render();
    },

    /**
     * Update language button display
     */
    updateLanguageButton() {
        const langButtons = document.querySelectorAll('.lang-toggle');
        langButtons.forEach(button => {
            button.textContent = currentLanguage === 'ja' ? 'EN' : 'JP';
        });
    },

    /**
     * Save language preference
     */
    saveLanguagePreference() {
        localStorage.setItem('preferred-language', currentLanguage);
    }
};

/**
 * Global function called from existing HTML
 */
function toggleLanguage() {
    LanguageManager.toggleLanguage();
}
