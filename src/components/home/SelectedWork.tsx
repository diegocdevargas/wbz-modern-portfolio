import { featuredProjects } from "@/content/projects";
import { selectedWork } from "@/content/home";
import { MonoButton } from "@/components/ui/MonoButton";
import { ProjectCard } from "@/components/work/ProjectCard";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  return (
    <section className={styles.section} aria-labelledby="selected-work-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className="label">{selectedWork.eyebrow}</p>
            <h2 id="selected-work-title" className={styles.title}>
              {selectedWork.title.text} <span className="accent-indigo">{selectedWork.title.accent}</span>
            </h2>
          </div>
          <MonoButton href={selectedWork.cta.href}>{selectedWork.cta.label}</MonoButton>
        </div>
        <ul className={styles.grid}>
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                project={project}
                sizes="(min-width: 1440px) 614px, (min-width: 810px) 44vw, 90vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
