// Main interactions for Akoume New Website
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const navToggleIcon = document.querySelector('[data-nav-toggle-icon]');

  const openNav = () => {
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
    if (navToggleIcon) navToggleIcon.src = 'assets/img/cross.svg';
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    if (navToggleIcon) navToggleIcon.src = 'assets/img/Hamburger_icon.svg';
    document.body.style.removeProperty('overflow');
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks?.classList.contains('open');
      if (isOpen) closeNav(); else openNav();
    });
  }

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Close menu when any link inside nav is clicked (mobile)
  if (navLinks) {
    navLinks.addEventListener('click', (e) => {
      if ((e.target instanceof Element) && e.target.closest('a')) closeNav();
    });
  }

  // Copy-to-clipboard chips
  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', async () => {
      const text = el.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        // feedback
        const original = el.getAttribute('aria-label') || '';
        el.classList.add('copied');
        el.setAttribute('aria-label', 'Copied!');
        el.setAttribute('role', 'status');
        setTimeout(() => {
          el.classList.remove('copied');
          if (original) el.setAttribute('aria-label', original);
          el.removeAttribute('role');
        }, 1800);
      } catch (err) {
        console.error('Failed to copy text', err);
      }
    });
  });

  // Google Forms hidden-iframe success and reset
  // Forms must set: data-form-id and target to iframe id
  // Iframes must set: data-form-target and data-form-id
  document.querySelectorAll('iframe[data-form-target]').forEach((iframe) => {
    iframe.addEventListener('load', () => {
      if (iframe.dataset.submitted === 'true') {
        alert('Form submitted successfully');
        const form = document.getElementById(iframe.dataset.formId || '');
        if (form) form.reset();
        iframe.dataset.submitted = 'false';
      }
    });
  });

  document.querySelectorAll('form[data-form-id]').forEach((form) => {
    form.addEventListener('submit', () => {
      const iframeId = form.getAttribute('target');
      const iframe = document.getElementById(iframeId || '');
      if (iframe) iframe.dataset.submitted = 'true';
    });
  });
});