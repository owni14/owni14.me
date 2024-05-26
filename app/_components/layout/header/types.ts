import { ILanguage } from "@/components/ui/multilingual/types";

/** Header nav bar */
export interface INav {
  id: string;
  title: string;
  path: string;
}

export interface IActive {
  link: string;
  lang: ILanguage;
}
