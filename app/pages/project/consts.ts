import TodoList from "@public/images/todoListProject.png";
import Portfolio from "@public/images/portfolio.png";
import { IProjects } from "./types";
import { TFunction } from "i18next";

export const getProjects = (t: TFunction): IProjects[] => {
    return [
        {
            id: "todoListWithTDD",
            src: TodoList,
            alt: "todoListProject.png",
            title: t("todoList.title"),
            desc: t("todoList.desc"),
            tags: ["react", "typescript", "jest", "sass"],
            link: "https://owni14-todo-list-tdd.netlify.app/",
            code: "https://github.com/owni14/react-todo-list-tdd?tab=readme-ov-file",
        },
        {
            id: "portfolio",
            src: Portfolio,
            alt: "potfolio.png",
            title: t("portfolio.title"),
            desc: t("portfolio.desc"),
            tags: ["next.js", "typescript", "sass", "i18n"],
            link: "https://owni14.github.io/portfolio/",
            code: "https://github.com/owni14/portfolio",
        },
    ];
};
