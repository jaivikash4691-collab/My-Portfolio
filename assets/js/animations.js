/**
 * animations.js — Scroll reveal, particle background, progress bar, back-to-top
 */

const AnimationManager = (() => {

  /* ── Scroll Reveal via IntersectionObserver ──────────────── */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Scroll Progress Bar ─────────────────────────────────── */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    function update() {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width  = progress + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Back to Top Button ──────────────────────────────────── */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Stat Counter Animation ──────────────────────────────── */
  function animateCounter(el, target, duration = 1800) {
    const start = performance.now();
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ── Skill Bar Animation ─────────────────────────────────── */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill  = entry.target;
          const width = fill.dataset.width || '70%';
          // Slight delay per card position
          setTimeout(() => { fill.style.width = width; }, 200);
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  }

  /* ── Particle Canvas Background ─────────────────────────── */
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;
    let W, H;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function Particle() {
      this.reset = function () {
        this.x   = Math.random() * W;
        this.y   = H + 10;
        this.vx  = (Math.random() - 0.5) * 0.4;
        this.vy  = -(Math.random() * 0.5 + 0.2);
        this.r   = Math.random() * 1.5 + 0.5;
        this.a   = Math.random() * 0.5 + 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      };
      this.reset();
      this.y = Math.random() * H; // scatter initial positions
    }

    function init() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach(p => {
        p.x    += p.vx;
        p.y    += p.vy;
        p.life += 1;

        const progress = p.life / p.maxLife;
        let alpha = p.a;
        if (progress < 0.1) alpha = p.a * (progress / 0.1);
        if (progress > 0.8) alpha = p.a * (1 - (progress - 0.8) / 0.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -10) p.reset();
      });

      animFrame = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener('resize', () => {
      resize();
    }, { passive: true });
  }

  /* ── Init All ─────────────────────────────────────────────── */
  function init() {
    initScrollReveal();
    initScrollProgress();
    initBackToTop();
    initCounters();
    initSkillBars();
    initParticles();
  }

  return { init, initSkillBars };
})();
