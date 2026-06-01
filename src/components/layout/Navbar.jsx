import { useState } from "react";
import Brand from "../ui/Logo";
import Icon from "../ui/Icon";
import { navLinks } from "../../data/navigation";
import { useNavChrome } from "../../hooks/useNavChrome";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Navbar() {
  const { solid, hidden } = useNavChrome();
  const active = useScrollSpy(["expertise", "about", "work", "contact"]);
  const [open, setOpen] = useState(false);

  return (
    <>
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
