"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Scroll from "@/components/ui/scroll/Scroll";
import Me from "@/public/images/me.png";
import "./styles.scss";

import { NAMESPACE } from "../_plugins";

import { SKILLS, getCareer } from "./consts";
import { IFold } from "./types";

const Home = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isFold, setIsFold] = useState<IFold[]>([]);

  const careers = useMemo(() => {
    return getCareer(t);
  }, [t]);

  /** Initial set up */
  useEffect(() => {
    setIsFold(careers.map(career => ({ id: career.id, state: true })));
  }, [careers]);

  /** Click plus or minus button */
  const onClickFold = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setIsFold(prev => prev.map(fold => (fold.id === id ? { ...fold, state: !fold.state } : fold)));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.opacity = "1";
          } else {
            element.style.opacity = "0";
          }
        });
      },
      { threshold: 0.52 }
    );

    sectionRefs.current.forEach(ref => {
      observer.observe(ref as HTMLElement);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="home">
      <section
        className="introduce-wapper"
        ref={el => {
          sectionRefs.current[0] = el;
        }}
      >
        <div></div>
        <div className="introduce-area">
          <Image src={Me} alt="me" />
          <div className="introduce-sentence">
            <p className="introduce-sentence">{t("topIntro")}</p>
            <p className="introduce-sentence">{t("midIntro")}</p>
          </div>
        </div>
        <Scroll />
      </section>
      <section
        className="skill-wrapper"
        ref={el => {
          sectionRefs.current[1] = el;
        }}
      >
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
      </section>
      {/* <section
        className="career-wrapper"
        ref={el => {
          sectionRefs.current[2] = el;
        }}
      >
        <p>{t("career")}</p>
        <div className="career-box">
          {careers.map((career, idx) => (
            <div
              id={career.id}
              key={career.id}
              className={cx("career-detail", {
                fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
              })}
              onClick={onClickFold}
            >
              <div
                className={cx("career-title-area", {
                  fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                })}
              >
                <p>{career.job}</p>
                <p
                  className={cx({
                    fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                  })}
                >
                  {career.period}
                </p>
              </div>
              <div className="career-info-area">
                <div
                  className={cx("company-area", {
                    fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                  })}
                >
                  <div className="company-detail">
                    <FaLocationDot />
                    <p>{career.location}</p>
                  </div>
                  <div className="company-detail">
                    <FaLink />
                    <a href={career.link}>{career.link}</a>
                  </div>
                </div>
                <div className="company-area">
                  <div className="job-description">{career.jobDesc}</div>
                </div>
                <div className="company-area">
                  <Tag tags={career.tags} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </section>
  );
};

export default Home;
