import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SpotCard from "../components/ui/SpotCard";
import Icon from "../components/ui/Icon";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeading
          kicker="Featured work"
          title="Builds that prove the practice."
          accent="prove the practice."
          sub="Proof-of-concept and production-ready systems from our engineering team."
        />

        <div className="pgrid">
          {projects.map((p, i) => (
            <Reveal delay={i * 90} key={p.title}>
              <SpotCard className="pcard">
                <div className="topline" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="foot">
                  <span className={`status ${p.status === "live" ? "live" : ""}`}>
                    <span className="d" />
                    {p.statusLabel}
                  </span>
                  <div className="actions">
                    {p.video && (
                      <a
                        className="plink"
                        href={p.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="play" size={15} fill /> Watch
                      </a>
                    )}
                  </div>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
