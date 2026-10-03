import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";
import { MonoButton } from "@/components/ui/MonoButton";
import { RichText } from "@/components/ui/RichText";
import styles from "./page.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.subtitle}. ${project.challenge.split(". ")[0]}.`,
    openGraph: { images: [{ url: project.cover.src, width: project.cover.width, height: project.cover.height }] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  const meta = [
    { label: "Client", value: project.client },
    { label: "Year", value: String(project.year) },
    { label: "Discipline", value: project.discipline },
    { label: "Services", value: project.services.join(", ") },
  ];

  const story = [
    { heading: "O desafio", text: project.challenge },
    { heading: "Nossa abordagem", text: project.approach },
    { heading: "O resultado", text: project.result },
  ];

  return (
    <article className={styles.page}>
      <header className="container">
        <Link href="/cases" className={styles.back}>
          ← Todos os trabalhos
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>

        <dl className={styles.meta}>
          {meta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <dt className={styles.metaLabel}>{m.label}</dt>
              <dd className={styles.metaValue}>{m.value}</dd>
            </div>
          ))}
        </dl>

        {project.url && (
          <MonoButton href={project.url} className={styles.visit}>
            Visitar o site
          </MonoButton>
        )}
      </header>

      <div className={`container ${styles.heroWrap}`}>
        <div className={styles.hero}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="(min-width: 1440px) 1376px, 100vw"
            className={styles.cover}
          />
        </div>
      </div>

      <section className={`container ${styles.story}`} aria-labelledby="case-study-label">
        <h2 id="case-study-label" className={styles.storyLabel}>
          (Case study)
        </h2>
        <div className={styles.storyBody}>
          {story.map((s) => (
            <div key={s.heading} className={styles.storyBlock}>
              <h3 className={styles.storyHeading}>{s.heading}</h3>
              <p>
                <RichText text={s.text} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {project.metrics.length > 0 && (
        <section className={`container ${styles.metrics}`} aria-label="Resultados">
          <ul className={styles.metricList}>
            {project.metrics.map((m) => (
              <li key={m.label} className={styles.metric}>
                <p className={styles.metricValue}>{m.value}</p>
                <p className={styles.metricLabel}>{m.label}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className={`container ${styles.gallery}`} aria-label="Galeria">
          <ul className={styles.galleryList}>
            {project.gallery.map((img) => (
              <li key={img.src} className={styles.galleryItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1440px) 437px, (min-width: 810px) 31vw, 92vw"
                  className={styles.galleryImage}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className={styles.next} aria-label="Próximo projeto">
        <Link href={`/cases/${next.slug}`} className={`container ${styles.nextLink}`}>
          <span className={styles.nextLabel}>(Next project)</span>
          <span className={styles.nextRow}>
            <span className={styles.nextTitle}>{next.title}</span>
            <Icon name="arrowUpRight" size={72} className={styles.nextArrow} />
          </span>
        </Link>
      </nav>
    </article>
  );
}
