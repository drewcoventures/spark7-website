/**
 * SPARK7 – Neuron Canvas Engine
 * neuron-canvas.js
 *
 * Draws the animated electrified neuron network background.
 * Call: initNeuronCanvas(canvasElement, options?)
 *
 * Options:
 *   nodeColor   {string}  – node fill color   (default: '#24bdd8')
 *   edgeColor   {string}  – edge base color    (default: 'rgba(36,189,216,')
 *                           must end with a comma — alpha is appended
 *   pulseColor  {string}  – burst node color   (default: '#1b489e')
 *   nodeCount   {number}  – total nodes        (default: 90)
 *   maxDist     {number}  – connection radius  (default: 165)
 *   speed       {number}  – movement speed     (default: 0.4)
 *   glow        {boolean} – radial glow halos  (default: true)
 */

export function initNeuronCanvas(canvas, opts = {}) {
  const cfg = {
    nodeColor:  opts.nodeColor  ?? '#24bdd8',
    edgeColor:  opts.edgeColor  ?? 'rgba(36,189,216,',
    pulseColor: opts.pulseColor ?? '#1b489e',
    nodeCount:  opts.nodeCount  ?? 90,
    maxDist:    opts.maxDist    ?? 165,
    speed:      opts.speed      ?? 0.4,
    glow:       opts.glow       ?? true,
  };

  const ctx = canvas.getContext('2d');
  let nodes = [];
  let animId = null;
  let t = 0;

  function createNodes() {
    nodes = [];
    for (let i = 0; i < cfg.nodeCount; i++) {
      nodes.push({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        vx:     (Math.random() - 0.5) * cfg.speed,
        vy:     (Math.random() - 0.5) * cfg.speed,
        r:      Math.random() * 3 + 1.5,
        phase:  Math.random() * Math.PI * 2,
        speed:  Math.random() * 0.018 + 0.006,
        burst:  Math.random() > 0.78,   // special pulsing nodes
      });
    }
  }

  function resize() {
    canvas.width  = canvas.offsetWidth  || canvas.parentElement?.offsetWidth  || window.innerWidth;
    canvas.height = canvas.offsetHeight || canvas.parentElement?.offsetHeight || window.innerHeight;
    createNodes();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.016;

    // ── Move nodes ──
    nodes.forEach(nd => {
      nd.x += nd.vx;
      nd.y += nd.vy;
      if (nd.x < 0 || nd.x > canvas.width)  nd.vx *= -1;
      if (nd.y < 0 || nd.y > canvas.height) nd.vy *= -1;
    });

    // ── Draw edges ──
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= cfg.maxDist) continue;

        const ratio = 1 - dist / cfg.maxDist;
        const pulse = (Math.sin(t * 2.2 + nodes[i].phase) + 1) / 2;
        const alpha = ratio * (0.18 + pulse * 0.28);

        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = cfg.edgeColor + alpha + ')';
        ctx.lineWidth   = 0.8 + ratio * 0.6;
        ctx.stroke();

        // Traveling energy dot
        if (ratio > 0.55 && Math.random() < 0.004) {
          const p   = ((t * 0.35) % 1);
          const dotX = nodes[i].x - dx * p;
          const dotY = nodes[i].y - dy * p;
          ctx.beginPath();
          ctx.arc(dotX, dotY, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = cfg.nodeColor;
          ctx.globalAlpha = 0.85;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    }

    // ── Draw nodes ──
    nodes.forEach(nd => {
      const pf = nd.burst
        ? (Math.sin(t * nd.speed * 60 + nd.phase) + 1) / 2
        : 0.5;
      const r  = nd.r * (0.75 + pf * 0.55);

      // Glow halo
      if (cfg.glow && (nd.burst || r > 3)) {
        const grad = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, r * 5);
        grad.addColorStop(0, cfg.edgeColor + (0.22 * pf) + ')');
        grad.addColorStop(1, cfg.edgeColor + '0)');
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.arc(nd.x, nd.y, r, 0, Math.PI * 2);
      ctx.fillStyle = nd.burst ? cfg.pulseColor : cfg.nodeColor;
      ctx.globalAlpha = 0.6 + pf * 0.4;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animId = requestAnimationFrame(draw);
  }

  // ── Init ──
  resize();
  draw();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement ?? document.body);

  // Return destroy function
  return function destroy() {
    if (animId) cancelAnimationFrame(animId);
    ro.disconnect();
  };
}


/**
 * Convenience: auto-init all canvases with [data-neuron-canvas]
 * and pass data attributes as config:
 *   data-node-color="#24bdd8"
 *   data-edge-color="rgba(36,189,216,"
 *   data-pulse-color="#1b489e"
 *   data-node-count="80"
 *
 * Usage in HTML:
 *   <canvas class="neuron-canvas" data-neuron-canvas></canvas>
 */
export function autoInitNeuronCanvases() {
  document.querySelectorAll('[data-neuron-canvas]').forEach(canvas => {
    const d = canvas.dataset;
    initNeuronCanvas(canvas, {
      nodeColor:  d.nodeColor  || undefined,
      edgeColor:  d.edgeColor  || undefined,
      pulseColor: d.pulseColor || undefined,
      nodeCount:  d.nodeCount  ? parseInt(d.nodeCount)  : undefined,
      maxDist:    d.maxDist    ? parseInt(d.maxDist)    : undefined,
      speed:      d.speed      ? parseFloat(d.speed)   : undefined,
      glow:       d.glow !== undefined ? d.glow !== 'false' : undefined,
    });
  });
}
