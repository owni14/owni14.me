"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./styles.scss";

import { NAMESPACE } from "../_plugins";

import Me from "@/public/images/me.png";

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
    </section>
  );
};

export default About;
