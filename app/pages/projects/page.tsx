import Card from "@app/components/card/page";
import { PROJECTS } from "./consts";
import "./styles.scss";

const Projects = () => {
    return (
        <section id="projects">
            {PROJECTS.map(project => (
                <Card src={project.src} alt={project.alt} desc={project.desc} link={project.link} code={project.code} />
            ))}
        </section>
    );
};

export default Projects;
