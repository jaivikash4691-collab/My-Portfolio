/**
 * hero.js — Typewriter role rotator + hero terminal animation
 */

const HeroManager = (() => {

  /* ── Role Typewriter ─────────────────────────────────────── */
  function initRoleRotator() {
    const el    = document.getElementById('hero-role-text');
    const roles = window.PORTFOLIO_DATA?.PERSONAL?.roles || ['Full-Stack Developer'];
    if (!el) return;

    let roleIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;
    let isPaused   = false;
    let timerId;

    const TYPING_SPEED  = 80;
    const DELETE_SPEED  = 45;
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

    timerId = setTimeout(type, 600);
  }

  /* ── Hero Terminal Animation ────────────────────────────── */
  function initHeroTerminal() {
    const terminalBody = document.getElementById('hero-terminal-body');
    if (!terminalBody) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Show all lines immediately
      terminalBody.querySelectorAll('.terminal-output').forEach(o => o.classList.add('visible'));
      return;
    }

    const lines = [
      { type: 'cmd',    text: 'whoami',   delay: 400  },
      { type: 'output', text: '<span class="t-cyan">Jai Vikash</span> · Full-Stack Developer', delay: 700  },
      { type: 'cmd',    text: 'stack',    delay: 1400 },
      { type: 'output', text: '<span class="t-blue">JavaScript</span> · <span class="t-blue">Node.js</span> · <span class="t-blue">Express</span> · <span class="t-blue">SQL</span> · <span class="t-blue">MongoDB</span> · <span class="t-blue">Java</span>', delay: 1700 },
      { type: 'cmd',    text: 'interests', delay: 2600 },
      { type: 'output', text: '<span class="t-yellow">Web Apps</span> · <span class="t-yellow">APIs</span> · <span class="t-yellow">DSA</span> · <span class="t-yellow">AI Integration</span>', delay: 2900 },
      { type: 'cmd',    text: 'status',   delay: 3800 },
      { type: 'output', text: '<span class="t-green">● Building something awesome...</span>', delay: 4100 },
    ];

    // Pre-generate DOM for cmd lines with cursor
    const allCmdEls   = terminalBody.querySelectorAll('.terminal-line');
    const allOutputEls = terminalBody.querySelectorAll('.terminal-output');

    // Hide everything initially
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
