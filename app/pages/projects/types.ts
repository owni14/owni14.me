import { StaticImageData } from "next/image";

export interface IProjects {
    id: string;
    src: StaticImageData;
    alt: string;
    desc: string;
    link: string;
    code: string;
}
