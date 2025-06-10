/**
 * ユーティリティ機能
 * 共通処理とイベント管理
 */

/**
 * イベント管理機能
 */
const EventManager = {
    /**
     * Escapeキーの処理
     */
    handleEscapeKey(e) {
        if (e.key !== 'Escape') return;
        
        // モーダルが開いている場合は閉じる
        if (document.getElementById('projectModal')?.classList.contains('active')) {
            ModalManager.closeModal();
        }
        
        // モバイルメニューが開いている場合は閉じる
        if (isMenuOpen) {
            MobileMenu.close();
        }
    }
};

/**
 * ローディング管理機能
 */
const LoadingManager = {
    /**
     * 初期化
     */
    init() {
        // ページ読み込み完了時の処理は main.js で設定
    },

    /**
     * ローディングオーバーレイを非表示にする
     */
    hideOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (!overlay) return;
        
        // フェードアウト開始
        overlay.style.opacity = '0';
        
        // 0.8秒後にオーバーレイを完全に非表示
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);

        // bodyにloadedクラスを追加してページをじんわり表示
        document.body.classList.add('loaded');
    }
};

/**
 * デバッグ用ユーティリティ
 */
const DebugUtils = {
    /**
     * 現在の言語を取得
     */
    getCurrentLanguage() {
        return currentLanguage;
    },

    /**
     * メニューの状態を取得
     */
    getMenuState() {
        return isMenuOpen;
    },

    /**
     * コンテンツデータを取得
     */
    getContentData() {
        return content;
    }
};

/**
 * ブラウザサポートチェック
 */
const BrowserSupport = {
    /**
     * Intersection Observerのサポート確認
     */
    hasIntersectionObserver() {
        return 'IntersectionObserver' in window;
    },

    /**
     * Local Storageのサポート確認
     */
    hasLocalStorage() {
        try {
            const test = 'test';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    },

    /**
     * CSS Transitionsのサポート確認
     */
    hasTransitions() {
        const el = document.createElement('div');
        return typeof el.style.transition !== 'undefined';
    }
};

/**
 * パフォーマンス監視
 */
const PerformanceMonitor = {
    /**
     * ページ読み込み時間を測定
     */
    measureLoadTime() {
        if (performance && performance.timing) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
            return loadTime;
        }
        return null;
    },

    /**
     * メモリ使用量を確認（対応ブラウザのみ）
     */
    checkMemoryUsage() {
        if (performance && performance.memory) {
            console.log('Memory usage:', {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
                total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB',
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + ' MB'
            });
        }
    }
};
