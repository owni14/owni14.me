import Card from "@app/_components/_card";
import { PROJECTS } from "./consts";
import Category from "@app/_components/_category";
import "./styles.scss";

const Projects = () => {
    const sortedProjects = [...PROJECTS].reverse();

    return (
        <section id="projects">
            <Category category="Projects" />
            <p className="title">진행한 프로젝트</p>
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
