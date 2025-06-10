/**
 * モーダル管理機能
 * プロジェクト詳細モーダルの開閉と内容表示を管理
 */
const ModalManager = {
    /**
     * プロジェクトモーダルを開く
     */
    openProjectModal(project) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;
        
        const modalContent = this.generateModalContent(project);
        modalBody.innerHTML = modalContent;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * モーダルコンテンツを生成
     */
    generateModalContent(project) {
        const title = project.title[currentLanguage] || project.title.ja;
        const detailedDescription = project.detailedDescription[currentLanguage] || project.detailedDescription.ja;
        
        let modalContent = this.generateBasicContent(project, title, detailedDescription);
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
     * 基本コンテンツを生成
     */
    generateBasicContent(project, title, detailedDescription) {
        return `
            <div class="project-image" style="margin-bottom: 2rem;">
                ${project.image}
            </div>
            <h2 style="margin-bottom: 1rem; color: #333;">${title}</h2>
            <p style="color: #666; margin-bottom: 1rem;">
                <strong>${currentLanguage === 'ja' ? '期間:' : 'Period:'}</strong> ${project.period}
            </p>
            <p style="line-height: 1.8; margin-bottom: 2rem; color: #555;">
                ${detailedDescription}
            </p>
        `;
    },

    /**
     * 技術セクションを生成
     */
    generateTechnologiesSection(project) {
        return `
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: #333;">
                    ${currentLanguage === 'ja' ? '使用技術:' : 'Technologies:'}
                </h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    },

    /**
     * 賞・受賞セクションを生成
     */
    generateAwardSection(project) {
        const award = project.award[currentLanguage] || project.award.ja;
        return `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; margin-bottom: 2rem;">
                <h4 style="color: #0066CC; margin-bottom: 0.5rem;">
                    🏆 ${currentLanguage === 'ja' ? '受賞:' : 'Award:'}
                </h4>
                <p style="color: #333; margin: 0;">${award}</p>
            </div>
        `;
    },

    /**
     * GitHubセクションを生成
     */
    generateGitHubSection(project) {
        return `
            <div style="text-align: center;">
                <a href="${project.github}" target="_blank" class="btn-primary" 
                   style="display: inline-block; margin-top: 1rem;">
                    GitHub ${currentLanguage === 'ja' ? 'で見る' : 'Repository'}
                </a>
            </div>
        `;
    },

    /**
     * モーダルを閉じる
     */
    closeModal() {
        const modal = document.getElementById('projectModal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
    },

    /**
     * 外部クリック時の処理
     */
    handleOutsideClick(e) {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            this.closeModal();
        }
    }
};

/**
 * グローバル関数（既存のHTMLから呼び出される）
 */
function openProjectModal(project) {
    ModalManager.openProjectModal(project);
}

function closeModal() {
    ModalManager.closeModal();
}
