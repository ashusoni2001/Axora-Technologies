import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SpotCard from "../components/ui/SpotCard";
import StatBand from "../components/ui/StatBand";
import ProjectModal from "../components/ui/ProjectModal";
import Icon from "../components/ui/Icon";
import { projects } from "../data/projects";

export default function Work() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHeading
          kicker="Featured work"
          title="Builds that prove the practice."
          accent="prove the practice."
          sub="Production-grade AI systems from our engineering team — open one to see the architecture, the metrics, and how it was built."
        />

        <div className="pgrid">
          {projects.map((p, i) => {
            const openable = !!p.caseStudy;
            return (
              <Reveal delay={i * 90} key={p.title}>
                <SpotCard className={`pcard ${openable ? "openable" : ""}`}>
                  <div className="topline" />
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  {p.metrics && <StatBand items={p.metrics} variant="card" />}

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
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
                          className="plink ghost"
                          href={p.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="play" size={14} fill /> Watch
                        </a>
                      )}
                      {openable && (
                        <button className="plink plink-glass" onClick={() => setActive(p)}>
                          Case study <Icon name="arrowRight" size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Full-card click target (sits behind the explicit links). */}
                  {openable && (
                    <button
                      className="pcard-hit"
                      onClick={() => setActive(p)}
                      aria-label={`Open ${p.title} case study`}
                      tabIndex={-1}
                    />
                  )}
                </SpotCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
