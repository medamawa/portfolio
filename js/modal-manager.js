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
        
        // 動的に追加されたスクリプトを実行
        this.executeScripts(modalBody);
    },

    /**
     * モーダルコンテンツを生成
     */
    generateModalContent(project) {
        const title = project.title[currentLanguage] || project.title.ja;
        
        let modalContent = this.generateHeaderSection(project, title);
        
        // リッチコンテンツ対応
        if (project.richContent && project.richContent[currentLanguage]) {
            modalContent += this.generateRichContent(project.richContent[currentLanguage]);
        } else {
            // フォールバック: 従来の詳細説明
            const detailedDescription = project.detailedDescription[currentLanguage] || project.detailedDescription.ja;
            modalContent += this.generateBasicDescription(detailedDescription);
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
     * ヘッダーセクションを生成
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
                        <strong>${currentLanguage === 'ja' ? '期間:' : 'Period:'}</strong> ${project.period}
                    </p>
                </div>
            </div>
        `;
    },

    /**
     * リッチコンテンツを生成
     */
    generateRichContent(richContent) {
        return `<div class="modal-rich-content">${richContent}</div>`;
    },

    /**
     * 基本的な説明を生成（フォールバック）
     */
    generateBasicDescription(description) {
        return `
            <div class="modal-description">
                <p>${description}</p>
            </div>
        `;
    },

    /**
     * 技術セクションを生成
     */
    generateTechnologiesSection(project) {
        return `
            <div class="modal-technologies">
                <h3>
                    <i class="fas fa-code"></i>
                    ${currentLanguage === 'ja' ? '使用技術' : 'Technologies'}
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
     * 賞・受賞セクションを生成
     */
    generateAwardSection(project) {
        const award = project.award[currentLanguage] || project.award.ja;
        return `
            <div class="modal-award">
                <h4>
                    <i class="fas fa-trophy"></i>
                    ${currentLanguage === 'ja' ? '受賞' : 'Award'}
                </h4>
                <p>${award}</p>
            </div>
        `;
    },

    /**
     * GitHubセクションを生成
     */
    generateGitHubSection(project) {
        return `
            <div class="modal-actions">
                <a href="${project.github}" target="_blank" class="btn-primary">
                    <i class="fab fa-github"></i>
                    GitHub ${currentLanguage === 'ja' ? 'で見る' : 'Repository'}
                </a>
            </div>
        `;
    },

    /**
     * 動的に追加されたスクリプトを実行
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
