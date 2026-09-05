/**
 * timeline.js — Renders experience timeline from data.js
 */

const TimelineManager = (() => {
  const { TIMELINE } = window.PORTFOLIO_DATA;

  function createItem(entry, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.dataset.type = entry.type;
    if (index < 6) item.classList.add(`delay-${(index % 5) + 1}`);

    item.innerHTML = `
      <div class="timeline-node">
        <div class="timeline-icon" aria-hidden="true">${entry.icon}</div>
      </div>
      <div class="timeline-body">
        <span class="timeline-year">${entry.year}</span>
        <h3 class="timeline-title">${entry.title}</h3>
        <p class="timeline-desc">${entry.description}</p>
      </div>
    `;

    return item;
  }

  function init() {
    const container = document.getElementById('timeline-container');
    if (!container || !TIMELINE) return;

    TIMELINE.forEach((entry, i) => {
      container.appendChild(createItem(entry, i));
    });
  }

  return { init };
})();
