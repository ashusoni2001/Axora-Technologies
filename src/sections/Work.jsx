import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SpotCard from "../components/ui/SpotCard";
import ProjectModal from "../components/ui/ProjectModal";
import Icon from "../components/ui/Icon";
import { projects } from "../data/projects";
import { sectors } from "../data/sectors";
import { revealVariants, viewportConfig, revealTransition } from "../lib/animations";

// Fast id -> project lookup for rendering a sector's card list in a chosen order.
const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

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
  // Featured shows every project (openable case studies). A sector shows all
  // three products, in fit order, each reframed with sector-specific copy.
  const items = current
    ? current.cards.map((c) => ({ p: byId[c.id], desc: c.desc }))
    : projects.map((p) => ({ p, desc: p.desc }));
  // Columns follow the visible count so views don't leave dead columns.
  const nClass = items.length === 2 ? " n2" : items.length === 1 ? " n1" : "";

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
          sub="Pick your industry — we'll show you the builds that fit."
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
            {items.map(({ p, desc }, i) => {
              // Every card with a case study opens the same modal — in Featured
              // and in a sector view (which also keeps the shared CTA below).
              const openable = !!p.caseStudy;
              return (
                <motion.div
                  key={`${sector ?? "featured"}-${p.id}`}
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
                    <p>{desc}</p>

                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="foot">
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

        {current && (
          <div className="sector-cta">
            <a className="btn btn-primary" href="#contact">
              Discuss a {current.name.split(" &")[0].split(" (")[0]} build
              <Icon name="arrowRight" size={16} />
            </a>
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
