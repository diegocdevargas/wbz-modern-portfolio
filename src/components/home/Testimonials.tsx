import Image from "next/image";
import { testimonials, testimonialsRating } from "@/content/testimonials";
import { testimonialsSection } from "@/content/home";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.head}>
        <p className="eyebrow">{testimonialsRating}</p>
        <h2 id="testimonials-title" className={styles.title}>
          {testimonialsSection.title.text} <span className="accent">{testimonialsSection.title.accent}</span>
        </h2>
      </div>
      <Marquee className={styles.marquee} label="Depoimentos" speed={45}>
        {testimonials.map((t) => (
          <li key={t.name} className={styles.card}>
            <figure>
              <figcaption className={styles.person}>
                {t.avatar && (
                  <Image src={t.avatar} alt="" width={50} height={50} className={styles.avatar} />
                )}
                <span className={styles.name}>{t.name}</span>
              </figcaption>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <span className={styles.mark} aria-hidden="true">
                ❜❜
              </span>
            </figure>
          </li>
        ))}
      </Marquee>
    </section>
  );
}
