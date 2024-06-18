import Image from "next/image";
import { useTranslation } from "react-i18next";

import Scroll from "@/components/ui/scroll/Scroll";
import Me from "@/public/images/me.png";

import { NAMESPACE } from "../../_plugins";

const About = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);

  return (
    <>
      <div></div>
      <div className="introduce-area">
        <Image src={Me} alt="me" />
        <div className="introduce-sentence">
          <p className="introduce-sentence">{t("topIntro")}</p>
          <p className="introduce-sentence">{t("midIntro")}</p>
        </div>
      </div>
      <Scroll />
    </>
  );
};

export default About;
