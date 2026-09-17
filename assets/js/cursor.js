/**
 * ============================================================
 * cursor.js — Interactive Cursor Follower (Desktop only)
 * Enhances the UI with a subtle trailing ring while ensuring
 * the native system mouse pointer is ALWAYS fully visible & functional.
 * ============================================================
 */

const CursorManager = (() => {
  let dot, ring;
  let cursorX = -100, cursorY = -100;
  let ringX = -100, ringY = -100;
  let rafId = null;
  let isHovering = false;
  let isVisible = false;

  // Only activate on devices with a true mouse pointer (not touch)
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function moveDot(x, y) {
    if (!dot) return;
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
  }

  function animateRing() {
    if (isVisible) {
      ringX += (cursorX - ringX) * 0.15;
      ringY += (cursorY - ringY) * 0.15;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
      }
    }
    rafId = requestAnimationFrame(animateRing);
  }

  function onMouseMove(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      ringX = cursorX;
      ringY = cursorY;
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    }

    moveDot(cursorX, cursorY);
  }

  function onMouseLeave() {
    isVisible = false;
    if (dot) dot.style.opacity = '0';
    if (ring) ring.style.opacity = '0';
  }

  function onMouseEnter() {
    isVisible = true;
    if (dot) dot.style.opacity = '1';
    if (ring) ring.style.opacity = '1';
  }

  function onMouseOver(e) {
    const target = e.target.closest(
      'a, button, [role="button"], input, textarea, select, .skill-card, .project-card, .achievement-card, .focus-card, .education-card, .terminal-interactive'
    );
    if (target && !isHovering) {
      isHovering = true;
      document.body.classList.add('cursor-hover');
    }
  }

  function onMouseOut(e) {
    const target = e.target.closest(
      'a, button, [role="button"], input, textarea, select, .skill-card, .project-card, .achievement-card, .focus-card, .education-card, .terminal-interactive'
    );
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

    // Show follower elements with initial opacity 0 until first mouse move
    dot.style.display = 'block';
    ring.style.display = 'block';
    dot.style.opacity = '0';
    ring.style.opacity = '0';

    // Native pointer is NEVER hidden
    document.body.style.cursor = 'default';

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Start ring animation loop
    animateRing();
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseover', onMouseOver);
    document.removeEventListener('mouseout', onMouseOut);
    document.body.classList.remove('cursor-hover');
  }

  return { init, destroy };
})();
