import { useState } from "react";
import {
  BASES,
  ACCENTS,
  THEMES,
  applyTheme,
  getSavedTheme,
} from "../../lib/theme";

/** Floating palette picker: 14 curated presets + full base/accent grids. */
export default function ThemeSwitcher() {
  const [sel, setSel] = useState(getSavedTheme);
  const [open, setOpen] = useState(false);

  const pick = (base, accent) => {
    const next = { base: base || sel.base, accent: accent || sel.accent };
    applyTheme(next.base, next.accent);
    setSel(next);
  };

  const preset = THEMES.find((t) => t.base === sel.base && t.accent === sel.accent);
  const label = preset
    ? preset.name
    : `${BASES[sel.base].name} · ${ACCENTS[sel.accent].name}`;

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 78 }}
        />
      )}

      <button
        className="theme-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change theme"
      >
        <span className="sw" />
        <span className="lbl">{label}</span>
      </button>

      {open && (
        <div className="theme-pop">
          <div className="grp">
            <h5>Preset themes</h5>
            <div className="theme-list">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`theme-opt ${
                    sel.base === t.base && sel.accent === t.accent ? "sel" : ""
                  }`}
                  onClick={() => pick(t.base, t.accent)}
                >
                  <span className="chips">
                    <i style={{ background: BASES[t.base].swatch }} />
                    <i style={{ background: ACCENTS[t.accent].v["--accent"] }} />
                  </span>
                  <span className="nm">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grp">
            <h5>Base surface</h5>
            <div className="sw-row">
              {Object.entries(BASES).map(([id, b]) => (
                <button
                  key={id}
                  className={`sw-btn ${sel.base === id ? "sel" : ""}`}
                  style={{ background: b.swatch }}
                  title={b.name}
                  aria-label={b.name}
                  onClick={() => pick(id, null)}
                />
              ))}
            </div>
          </div>

          <div className="grp">
            <h5>Accent colour</h5>
            <div className="sw-row">
              {Object.entries(ACCENTS).map(([id, a]) => (
                <button
                  key={id}
                  className={`sw-btn ${sel.accent === id ? "sel" : ""}`}
                  style={{ background: a.v["--accent"] }}
                  title={a.name}
                  aria-label={a.name}
                  onClick={() => pick(null, id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
