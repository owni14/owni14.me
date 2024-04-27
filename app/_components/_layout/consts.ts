import { FaBlogger, FaGithub } from "react-icons/fa";
import { IFooterList, ILangList, INav } from "./types";
import { SiMinutemailer } from "react-icons/si";

export const navList: INav[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skill",
        title: "Skill",
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "career",
        title: "Career",
    },
];

export const langList: ILangList[] = [
    {
        key: "ko",
        name: "한국어",
    },
    {
        key: "en",
        name: "English",
    },
];

export const footerList: IFooterList[] = [
    {
        id: "github",
        link: "https://github.com/owni14",
        icon: FaGithub,
    },
    {
        id: "blog",
        link: "https://owni14.github.io/",
        icon: FaBlogger,
    },
    {
        id: "mail",
        link: "mailto:kmwoo514@gmail.com",
        icon: SiMinutemailer,
    },
];
