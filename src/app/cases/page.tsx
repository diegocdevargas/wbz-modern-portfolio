import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { WorkGrid } from "@/components/work/WorkGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Sites, apps e identidades feitos para deixar marca, não só para lançar. Cada projeto aqui começou como uma faísca que precisava de direção.",
};

export default function WorkPage() {
  const years = projects.map((p) => p.year);
  return (
    <div className={styles.page}>
      <header className={`container ${styles.head}`}>
        <p className={styles.kicker}>
          Case studies, {Math.min(...years)}–{Math.max(...years)}
        </p>
        <h1 className={styles.title}>
          Em Órbita
          <sup className={styles.count}>({projects.length})</sup>
        </h1>
      </header>
      <WorkGrid
        projects={projects}
        intro="Sites, apps e identidades feitos para deixar marca, não só para lançar. Cada projeto aqui começou como uma faísca que precisava de direção."
      />
    </div>
  );
}
