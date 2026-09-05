/**
 * contact.js — Contact form validation and submission (mailto fallback)
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
  }

  function clearAllErrors(form) {
    form.querySelectorAll('.form-field').forEach(f => f.classList.remove('error'));
  }

  function validate(data) {
    let valid = true;

    if (!data.name.trim() || data.name.trim().length < 2) {
      setError('contact-name', 'Please enter your name (at least 2 characters).');
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
        const data = {
          name:    getEl('contact-name')?.value  || '',
          email:   getEl('contact-email')?.value || '',
          message: getEl('contact-message')?.value || '',
        };
        // Only validate the blurred field
        if (id === 'contact-name') {
          if (data.name.trim().length >= 2) clearError(id);
          else setError(id, 'Please enter your name (at least 2 characters).');
        }
        if (id === 'contact-email') {
          if (validateEmail(data.email)) clearError(id);
          else setError(id, 'Please enter a valid email address.');
        }
        if (id === 'contact-message') {
          if (data.message.trim().length >= 10) clearError(id);
          else setError(id, 'Message must be at least 10 characters.');
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
    if (submitBtn) submitBtn.classList.add('btn-loading');

    // Simulate brief loading then open mailto
    setTimeout(() => {
      if (submitBtn) submitBtn.classList.remove('btn-loading');

      // Build mailto link as fallback
      const subject   = encodeURIComponent(`Portfolio Contact from ${data.name}`);
      const body      = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;

      // Show success
      const successMsg = getEl('form-success-msg');
      if (successMsg) {
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      }

      form.reset();

      // Open mail client
      window.location.href = mailtoUrl;
    }, 800);
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
