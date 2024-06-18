"use client";

import { useTranslation } from "react-i18next";

import Card from "@/components/ui/card";

import { NAMESPACE } from "../../_plugins";

import { getProjects } from "./consts";
import "./styles.scss";

const Projects = () => {
  const { t } = useTranslation(NAMESPACE.PROJECTS);
  const sortedProjects = [...getProjects(t)].reverse();

  return (
    <section id="projects">
      <div className="card-wrapper">
        {sortedProjects.map(project => (
          <Card
            key={project.id}
            src={project.src}
            alt={project.alt}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            link={project.link}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
