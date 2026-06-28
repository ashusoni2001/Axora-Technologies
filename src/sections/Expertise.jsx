import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { clusters } from "../data/expertise";

export default function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="wrap">
        <SectionHeading
          kicker="What we do"
          title="Core expertise, engineered deep."
          accent="expertise"
          sub="Nine disciplines across AI, data and software — delivered as one integrated engineering practice."
        />

        {clusters.map((cl) => (
          <div className="cluster" key={cl.title}>
            <Reveal className="cluster-head">
              <h3>{cl.title}</h3>
              <div className="tagline">{cl.tagline}</div>
            </Reveal>
            <div className="bento">
              {cl.items.map((it, i) => (
                <Reveal delay={i * 70} key={it.title} className={`xtile sp-${it.span || 2}`}>
                  <div className="ic">
                    <Icon name={it.icon} size={22} />
                  </div>
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
