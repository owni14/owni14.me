import { IconType } from "react-icons";

export interface ISkills {
  id: string;
  icon: IconType;
  title: string;
}
export interface IGetCareer {
  id: string;
  job: string;
  period: string;
  location: string;
  link: string;
  jobDesc: string;
  tags: string[];
}

export interface IFold {
  id: string;
  state: boolean;
}
