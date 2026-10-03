"use client";

import { useMemo, useState } from "react";
import { categories, type Category, type Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./WorkGrid.module.css";

type Filter = Category | "all";

export function WorkGrid({ projects, intro }: { projects: Project[]; intro: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter, projects],
  );
  const activeLabel = categories.find((c) => c.id === filter)?.label ?? "";

  return (
    <>
      <div className={`container ${styles.bar}`}>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.chips} role="group" aria-label="Filtrar projetos por categoria">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.chip}
              data-cursor-target
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} projetos em {activeLabel}
      </p>

      <div className={`container ${styles.gridWrap}`}>
        {visible.length > 0 ? (
          <ul className={styles.grid}>
            {visible.map((project, i) => (
              <li key={project.slug}>
                <ProjectCard
                  project={project}
                  priority={i < 2}
                  sizes="(min-width: 1440px) 642px, (min-width: 810px) 46vw, 92vw"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            Nenhum projeto nesta categoria ainda.{" "}
            <button type="button" className={styles.reset} onClick={() => setFilter("all")}>
              Ver todos os trabalhos
            </button>
          </p>
        )}
      </div>
    </>
  );
}
