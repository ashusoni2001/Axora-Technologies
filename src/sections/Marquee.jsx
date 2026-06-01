import { clusters } from "../data/expertise";

/** Infinite scrolling ribbon of every discipline (doubled for a seamless loop). */
export default function Marquee() {
  const all = clusters.flatMap((c) => c.items.map((i) => i.title));
  const loop = [...all, ...all];
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
