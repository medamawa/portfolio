/**
 * Google Analytics イベント追跡ユーティリティ
 */
const Analytics = {
    /**
     * ボタンクリックイベントを追跡
     */
    trackButtonClick(buttonName, buttonType = 'button') {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'engagement',
                event_label: buttonName,
                custom_parameter_1: buttonType,
                value: 1
            });
        }
    },

    /**
     * モーダル表示イベントを追跡
     */
    trackModalView(modalName, projectId = null) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_item', {
                event_category: 'engagement',
                event_label: modalName,
                item_id: projectId,
                value: 1
            });
        }
    },

    /**
     * セクション閲覧イベントを追跡
     */
    trackSectionView(sectionName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                event_category: 'navigation',
                event_label: sectionName,
                value: 1
            });
        }
    },

    /**
     * 言語切り替えイベントを追跡
     */
    trackLanguageChange(fromLang, toLang) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_change', {
                event_category: 'user_preference',
                event_label: `${fromLang}_to_${toLang}`,
                value: 1
            });
        }
    },

    /**
     * 外部リンククリックイベントを追跡
     */
    trackExternalLink(url, linkName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'outbound',
                event_label: linkName,
                transport_type: 'beacon',
                custom_parameter_1: url
            });
        }
    }
};