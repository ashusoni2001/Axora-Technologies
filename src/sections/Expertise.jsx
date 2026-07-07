import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { domains } from "../data/expertise";

export default function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="wrap">
        <SectionHeading
          kicker="What we do"
          title="Core expertise, engineered deep."
          accent="expertise"
          sub="Five domains across AI, data and software — delivered as one integrated engineering practice."
        />

        <div className="dgrid">
          {domains.map((d, i) => (
            <Reveal
              delay={i * 70}
              key={d.title}
              className={`xtile dcard${d.anchor ? " anchor" : ""}`}
            >
              <div className="dcard-main">
                <div className="dcard-head">
                  <div className="ic">
                    <Icon name={d.icon} size={22} />
                  </div>
                  <h4>{d.title}</h4>
                </div>
                <p>{d.desc}</p>
              </div>
              <div className="dcard-chips">
                {d.chips.map((c) => (
                  <span className="tag" key={c}>{c}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
