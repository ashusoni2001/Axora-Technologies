import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SpotCard from "../components/ui/SpotCard";
import StatBand from "../components/ui/StatBand";
import ProjectModal from "../components/ui/ProjectModal";
import SectorPlaybook from "../components/ui/SectorPlaybook";
import Icon from "../components/ui/Icon";
import { projects } from "../data/projects";
import { sectors } from "../data/sectors";
import { revealVariants, viewportConfig, revealTransition } from "../lib/animations";

export default function Work() {
  const [active, setActive] = useState(null);
  const [sector, setSector] = useState(null); // index into sectors; null = Featured
  const [auto, setAuto] = useState(true); // 5s chip rotation; false forever once the visitor picks
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  // Rotate only while the section is actually on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance Featured → each sector → Featured… every 5s. Paused while the
  // visitor hovers or keyboard-focuses anywhere in the section; disabled under
  // prefers-reduced-motion; skips ticks in hidden tabs.
  useEffect(() => {
    if (!auto || hovered || focused || !inView || reduce) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      setSector((prev) =>
        prev === null ? 0 : prev + 1 >= sectors.length ? null : prev + 1
      );
    }, 5000);
    return () => clearInterval(t);
  }, [auto, hovered, focused, inView, reduce]);

  // Any deliberate engagement ends the tour: picking a chip, opening a case
  // study, or a touch inside the section (touch devices can't hover-pause).
  const pick = (i) => { setAuto(false); setSector(i); };
  const openCase = (p) => { setAuto(false); setActive(p); };

  const current = sector === null ? null : sectors[sector];
  const visible = projects.filter((p) => !current || current.proof[p.id]);
  // Columns follow the visible count so sector views don't leave dead columns.
  const nClass = visible.length === 2 ? " n2" : visible.length === 1 ? " n1" : "";

  return (
    <section
      className="section"
      id="work"
      ref={sectionRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      onPointerDown={(e) => {
        if (e.pointerType === "touch") setAuto(false);
      }}
    >
      <div className="wrap">
        <SectionHeading
          kicker="Featured work"
          title="Builds that prove the practice."
          accent="prove the practice."
          sub="Pick your industry — we'll show you the work and the problems we'd attack for you."
        />

        <Reveal className="schips" role="group" aria-label="Show work by industry">
          <button
            className={`schip${sector === null ? " on" : ""}`}
            aria-pressed={sector === null}
            onClick={() => pick(null)}
          >
            Featured
          </button>
          {sectors.map((s, i) => (
            <button
              key={s.name}
              className={`schip${sector === i ? " on" : ""}`}
              aria-pressed={sector === i}
              onClick={() => pick(i)}
            >
              {s.name}
            </button>
          ))}
        </Reveal>

        <div className={`pgrid${nClass}`}>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const openable = !!p.caseStudy;
              const angle = current?.proof[p.id];
              return (
                <motion.div
                  key={p.id}
                  layout={!reduce}
                  variants={reduce ? undefined : revealVariants.up}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportConfig}
                  transition={revealTransition(i * 90)}
                  exit={
                    reduce
                      ? { opacity: 0, transition: { duration: 0 } }
                      : { opacity: 0, scale: 0.96, transition: { duration: 0.28 } }
                  }
                >
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

                    {angle && (
                      <div className="angle">
                        <span className="lbl">Why it matters here</span>
                        <p>{angle}</p>
                      </div>
                    )}

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
                          <button className="plink plink-glass" onClick={() => openCase(p)}>
                            Case study <Icon name="arrowRight" size={14} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Full-card click target (sits behind the explicit links). */}
                    {openable && (
                      <button
                        className="pcard-hit"
                        onClick={() => openCase(p)}
                        aria-label={`Open ${p.title} case study`}
                        tabIndex={-1}
                      />
                    )}
                  </SpotCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {current && <SectorPlaybook key={current.name} sector={current} />}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
