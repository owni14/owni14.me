import Card from "@app/components/card/page";
import { PROJECTS } from "./consts";
import "./styles.scss";

const Projects = () => {
    return (
        <div id="projects">
            {PROJECTS.map(project => (
                <Card src={project.src} alt={project.alt} />
            ))}
        </div>
    );
};

export default Projects;
