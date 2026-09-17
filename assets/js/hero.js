/**
 * ============================================================
 * hero.js — Developer role typewriter & interactive terminal visual
 * ============================================================
 */

const HeroManager = (() => {

  /* ── Role Typewriter ─────────────────────────────────────── */
  function initRoleRotator() {
    const el = document.getElementById('hero-role-text');
    const roles = window.PORTFOLIO_DATA?.PERSONAL?.roles || [
      'Full-Stack / MERN Developer',
      'Computer Science Engineering Student',
      'Software Developer',
      'Backend & REST API Builder',
    ];
    if (!el) return;

    let roleIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;
    let isPaused   = false;
    let timerId;

    const TYPING_SPEED  = 75;
    const DELETE_SPEED  = 40;
    const PAUSE_AFTER   = 2200;
    const PAUSE_BEFORE  = 400;

    function type() {
      const current = roles[roleIndex];

      if (isPaused) return;

      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isPaused = true;
          timerId = setTimeout(() => {
            isPaused  = false;
            isDeleting = true;
            type();
          }, PAUSE_AFTER);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex  = (roleIndex + 1) % roles.length;
          timerId = setTimeout(type, PAUSE_BEFORE);
          return;
        }
      }

      timerId = setTimeout(type, isDeleting ? DELETE_SPEED : TYPING_SPEED);
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = roles[0];
      return;
    }

    timerId = setTimeout(type, 500);
  }

  /* ── Hero Terminal Animation ────────────────────────────── */
  function initHeroTerminal() {
    const terminalBody = document.getElementById('hero-terminal-body');
    if (!terminalBody) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      terminalBody.querySelectorAll('.terminal-output').forEach(o => o.classList.add('visible'));
      return;
    }

    const lines = [
      { type: 'cmd',    text: 'whoami', delay: 300 },
      { type: 'output', text: '<span class="t-cyan">Jai Vikash A R</span> · Computer Science Engineering Student & Full-Stack Developer', delay: 600 },
      { type: 'cmd',    text: 'stack', delay: 1300 },
      { type: 'output', text: '<span class="t-blue">React.js</span> · <span class="t-blue">Node.js</span> · <span class="t-blue">Express.js</span> · <span class="t-blue">MongoDB</span> · <span class="t-blue">Java</span> · <span class="t-blue">SQL</span>', delay: 1600 },
      { type: 'cmd',    text: 'flagships', delay: 2400 },
      { type: 'output', text: '<span class="t-yellow">Pathly</span> (Career & AI Platform) · <span class="t-yellow">DevTrack</span> (Task & Team System) · <span class="t-yellow">FixNear</span> (Service Finder)', delay: 2700 },
      { type: 'cmd',    text: 'status', delay: 3600 },
      { type: 'output', text: '<span class="t-green">● Open for Software Developer Internships & Entry-Level Roles</span>', delay: 3900 },
    ];

    const allCmdEls    = terminalBody.querySelectorAll('.terminal-line');
    const allOutputEls = terminalBody.querySelectorAll('.terminal-output');

    allCmdEls.forEach(el => { el.style.opacity = '0'; });
    allOutputEls.forEach(el => { el.classList.remove('visible'); });

    let cmdIndex    = 0;
    let outputIndex = 0;

    lines.forEach(line => {
      setTimeout(() => {
        if (line.type === 'cmd') {
          const el = allCmdEls[cmdIndex];
          if (el) {
            el.style.opacity = '1';
            el.style.animation = 'fadeIn 0.2s ease';
          }
          cmdIndex++;
        } else {
          const el = allOutputEls[outputIndex];
          if (el) {
            el.innerHTML = line.text;
            el.classList.add('visible');
          }
          outputIndex++;
        }
      }, line.delay);
    });
  }

  function init() {
    initRoleRotator();
    initHeroTerminal();
  }

  return { init };
})();
