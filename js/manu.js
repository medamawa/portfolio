/**
 * モバイルメニュー管理機能
 * スマートフォン向けナビゲーションメニューの開閉を管理
 */
const MobileMenu = {
    /**
     * メニューの開閉を切り替える
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
     * メニューを開く
     */
    open(overlay, menuToggle) {
        overlay.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * メニューを閉じる
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
     * 外部クリック時の処理
     */
    handleOutsideClick(e) {
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        if (e.target === mobileNavOverlay) {
            this.close();
        }
    }
};

/**
 * グローバル関数（既存のHTMLから呼び出される）
 */
function toggleMenu() {
    MobileMenu.toggle();
}

function closeMenu() {
    MobileMenu.close();
}
