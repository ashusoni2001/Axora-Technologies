import { useState, useEffect, Fragment } from "react";
import Button from "../components/ui/Button";
import { rotatingWords, heroSubtitle, heroMeta } from "../data/hero";

export default function Hero() {
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWi((p) => (p + 1) % rotatingWords.length),
      2600
    );
    return () => clearInterval(t);
  }, []);

  // Longest word acts as an invisible spacer so the line never reflows.
  const spacer = rotatingWords.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <header className="hero" id="top">
      <div className="hero-orb a" />
      <div className="hero-orb b" />

      <div className="hero-inner">
        <h1 className="h-display hero-h1">
          <span className="hl-1">We build</span>
          <br />
          <span className="rot">
            {rotatingWords.map((w, i) => (
              <span
                key={w}
                className="grad rot-word"
                style={{
                  opacity: i === wi ? 1 : 0,
                  transform: i === wi ? "translateY(0)" : "translateY(16px)",
                  filter: i === wi ? "blur(0)" : "blur(6px)",
                  transition:
                    "opacity .5s var(--ease), transform .5s var(--ease), filter .5s var(--ease)",
                }}
              >
                {w}
              </span>
            ))}
            <span className="rot-word" style={{ visibility: "hidden" }}>
              {spacer}
            </span>
          </span>
          <br />
          <span className="hl-2">systems for modern business.</span>
        </h1>

        <p className="lead hero-sub">{heroSubtitle}</p>

        <div className="hero-cta">
          <Button href="#contact" icon="arrowRight">
            Start a project
          </Button>
          <Button href="#expertise" variant="ghost">
            Explore our expertise
          </Button>
        </div>

        <div className="hero-meta">
          {heroMeta.map((m, i) => (
            <Fragment key={m.label}>
              {i > 0 && <span className="m-div" />}
              <div>
                <div className="m-num grad">{m.num}</div>
                <div className="m-lab">{m.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
