import Category from "@app/components/category/page";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiStyledcomponents,
    SiHtml5,
    SiCss3,
    SiGit,
    SiGithub,
    SiSlack,
    SiFigma,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

import "./styles.scss";

const Skills = () => {
    return (
        <section id="skills">
            <Category category="Skills" />
            <p className="title">사용할 수 있는 기술 및 도구</p>
            <div className="icon-wrapper">
                <div className="icon-area">
                    <SiHtml5 className="html" />
                    <p>HTML</p>
                </div>
                <div className="icon-area">
                    <SiCss3 className="css" />
                    <p>CSS</p>
                </div>
                <div className="icon-area">
                    <SiJavascript className="javascript" />
                    <p>Javascript</p>
                </div>
                <div className="icon-area">
                    <SiTypescript className="typescript" />
                    <p>Typescript</p>
                </div>
                <div className="icon-area">
                    <SiReact className="react" />
                    <p>React</p>
                </div>
                <div className="icon-area">
                    <SiReact className="react-native" />
                    <p>React Native</p>
                </div>
                <div className="icon-area">
                    <SiNextdotjs className="next" />
                    <p>Next.js</p>
                </div>
                <div className="icon-area">
                    <SiTailwindcss className="tailwind" />
                    <p>Tailwind CSS</p>
                </div>
                <div className="icon-area">
                    <FaSass className="sass" />
                    <p>Sass</p>
                </div>
                <div className="icon-area">
                    <SiStyledcomponents className="styled" />
                    <p>Styled Components</p>
                </div>
                <div className="icon-area">
                    <SiGithub className="github" />
                    <p>Github</p>
                </div>
                <div className="icon-area">
                    <SiGit className="git" />
                    <p>Git</p>
                </div>
                <div className="icon-area">
                    <SiSlack className="slack" />
                    <p>Slack</p>
                </div>
                <div className="icon-area">
                    <SiFigma className="figma" />
                    <p>Figma</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
