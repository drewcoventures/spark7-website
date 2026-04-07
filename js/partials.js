/**
 * SPARK7 – Shared HTML Partials
 * partials.js
 *
 * Call injectPartials() after DOM is ready to render nav + footer
 * into any page that has the matching placeholder elements.
 *
 * Placeholders:
 *   <div id="s7-nav-placeholder"></div>
 *   <div id="s7-footer-placeholder"></div>
 */

const NAV_HTML = /* html */`
<nav class="s7-nav" role="navigation" aria-label="Main navigation">
  <a href="index.html" class="s7-nav__brand">SPARK7</a>

  <ul class="s7-nav__links">
    <li><a href="how-to-play.html" class="s7-nav__link">How to Play</a></li>
    <li><a href="about.html"       class="s7-nav__link">About</a></li>
    <li><a href="tips.html"        class="s7-nav__link">Tips</a></li>
    <li><a href="brain-benefits.html" class="s7-nav__link">Brain Benefits</a></li>
    <li><a href="contact.html"     class="s7-nav__link">Contact</a></li>
  </ul>

  <button class="s7-nav__hamburger" aria-label="Toggle navigation" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>

<!-- Mobile drawer -->
<div class="s7-nav__drawer" role="navigation" aria-label="Mobile navigation">
  <a href="how-to-play.html"   class="s7-nav__link">How to Play</a>
  <a href="about.html"         class="s7-nav__link">About</a>
  <a href="tips.html"          class="s7-nav__link">Tips</a>
  <a href="brain-benefits.html" class="s7-nav__link">Brain Benefits</a>
  <a href="contact.html"       class="s7-nav__link">Contact</a>
</div>
`;

const FOOTER_HTML = /* html */`
<footer class="s7-footer">
  <div class="container">
    <div class="s7-footer__inner">
      <div class="s7-footer__brand">SPARK7</div>
      <ul class="s7-footer__links">
        <li><a href="how-to-play.html">How to Play</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tips.html">Tips</a></li>
        <li><a href="brain-benefits.html">Brain Benefits</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="privacy.html">Privacy</a></li>
      </ul>
      <p class="s7-footer__copy">&copy; 2025 Spark7. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

const FOOTER_CSS = `
.s7-footer {
  border-top: 1px solid rgba(36,189,216,0.18);
  padding: 48px 0 32px;
  background: rgba(3,6,15,0.9);
}
.s7-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}
.s7-footer__brand {
  font-family: 'Audiowide', sans-serif;
  font-size: 16px;
  letter-spacing: 0.22em;
  color: rgba(36,189,216,0.7);
}
.s7-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  list-style: none;
}
.s7-footer__links a {
  font-family: 'Michroma', sans-serif;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.25s;
}
.s7-footer__links a:hover { color: rgba(36,189,216,0.9); }
.s7-footer__copy {
  font-family: 'Michroma', sans-serif;
  font-size: 10px;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.12em;
}
`;

export function injectPartials() {
  // Nav
  const navSlot = document.getElementById('s7-nav-placeholder');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  // Footer
  const footerSlot = document.getElementById('s7-footer-placeholder');
  if (footerSlot) {
    footerSlot.outerHTML = FOOTER_HTML;
    // Inject footer CSS once
    if (!document.getElementById('s7-footer-styles')) {
      const style = document.createElement('style');
      style.id = 's7-footer-styles';
      style.textContent = FOOTER_CSS;
      document.head.appendChild(style);
    }
  }
}

/** Raw QR placeholder SVG string — swap with real QR at launch */
export const QR_SVG = /* html */`
<svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2"  y="2"  width="26" height="26" rx="2" stroke="#111" stroke-width="3" fill="none"/>
  <rect x="9"  y="9"  width="12" height="12" fill="#111"/>
  <rect x="40" y="2"  width="26" height="26" rx="2" stroke="#111" stroke-width="3" fill="none"/>
  <rect x="47" y="9"  width="12" height="12" fill="#111"/>
  <rect x="2"  y="40" width="26" height="26" rx="2" stroke="#111" stroke-width="3" fill="none"/>
  <rect x="9"  y="47" width="12" height="12" fill="#111"/>
  <rect x="40" y="40" width="4" height="4" fill="#111"/>
  <rect x="48" y="40" width="4" height="4" fill="#111"/>
  <rect x="56" y="40" width="8" height="4" fill="#111"/>
  <rect x="40" y="48" width="8" height="4" fill="#111"/>
  <rect x="52" y="48" width="4" height="4" fill="#111"/>
  <rect x="40" y="56" width="4" height="8" fill="#111"/>
  <rect x="48" y="56" width="8" height="4" fill="#111"/>
  <rect x="60" y="56" width="4" height="8" fill="#111"/>
</svg>
`;
