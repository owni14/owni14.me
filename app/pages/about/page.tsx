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
        <section id="about" className={cx({ isEn })}>
            <div className="image-wrapper">
                <Image className={cx({ isEn })} src={Me} alt="me.png" />
            </div>
            <div className={cx("text-wrapper", { isEn })}>
                <Category category="About" />
                <div className="text-area">
                    <p className={cx("greet", { isEn })}>{t("greet")}</p>
                    <p className={cx("introduce", { isEn })}>{t("introduce")}</p>
                    <p className={cx("desc", { isEn })}>{t("desc")}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
