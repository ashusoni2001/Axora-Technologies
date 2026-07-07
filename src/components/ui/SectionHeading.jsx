import Reveal from "./Reveal";

/**
 * Centered section header: mono kicker, gradient-accented title, optional lead.
 * `accent` must be a substring of `title` — it's the gradient-highlighted part.
 */
export default function SectionHeading({ kicker, title, accent, sub }) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <div className="sec-head">
      <Reveal>
        <span className="kicker">
          <span className="bar" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={80} as="h2" className="h-section">
        {accent ? (
          <>
            {parts[0]}
            <span className="grad">{accent}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </Reveal>
      {sub && (
        <Reveal delay={150} as="p" className="lead">
          {sub}
        </Reveal>
      )}
    </div>
  );
}
