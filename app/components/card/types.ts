import { StaticImageData } from "next/image";

export interface ICard {
    src: StaticImageData;
    alt: string;
    title: string;
    desc: string;
    tags: string[];
    link: string;
    code: string;
}
