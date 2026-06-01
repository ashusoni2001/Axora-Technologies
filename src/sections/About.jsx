import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { aboutCopy, differentiators } from "../data/about";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeading
          kicker="Why Axora"
          title="Applied AI, built like real software."
          accent="real software."
        />

        <div className="about-lead">
          {aboutCopy.map((p, i) => (
            <Reveal
              delay={i * 90}
              as="p"
              key={i}
              className="lead"
              style={i ? { color: "var(--ink-2)" } : undefined}
            >
              {p}
            </Reveal>
          ))}
        </div>

        <div className="diff-grid">
          {differentiators.map((d, i) => (
            <Reveal delay={i * 80} key={d.text}>
              <div className="card diff-card">
                <span className="ic">
                  <Icon name={d.icon} size={22} />
                </span>
                <span>{d.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
