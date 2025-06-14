/**
 * ナビゲーション管理機能
 * スムーズスクロールとヘッダー効果を管理
 */
const NavigationManager = {
    /**
     * スムーズスクロールを設定
     */
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
    },

    /**
     * スムーズスクロールの処理
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
        
        // モバイルメニューが開いている場合は閉じる
        if (isMenuOpen) {
            MobileMenu.close();
        }
    }
};

/**
 * ヘッダー管理機能
 */
const HeaderManager = {
    /**
     * スクロール時のヘッダー効果
     */
    handleScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        if (window.scrollY > 50) {
            this.applyScrolledStyle(header);
        } else {
            this.applyDefaultStyle(header);
        }
    },

    /**
     * スクロール時のスタイルを適用
     */
    applyScrolledStyle(header) {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            header.style.background = 'var(--backdrop-blur)';
            header.style.boxShadow = '0 2px 20px var(--shadow-medium)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    },

    /**
     * デフォルトスタイルを適用
     */
    applyDefaultStyle(header) {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            header.style.background = 'var(--backdrop-blur)';
            header.style.boxShadow = 'none';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
};
