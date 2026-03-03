import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  label,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return controls.stop;
  }, [isInView, end, duration, motionValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {display}
        {suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
