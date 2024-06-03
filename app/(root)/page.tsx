"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Me from "@/public/images/me.png";
import "./styles.scss";

import { NAMESPACE } from "../_plugins";
import { SKILLS } from "./consts";

const About = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);

  return (
    <section id="about">
      <div className="introduce-wapper">
        <Image src={Me} alt="me" />
        <div className="introduce-sentence">
          <p className="introduce-sentence">{t("topIntro")}</p>
          <p className="introduce-sentence">{t("midIntro")}</p>
        </div>
      </div>
      <div className="skill-wrapper">
        <div className="icon-wrapper">
          {SKILLS.map(skill => {
            const SkillIcon = skill.icon;
            return (
              <div key={skill.id} className="icon-area">
                <SkillIcon className={skill.id} />
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
