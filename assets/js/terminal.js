/**
 * ============================================================
 * terminal.js — Interactive Developer Terminal
 * ============================================================
 */

const TerminalManager = (() => {
  const { TERMINAL_COMMANDS } = window.PORTFOLIO_DATA;

  let inputEl, outputEl;
  let history = [];
  let historyIndex = -1;

  function print(html, className = 'term-response') {
    if (!outputEl) return;
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.innerHTML = html;
    outputEl.appendChild(line);
    scrollToBottom();
  }

  function printPromptLine(cmd) {
    if (!outputEl) return;
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = `<span class="term-prompt">visitor@jaivikash-dev:~$</span> <span class="term-input-text">${escapeHtml(cmd)}</span>`;
    outputEl.appendChild(line);
  }

  function scrollToBottom() {
    if (outputEl) outputEl.scrollTop = outputEl.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function execute(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Save to history
    history.unshift(raw.trim());
    if (history.length > 30) history.pop();
    historyIndex = -1;

    printPromptLine(raw.trim());

    if (!TERMINAL_COMMANDS[cmd]) {
      print(`<span style="color:#f87171">Command not found: <strong>${escapeHtml(cmd)}</strong>. Type <strong>help</strong> for available commands.</span>`);
      return;
    }

    const result = TERMINAL_COMMANDS[cmd]();

    if (result === '__CLEAR__') {
      outputEl.innerHTML = '';
      print('Terminal cleared. Type <span class="cmd-name">help</span> for commands.', 'term-response');
      return;
    }

    if (result) {
      const out = document.createElement('div');
      out.className = 'term-line';
      out.innerHTML = `<div class="term-response">${result}</div>`;
      outputEl.appendChild(out);
      scrollToBottom();
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      const cmd = inputEl.value;
      inputEl.value = '';
      execute(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        inputEl.value = history[historyIndex];
        setTimeout(() => {
          inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
        }, 0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputEl.value = history[historyIndex];
      } else {
        historyIndex = -1;
        inputEl.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = inputEl.value.toLowerCase().trim();
      if (!partial) return;
      const match = Object.keys(TERMINAL_COMMANDS).find(k => k.startsWith(partial) && k !== partial);
      if (match) inputEl.value = match;
    }
  }

  function init() {
    inputEl  = document.getElementById('terminal-cmd-input');
    outputEl = document.getElementById('terminal-output');

    if (!inputEl || !outputEl) return;

    // Initial banner
    print(`Welcome to <strong>Jai Vikash's Portfolio Terminal</strong> (v2.0).
Type <span class="cmd-name">help</span> to view available commands or <span class="cmd-name">projects</span> to inspect flagship builds.`, 'term-response');

    inputEl.addEventListener('keydown', onKeyDown);

    // Click anywhere on terminal box focuses input
    const terminalBox = document.querySelector('.terminal-interactive');
    if (terminalBox) {
      terminalBox.addEventListener('click', () => {
        inputEl.focus();
      });
    }
  }

  return { init, execute };
})();
