// Repository dynamic rendering for experts and helplines with graceful fallback
document.addEventListener('DOMContentLoaded', () => {
  const expertsContainer = document.getElementById('experts-container');
  const helplinesTbody = document.getElementById('helplines-tbody');

  // Simple, accessible carousel controls (prev/next scroll one viewport).
  // We scroll the track element (scrollbars visually hidden via CSS).
  const setupCarousels = () => {
    document.querySelectorAll('[data-carousel]').forEach((carousel) => {
      const scroller = carousel.querySelector('[data-track]');
      const prev = carousel.querySelector('[data-prev]');
      const next = carousel.querySelector('[data-next]');
      if (!scroller || !prev || !next) return;

      const update = () => {
        const atStart = scroller.scrollLeft <= 1;
        const atEnd = Math.ceil(scroller.scrollLeft + scroller.clientWidth) >= scroller.scrollWidth - 1;
        prev.disabled = atStart;
        next.disabled = atEnd;
      };

      prev.addEventListener('click', () => {
        scroller.scrollBy({ left: -scroller.clientWidth, behavior: 'smooth' });
      });
      next.addEventListener('click', () => {
        scroller.scrollBy({ left: scroller.clientWidth, behavior: 'smooth' });
      });

      scroller.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
      // Ensure the track starts at the first cards after any render
      scroller.scrollTo({ left: 0, behavior: 'auto' });
    });
  };

  // Initialize carousels for static fallback content
  setupCarousels();

  // Reset horizontal positions of all carousels to the start (robust)
  const resetCarouselPositions = () => {
    document.querySelectorAll('[data-track]').forEach((scroller) => {
      let tries = 0;
      const tick = () => {
        // Reset horizontal position without using scrollIntoView to avoid page auto-scrolling
        scroller.scrollTo({ left: 0, behavior: 'auto' });
        if (tries++ < 4) requestAnimationFrame(tick);
      };
      tick();
    });
  };

  // initial reset to ensure first items (legacy five) are visible
  resetCarouselPositions();
  // After load and once images/layout settle
  window.addEventListener('load', resetCarouselPositions);
  setTimeout(resetCarouselPositions, 300);
  setTimeout(resetCarouselPositions, 1000);

  // Ensure the legacy first five experts exist (from older site)
  const legacyFirstFive = [
    { name: 'Lakshmi Jain', title: 'Aspiring Clinical Psychologist', age: '22', experience: '< 1 year', contact: '+91 956 052 6546', email: '', fee: 'Free', availability: 'All days', linkedin: 'https://www.linkedin.com/in/lakshmi-jain-620993187/', image: 'lakshmi-jain.jpg' },
    { name: 'Dr. Suja M K', title: 'Mental Health Consultant', age: '54', experience: '26 years', contact: '', email: 'ruhicounselling@gmail.com', fee: '₹1000/session', availability: 'Saturday, Sunday', linkedin: 'https://www.linkedin.com/in/dr-suja-m-k-ph-d-b2298a7b/', image: 'dr-suja-mk.jpg' },
    { name: "Masiha Shabeer", title: "Psychologist", age: "27", experience: "5 years", contact: "+91 739 597 8708", email: "", fee: "₹1500/session", availability: "Weekdays", linkedin: "https://www.linkedin.com/in/masiha-shabeer-905406131/", image: "masiha-shabeer.jpg" },
    { name: 'Dr. R L Ravishankar', title: 'Psychologist', age: '62', experience: '32 years', contact: '+91 984 104 3308', email: '', fee: '₹500/session', availability: 'Weekdays', linkedin: 'https://www.linkedin.com/in/dr-ravi-shankar-5bb1b696/', image: 'dr-rl-ravishankar.jpg' },
    { name: 'Purva Dixit', title: 'Clinical Psychologist', age: '47', experience: '22 years', contact: '+91 901 103 3772', email: '', fee: '₹750/session', availability: 'Weekdays, Saturday', linkedin: 'https://www.linkedin.com/in/purva-dixit-55a46b48/', image: 'purva-dixit.jpg' },
  ];

  const buildCard = (e) => {
    const card = document.createElement('article');
    card.className = 'card card-padding expert-card';

    const img = document.createElement('img');
    img.className = 'avatar';
    img.loading = 'lazy';
    img.alt = e.name || 'Expert';
    img.src = `../assets/img/${e.image || ''}`;
    card.appendChild(img);

    const name = document.createElement('p');
    name.className = 'title mt-1';
    name.textContent = e.name || '';
    card.appendChild(name);

    if (e.title) {
      const role = document.createElement('p');
      role.className = 'muted';
      role.textContent = e.title;
      card.appendChild(role);
    }

    const info = document.createElement('p');
    info.className = 'text-sm mt-1';
    const details = [];
    if (e.age) details.push(`Age: ${e.age}`);
    if (e.experience) details.push(`Experience: ${e.experience}`);
    if (e.contact) details.push(`Contact: ${e.contact}`);
    if (e.email) details.push(`Email: ${e.email}`);
    if (e.fee) details.push(`Fee: ${e.fee}`);
    if (e.availability) details.push(`Availability: ${e.availability}`);
    info.innerHTML = details.join('<br/>');
    card.appendChild(info);

    if (e.linkedin) {
      const p = document.createElement('p');
      p.className = 'mt-1';
      const a = document.createElement('a');
      a.className = 'btn btn-outline text-sm';
      a.href = e.linkedin;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'LinkedIn';
      p.appendChild(a);
      card.appendChild(p);
    }

    return card;
  };

  const ensureLegacyFive = () => {
    if (!expertsContainer) return;

    // Normalize helper
    const normalize = (s) => String(s || '').trim().toLowerCase();

    // Index existing cards by name
    const cardsByName = new Map();
    expertsContainer.querySelectorAll('.expert-card').forEach((card) => {
      const titleEl = card.querySelector('.title');
      if (titleEl) cardsByName.set(normalize(titleEl.textContent), card);
    });

    // Move or create the legacy five to the very front (preserve order)
    for (let i = legacyFirstFive.length - 1; i >= 0; i--) {
      const data = legacyFirstFive[i];
      const key = normalize(data.name);
      let card = cardsByName.get(key);
      if (!card) {
        card = buildCard(data);
      }
      // Put card at the very start, robust against text nodes
      expertsContainer.prepend(card);
    }

    // Update carousel buttons state after DOM changes
    setupCarousels();
    resetCarouselPositions();
  };

  // Ensure legacy five visible in the static fallback immediately,
  // before the async JSON fetch resolves.
  ensureLegacyFive();
  // Extra hard reset to guarantee showing the first items
  if (expertsContainer) {
    expertsContainer.scrollTo({ left: 0, behavior: 'auto' });
    const parentViewport = expertsContainer.closest('.carousel-viewport') || expertsContainer.parentElement;
    if (parentViewport && typeof parentViewport.scrollTo === 'function') {
      parentViewport.scrollTo({ left: 0, behavior: 'auto' });
    }
  }

  const renderExperts = (experts) => {
    if (!expertsContainer || !Array.isArray(experts) || experts.length === 0) return;
    expertsContainer.innerHTML = '';

    const frag = document.createDocumentFragment();

    experts.forEach((e) => {
      const card = document.createElement('article');
      card.className = 'card card-padding expert-card';

      // avatar
      const img = document.createElement('img');
      img.className = 'avatar';
      img.loading = 'lazy';
      img.alt = e.name || 'Expert';
      img.src = `../assets/img/${e.image || ''}`;
      card.appendChild(img);

      // name
      const name = document.createElement('p');
      name.className = 'title mt-1';
      name.textContent = e.name || '';
      card.appendChild(name);

      // title
      if (e.title) {
        const role = document.createElement('p');
        role.className = 'muted';
        role.textContent = e.title;
        card.appendChild(role);
      }

      // info lines
      const info = document.createElement('p');
      info.className = 'text-sm mt-1';

      const details = [];
      if (e.age) details.push(`Age: ${e.age}`);
      if (e.experience) details.push(`Experience: ${e.experience}`);
      if (e.contact) details.push(`Contact: ${e.contact}`);
      if (e.email) details.push(`Email: ${e.email}`);
      if (e.fee) details.push(`Fee: ${e.fee}`);
      if (e.availability) details.push(`Availability: ${e.availability}`);

      info.innerHTML = details.join('<br/>');
      card.appendChild(info);

      if (e.linkedin) {
        const p = document.createElement('p');
        p.className = 'mt-1';
        const a = document.createElement('a');
        a.className = 'btn btn-outline text-sm';
        a.href = e.linkedin;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = 'LinkedIn';
        p.appendChild(a);
        card.appendChild(p);
      }

      frag.appendChild(card);
    });

    expertsContainer.appendChild(frag);
    // Make sure we begin at the first items after rendering
    try {
      expertsContainer.scrollTo({ left: 0, behavior: 'auto' });
      const vp = expertsContainer.closest('.carousel-viewport');
      if (vp && typeof vp.scrollTo === 'function') vp.scrollTo({ left: 0, behavior: 'auto' });
    } catch {}
  };

  const renderHelplines = (rows) => {
    if (!helplinesTbody || !Array.isArray(rows) || rows.length === 0) return;
    helplinesTbody.innerHTML = '';

    const frag = document.createDocumentFragment();
    rows.forEach((r) => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdTiming = document.createElement('td');
      const tdContact = document.createElement('td');
      const tdDesc = document.createElement('td');

      tdName.textContent = r.name || '';
      tdTiming.textContent = r.timing || '';
      tdContact.textContent = r.contact || '';
      tdDesc.textContent = r.description || '';

      tr.appendChild(tdName);
      tr.appendChild(tdTiming);
      tr.appendChild(tdContact);
      tr.appendChild(tdDesc);
      frag.appendChild(tr);
    });
    helplinesTbody.appendChild(frag);
  };

  const fetchJSON = async (path) => {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('Failed to fetch JSON:', path, err);
      return null;
    }
  };

  // Fetch experts and helplines, then render (fallback remains if fetch fails)
  (async () => {
    const experts = await fetchJSON('../data/experts.json');
    if (experts) {
      // Ensure the legacy first five are present and ordered first
      const norm = (s) => String(s || '').trim().toLowerCase();
      const legacyNames = legacyFirstFive.map(e => norm(e.name));
      const byName = new Map(experts.map(e => [norm(e.name), e]));

      const ordered = [];
      legacyFirstFive.forEach((le) => {
        const key = norm(le.name);
        if (byName.has(key)) {
          ordered.push(byName.get(key));
          byName.delete(key);
        } else {
          // Not present in JSON: add legacy entry
          ordered.push(le);
        }
      });

      // Append remaining experts preserving original order
      experts.forEach((e) => {
        if (!legacyNames.includes(norm(e.name))) {
          ordered.push(e);
        }
      });

      renderExperts(ordered);
      // Update carousel buttons after dynamic render
      setupCarousels();
      ensureLegacyFive();
      resetCarouselPositions();
    } else {
      // If JSON failed or was falsy, keep static fallback and ensure legacy cards exist
      ensureLegacyFive();
      resetCarouselPositions();
    }

    const helplines = await fetchJSON('../data/helplines.json');
    if (helplines) {
      renderHelplines(helplines);
    }
  })();
});