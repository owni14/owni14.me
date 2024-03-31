"use client";
import Card from "@app/_components/_card";
import { getProjects } from "./consts";
import Category from "@app/_components/_category";
import { useTranslation } from "react-i18next";
import { NAMESPACE } from "@app/consts";
import "./styles.scss";

const Project = () => {
    const { t } = useTranslation(NAMESPACE.PROJECT);
    const sortedProjects = [...getProjects(t)].reverse();

    return (
        <section id="project">
            <Category category="Project" />
            <p className="title">{t("title")}</p>
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

export default Project;
