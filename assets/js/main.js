// Main interactions for Akoume New Website
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const navToggleIcon = document.querySelector('[data-nav-toggle-icon]');

  // Toggle hamburger/close icon using the current path (works in nested pages)
  const setToggleIcon = (isOpen) => {
    if (!navToggleIcon) return;
    const current = navToggleIcon.src;
    navToggleIcon.src = isOpen
      ? current.replace(/Hamburger_icon\.svg/i, 'cross.svg')
      : current.replace(/cross\.svg/i, 'Hamburger_icon.svg');
  };

  // Ensure hamburger icon path works across nested routes
  if (navToggleIcon) {
    const fixIcon = () => { navToggleIcon.src = `${location.origin}/assets/img/Hamburger_icon.svg`; };
    navToggleIcon.addEventListener('error', fixIcon, { once: true });
    // If it already failed before listener attached, fix immediately
    if (navToggleIcon.complete && navToggleIcon.naturalWidth === 0) fixIcon();
  }
  // Fallback: if the icon 404s due to a wrong relative path, force an absolute path
  if (navToggleIcon) {
    navToggleIcon.addEventListener('error', () => {
      navToggleIcon.src = `${location.origin}/assets/img/Hamburger_icon.svg`;
    }, { once: true });
  }

  const openNav = () => {
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
    setToggleIcon(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    setToggleIcon(false);
    document.body.style.removeProperty('overflow');
  };

  // Dropdown menus inside primary nav with hover-intent and click-lock behavior
  const dropdowns = document.querySelectorAll('[data-dropdown]');
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const closeAllDropdowns = (force = false) => {
    document.querySelectorAll('[data-dropdown].open').forEach((dd) => {
      if (!force && dd.dataset.locked === 'true') return;
      dd.classList.remove('open');
      const btn = dd.querySelector('.dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (force) dd.dataset.locked = '';
    });
  };

  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.dropdown-toggle');
    const menu = dd.querySelector('.dropdown-menu');
    let hoverCloseTimer;

    const openDD = (source) => {
      if (source === 'hover' && dd.dataset.locked === 'true') return;
      // Close other dropdowns unless they are click-locked
      document.querySelectorAll('[data-dropdown]').forEach((other) => {
        if (other === dd) return;
        if (other.dataset.locked === 'true' && source !== 'force') return;
        other.classList.remove('open');
        const obtn = other.querySelector('.dropdown-toggle');
        if (obtn) obtn.setAttribute('aria-expanded', 'false');
      });
      dd.classList.add('open');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    };

    const closeDD = (source) => {
      if (source === 'hover' && dd.dataset.locked === 'true') return;
      dd.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    };

    if (btn) {
      btn.addEventListener('click', (e) => {
        // On touch/mobile (no hover), allow natural link navigation to Overview
        if (!supportsHover) {
          return;
        }
        // Desktop: prevent navigation and toggle dropdown lock/open state
        e.preventDefault();
        const isOpen = dd.classList.contains('open');
        const isLocked = dd.dataset.locked === 'true';

        if (isOpen && isLocked) {
          // Clicking again: unlock and close, and temporarily suppress hover reopen
          dd.dataset.locked = '';
          closeDD('click');
          dd.dataset.justClosed = 'true';
          setTimeout(() => { dd.dataset.justClosed = ''; }, 320);
        } else if (!isOpen) {
          // Closed -> open and lock
          dd.dataset.locked = 'true';
          openDD('click');
        } else {
          // Open via hover but not locked -> convert to locked open
          dd.dataset.locked = 'true';
          openDD('click');
        }

        e.stopPropagation();
      });
    }

    if (supportsHover) {
      const clearTimer = () => { if (hoverCloseTimer) { clearTimeout(hoverCloseTimer); hoverCloseTimer = undefined; } };
      dd.addEventListener('mouseenter', () => {
        clearTimer();
        // If just closed via click, avoid immediate hover reopen while pointer is still over the trigger
        if (dd.dataset.justClosed === 'true') return;
        openDD('hover');
      });
      dd.addEventListener('mouseleave', () => {
        clearTimer();
        // hover-intent delay to allow pointer travel into menu
        hoverCloseTimer = setTimeout(() => closeDD('hover'), 420);
      });
      if (menu) {
        menu.addEventListener('mouseenter', clearTimer);
        menu.addEventListener('mouseleave', () => {
          clearTimer();
          // keep open briefly to avoid accidental close while moving out
          hoverCloseTimer = setTimeout(() => closeDD('hover'), 420);
        });
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    if (!e.target.closest('[data-dropdown]')) closeAllDropdowns(true);
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks?.classList.contains('open');
      if (isOpen) closeNav(); else openNav();
    });
  }

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
      // Force close, including click-locked dropdowns
      closeAllDropdowns(true);
    }
  });

  // Close menu when any link inside nav is clicked (mobile)
  if (navLinks) {
    navLinks.addEventListener('click', (e) => {
      if ((e.target instanceof Element) && e.target.closest('a')) {
        closeNav();
        closeAllDropdowns();
      }
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