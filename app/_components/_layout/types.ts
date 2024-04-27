import { IconType } from "react-icons";

/** Header nav bar type */
export interface INav {
    id: string;
    title: string;
}

export interface ILayout {
    children: React.ReactNode;
}

export interface ILangList {
    key: string;
    name: string;
}

export interface IFooterList {
    id: string;
    link: string;
    icon: IconType;
}
