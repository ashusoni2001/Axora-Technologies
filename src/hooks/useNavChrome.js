import { useEffect, useState } from "react";

/**
 * Navbar chrome state: `solid` once scrolled past the hero lip,
 * `hidden` when scrolling down past a threshold (reveals on scroll up).
 */
export function useNavChrome() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 240 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { solid, hidden };
}
