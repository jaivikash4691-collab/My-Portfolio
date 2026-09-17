/**
 * ============================================================
 * projects.js — Flagship & Featured Projects showcase,
 * Filter System, and Comprehensive Technical Modal Experience
 * ============================================================
 */

const ProjectsManager = (() => {
  const { PROJECTS } = window.PORTFOLIO_DATA;

  /* ── Category Icons ──────────────────────────────────────── */
  const CATEGORY_ICONS = {
    fullstack: '🔗',
    mern:      '⚡',
    ai:        '🤖',
    tools:     '🛠️',
    frontend:  '🌐',
    api:       '🔌',
  };

  /* ── Create Project Card ─────────────────────────────────── */
  function createCard(project, index) {
    const card = document.createElement('article');
    const isFlagship = project.isFlagship || false;
    const isTopProminence = project.id === 'pathly';

    card.className = `project-card reveal ${isFlagship ? 'flagship-card' : 'secondary-card'} ${isTopProminence ? 'top-prominence' : ''}`;
    card.dataset.categories = project.category.join(' ');
    card.dataset.id = project.id;

    const primaryCategory = project.category[0] || 'fullstack';
    const icon = CATEGORY_ICONS[primaryCategory] || '💻';

    const techBadges = project.technologies
      .slice(0, isFlagship ? 6 : 4)
      .map(t => `<span class="badge ${t.includes('React') || t.includes('Node') || t.includes('MongoDB') ? 'badge-primary' : ''}">${t}</span>`)
      .join('');

    const extraTechCount = project.technologies.length - (isFlagship ? 6 : 4);
    const extraTechBadge = extraTechCount > 0 ? `<span class="badge badge-subtle">+${extraTechCount} more</span>` : '';

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer"
           class="project-link-icon" aria-label="View ${project.name} on GitHub" title="View Source on GitHub">
           <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
           </svg>
         </a>`
      : '';

    const demoBtn = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"
           class="project-link-icon" aria-label="Live demo for ${project.name}" title="Live Demo">
           <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
             <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
             <polyline points="15 3 21 3 21 9"/>
             <line x1="10" y1="14" x2="21" y2="3"/>
           </svg>
         </a>`
      : '';

    const badgeMarkup = project.badge
      ? `<span class="project-pill-badge ${isTopProminence ? 'pill-featured' : ''}">${project.badge}</span>`
      : '';

    card.innerHTML = `
      <div class="project-header">
        <div class="project-header-left">
          <div class="project-category-icon" aria-hidden="true">${icon}</div>
          ${badgeMarkup}
        </div>
        <div class="project-links">
          ${githubBtn}
          ${demoBtn}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        <div class="project-subtitle">${project.subtitle}</div>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">${techBadges}${extraTechBadge}</div>
      </div>
      <div class="project-footer">
        <button class="btn-details" data-id="${project.id}" aria-haspopup="dialog" aria-label="View architectural and technical details for ${project.name}">
          <span>View Details</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;

    card.querySelector('.btn-details').addEventListener('click', () => openModal(project));

    return card;
  }

  /* ── Render Flagship & Secondary Grids ───────────────────── */
  function renderCards() {
    const flagshipGrid = document.getElementById('projects-flagship-grid');
    const additionalGrid = document.getElementById('projects-additional-grid');

    if (!PROJECTS) return;

    if (flagshipGrid) {
      flagshipGrid.innerHTML = '';
      const flagships = PROJECTS.filter(p => p.isFlagship);
      flagships.forEach((project, i) => {
        const card = createCard(project, i);
        card.classList.add(`delay-${i + 1}`);
        flagshipGrid.appendChild(card);
      });
    }

    if (additionalGrid) {
      additionalGrid.innerHTML = '';
      const additional = PROJECTS.filter(p => !p.isFlagship);
      additional.forEach((project, i) => {
        const card = createCard(project, i);
        additionalGrid.appendChild(card);
      });
    }

    // Trigger reveal
    requestAnimationFrame(() => {
      document.querySelectorAll('.project-card.reveal').forEach(el => {
        setTimeout(() => el.classList.add('revealed'), 60);
      });
    });
  }

  /* ── Filter System ───────────────────────────────────────── */
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const allCards = () => document.querySelectorAll('.project-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter.toLowerCase();
        const cards = allCards();

        cards.forEach(card => {
          const cats = card.dataset.categories || '';
          const show = filter === 'all' || cats.includes(filter);

          card.classList.toggle('hidden', !show);
          if (show) {
            card.classList.add('filtering');
            setTimeout(() => card.classList.remove('filtering'), 350);
          }
        });
      });
    });
  }

  /* ── Project Details Modal ───────────────────────────────── */
  let currentFocusBeforeModal = null;

  function openModal(project) {
    const overlay = document.getElementById('project-modal-overlay');
    const modal   = document.getElementById('project-modal');
    if (!overlay || !modal) return;

    currentFocusBeforeModal = document.activeElement;

    // Set texts
    modal.querySelector('#modal-title').textContent    = project.name;
    modal.querySelector('#modal-subtitle').textContent = `${project.subtitle} • ${project.category.join(' / ').toUpperCase()}`;
    modal.querySelector('#modal-overview').textContent = project.description;
    modal.querySelector('#modal-problem').textContent  = project.problem;
    modal.querySelector('#modal-solution').textContent = project.solution;

    // Architecture Overview
    const archEl = modal.querySelector('#modal-architecture');
    if (archEl) {
      archEl.textContent = project.architecture || 'Built using modular client-server architecture with structured API endpoints and dedicated data persistence.';
    }

    // Technical Highlights
    const highlightsWrap = modal.querySelector('#modal-highlights');
    if (highlightsWrap) {
      const highlights = project.technicalHighlights || [];
      if (highlights.length) {
        highlightsWrap.parentElement.style.display = 'block';
        highlightsWrap.innerHTML = highlights
          .map(h => `<div class="modal-highlight-item">⚡ <span>${h}</span></div>`)
          .join('');
      } else {
        highlightsWrap.parentElement.style.display = 'none';
      }
    }

    // Features list
    const featuresList = modal.querySelector('#modal-features');
    if (featuresList) {
      featuresList.innerHTML = project.features
        .map(f => `<div class="modal-feature-item"><span>${f}</span></div>`)
        .join('');
    }

    // Tech badges
    const techWrap = modal.querySelector('#modal-tech');
    if (techWrap) {
      techWrap.innerHTML = project.technologies
        .map(t => `<span class="badge badge-primary">${t}</span>`)
        .join('');
    }

    // Challenges & Learnings
    const challengesEl = modal.querySelector('#modal-challenges');
    if (challengesEl) challengesEl.textContent = project.challenges || 'Overcoming architectural and state synchronization hurdles during implementation.';
    
    const learnedEl = modal.querySelector('#modal-learned');
    if (learnedEl) learnedEl.textContent = project.learned || 'Strengthened end-to-end full-stack engineering practices and defensive API design.';

    // Action buttons
    const actionsWrap = modal.querySelector('#modal-actions');
    if (actionsWrap) {
      actionsWrap.innerHTML = '';

      if (project.github) {
        const githubBtn = document.createElement('a');
        githubBtn.href = project.github;
        githubBtn.target = '_blank';
        githubBtn.rel = 'noopener noreferrer';
        githubBtn.className = 'btn btn-primary';
        githubBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        `;
        actionsWrap.appendChild(githubBtn);
      }

      if (project.demo) {
        const demoBtn = document.createElement('a');
        demoBtn.href = project.demo;
        demoBtn.target = '_blank';
        demoBtn.rel = 'noopener noreferrer';
        demoBtn.className = 'btn btn-secondary';
        demoBtn.innerHTML = `
          <span>Live Demo</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        `;
        actionsWrap.appendChild(demoBtn);
      }
    }

    // Open overlay
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus close button
    setTimeout(() => {
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) closeBtn.focus();
    }, 80);
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

      // Focus trap inside open modal
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

  return { init, openModal, closeModal };
})();
