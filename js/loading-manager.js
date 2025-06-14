/**
 * ローディング管理機能
 * ページの読み込み状態とトランジションを管理
 */
const LoadingManager = {
    // ローディング状態
    isLoading: true,
    // トランジション時間（ミリ秒）
    TRANSITION_DURATION: 3000,
    // 最小表示時間（ミリ秒）
    MIN_DISPLAY_TIME: 2000,

    /**
     * 初期化
     */
    init() {
        this.setupLoadingOverlay();
        this.startLoading();
    },

    /**
     * ローディングオーバーレイの設定
     */
    setupLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (!overlay) return;

        // トランジション設定
        overlay.style.transition = `opacity ${this.TRANSITION_DURATION}ms ease`;
        overlay.style.opacity = '1';
    },

    /**
     * ローディング開始
     */
    startLoading() {
        const startTime = performance.now();
        
        // コンテンツの読み込みを待機
        Promise.all([
            // 画像の読み込み
            this.preloadImages(),
            // 最小表示時間の確保
            new Promise(resolve => setTimeout(resolve, this.MIN_DISPLAY_TIME))
        ]).then(() => {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = Math.max(0, this.TRANSITION_DURATION - elapsedTime);
            
            // 残り時間を待ってからフェードアウト
            setTimeout(() => {
                this.completeLoading();
            }, remainingTime);
        });
    },

    /**
     * 画像のプリロード
     */
    preloadImages() {
        const images = document.querySelectorAll('img');
        const imagePromises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve; // エラー時も続行
            });
        });

        return Promise.all(imagePromises);
    },

    /**
     * ローディング完了
     */
    async completeLoading() {
        if (!this.isLoading) return;

        const startTime = performance.now();
        const elapsedTime = startTime - this.loadStartTime;
        const remainingTime = Math.max(0, this.MIN_DISPLAY_TIME - elapsedTime);

        // 最小表示時間を待つ
        await new Promise(resolve => setTimeout(resolve, remainingTime));

        // フェードアウト開始
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = `opacity ${this.TRANSITION_DURATION}ms ease-out`;
        }

        // フェードアウト完了を待つ
        await new Promise(resolve => setTimeout(resolve, this.TRANSITION_DURATION));

        // ローディングオーバーレイを非表示
        if (overlay) {
            overlay.style.display = 'none';
        }

        // bodyにloadedクラスを追加
        document.body.classList.add('loaded');

        // ローディング状態を更新
        this.isLoading = false;

        // スクロールアニメーションの初期化
        AnimationManager.setupIntersectionObserver();
    },

    /**
     * ローディング状態の取得
     */
    isLoading() {
        return this.isLoading;
    }
}; 