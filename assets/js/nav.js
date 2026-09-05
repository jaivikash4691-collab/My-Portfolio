/**
 * nav.js — Sticky navigation, active section tracking, mobile menu, smooth scroll
 */

const NavManager = (() => {
  const nav       = document.getElementById('main-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  const navLinks  = document.querySelectorAll('.nav-link[data-section]');
  const sections  = document.querySelectorAll('section[id]');

  let menuOpen = false;

  /* ── Scroll: glass blur effect ─────────────────────────── */
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  /* ── Active section tracking ───────────────────────────── */
  function initActiveTracking() {
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.dataset.section === id);
              link.setAttribute('aria-current', link.dataset.section === id ? 'page' : 'false');
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));
  }

  /* ── Smooth scroll on nav click ────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        closeMenu();
        const offset = nav ? nav.offsetHeight + 20 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ── Mobile menu ────────────────────────────────────────── */
  function toggleMenu() {
    menuOpen = !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    mobileMenu.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', String(menuOpen));
    hamburger.setAttribute('aria-label', menuOpen ? 'Close menu' : 'Open menu');

    // Trap focus inside mobile menu when open
    if (menuOpen) {
      setTimeout(() => {
        const firstLink = mobileMenu.querySelector('.nav-link');
        if (firstLink) firstLink.focus();
      }, 100);
    }
  }

  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  /* ── Keyboard: ESC closes menu ──────────────────────────── */
  function onKeyDown(e) {
    if (e.key === 'Escape' && menuOpen) closeMenu();
  }

  function init() {
    if (!nav) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on init

    initActiveTracking();
    initSmoothScroll();

    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (mobileMenu) {
      // Close menu when clicking outside nav links
      mobileMenu.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-link')) return;
        closeMenu();
      });
    }

    document.addEventListener('keydown', onKeyDown);
  }

  return { init };
})();
