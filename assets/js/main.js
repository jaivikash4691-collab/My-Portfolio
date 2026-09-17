/**
 * ============================================================
 * main.js — Application entry point, renders dynamic sections
 * and bootstraps all interactive modules
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Render dynamic sections from data ─────────────────── */
  renderAboutFocus();
  renderEducation();
  renderAchievements();
  renderDSASection();

  /* ── Init all modules ──────────────────────────────────── */
  ThemeManager.init();
  NavManager.init();
  HeroManager.init();
  SkillsManager.init();
  ProjectsManager.init();
  TimelineManager.init();
  TerminalManager.init();
  ContactManager.init();
  AnimationManager.init();
  CursorManager.init();
  EasterEggs.init();

  /* ── Update footer year dynamically ────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ── Render About Focus ("Currently Building") ───────────── */
function renderAboutFocus() {
  const { PERSONAL } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('focus-grid');
  if (!grid || !PERSONAL?.currentFocus) return;

  grid.innerHTML = '';
  PERSONAL.currentFocus.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = `focus-card reveal-scale delay-${(i % 4) + 1}`;
    card.innerHTML = `
      <div class="focus-icon" aria-hidden="true">${item.icon}</div>
      <div class="focus-body">
        <h3 class="focus-title">${item.title}</h3>
        <p class="focus-desc">${item.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── Render Education Section ────────────────────────────── */
function renderEducation() {
  const { EDUCATION } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('education-grid');
  if (!grid || !EDUCATION) return;

  grid.innerHTML = '';
  EDUCATION.forEach((edu, i) => {
    const card = document.createElement('div');
    card.className = `education-card reveal delay-${i + 1}`;
    card.innerHTML = `
      <div class="edu-header">
        <span class="edu-icon" aria-hidden="true">${edu.icon}</span>
        <span class="edu-period">${edu.period}</span>
      </div>
      <h3 class="edu-institution">${edu.institution}</h3>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-location">📍 ${edu.location}</div>
      <p class="edu-details">${edu.details}</p>
      <div class="edu-badge">${edu.status}</div>
    `;
    grid.appendChild(card);
  });
}

/* ── Render Verified Activities & Workshops ──────────────── */
function renderAchievements() {
  const { ACHIEVEMENTS } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('achievements-grid');
  if (!grid || !ACHIEVEMENTS) return;

  grid.innerHTML = '';
  ACHIEVEMENTS.forEach((ach, i) => {
    const card = document.createElement('div');
    card.className = `achievement-card reveal delay-${(i % 4) + 1}`;

    card.innerHTML = `
      <div class="achievement-card-top">
        <span class="achievement-icon" aria-hidden="true">${ach.icon}</span>
        <span class="achievement-year">${ach.year}</span>
      </div>
      <h3 class="achievement-title">${ach.title}</h3>
      <div class="achievement-subtitle">${ach.subtitle}</div>
      <p class="achievement-desc">${ach.description}</p>
    `;
    grid.appendChild(card);
  });
}

/* ── Render DSA / Problem Solving Topics ─────────────────── */
function renderDSASection() {
  const { DSA_TOPICS } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('dsa-grid');
  if (!grid || !DSA_TOPICS) return;

  grid.innerHTML = '';
  const categories = [...new Set(DSA_TOPICS.map(t => t.category))];
  const CATEGORY_LABELS = {
    'linear':     'Linear Data Structures',
    'non-linear': 'Non-Linear Data Structures',
    'technique':  'Algorithmic Techniques',
    'concept':    'Core CS Paradigms',
  };

  categories.forEach(cat => {
    const label = document.createElement('div');
    label.className = 'dsa-category-label';
    label.textContent = CATEGORY_LABELS[cat] || cat;
    grid.appendChild(label);

    DSA_TOPICS.filter(t => t.category === cat).forEach((topic, i) => {
      const item = document.createElement('div');
      item.className = `dsa-topic reveal delay-${(i % 3) + 1}`;
      item.innerHTML = `
        <span class="dsa-topic-icon" aria-hidden="true">${topic.icon}</span>
        <span>${topic.name}</span>
      `;
      grid.appendChild(item);
    });
  });
}
