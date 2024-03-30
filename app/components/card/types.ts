import { StaticImageData } from "next/image";

export interface ICard {
    src: StaticImageData;
    alt: string;
    desc: string;
    link: string;
    code: string;
}
