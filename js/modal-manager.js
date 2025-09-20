/**
 * Modal management functionality
 * Manages project detail modal open/close and content display
 */
const ModalManager = {
    /**
     * Open project modal
     */
    openProjectModal(project) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;
        
        const modalContent = this.generateModalContent(project);
        modalBody.innerHTML = modalContent;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Track project modal view with Google Analytics
        Analytics.trackProjectModalView(project);
        
        // Execute dynamically added scripts
        this.executeScripts(modalBody);
    },

    /**
     * Generate modal content
     */
    generateModalContent(project) {
        const title = project.title[currentLanguage] || project.title.en;
        
        let modalContent = this.generateHeaderSection(project, title);
        
        // Rich content support
        if (project.richContent && project.richContent[currentLanguage]) {
            modalContent += this.generateRichContent(project.richContent[currentLanguage]);
        }
        
        modalContent += this.generateTechnologiesSection(project);
        
        if (project.award) {
            modalContent += this.generateAwardSection(project);
        }
        
        if (project.github) {
            modalContent += this.generateGitHubSection(project);
        }
        
        return modalContent;
    },

    /**
     * Generate header section
     */
    generateHeaderSection(project, title) {
        return `
            <div class="modal-header">
                <div class="project-image-header">
                    ${project.image}
                </div>
                <div class="project-meta">
                    <h2 class="modal-title">${title}</h2>
                    <p class="project-period">
                        <i class="fas fa-calendar-alt"></i>
                        <strong>${currentLanguage === 'en' ? 'Period:' : '期間:'}</strong> ${project.period}
                    </p>
                </div>
            </div>
        `;
    },

    /**
     * Generate rich content
     */
    generateRichContent(richContent) {
        return `<div class="modal-rich-content">${richContent}</div>`;
    },


    /**
     * Generate technologies section
     */
    generateTechnologiesSection(project) {
        return `
            <div class="modal-technologies">
                <h3>
                    <i class="fas fa-code"></i>
                    ${currentLanguage === 'en' ? 'Technologies' : '使用技術'}
                </h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    },

    /**
     * Generate award section
     */
    generateAwardSection(project) {
        const award = project.award[currentLanguage] || project.award.en;
        return `
            <div class="modal-award">
                <h4>
                    <i class="fas fa-trophy"></i>
                    ${currentLanguage === 'en' ? 'Award' : '受賞'}
                </h4>
                <p>${award}</p>
            </div>
        `;
    },

    /**
     * Generate GitHub section
     */
    generateGitHubSection(project) {
        return `
            <div class="modal-actions">
                <a href="${project.github}" target="_blank" class="btn-primary" onclick="Analytics.trackExternalLinkClick('github', 'project-modal', '${project.id}')">
                    <i class="fab fa-github"></i>
                    GitHub ${currentLanguage === 'en' ? 'Repository' : 'で見る'}
                </a>
            </div>
        `;
    },

    /**
     * Execute dynamically added scripts
     */
    executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.head.appendChild(newScript);
        });
    },

    /**
     * Close modal
     */
    closeModal() {
        const modal = document.getElementById('projectModal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
    },

    /**
     * Handle outside click
     */
    handleOutsideClick(e) {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            this.closeModal();
        }
    }
};

/**
 * Global functions
 */
function openProjectModal(project) {
    ModalManager.openProjectModal(project);
}

function closeModal() {
    ModalManager.closeModal();
}
