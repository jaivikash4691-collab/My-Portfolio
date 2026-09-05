/**
 * easter-eggs.js — Konami code + console art + secret terminal command
 */

const EasterEggs = (() => {
  const KONAMI = [
    'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
    'b','a'
  ];

  let sequence = [];

  const ASCII_ART = `
%c
   ██╗ █████╗ ██╗    ██╗   ██╗██╗██╗  ██╗ █████╗ ███████╗██╗  ██╗
   ██║██╔══██╗██║    ██║   ██║██║██║ ██╔╝██╔══██╗██╔════╝██║  ██║
   ██║███████║██║    ██║   ██║██║█████╔╝ ███████║███████╗███████║
██ ██║██╔══██║██║    ╚██╗ ██╔╝██║██╔═██╗ ██╔══██║╚════██║██╔══██║
╚█████╔╝██║  ██║██║   ╚████╔╝ ██║██║  ██╗██║  ██║███████║██║  ██║
 ╚════╝ ╚═╝  ╚═╝╚═╝    ╚═══╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

  🎮 You found the Konami Code! Easter egg unlocked.
  👋 Hi! I'm Jai Vikash — Full-Stack Developer.
  📧 Let's connect: jaivikash4691@gmail.com
  🐙 GitHub: github.com/jaivikash4691-collab
`;

  function triggerKonami() {
    console.log(ASCII_ART, 'color: #06b6d4; font-family: monospace; font-size: 10px;');

    // Visual flash effect
    const flash = document.createElement('div');
    flash.style.cssText = `
      position:fixed; inset:0; z-index:99999;
      background:radial-gradient(circle, rgba(37,99,235,0.15), transparent);
      pointer-events:none; animation:fadeIn 0.3s ease forwards;
    `;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);

    // Toast notification
    showToast('🎮 Konami Code activated! Check the console. 👾');
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
      background:var(--bg-card); border:1px solid var(--accent-cyan);
      color:var(--text-primary); padding:12px 24px; border-radius:100px;
      font-size:0.85rem; font-family:var(--font-mono); z-index:99998;
      box-shadow:0 4px 24px rgba(0,0,0,0.4), 0 0 20px rgba(6,182,212,0.2);
      animation:fadeInUp 0.35s ease forwards;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'fadeIn 0.3s ease reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function initKonami() {
    document.addEventListener('keydown', (e) => {
      sequence.push(e.key);
      if (sequence.length > KONAMI.length) sequence.shift();
      if (sequence.join(',') === KONAMI.join(',')) {
        triggerKonami();
        sequence = [];
      }
    });
  }

  function initConsoleBranding() {
    console.log(
      '%c👋 Hey developer! Welcome to the source.',
      'color:#06b6d4; font-size:14px; font-weight:bold; font-family:monospace;'
    );
    console.log(
      '%cBuilt by Jai Vikash | jaivikash4691@gmail.com',
      'color:#8baabf; font-size:12px; font-family:monospace;'
    );
    console.log(
      '%c🎮 Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A',
      'color:#2563eb; font-size:11px; font-family:monospace;'
    );
    console.log(
      '%c💻 Also try: sudo hire-me in the terminal section!',
      'color:#fbbf24; font-size:11px; font-family:monospace;'
    );
  }

  function init() {
    initKonami();
    initConsoleBranding();
  }

  return { init };
})();
