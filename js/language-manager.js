/**
 * 言語管理機能
 * 多言語対応の切り替えとコンテンツ更新を管理
 */
const LanguageManager = {
    /**
     * 初期化処理
     */
    initialize() {
        this.loadSavedLanguage();
        this.updateLanguage();
        this.updateLanguageButton();
    },

    /**
     * 保存された言語設定を読み込む
     */
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
            currentLanguage = savedLang;
        }
    },

    /**
     * 言語を切り替える
     */
    toggleLanguage() {
        const fromLang = currentLanguage;
        currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
        
        // Google Analytics で言語切り替えを追跡（どこから切り替えたかは呼び出し元で判定）
        Analytics.trackLanguageSwitch(fromLang, currentLanguage, 'button');
        
        this.updateLanguage();
        this.updateLanguageButton();
    },

    /**
     * 言語に応じてコンテンツを更新
     */
    updateLanguage() {
        this.updateTextElements();
        this.updateNavigationLinks();
        this.reRenderDynamicContent();
        this.saveLanguagePreference();
    },

    /**
     * テキスト要素を更新
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
     * ナビゲーションリンクを更新
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
     * 動的コンテンツを再レンダリング
     */
    reRenderDynamicContent() {
        SkillsRenderer.render();
        ProjectsRenderer.render();
        ExperienceRenderer.render();
    },

    /**
     * 言語ボタンの表示を更新
     */
    updateLanguageButton() {
        const langButtons = document.querySelectorAll('.lang-toggle');
        langButtons.forEach(button => {
            button.textContent = currentLanguage === 'ja' ? 'EN' : 'JP';
        });
    },

    /**
     * 言語設定を保存
     */
    saveLanguagePreference() {
        localStorage.setItem('preferred-language', currentLanguage);
    }
};

/**
 * グローバル関数（既存のHTMLから呼び出される）
 */
function toggleLanguage() {
    LanguageManager.toggleLanguage();
}
