import { cta } from "@/content/home";
import { site } from "@/content/site";
import { MonoButton } from "@/components/ui/MonoButton";
import styles from "./CtaBand.module.css";

export function CtaBand() {
  return (
    <section id="cta-section" className={styles.band} aria-labelledby="cta-title">
      <div className={styles.inner}>
        <p className={`label ${styles.eyebrow}`}>{cta.eyebrow}</p>
        <h2 id="cta-title" className={styles.title}>
          {cta.title.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </h2>
        <div className={styles.actions}>
          <MonoButton href={site.startProjectHref} variant="dark">
            {cta.button}
          </MonoButton>
          <a className={styles.mail} href={`mailto:${site.email}`}>
            {cta.mailLead} {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
