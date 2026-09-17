/**
 * ============================================================
 * contact.js — Contact form validation, character counter,
 * and reliable mailto client launcher
 * ============================================================
 */

const ContactManager = (() => {
  const { PERSONAL } = window.PORTFOLIO_DATA;

  function getEl(id) { return document.getElementById(id); }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(fieldId, message) {
    const field = document.getElementById(fieldId)?.closest('.form-field');
    if (!field) return;
    field.classList.add('error');
    const errEl = field.querySelector('.field-error');
    if (errEl) errEl.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId)?.closest('.form-field');
    if (!field) return;
    field.classList.remove('error');
    const errEl = field.querySelector('.field-error');
    if (errEl) errEl.textContent = '';
  }

  function clearAllErrors(form) {
    form.querySelectorAll('.form-field').forEach(f => {
      f.classList.remove('error');
      const errEl = f.querySelector('.field-error');
      if (errEl) errEl.textContent = '';
    });
  }

  function validate(data) {
    let valid = true;

    if (!data.name.trim() || data.name.trim().length < 2) {
      setError('contact-name', 'Please enter your name (minimum 2 characters).');
      valid = false;
    } else {
      clearError('contact-name');
    }

    if (!data.email.trim() || !validateEmail(data.email)) {
      setError('contact-email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('contact-email');
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      setError('contact-message', 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError('contact-message');
    }

    return valid;
  }

  function initCharCounter() {
    const msgEl   = getEl('contact-message');
    const counter = getEl('msg-counter');
    if (!msgEl || !counter) return;

    const MAX = 1000;
    msgEl.maxLength = MAX;

    msgEl.addEventListener('input', () => {
      const remaining = MAX - msgEl.value.length;
      counter.textContent = `${msgEl.value.length} / ${MAX}`;
      counter.style.color = remaining < 100 ? '#f87171' : '';
    });
  }

  function initLiveValidation(form) {
    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
      const el = getEl(id);
      if (!el) return;
      el.addEventListener('blur', () => {
        const val = el.value.trim();
        if (id === 'contact-name') {
          if (val.length >= 2) clearError(id);
          else if (val.length > 0) setError(id, 'Name must be at least 2 characters.');
        }
        if (id === 'contact-email') {
          if (validateEmail(val)) clearError(id);
          else if (val.length > 0) setError(id, 'Please enter a valid email address.');
        }
        if (id === 'contact-message') {
          if (val.length >= 10) clearError(id);
          else if (val.length > 0) setError(id, 'Message must be at least 10 characters.');
        }
      });
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const form = e.target;

    const data = {
      name:    getEl('contact-name')?.value    || '',
      email:   getEl('contact-email')?.value   || '',
      message: getEl('contact-message')?.value || '',
    };

    clearAllErrors(form);

    if (!validate(data)) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.classList.add('btn-loading');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Preparing Email...</span>
      `;
    }

    // Brief simulation for UX, then launch mailto
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }

      const subject   = encodeURIComponent(`Portfolio Inquiry from ${data.name}`);
      const body      = encodeURIComponent(
        `Hi Jai Vikash,\n\n${data.message}\n\nFrom:\nName: ${data.name}\nEmail: ${data.email}`
      );
      const mailtoUrl = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;

      const successMsg = getEl('form-success-msg');
      if (successMsg) {
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 6000);
      }

      form.reset();
      const counter = getEl('msg-counter');
      if (counter) counter.textContent = '0 / 1000';

      // Open mail client
      window.location.href = mailtoUrl;
    }, 700);
  }

  function init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    initCharCounter();
    initLiveValidation(form);
    form.addEventListener('submit', submitForm);
  }

  return { init };
})();
