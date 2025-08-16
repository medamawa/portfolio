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
        
        // Google Analytics でナビゲーションを追跡
        Analytics.trackNavigation(targetId);
        
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
    lastScrollY: 0,
    isHidden: false,

    /**
     * スクロール時のヘッダー効果
     */
    handleScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const currentScrollY = window.scrollY;
        
        // スクロール方向を判定
        if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
            // 下にスクロール中かつ100px以上スクロールした場合はヘッダーを隠す
            if (!this.isHidden) {
                header.classList.add('hidden');
                this.isHidden = true;
            }
        } else if (currentScrollY < this.lastScrollY || currentScrollY <= 50) {
            // 上にスクロール中または上部にいる場合はヘッダーを表示
            if (this.isHidden) {
                header.classList.remove('hidden');
                this.isHidden = false;
            }
        }
        
        this.lastScrollY = currentScrollY;
    }
};
