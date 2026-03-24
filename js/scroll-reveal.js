/**
 * SPARK7 – Scroll Reveal
 * scroll-reveal.js
 *
 * Adds .visible to any element with .reveal when it enters the viewport.
 * Pairs with the .reveal CSS class in global.css.
 *
 * Usage:
 *   import { initScrollReveal } from './scroll-reveal.js';
 *   initScrollReveal();
 *
 * Add to any element:
 *   <div class="reveal">...</div>
 *
 * Optional stagger delay via data attribute:
 *   <div class="reveal" data-delay="200">...</div>
 */

export function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  // Apply data-delay as inline transition-delay
  els.forEach(el => {
    const delay = el.dataset.delay;
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => observer.observe(el));
}
