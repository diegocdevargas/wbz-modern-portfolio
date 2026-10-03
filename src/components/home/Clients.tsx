import { clients } from "@/content/home";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./Clients.module.css";

export function Clients() {
  return (
    <section className={styles.band} aria-labelledby="clients-title">
      <h2 id="clients-title" className={`label ${styles.title}`}>
        {clients.eyebrow}
      </h2>
      <Marquee className={styles.marquee} label="Clientes" speed={28}>
        {clients.logos.map((logo) => (
          <li key={logo.file} className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/clients/${logo.file}.svg`} alt={logo.name} width={240} height={80} />
          </li>
        ))}
      </Marquee>
    </section>
  );
}
