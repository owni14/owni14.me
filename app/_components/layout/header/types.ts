import { ILanguage } from "@/components/ui/multilingual/types";

export interface INav {
  id: string;
  title: string;
  path: string;
}

export interface IActive {
  link: string;
  language: ILanguage;
}
