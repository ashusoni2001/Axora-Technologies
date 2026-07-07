import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Animated architecture diagram.
 *   variant "linear" — a left-to-right signal chain. A highlight cycles
 *     through the stages to imply live flow. Optional `modes` renders a
 *     segmented toggle that swaps the whole chain (e.g. Online/Offline).
 *   variant "agent" — channels fan into a pulsing agent core, tools fan
 *     out, backends sit below.
 * Honours prefers-reduced-motion: no cycling, static diagram.
 * ------------------------------------------------------------------ */

function useCycle(length, ms, enabled) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!enabled || length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % length), ms);
    return () => clearInterval(id);
  }, [length, ms, enabled]);
  return enabled ? i : -1;
}

function LinearFlow({ stages, animate }) {
  const active = useCycle(stages.length, 850, animate);
  return (
    <div className="flow flow-linear" role="img" aria-label="Processing pipeline">
      {stages.map((s, i) => (
        <div className="flow-step" key={s.name}>
          <div className={`flow-node ${s.kind || ""} ${i === active ? "on" : ""}`}>
            <span className="fn-name">{s.name}</span>
            {s.sub && <span className="fn-sub">{s.sub}</span>}
          </div>
          {i < stages.length - 1 && (
            <span className={`flow-arrow ${animate ? "live" : ""}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function AgentFlow({ channels, core, tools, backends, animate }) {
  const activeCh = useCycle(channels.length, 1100, animate);
  const activeTool = useCycle(tools.length, 700, animate);
  return (
    <div className="flow flow-agent" role="img" aria-label="Agent architecture">
      <div className="fa-col fa-channels">
        <span className="fa-cap">Channels</span>
        {channels.map((c, i) => (
          <div className={`fa-chip ${i === activeCh ? "on" : ""}`} key={c}>{c}</div>
        ))}
      </div>

      <div className="fa-core-wrap">
        <span className="fa-rail in" aria-hidden="true" />
        <div className={`fa-core ${animate ? "live" : ""}`}>
          <span className="fa-ring" aria-hidden="true" />
          <span className="fa-core-name">{core.name}</span>
          {core.sub && <span className="fa-core-sub">{core.sub}</span>}
        </div>
        <span className="fa-rail out" aria-hidden="true" />
      </div>

      <div className="fa-col fa-tools">
        <span className="fa-cap">Tools</span>
        {tools.map((t, i) => (
          <div className={`fa-chip mono ${i === activeTool ? "on" : ""}`} key={t}>{t}</div>
        ))}
      </div>

      {backends?.length > 0 && (
        <div className="fa-backends">
          <span className="fa-cap">Runs on</span>
          <div className="fa-backend-row">
            {backends.map((b) => (
              <span className="fa-backend" key={b}>{b}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PipelineFlow({ pipeline }) {
  const reduce = useReducedMotion();
  const animate = !reduce;
  const { variant } = pipeline;

  const modeKeys = pipeline.modes ? Object.keys(pipeline.modes) : null;
  const [mode, setMode] = useState(modeKeys ? modeKeys[0] : null);

  if (variant === "agent") {
    return <AgentFlow {...pipeline} animate={animate} />;
  }

  // linear
  const stages = modeKeys ? pipeline.modes[mode] : pipeline.stages;
  return (
    <div className="flow-shell">
      {modeKeys && (
        <div className="flow-modes" role="tablist" aria-label="Pipeline mode">
          {modeKeys.map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={mode === k}
              className={`flow-mode ${mode === k ? "on" : ""}`}
              onClick={() => setMode(k)}
            >
              {k}
            </button>
          ))}
        </div>
      )}
      <LinearFlow stages={stages} animate={animate} />
      {pipeline.note && <p className="flow-note">{pipeline.note}</p>}
    </div>
  );
}
