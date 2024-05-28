"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./styles.scss";

import Me from "@/public/images/me.png";

import { NAMESPACE } from "../_plugins";

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
