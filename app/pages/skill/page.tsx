"use client";
import Category from "@app/_components/_category";
import { SKILLS } from "./consts";
import { useTranslation } from "react-i18next";
import { NAMESPACE } from "@app/consts";
import "./styles.scss";

const Skill = () => {
    const { t } = useTranslation(NAMESPACE.SKILL);

    return (
        <section id="skill">
            <Category category="Skill" title={t("title")} />
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
