"use client";
import Image from "next/image";
import Me from "@public/images/me.png";
import Category from "@app/_components/_category";
import { useTranslation } from "react-i18next";
import { LANGUAGE, NAMESPACE } from "@app/consts";
import { useContext } from "react";
import { LangContext } from "@app/contexts/Language";
import cx from "classnames";
import "./styles.scss";

const About = () => {
    const { t } = useTranslation(NAMESPACE.ABOUT);
    const { lang } = useContext(LangContext);
    const isEn = lang === LANGUAGE.ENGLISH;

    return (
        <section id="about">
            <div className="image-wrapper">
                <Image src={Me} alt="me.png" />
            </div>
            <div className="text-wrapper">
                <Category category="About" />
                <div className="text-area">
                    <p className="greet">{t("greet")}</p>
                    <p className="introduce">{t("introduce")}</p>
                    <p className="desc">{t("desc")}</p>
                    <div className="tabletDesc">
                        <p className="tabletTopDesc">{t("tabletDescTop")}</p>
                        <p className="tabletBottomDesc">{t("tabletDescBottom")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
