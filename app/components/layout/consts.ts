import { INav } from "./types";

export const defaultNav: INav[] = [
    {
        id: "about",
        title: "About",
        active: true,
    },
    {
        id: "projects",
        title: "Projects",
        active: false,
    },
    {
        id: "skills",
        title: "Skills",
        active: false,
    },
    {
        id: "career",
        title: "Career",
        active: false,
    },
];

export const LANG_TOGGLE = ["ko", "en"];
