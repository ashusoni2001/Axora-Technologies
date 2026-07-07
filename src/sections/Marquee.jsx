import { marqueeItems } from "../data/expertise";

/** Infinite scrolling ribbon of curated capabilities (doubled for a seamless loop). */
export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span className="marquee-item" key={i}>
            <span className="d" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
