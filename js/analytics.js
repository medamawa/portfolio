/**
 * Google Analytics イベント追跡ユーティリティ
 */
const Analytics = {
    /**
     * CTA（Call to Action）ボタンクリックを追跡
     */
    trackCTAClick(ctaName, location) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                event_category: 'engagement',
                event_label: ctaName,
                cta_location: location,
                value: 1
            });
        }
    },

    /**
     * プロジェクトカードクリックを追跡
     */
    trackProjectCardClick(projectId, projectTitle) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'select_content', {
                event_category: 'project_interaction',
                event_label: `project_card_${projectId}`,
                content_type: 'project',
                item_id: projectId,
                custom_parameter_1: projectTitle,
                value: 1
            });
        }
    },

    /**
     * プロジェクトモーダル表示を追跡
     */
    trackProjectModalView(project) {
        if (typeof gtag !== 'undefined') {
            const projectTitle = project.title[currentLanguage] || project.title.ja;
            
            gtag('event', 'view_item', {
                event_category: 'project_interaction',
                event_label: `modal_${project.id}`,
                content_type: 'project',
                item_id: project.id,
                item_name: projectTitle,
                value: 1
            });
        }
    },

    /**
     * ナビゲーションクリックを追跡
     */
    trackNavigation(sectionName, navigationType = 'header') {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'navigate', {
                event_category: 'navigation',
                event_label: `section_${sectionName}`,
                navigation_type: navigationType,
                destination: sectionName,
                value: 1
            });
        }
    },

    /**
     * 言語切り替えを追跡
     */
    trackLanguageSwitch(fromLang, toLang, switchLocation) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_switch', {
                event_category: 'user_preference',
                event_label: `${fromLang}_to_${toLang}`,
                switch_location: switchLocation,
                from_language: fromLang,
                to_language: toLang,
                value: 1
            });
        }
    },

    /**
     * GitHubリンククリックを追跡
     */
    trackGitHubClick(context, projectId = null) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'github_click', {
                event_category: 'external_link',
                event_label: `github_${context}`,
                link_context: context,
                project_id: projectId,
                transport_type: 'beacon',
                value: 1
            });
        }
    },

    /**
     * メニュー操作を追跡
     */
    trackMenuAction(action, menuType = 'mobile') {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'menu_interaction', {
                event_category: 'ui_interaction',
                event_label: `menu_${action}`,
                menu_type: menuType,
                action: action,
                value: 1
            });
        }
    }
};