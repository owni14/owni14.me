import Card from "@app/components/card/page";
import { PROJECTS } from "./consts";
import Category from "@app/components/category/page";
import "./styles.scss";

const Projects = () => {
    return (
        <section id="projects">
            <Category category="Projects" />
            <p className="title">진행한 프로젝트</p>
            <div className="card-wrapper">
                {PROJECTS?.map(project => (
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
