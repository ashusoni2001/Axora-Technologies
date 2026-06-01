import Brand from "../ui/Logo";
import Icon from "../ui/Icon";
import { navLinks } from "../../data/navigation";
import { contact } from "../../data/contact";
import { usePalette } from "../../hooks/usePalette";

export default function Footer() {
  const { enabled, setEnabled } = usePalette();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Brand markSize={34} />
          <p className="blurb">
            AI engineering & software consultancy. Building intelligent systems for
            modern business.
          </p>
          <div className="footer-soc" style={{ marginTop: 18 }}>
            <span className="off" title="Coming soon" aria-label="GitHub">
              <Icon name="github" size={18} />
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Axora Technologies. All rights reserved.</span>
        <label className="palette-switch" title="Show the live theme palette">
          <span>Theme palette</span>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <span className="ps-track" aria-hidden="true">
            <span className="ps-knob" />
          </span>
        </label>
        <span>Designed & engineered in India.</span>
      </div>
    </footer>
  );
}
