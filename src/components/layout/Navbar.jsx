import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Brand from "../ui/Logo";
import Icon from "../ui/Icon";
import { navLinks } from "../../data/navigation";
import { useNavChrome } from "../../hooks/useNavChrome";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Navbar() {
  const { solid, hidden } = useNavChrome();
  const active = useScrollSpy(["expertise", "work", "about", "contact"]);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <>
      {/* SVG turbulence + displacement that warps the backdrop behind the nav —
          real "liquid glass" refraction (Chromium; degrades to plain glass elsewhere). */}
      <svg className="liquid-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="liquid-glass" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves="2" seed="7" result="noise">
            {!reduce && (
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.009 0.009;0.012 0.007;0.008 0.011;0.009 0.009"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="1.1" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="42" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <nav className={`nav ${solid ? "solid" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="nav-inner">
          <Brand />
          <div className="nav-links">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
              >
                {l.label}
                <span className="ind" />
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Get in touch <Icon name="arrowRight" size={16} />
          </a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
            <Icon name="menu" size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mmenu">
          <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
            <Icon name="x" size={26} />
          </button>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 18 }}
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  );
}
