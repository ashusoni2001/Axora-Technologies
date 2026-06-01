/* Framer Motion presets — the scroll-reveal language for the site.
   Mirrors the reference's IntersectionObserver reveals, but declarative. */

export const EASE = [0.22, 1, 0.36, 1];

export const viewportConfig = { once: true, amount: 0.18, margin: "0px 0px -8% 0px" };

export const revealVariants = {
  up: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -34 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 34 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
};

/** Per-item reveal timing. `delay` is accepted in milliseconds to match the data. */
export const revealTransition = (delayMs = 0) => ({
  duration: 0.8,
  ease: EASE,
  delay: delayMs / 1000,
});
