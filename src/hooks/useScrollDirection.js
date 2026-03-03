import { useState, useEffect, useRef } from "react";

export default function useScrollDirection() {
  const [direction, setDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const prevScroll = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setIsAtTop(y < 20);
      if (Math.abs(y - prevScroll.current) > 5) {
        setDirection(y > prevScroll.current ? "down" : "up");
        prevScroll.current = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, isAtTop };
}
