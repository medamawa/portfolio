/**
 * Utilities for Google Analytics
 */
const Analytics = {

    /**
     * Track project modal view
     */
    trackProjectModalView(project) {
        const trackEvent = () => {
            if (typeof gtag !== 'undefined') {
                const currentLang = (typeof currentLanguage !== 'undefined') ? currentLanguage : 'ja';
                const projectTitle = project.title[currentLang] || project.title.ja;
                
                console.log(`Tracking modal view: ${project.id} - ${projectTitle}`);
                
                gtag('event', `${project.id} - ${projectTitle}`, {
                    event_category: 'project_interaction',
                    event_label: `modal_${project.id}`,
                    content_type: 'project',
                    item_id: project.id,
                    item_name: projectTitle,
                    value: 1
                });
                
                console.log(`Modal tracking sent for project: ${project.id}`);
            } else {
                console.warn('gtag not available, retrying modal tracking in 500ms');
                setTimeout(trackEvent, 500);
            }
        };
        
        trackEvent();
    },

    /**
     * Track navigation click
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
     * Track language switch
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
     * Track external link click
     */
    trackExternalLinkClick(platform, context, projectId = null) {
        if (typeof gtag !== 'undefined') {
            gtag('event', `${platform}_click`, {
                event_category: 'external_link',
                event_label: `${platform}_${context}`,
                link_context: context,
                platform: platform,
                project_id: projectId,
                transport_type: 'beacon',
                value: 1
            });
        }
    }
};