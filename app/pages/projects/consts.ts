import TodoList from "@public/images/todoListProject.png";
import Portfolio from "@public/images/portfolio.png";
import { IProjects } from "./types";

export const PROJECTS: IProjects[] = [
    {
        id: "todoListWithTDD",
        src: TodoList,
        alt: "todoListProject.png",
        title: "TDD를 사용한 투두리스트",
        desc: "현업에서 TDD를 적용하려고 했으나, 여러 구조상 문제 때문 부딪혀 직접 적용하지 못하였습니다. 그래서 개발하면서 많이 들어봤던 TDD를 투두리스트에 적용하였습니다.",
        tags: ["react", "typescript", "jest", "sass"],
        link: "https://owni14-todo-list-tdd.netlify.app/",
        code: "https://github.com/owni14/react-todo-list-tdd?tab=readme-ov-file",
    },
    {
        id: "portfolio",
        src: Portfolio,
        alt: "potfolio.png",
        title: "포트폴리오",
        desc: "저를 소개하는 포트폴리오이며, 잘 써보지 않은 스타일을 적용하며 이쁘게 보여지도록 노력하였습니다. 또한, i18n으로 다국어를 지원하여 영어로도 볼 수 있게 구현하였습니다.",
        tags: ["next.js", "typescript", "sass", "i18n"],
        link: "https://github.com/owni14/portfolio",
        code: "https://github.com/owni14/portfolio",
    },
];
