/**
 * terminal.js — Interactive terminal section with command execution
 */

const TerminalManager = (() => {
  const { TERMINAL_COMMANDS } = window.PORTFOLIO_DATA;

  let inputEl, outputEl;
  let history = [];
  let historyIndex = -1;

  /* ── Print a line to the terminal output ─────────────────── */
  function print(html, className = 'term-response') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.innerHTML = html;
    outputEl.appendChild(line);
    scrollToBottom();
  }

  function printPromptLine(cmd) {
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = `<span class="term-prompt">visitor@jv-portfolio:~$</span> <span class="term-input-text">${escapeHtml(cmd)}</span>`;
    outputEl.appendChild(line);
  }

  function scrollToBottom() {
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* ── Execute a command ───────────────────────────────────── */
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
      out.innerHTML = `<span class="term-response">${result}</span>`;
      outputEl.appendChild(out);
      scrollToBottom();
    }
  }

  /* ── Handle input ────────────────────────────────────────── */
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
        // Move cursor to end
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
      // Simple tab completion
      const partial = inputEl.value.toLowerCase();
      const match = Object.keys(TERMINAL_COMMANDS).find(k => k.startsWith(partial) && k !== partial);
      if (match) inputEl.value = match;
    }
  }

  function init() {
    const section = document.getElementById('terminal-section');
    if (!section) return;

    inputEl  = document.getElementById('terminal-cmd-input');
    outputEl = document.getElementById('terminal-output');
    if (!inputEl || !outputEl) return;

    // Welcome message
    print(`Welcome to <span class="cmd-title">Jai Vikash's</span> developer terminal.`, 'term-response');
    print(`Type <span class="cmd-name">help</span> to see available commands. Use ↑↓ for history, Tab to autocomplete.`, 'term-response');
    print('', 'term-response');

    inputEl.addEventListener('keydown', onKeyDown);

    // Click anywhere in terminal to focus input
    const terminalEl = document.querySelector('.terminal-interactive');
    if (terminalEl) {
      terminalEl.addEventListener('click', () => inputEl.focus());
    }
  }

  return { init };
})();
