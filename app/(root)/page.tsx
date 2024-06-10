"use client";

import { useEffect, useMemo, useRef } from "react";

import About from "./components/About";
import Career from "./components/Career";
import Skill from "./components/Skill";
import "./styles.scss";

const Home = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.4 }
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

  /** Home section renderer */
  const homeRenderer = useMemo(
    () => [
      {
        className: "introduce-wapper",
        component: <About />,
      },
      {
        className: "skill-wrapper",
        component: <Skill />,
      },
      {
        className: "career-wrapper",
        component: <Career />,
      },
    ],
    []
  );

  return (
    <section id="home">
      {homeRenderer.map((render, idx) => (
        <section
          key={render.className}
          className={render.className}
          ref={el => {
            sectionRefs.current[idx] = el;
          }}
        >
          {render.component}
        </section>
      ))}
    </section>
  );
};

export default Home;
