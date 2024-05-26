import { FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

import { IFooterList } from "./types";

export const footerList: IFooterList[] = [
  {
    id: "github",
    link: "https://github.com/owni14",
    icon: FaGithub,
  },
  {
    id: "mail",
    link: "mailto:kmwoo514@gmail.com",
    icon: SiMinutemailer,
  },
];
