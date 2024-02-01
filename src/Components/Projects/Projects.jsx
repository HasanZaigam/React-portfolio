import React from "react";

import styles from "./Projects.module.css";

import Project_data from "../../data/Project_data.json";
import { Projectcards } from "./Projectcards";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {Project_data.map((project, id) => {
          return <Projectcards key={id} project={project} />;
        })}
      </div>
    </section>
  );
};