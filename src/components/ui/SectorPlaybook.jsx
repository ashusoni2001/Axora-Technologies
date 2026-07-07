import Reveal from "./Reveal";
import Icon from "./Icon";

/* Per-sector playbook panel below the Work grid (CHANGE-03). Content is always
   framed as proposed builds, never past work — the honesty rule is enforced by
   the copy in data/sectors.js and the transparency note in the footer. */
export default function SectorPlaybook({ sector }) {
  const short = sector.name.split(" &")[0].split(" (")[0];

  return (
    <Reveal className="card pbk">
      <div className="pbk-head">
        <div>
          <span className="kicker">
            <span className="dot" />
            {sector.name} playbook
          </span>
          <h3 className="pbk-hl">{sector.headline}</h3>
        </div>
        <a href="#contact" className="btn btn-primary btn-sm">
          Discuss a {short} build <Icon name="arrowRight" size={16} />
        </a>
      </div>

      <div className="pbk-block">
        <h4 className="pm-h">Industry pain today</h4>
        <ul className="pbk-pains">
          {sector.challenges.map((c) => (
            <li key={c}>
              <span className="d" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="pbk-block">
        <h4 className="pm-h">What we&rsquo;d build</h4>
        <div className="pbk-cases">
          {sector.useCases.map((u, i) => (
            <div className="pbk-case" key={u.t}>
              <span className="pbk-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h5>{u.t}</h5>
                <p>{u.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pbk-foot">
        <div className="pbk-out">
          <span className="pbk-out-lbl">Outcomes we target</span>
          {sector.outcomes.map((o) => (
            <span className="tag" key={o}>{o}</span>
          ))}
        </div>
        <p className="pbk-note">
          Proposed builds, not past work — we&rsquo;re transparent about that. The
          engineering behind them is proven above.
        </p>
      </div>
    </Reveal>
  );
}
