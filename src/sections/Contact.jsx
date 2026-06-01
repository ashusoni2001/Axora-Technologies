import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import { contact } from "../data/contact";

export default function Contact() {
  const mailto = `mailto:${contact.email}?subject=New%20Project%20Inquiry&body=Hi%20Axora%20Team%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project.%0A%0A`;

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal variant="scale" className="contact-card">
          <span className="kicker" style={{ justifyContent: "center" }}>
            <span className="dot" /> Let's talk
          </span>
          <h2>
            Let's build something <span className="grad">extraordinary.</span>
          </h2>
          <p className="lead">
            Ready to turn an idea into a production AI or data system? Tell us what
            you're building — we'll bring the engineering.
          </p>
          <div className="contact-cta">
            <Button href={mailto} icon="arrowRight">
              Start a project
            </Button>
            <Button href="#work" variant="ghost">
              View our work
            </Button>
          </div>
          <div className="contact-info">
            <a className="cinfo" href={`mailto:${contact.email}`}>
              <Icon name="mail" size={17} /> {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
