import { useRef } from "react";

/**
 * Card with a cursor-tracking spotlight (always) and optional 3D tilt.
 * Writes --mx/--my for the CSS spotlight gradient; tilt sets a transform.
 */
export default function SpotCard({ children, tilt = false, className = "", style, ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (tilt) {
      const rx = (py - 0.5) * -6;
      const ry = (px - 0.5) * 6;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    }
  };

  const reset = () => {
    if (tilt && ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`card spot ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
