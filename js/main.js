/**
 * メインエントリーポイント
 * アプリケーションの初期化を行う
 */

// グローバル変数
let currentLanguage = 'ja';
let isMenuOpen = false;

/**
 * DOMContentLoadedイベントで初期化処理を実行
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
 * ページ読み込み完了時の処理
 */
window.addEventListener('load', function() {
    LoadingManager.hideOverlay();
});

/**
 * スクロール時のヘッダー効果
 */
window.addEventListener('scroll', function() {
    HeaderManager.handleScroll();
});

/**
 * グローバルイベントリスナー
 */
document.addEventListener('click', function(e) {
    ModalManager.handleOutsideClick(e);
    MobileMenu.handleOutsideClick(e);
});

document.addEventListener('keydown', function(e) {
    EventManager.handleEscapeKey(e);
});
