import { useEffect, useState } from "react";

/**
 * Tracks which section is in the viewport band and returns its id.
 * The asymmetric rootMargin keeps a section "active" while it occupies
 * the middle of the screen.
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // ids is a stable literal from the caller; spy once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
