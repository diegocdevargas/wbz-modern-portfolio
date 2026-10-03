import { hero, journey, services, techMarks, values } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./SceneTrack.module.css";

/**
 * The early Home experience: one sticky stage (where the WebGL scene mounts in pass 2)
 * shared by four scroll regions. Region heights follow the motion spec (in viewport
 * heights) and keep the live site's anchor ids. Pass 1 shows every block in its fully
 * revealed state; the scroll choreography arrives in pass 3.
 */
export function SceneTrack() {
  return (
    <section className={styles.track} aria-label="Webcraftz">
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.sceneSlot} data-scene-slot />
      </div>

      {/* 0 – 1 vh: hero copy over the scene */}
      <div id="hero-section" className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            {hero.title.map((line) => (
              <span key={line.text} className={line.accent ? "accent" : undefined}>
                {line.text}
              </span>
            ))}
          </h1>
          <p className={styles.heroLead}>{hero.lead}</p>
          <Marquee className={styles.techMarquee} label="Tecnologias" speed={40}>
            {techMarks.map((name) => (
              <li key={name} className={styles.techItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/tech/${name}.svg`} alt="" width={24} height={24} />
              </li>
            ))}
          </Marquee>
        </div>
      </div>

      {/* 1 – 3.6 vh: value propositions, pinned inside */}
      <div id="why-us-showup-trigger" className={styles.valueRegion}>
        <div className={styles.pin}>
          <ul className={styles.valueCards}>
            {values.items.map((item, i) => (
              <li key={item.title} className={styles.valueCard} data-side={item.side} data-index={i}>
                <span className={styles.connector} aria-hidden="true" />
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>
                    <Icon name={item.icon} size={27} className={styles.cardIcon} />
                    {item.title}
                  </h3>
                  <p className={styles.cardBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.valueHeading}>
            <p className="eyebrow">{values.eyebrow}</p>
            <h2 className={styles.valueTitle}>
              {values.title.text} <span className="accent">{values.title.accent}</span>
            </h2>
          </div>
        </div>
      </div>

      {/* 3.6 – 8 vh: services, pinned inside */}
      <div id="features-content-showup-trigger" className={styles.servicesRegion}>
        <div className={styles.pin}>
          <div className={styles.servicesHeading}>
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 className="section-title">
              {services.title.text}
              <br />
              <span className="accent">{services.title.accent}</span>
            </h2>
          </div>
          <ul className={styles.servicesGrid}>
            {services.items.map((item) => (
              <li key={item.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>
                  <Icon name={item.icon} size={24} />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 8 – 10.4 vh: journey timeline scrolls normally over the tilted disk */}
      <div id="journey-content" className={styles.journeyRegion}>
        <h2 className="sr-only">{journey.srTitle}</h2>
        <ol className={styles.journey}>
          {journey.steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.stepLine} aria-hidden="true" />
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  <span className="sr-only">{i + 1}. </span>
                  {step.title}
                </h3>
                <p className={styles.cardBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
