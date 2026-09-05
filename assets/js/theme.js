/**
 * theme.js — Dark/Light mode toggle with localStorage + prefers-color-scheme
 */

const ThemeManager = (() => {
  const STORAGE_KEY = 'jv-theme';
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const iconEl = document.getElementById('theme-icon');

  const ICONS = { dark: '🌙', light: '☀️' };

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (iconEl) iconEl.textContent = ICONS[theme];
    if (toggleBtn) toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  function toggle() {
    const current = root.getAttribute('data-theme') || 'dark';
    apply(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(getPreferred());
    if (toggleBtn) toggleBtn.addEventListener('click', toggle);

    // Listen for OS preference change
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) apply(e.matches ? 'light' : 'dark');
    });
  }

  return { init, toggle, apply };
})();
