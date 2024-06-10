import { useTranslation } from "react-i18next";

import { NAMESPACE } from "../../_plugins";
import { SKILLS } from "../consts";

const Skill = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);

  return (
    <>
      <p>{t("skill")}</p>
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
    </>
  );
};
export default Skill;
