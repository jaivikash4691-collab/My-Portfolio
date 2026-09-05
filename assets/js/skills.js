/**
 * skills.js — Renders skill cards dynamically from data.js, tab filtering
 */

const SkillsManager = (() => {
  const { SKILLS } = window.PORTFOLIO_DATA;

  function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${skill.name}: ${skill.description}`);

    card.innerHTML = `
      <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} proficiency">
        <div class="skill-bar-fill" data-width="${skill.level}%"></div>
      </div>
      <p class="skill-desc">${skill.description}</p>
    `;

    // Expand on click (toggle) or keyboard Enter/Space
    function toggle() {
      const isExpanded = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', String(isExpanded));
    }

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    return card;
  }

  function renderCategory(categoryName) {
    const container = document.getElementById('skills-content');
    if (!container) return;

    container.innerHTML = '';

    const skillsInCategory = SKILLS[categoryName];
    if (!skillsInCategory) return;

    const grid = document.createElement('div');
    grid.className = 'skills-grid skill-category-panel active';

    skillsInCategory.forEach((skill, i) => {
      const card = createSkillCard(skill);
      // Stagger delay
      if (i < 6) card.classList.add(`delay-${i + 1}`);
      grid.appendChild(card);
    });

    container.appendChild(grid);

    // Trigger reveal + skill bars
    requestAnimationFrame(() => {
      AnimationManager.initSkillBars();
      // Manually trigger reveal for freshly rendered cards
      grid.querySelectorAll('.reveal').forEach(el => {
        setTimeout(() => el.classList.add('revealed'), 50);
      });
    });
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        renderCategory(tab.dataset.category);
      });
    });
  }

  function init() {
    // Render first category by default
    const firstCategory = Object.keys(SKILLS)[0];
    renderCategory(firstCategory);
    initTabs();
  }

  return { init };
})();
