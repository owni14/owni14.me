import { StaticImageData } from "next/image";

export interface IProjects {
    id: string;
    src: StaticImageData;
    alt: string;
    title: string;
    desc: string;
    tags: string[];
    link: string;
    code: string;
}
