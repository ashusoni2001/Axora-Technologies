import { useEffect, useRef } from "react";
import { useAccents, rgba } from "../../hooks/useAccents";

/**
 * Full-page connected-dot network. Nodes drift, link when close, and pull
 * gently toward the cursor. Colours are read live from the active theme,
 * so the field retints when the palette changes.
 */
export default function NeuralCanvas() {
  const acc = useAccents();
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, raf;
    const mouse = { x: -9999, y: -9999 };
    let nodes = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((w * h) / 9500));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 1.6,
        gold: Math.random() < 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = 150;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const mdx = mouse.x - n.x, mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 160) {
          n.x += (mdx / md) * 0.4;
          n.y += (mdy / md) * 0.4;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < R) {
            const A2 = acc.current;
            const a = (1 - d / R) * (A2.dark ? 0.16 : 0.2);
            ctx.strokeStyle = rgba(A2.a, a);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }
      const A = acc.current;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(n.gold ? A.b : A.a, A.dark ? 0.6 : 0.5);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    draw();
    const onResize = () => build();
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={ref} className="neural-bg" aria-hidden="true" />;
}
