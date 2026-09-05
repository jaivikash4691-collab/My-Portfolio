/**
 * main.js — Application entry point, bootstraps all modules
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Render dynamic sections from data ─────────────────── */
  renderAboutStats();
  renderDSASection();
  renderAchievements();

  /* ── Init all modules ────────────────────────────────────── */
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

  /* ── Update footer year ──────────────────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ── Render About Stats ──────────────────────────────────── */
function renderAboutStats() {
  const { STATS } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('stats-grid');
  if (!grid || !STATS) return;

  STATS.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card reveal-scale';

    card.innerHTML = `
      <span class="stat-icon" aria-hidden="true">${stat.icon}</span>
      <div class="stat-value" data-count="${stat.value}" data-suffix="${stat.value >= 50 ? '+' : ''}">
        ${stat.value}${stat.value >= 50 ? '+' : ''}
      </div>
      <div class="stat-label">${stat.label}</div>
    `;
    grid.appendChild(card);
  });
}

/* ── Render Achievements ─────────────────────────────────── */
function renderAchievements() {
  const { ACHIEVEMENTS } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('achievements-grid');
  if (!grid || !ACHIEVEMENTS) return;

  ACHIEVEMENTS.forEach((ach, i) => {
    const card = document.createElement('div');
    card.className = `achievement-card reveal delay-${(i % 4) + 1}`;

    card.innerHTML = `
      <span class="achievement-icon" aria-hidden="true">${ach.icon}</span>
      <span class="achievement-year">${ach.year}</span>
      <h3 class="achievement-title">${ach.title}</h3>
      <div class="achievement-subtitle">${ach.subtitle}</div>
      <p class="achievement-desc">${ach.description}</p>
    `;
    grid.appendChild(card);
  });
}

/* ── Render DSA Section ──────────────────────────────────── */
function renderDSASection() {
  const { DSA_TOPICS } = window.PORTFOLIO_DATA;
  const grid = document.getElementById('dsa-grid');
  if (!grid || !DSA_TOPICS) return;

  const categories = [...new Set(DSA_TOPICS.map(t => t.category))];
  const CATEGORY_LABELS = {
    'linear':     'Linear Structures',
    'non-linear': 'Non-Linear Structures',
    'technique':  'Algorithms & Techniques',
    'concept':    'Core Concepts',
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
