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

function injectGA() {
  if (document.getElementById('s7-ga')) return;
  const id = 'G-L7FB7RTGCS';
  const loader = document.createElement('script');
  loader.id = 's7-ga';
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(loader);
  const init = document.createElement('script');
  init.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`;
  document.head.appendChild(init);
}

export function injectPartials() {
  injectGA();

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

/** Real QR code SVG — points to https://spark7.app/get */
export const QR_SVG = /* html */`
<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M0,0h1v1h-1zM1,0h1v1h-1zM2,0h1v1h-1zM3,0h1v1h-1zM4,0h1v1h-1zM5,0h1v1h-1zM6,0h1v1h-1zM9,0h1v1h-1zM12,0h1v1h-1zM14,0h1v1h-1zM16,0h1v1h-1zM18,0h1v1h-1zM19,0h1v1h-1zM20,0h1v1h-1zM21,0h1v1h-1zM22,0h1v1h-1zM23,0h1v1h-1zM24,0h1v1h-1zM0,1h1v1h-1zM6,1h1v1h-1zM10,1h1v1h-1zM12,1h1v1h-1zM15,1h1v1h-1zM18,1h1v1h-1zM24,1h1v1h-1zM0,2h1v1h-1zM2,2h1v1h-1zM3,2h1v1h-1zM4,2h1v1h-1zM6,2h1v1h-1zM8,2h1v1h-1zM10,2h1v1h-1zM11,2h1v1h-1zM15,2h1v1h-1zM18,2h1v1h-1zM20,2h1v1h-1zM21,2h1v1h-1zM22,2h1v1h-1zM24,2h1v1h-1zM0,3h1v1h-1zM2,3h1v1h-1zM3,3h1v1h-1zM4,3h1v1h-1zM6,3h1v1h-1zM8,3h1v1h-1zM9,3h1v1h-1zM10,3h1v1h-1zM11,3h1v1h-1zM12,3h1v1h-1zM13,3h1v1h-1zM15,3h1v1h-1zM16,3h1v1h-1zM18,3h1v1h-1zM20,3h1v1h-1zM21,3h1v1h-1zM22,3h1v1h-1zM24,3h1v1h-1zM0,4h1v1h-1zM2,4h1v1h-1zM3,4h1v1h-1zM4,4h1v1h-1zM6,4h1v1h-1zM8,4h1v1h-1zM9,4h1v1h-1zM10,4h1v1h-1zM11,4h1v1h-1zM12,4h1v1h-1zM13,4h1v1h-1zM16,4h1v1h-1zM18,4h1v1h-1zM20,4h1v1h-1zM21,4h1v1h-1zM22,4h1v1h-1zM24,4h1v1h-1zM0,5h1v1h-1zM6,5h1v1h-1zM8,5h1v1h-1zM9,5h1v1h-1zM12,5h1v1h-1zM13,5h1v1h-1zM14,5h1v1h-1zM15,5h1v1h-1zM16,5h1v1h-1zM18,5h1v1h-1zM24,5h1v1h-1zM0,6h1v1h-1zM1,6h1v1h-1zM2,6h1v1h-1zM3,6h1v1h-1zM4,6h1v1h-1zM5,6h1v1h-1zM6,6h1v1h-1zM8,6h1v1h-1zM10,6h1v1h-1zM12,6h1v1h-1zM14,6h1v1h-1zM16,6h1v1h-1zM18,6h1v1h-1zM19,6h1v1h-1zM20,6h1v1h-1zM21,6h1v1h-1zM22,6h1v1h-1zM23,6h1v1h-1zM24,6h1v1h-1zM8,7h1v1h-1zM10,7h1v1h-1zM11,7h1v1h-1zM14,7h1v1h-1zM15,7h1v1h-1zM0,8h1v1h-1zM2,8h1v1h-1zM3,8h1v1h-1zM4,8h1v1h-1zM5,8h1v1h-1zM6,8h1v1h-1zM11,8h1v1h-1zM13,8h1v1h-1zM14,8h1v1h-1zM15,8h1v1h-1zM18,8h1v1h-1zM19,8h1v1h-1zM20,8h1v1h-1zM21,8h1v1h-1zM22,8h1v1h-1zM2,9h1v1h-1zM3,9h1v1h-1zM4,9h1v1h-1zM7,9h1v1h-1zM9,9h1v1h-1zM16,9h1v1h-1zM17,9h1v1h-1zM19,9h1v1h-1zM23,9h1v1h-1zM0,10h1v1h-1zM3,10h1v1h-1zM6,10h1v1h-1zM7,10h1v1h-1zM8,10h1v1h-1zM9,10h1v1h-1zM13,10h1v1h-1zM14,10h1v1h-1zM15,10h1v1h-1zM18,10h1v1h-1zM19,10h1v1h-1zM20,10h1v1h-1zM21,10h1v1h-1zM23,10h1v1h-1zM24,10h1v1h-1zM1,11h1v1h-1zM2,11h1v1h-1zM5,11h1v1h-1zM7,11h1v1h-1zM8,11h1v1h-1zM12,11h1v1h-1zM14,11h1v1h-1zM16,11h1v1h-1zM18,11h1v1h-1zM24,11h1v1h-1zM3,12h1v1h-1zM4,12h1v1h-1zM6,12h1v1h-1zM7,12h1v1h-1zM9,12h1v1h-1zM10,12h1v1h-1zM11,12h1v1h-1zM13,12h1v1h-1zM14,12h1v1h-1zM17,12h1v1h-1zM18,12h1v1h-1zM19,12h1v1h-1zM20,12h1v1h-1zM22,12h1v1h-1zM23,12h1v1h-1zM24,12h1v1h-1zM0,13h1v1h-1zM1,13h1v1h-1zM3,13h1v1h-1zM4,13h1v1h-1zM12,13h1v1h-1zM19,13h1v1h-1zM21,13h1v1h-1zM23,13h1v1h-1zM0,14h1v1h-1zM2,14h1v1h-1zM4,14h1v1h-1zM6,14h1v1h-1zM7,14h1v1h-1zM8,14h1v1h-1zM9,14h1v1h-1zM14,14h1v1h-1zM15,14h1v1h-1zM16,14h1v1h-1zM18,14h1v1h-1zM19,14h1v1h-1zM20,14h1v1h-1zM21,14h1v1h-1zM23,14h1v1h-1zM24,14h1v1h-1zM0,15h1v1h-1zM4,15h1v1h-1zM7,15h1v1h-1zM9,15h1v1h-1zM12,15h1v1h-1zM14,15h1v1h-1zM16,15h1v1h-1zM17,15h1v1h-1zM18,15h1v1h-1zM19,15h1v1h-1zM20,15h1v1h-1zM24,15h1v1h-1zM0,16h1v1h-1zM2,16h1v1h-1zM3,16h1v1h-1zM6,16h1v1h-1zM7,16h1v1h-1zM10,16h1v1h-1zM12,16h1v1h-1zM13,16h1v1h-1zM14,16h1v1h-1zM15,16h1v1h-1zM16,16h1v1h-1zM17,16h1v1h-1zM18,16h1v1h-1zM19,16h1v1h-1zM20,16h1v1h-1zM22,16h1v1h-1zM8,17h1v1h-1zM9,17h1v1h-1zM10,17h1v1h-1zM14,17h1v1h-1zM16,17h1v1h-1zM20,17h1v1h-1zM21,17h1v1h-1zM0,18h1v1h-1zM1,18h1v1h-1zM2,18h1v1h-1zM3,18h1v1h-1zM4,18h1v1h-1zM5,18h1v1h-1zM6,18h1v1h-1zM9,18h1v1h-1zM11,18h1v1h-1zM12,18h1v1h-1zM14,18h1v1h-1zM16,18h1v1h-1zM18,18h1v1h-1zM20,18h1v1h-1zM22,18h1v1h-1zM23,18h1v1h-1zM24,18h1v1h-1zM0,19h1v1h-1zM6,19h1v1h-1zM8,19h1v1h-1zM10,19h1v1h-1zM11,19h1v1h-1zM15,19h1v1h-1zM16,19h1v1h-1zM20,19h1v1h-1zM21,19h1v1h-1zM0,20h1v1h-1zM2,20h1v1h-1zM3,20h1v1h-1zM4,20h1v1h-1zM6,20h1v1h-1zM8,20h1v1h-1zM9,20h1v1h-1zM11,20h1v1h-1zM15,20h1v1h-1zM16,20h1v1h-1zM17,20h1v1h-1zM18,20h1v1h-1zM19,20h1v1h-1zM20,20h1v1h-1zM22,20h1v1h-1zM23,20h1v1h-1zM24,20h1v1h-1zM0,21h1v1h-1zM2,21h1v1h-1zM3,21h1v1h-1zM4,21h1v1h-1zM6,21h1v1h-1zM8,21h1v1h-1zM10,21h1v1h-1zM12,21h1v1h-1zM13,21h1v1h-1zM16,21h1v1h-1zM17,21h1v1h-1zM18,21h1v1h-1zM20,21h1v1h-1zM21,21h1v1h-1zM22,21h1v1h-1zM23,21h1v1h-1zM24,21h1v1h-1zM0,22h1v1h-1zM2,22h1v1h-1zM3,22h1v1h-1zM4,22h1v1h-1zM6,22h1v1h-1zM8,22h1v1h-1zM13,22h1v1h-1zM14,22h1v1h-1zM15,22h1v1h-1zM16,22h1v1h-1zM17,22h1v1h-1zM21,22h1v1h-1zM22,22h1v1h-1zM24,22h1v1h-1zM0,23h1v1h-1zM6,23h1v1h-1zM12,23h1v1h-1zM13,23h1v1h-1zM15,23h1v1h-1zM16,23h1v1h-1zM18,23h1v1h-1zM19,23h1v1h-1zM20,23h1v1h-1zM21,23h1v1h-1zM24,23h1v1h-1zM0,24h1v1h-1zM1,24h1v1h-1zM2,24h1v1h-1zM3,24h1v1h-1zM4,24h1v1h-1zM5,24h1v1h-1zM6,24h1v1h-1zM8,24h1v1h-1zM12,24h1v1h-1zM14,24h1v1h-1zM19,24h1v1h-1zM20,24h1v1h-1zM21,24h1v1h-1zM22,24h1v1h-1zM23,24h1v1h-1zM24,24h1v1h-1z" fill="#111"/></svg>
`;
