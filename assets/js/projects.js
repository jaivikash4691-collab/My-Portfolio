/**
 * projects.js — Dynamic project cards, filter system, and modal
 */

const ProjectsManager = (() => {
  const { PROJECTS } = window.PORTFOLIO_DATA;

  /* ── Category Icons ──────────────────────────────────────── */
  const CATEGORY_ICONS = {
    frontend:  '🌐',
    backend:   '⚙️',
    fullstack: '🔗',
    ai:        '🤖',
    api:       '🔌',
    java:      '☕',
    database:  '🗄️',
  };

  /* ── Create Project Card ─────────────────────────────────── */
  function createCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.dataset.categories = project.category.join(' ');

    const primaryCategory = project.category[0];
    const icon = CATEGORY_ICONS[primaryCategory] || '💡';

    const techBadges = project.technologies
      .map(t => `<span class="badge">${t}</span>`)
      .join('');

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer"
           class="project-link-icon" aria-label="View ${project.name} on GitHub" title="GitHub">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
           </svg>
         </a>`
      : '';

    const demoBtn = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"
           class="project-link-icon" aria-label="Live demo for ${project.name}" title="Live Demo">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
             <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
             <polyline points="15 3 21 3 21 9"/>
             <line x1="10" y1="14" x2="21" y2="3"/>
           </svg>
         </a>`
      : '';

    card.innerHTML = `
      <div class="project-header">
        <div class="project-category-icon" aria-hidden="true">${icon}</div>
        <div class="project-links">
          ${githubBtn}
          ${demoBtn}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        <div class="project-subtitle">${project.subtitle}</div>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">${techBadges}</div>
      </div>
      <div class="project-footer">
        <button class="btn-details" data-id="${project.id}" aria-haspopup="dialog">
          View Details →
        </button>
      </div>
    `;

    card.querySelector('.btn-details').addEventListener('click', () => openModal(project));

    return card;
  }

  /* ── Render All Cards ────────────────────────────────────── */
  function renderCards() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    PROJECTS.forEach((project, i) => {
      const card = createCard(project);
      if (i < 3) card.classList.add(`delay-${i + 1}`);
      grid.appendChild(card);
    });

    // Trigger reveal
    requestAnimationFrame(() => {
      grid.querySelectorAll('.reveal').forEach(el => {
        setTimeout(() => el.classList.add('revealed'), 80);
      });
    });
  }

  /* ── Filter System ───────────────────────────────────────── */
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('projects-grid');
    if (!grid || !filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;
        const cards  = grid.querySelectorAll('.project-card');

        cards.forEach(card => {
          const cats = card.dataset.categories || '';
          const show = filter === 'all' || cats.includes(filter);

          card.classList.toggle('hidden', !show);
          if (show) {
            card.classList.add('filtering');
            setTimeout(() => card.classList.remove('filtering'), 400);
          }
        });
      });
    });
  }

  /* ── Modal ───────────────────────────────────────────────── */
  let currentFocusBeforeModal = null;

  function openModal(project) {
    const overlay = document.getElementById('project-modal-overlay');
    const modal   = document.getElementById('project-modal');
    if (!overlay || !modal) return;

    currentFocusBeforeModal = document.activeElement;

    // Populate
    modal.querySelector('#modal-title').textContent    = project.name;
    modal.querySelector('#modal-subtitle').textContent = project.subtitle;
    modal.querySelector('#modal-overview').textContent = project.description;
    modal.querySelector('#modal-problem').textContent  = project.problem;
    modal.querySelector('#modal-solution').textContent = project.solution;
    modal.querySelector('#modal-challenges').textContent = project.challenges;
    modal.querySelector('#modal-learned').textContent  = project.learned;

    // Features list
    const featuresList = modal.querySelector('#modal-features');
    featuresList.innerHTML = project.features
      .map(f => `<div class="modal-feature-item">${f}</div>`)
      .join('');

    // Tech badges
    const techWrap = modal.querySelector('#modal-tech');
    techWrap.innerHTML = project.technologies
      .map(t => `<span class="badge">${t}</span>`)
      .join('');

    // Action buttons
    const actionsWrap = modal.querySelector('#modal-actions');
    actionsWrap.innerHTML = '';

    if (project.github) {
      const githubBtn = document.createElement('a');
      githubBtn.href = project.github;
      githubBtn.target = '_blank';
      githubBtn.rel = 'noopener noreferrer';
      githubBtn.className = 'btn btn-primary';
      githubBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> View on GitHub`;
      actionsWrap.appendChild(githubBtn);
    }

    if (project.demo) {
      const demoBtn = document.createElement('a');
      demoBtn.href = project.demo;
      demoBtn.target = '_blank';
      demoBtn.rel = 'noopener noreferrer';
      demoBtn.className = 'btn btn-secondary';
      demoBtn.innerHTML = 'Live Demo ↗';
      actionsWrap.appendChild(demoBtn);
    }

    // Open overlay
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    setTimeout(() => {
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeModal() {
    const overlay = document.getElementById('project-modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (currentFocusBeforeModal) {
      currentFocusBeforeModal.focus();
      currentFocusBeforeModal = null;
    }
  }

  function initModal() {
    const overlay  = document.getElementById('project-modal-overlay');
    const closeBtn = document.querySelector('.modal-close-btn');
    const modal    = document.getElementById('project-modal');

    if (!overlay) return;

    closeBtn?.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();

      // Trap focus inside modal when open
      if (overlay.classList.contains('open') && e.key === 'Tab' && modal) {
        const focusable = modal.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  function init() {
    renderCards();
    initFilters();
    initModal();
  }

  return { init };
})();
