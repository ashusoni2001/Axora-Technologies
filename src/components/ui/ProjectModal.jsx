import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import StatBand from "./StatBand";
import PipelineFlow from "./PipelineFlow";

/* Renders a matrix cell: "yes" / "no" become check / cross glyphs, anything
   else renders as text. The first column is the highlighted (our) column. */
function MatrixCell({ value, primary }) {
  if (value === "yes") return <Icon name="check" size={17} className={`cm-yes ${primary ? "p" : ""}`} />;
  if (value === "no") return <span className="cm-no" aria-label="no">—</span>;
  return <span className={primary ? "cm-text p" : "cm-text"}>{value}</span>;
}

export default function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion();
  const cs = project?.caseStudy;

  // Lock body scroll + Esc to close while open.
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const fade = reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28, scale: 0.985 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 18, scale: 0.99 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <AnimatePresence>
      {project && cs && (
        <motion.div className="pm-overlay" onClick={onClose} {...fade}>
          <motion.div
            className="pm-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            {...rise}
          >
            <button className="pm-close" onClick={onClose} aria-label="Close">
              <Icon name="x" size={20} />
            </button>

            {/* Hero */}
            <header className="pm-hero">
              <span className="kicker"><span className="dot" />{cs.kicker}</span>
              <h2 className="pm-hook">{cs.hook}</h2>
              <p className="pm-summary">{cs.summary}</p>
              {project.metrics && <StatBand items={project.metrics} variant="band" />}
            </header>

            <div className="pm-body">
              {/* Problem */}
              {cs.problem && (
                <section className="pm-sec">
                  <h3 className="pm-h">The problem</h3>
                  <p className="pm-p">{cs.problem}</p>
                </section>
              )}

              {/* Pipeline / architecture */}
              {cs.pipeline && (
                <section className="pm-sec">
                  <h3 className="pm-h">{cs.pipeline.variant === "agent" ? "The architecture" : "The pipeline"}</h3>
                  <PipelineFlow pipeline={cs.pipeline} />
                </section>
              )}

              {/* Highlights */}
              {cs.highlights && (
                <section className="pm-sec">
                  <h3 className="pm-h">What makes it serious</h3>
                  <div className="pm-hl-grid">
                    {cs.highlights.map((h) => (
                      <div className="pm-hl" key={h.title}>
                        <span className="pm-hl-ic"><Icon name={h.icon} size={20} /></span>
                        <div>
                          <h4>{h.title}</h4>
                          <p>{h.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Comparison matrix */}
              {cs.matrix && (
                <section className="pm-sec">
                  <h3 className="pm-h">How it compares</h3>
                  <div className="cmatrix-scroll">
                    <table className="cmatrix" style={{ "--cm-cols": cs.matrix.columns.length }}>
                      <thead>
                        <tr>
                          <th />
                          {cs.matrix.columns.map((c, i) => (
                            <th key={c} className={i === 0 ? "p" : ""}>{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cs.matrix.rows.map((r) => (
                          <tr key={r.feature}>
                            <th scope="row">{r.feature}</th>
                            {r.values.map((v, i) => (
                              <td key={i} className={i === 0 ? "p" : ""}>
                                <MatrixCell value={v} primary={i === 0} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Proof / scale band */}
              {cs.proof && (
                <section className="pm-sec">
                  <h3 className="pm-h">By the numbers</h3>
                  <StatBand items={cs.proof} variant="band" className="proof" />
                </section>
              )}

              {/* Sectors */}
              {cs.sectors && (
                <section className="pm-sec">
                  <h3 className="pm-h">Where it transfers</h3>
                  <div className="pm-chips">
                    {cs.sectors.map((s) => <span className="pm-sector" key={s}>{s}</span>)}
                  </div>
                </section>
              )}

              {/* Tech stack */}
              {cs.stack && (
                <section className="pm-sec">
                  <h3 className="pm-h">Under the hood</h3>
                  <div className="pm-stack">
                    {cs.stack.map((g) => (
                      <div className="pm-stack-grp" key={g.group}>
                        <span className="pm-stack-cap">{g.group}</span>
                        <div className="pm-stack-items">
                          {g.items.map((it) => <span className="tag" key={it}>{it}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="pm-cta">
                <div>
                  <h3>Want a system like this?</h3>
                  <p>We can demo it live, walk the architecture, or scope a build for your use case.</p>
                </div>
                <div className="pm-cta-actions">
                  {project.video && (
                    <a className="btn btn-ghost btn-sm" href={project.video} target="_blank" rel="noopener noreferrer">
                      <Icon name="play" size={15} fill /> Watch demo
                    </a>
                  )}
                  <a className="btn btn-primary btn-sm" href="#contact" onClick={onClose}>
                    Discuss a build <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
