/**
 * コンテンツレンダリング機能
 * 各セクションのコンテンツを動的に生成・表示
 */

/**
 * スキルセクションのレンダリング
 */
const SkillsRenderer = {
    render() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;
        
        skillsGrid.innerHTML = '';
        
        content.skills.forEach(skill => {
            const skillElement = this.createSkillElement(skill);
            skillsGrid.appendChild(skillElement);
        });
    },

    createSkillElement(skill) {
        const skillElement = document.createElement('div');
        const name = skill[currentLanguage] || skill.ja;
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `#${name}`;
        return skillElement;
    }
};

/**
 * プロジェクトセクションのレンダリング
 */
const ProjectsRenderer = {
    render() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        content.projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectsGrid.appendChild(projectElement);
        });
    },

    createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.onclick = () => ModalManager.openProjectModal(project);
        
        const title = project.title[currentLanguage] || project.title.ja;
        const description = project.description[currentLanguage] || project.description.ja;
        
        projectElement.innerHTML = `
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${title}</h3>
                <p class="project-description">${description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        return projectElement;
    }
};

/**
 * 経験・経歴セクションのレンダリング
 */
const ExperienceRenderer = {
    render() {
        const timeline = document.getElementById('timeline');
        if (!timeline) return;
        
        timeline.innerHTML = '';
        
        content.experience.forEach((exp, index) => {
            const timelineItem = this.createTimelineItem(exp, index);
            timeline.appendChild(timelineItem);
        });
    },

    createTimelineItem(exp, index) {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const title = exp.title[currentLanguage] || exp.title.ja;
        const description = exp.description[currentLanguage] || exp.description.ja;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${title}</h3>
                <p class="timeline-description">${description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        return timelineItem;
    }
};
