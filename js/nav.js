/**
 * SPARK7 – Nav Component JS
 * nav.js
 *
 * Handles:
 *  - Mobile hamburger/drawer toggle
 *  - Active link highlighting based on current page
 *  - Scroll-based nav background opacity boost
 */

export function initNav() {
  const nav      = document.querySelector('.s7-nav');
  const burger   = document.querySelector('.s7-nav__hamburger');
  const drawer   = document.querySelector('.s7-nav__drawer');
  const links    = document.querySelectorAll('.s7-nav__link');

  // ── Active link from URL ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop() || '';
    if (href === currentPath) link.classList.add('active');
  });

  // ── Hamburger toggle ──
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close drawer on link click
    drawer.querySelectorAll('.s7-nav__link').forEach(l => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav?.contains(e.target)) {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Scroll: strengthen nav background ──
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(3,6,15,0.97)';
      } else {
        nav.style.background = 'rgba(3,6,15,0.85)';
      }
    }, { passive: true });
  }
}
