# Spark7 — Website Asset Bundle

Neural Storm design system. Drop this folder into a Claude Code project and start building.

---

## Project Structure

```
spark7/
├── index.html                  ← Homepage (Neural Storm hero)
├── assets/
│   └── spark7_logo.png         ← Brand logo
├── css/
│   ├── tokens.css              ← Design tokens (colors, fonts, spacing)
│   ├── global.css              ← Reset, base styles, utility classes
│   ├── nav.css                 ← Navigation component
│   ├── buttons.css             ← Button variants + store buttons + QR
│   ├── hero.css                ← Hero section styles
│   └── pages.css               ← Inner page styles (cards, steps, form, stats)
├── js/
│   ├── neuron-canvas.js        ← Animated neuron background engine
│   ├── nav.js                  ← Nav interactivity (mobile drawer, active links)
│   ├── scroll-reveal.js        ← Intersection Observer scroll animations
│   └── partials.js             ← Shared nav + footer HTML injection
└── pages/
    ├── how-to-play.html
    ├── about.html
    ├── tips.html
    ├── brain-benefits.html
    └── contact.html
```

---

## Quick Start

### Run locally
```bash
# Any static server works. Recommended:
npx serve .

# Or with Python:
python3 -m http.server 8080
```
Open `http://localhost:8080`

> **Important:** The JS modules use ES module `import/export`. Open via a server — not `file://` — or imports will be blocked by CORS.

---

## Typography

| Role     | Font       | Google Fonts import                                     |
|----------|------------|---------------------------------------------------------|
| Headings / Nav | **Audiowide** | `family=Audiowide` |
| Body / UI text | **Michroma** | `family=Michroma`  |

Both are loaded via the Google Fonts `<link>` in every HTML file. No local font files needed.

CSS variables:
```css
--font-heading: 'Audiowide', sans-serif;
--font-body:    'Michroma',  sans-serif;
```

---

## Color Palette

| Token           | Hex       | Usage                        |
|-----------------|-----------|------------------------------|
| `--s7-primary`  | `#1b489e` | Primary CTA, step numbers    |
| `--s7-red`      | `#ff0000` | About CTA, accent bursts     |
| `--s7-cyan`     | `#24bdd8` | Main accent, links, glows    |
| `--s7-purple`   | `#7d4dad` | Tips CTA, alternate nodes    |
| `--s7-rose`     | `#b52d57` | Contact CTA                  |
| `--s7-green`    | `#6bc841` | Brain Benefits CTA           |

---

## Neuron Canvas

Every page uses the animated neuron background. It's controlled via `data-` attributes on the `<canvas>` element:

```html
<canvas
  class="neuron-canvas"
  data-neuron-canvas
  data-node-color="#24bdd8"
  data-edge-color="rgba(36,189,216,"
  data-pulse-color="#1b489e"
  data-node-count="80"
  data-max-dist="165"
  data-speed="0.4"
  data-glow="true"
></canvas>
```

Then in your script:
```js
import { autoInitNeuronCanvases } from './js/neuron-canvas.js';
autoInitNeuronCanvases();
```

Or imperatively:
```js
import { initNeuronCanvas } from './js/neuron-canvas.js';
const canvas = document.getElementById('myCanvas');
const destroy = initNeuronCanvas(canvas, { nodeCount: 60, speed: 0.3 });
// Call destroy() to stop the animation
```

Each inner page uses a different accent color for its neuron canvas — this is set via `data-node-color` and `data-edge-color` on the canvas element.

---

## Button Variants

```html
<!-- Gradient fills -->
<a href="#" class="s7-btn s7-btn--primary">How to Play</a>
<a href="#" class="s7-btn s7-btn--red">About</a>
<a href="#" class="s7-btn s7-btn--purple">Tips</a>
<a href="#" class="s7-btn s7-btn--green">Brain Benefits</a>
<a href="#" class="s7-btn s7-btn--rose">Contact</a>

<!-- Outline ghost -->
<a href="#" class="s7-btn s7-btn--ghost">Learn More</a>

<!-- App store (with icon + two-line text) -->
<a href="#" class="s7-btn s7-btn--store">
  <span class="store-icon">🍎</span>
  <span class="store-text">
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>
```

---

## Scroll Reveal

Add `class="reveal"` to any element. Optionally add `data-delay="ms"` for staggered entrance:

```html
<div class="reveal" data-delay="0">First</div>
<div class="reveal" data-delay="100">Second</div>
<div class="reveal" data-delay="200">Third</div>
```

Call once per page:
```js
import { initScrollReveal } from './js/scroll-reveal.js';
initScrollReveal();
```

---

## Nav + Footer Injection

Both nav and footer are injected from `partials.js` — edit them once, they update everywhere.

Place placeholders in your HTML:
```html
<div id="s7-nav-placeholder"></div>
<!-- ... page content ... -->
<div id="s7-footer-placeholder"></div>
```

Then in your script block:
```js
import { injectPartials } from './js/partials.js';
import { initNav }        from './js/nav.js';
injectPartials();  // must come first
initNav();         // then wire up interactivity
```

---

## YouTube Video Embed

In `index.html`, find the placeholder comment and replace with a real embed:

```html
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
  title="Spark7 — Game Trailer"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

---

## QR Code

The QR codes are placeholder SVG shapes. Replace them at launch:

1. Generate a real QR code pointing to your App Store / Play Store URL
2. Export as SVG or PNG
3. Swap into `.s7-qr` containers in `index.html` and `partials.js`

---

## Page Links

The inner pages in `/pages/` reference `../css/` and `../js/` with relative paths. If you move them to the root, update those paths to `./css/` and `./js/`.

---

## Claude Code Tips

Ask Claude Code to:
- **"Add a features section below the hero"** — reference `s7-card`, `s7-grid`, and the token variables
- **"Make the nav sticky with a blur effect on scroll"** — already handled in `nav.js`
- **"Add a modal for the video"** — the `.s7-hero__video-frame` is the target
- **"Create a pricing/subscription page"** — use `pages.css` components as the foundation
- **"Wire up the contact form to Formspree"** — see `handleSubmit()` in `contact.html`

All design tokens are in `css/tokens.css` — always reference those variables rather than hardcoding hex values.
