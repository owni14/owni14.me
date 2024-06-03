import { FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiI18Next,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRecoil,
  SiSlack,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { ISkills } from "./types";

export const SKILLS: ISkills[] = [
  {
    id: "html",
    icon: SiHtml5,
    title: "HTML",
  },
  {
    id: "css",
    icon: SiCss3,
    title: "CSS",
  },
  {
    id: "javascript",
    icon: SiJavascript,
    title: "Javascript",
  },
  {
    id: "typescript",
    icon: SiTypescript,
    title: "Typescript",
  },
  {
    id: "react",
    icon: SiReact,
    title: "React",
  },
  {
    id: "react-native",
    icon: SiReact,
    title: "React-Native",
  },
  {
    id: "react-query",
    icon: SiReactquery,
    title: "React-Query",
  },
  {
    id: "i18n",
    icon: SiI18Next,
    title: "I18Next",
  },
  {
    id: "recoil",
    icon: SiRecoil,
    title: "Recoil",
  },
  {
    id: "next",
    icon: SiNextdotjs,
    title: "Next.js",
  },
  {
    id: "tailwind",
    icon: SiTailwindcss,
    title: "Tailwind CSS",
  },
  {
    id: "sass",
    icon: FaSass,
    title: "Sass",
  },
  {
    id: "styled",
    icon: SiStyledcomponents,
    title: "Styled Components",
  },
  {
    id: "github",
    icon: SiGithub,
    title: "Github",
  },
  {
    id: "git",
    icon: SiGit,
    title: "Git",
  },
  {
    id: "slack",
    icon: SiSlack,
    title: "Slack",
  },
  {
    id: "figma",
    icon: SiFigma,
    title: "Figma",
  },
];
