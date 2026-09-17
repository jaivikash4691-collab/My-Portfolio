/**
 * ============================================================
 * skills.js — Renders categorized technical skill cards with
 * interactive usage explanations (Zero Fake Percentages)
 * ============================================================
 */

const SkillsManager = (() => {
  const { SKILLS } = window.PORTFOLIO_DATA;

  function createSkillCard(skill, index) {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', `${skill.name}: ${skill.description}. Click to toggle explanation.`);

    card.innerHTML = `
      <div class="skill-card-top">
        <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
        <span class="skill-indicator" aria-hidden="true">ℹ</span>
      </div>
      <div class="skill-name">${skill.name}</div>
      <p class="skill-desc">${skill.description}</p>
      <div class="skill-card-hint">Tap to learn more</div>
    `;

    // Toggle expanded state on click or keydown (Enter / Space)
    function toggle() {
      const isExpanded = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', String(isExpanded));
      const hint = card.querySelector('.skill-card-hint');
      if (hint) {
        hint.textContent = isExpanded ? 'Tap to collapse' : 'Tap to learn more';
      }
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
    if (!container || !SKILLS) return;

    container.innerHTML = '';

    let skillsToRender = [];
    if (categoryName === 'All') {
      // Aggregate all skills
      Object.keys(SKILLS).forEach(cat => {
        skillsToRender = skillsToRender.concat(SKILLS[cat]);
      });
    } else {
      skillsToRender = SKILLS[categoryName] || [];
    }

    if (!skillsToRender.length) return;

    const grid = document.createElement('div');
    grid.className = 'skills-grid skill-category-panel active';

    skillsToRender.forEach((skill, i) => {
      const card = createSkillCard(skill, i);
      if (i < 8) card.classList.add(`delay-${(i % 4) + 1}`);
      grid.appendChild(card);
    });

    container.appendChild(grid);

    // Trigger reveal animation
    requestAnimationFrame(() => {
      grid.querySelectorAll('.reveal').forEach((el, idx) => {
        setTimeout(() => el.classList.add('revealed'), 30 * idx);
      });
    });
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    if (!tabs.length) return;

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
    const tabsContainer = document.querySelector('.skills-tabs');
    if (tabsContainer && SKILLS) {
      // Build tabs dynamically from SKILLS keys
      const categories = ['Programming', 'Frontend', 'Backend', 'Databases', 'Tools', 'Computer Science', 'AI & APIs', 'Additional'];
      tabsContainer.innerHTML = '';
      
      categories.forEach((cat, idx) => {
        if (SKILLS[cat]) {
          const btn = document.createElement('button');
          btn.className = `skill-tab ${idx === 0 ? 'active' : ''}`;
          btn.dataset.category = cat;
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
          btn.setAttribute('aria-controls', 'skills-content');
          btn.textContent = cat;
          tabsContainer.appendChild(btn);
        }
      });
    }

    // Render first category by default
    const firstCategory = Object.keys(SKILLS)[0] || 'Programming';
    renderCategory(firstCategory);
    initTabs();
  }

  return { init, renderCategory };
})();
