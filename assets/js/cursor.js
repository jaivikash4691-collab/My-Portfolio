/**
 * cursor.js — Custom cursor: dot + ring, expands on hover
 * Automatically disabled on touch devices
 */

const CursorManager = (() => {
  let dot, ring;
  let cursorX = 0, cursorY = 0;
  let ringX = 0, ringY = 0;
  let rafId = null;
  let isHovering = false;

  // Only activate on devices with a fine pointer (mouse)
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function moveDot(x, y) {
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
  }

  function animateRing() {
    ringX += (cursorX - ringX) * 0.12;
    ringY += (cursorY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }

  function onMouseMove(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    moveDot(cursorX, cursorY);
  }

  function onMouseOver(e) {
    const target = e.target.closest('a, button, [data-hover], .skill-card, .project-card, .achievement-card');
    if (target && !isHovering) {
      isHovering = true;
      document.body.classList.add('cursor-hover');
    }
  }

  function onMouseOut(e) {
    const target = e.target.closest('a, button, [data-hover], .skill-card, .project-card, .achievement-card');
    if (target && isHovering) {
      isHovering = false;
      document.body.classList.remove('cursor-hover');
    }
  }

  function init() {
    if (!supportsHover) return;

    dot  = document.getElementById('cursor-dot');
    ring = document.getElementById('cursor-ring');

    if (!dot || !ring) return;

    // Show cursor elements
    dot.style.display  = 'block';
    ring.style.display = 'block';

    // Hide default cursor
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout',  onMouseOut);

    // Start ring animation loop
    animateRing();
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseover', onMouseOver);
    document.removeEventListener('mouseout',  onMouseOut);
    document.body.style.cursor = '';
  }

  return { init, destroy };
})();
