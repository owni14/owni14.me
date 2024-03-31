import Category from "@app/_components/_category";
import { SKILLS } from "./consts";
import "./styles.scss";

const Skill = () => {
    return (
        <section id="skill">
            <Category category="Skill" />
            <p className="title">사용할 수 있는 기술 및 도구</p>
            <div className="icon-wrapper">
                {SKILLS.map(skill => (
                    <div key={skill.id} className="icon-area">
                        <skill.icon className={skill.id} />
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
