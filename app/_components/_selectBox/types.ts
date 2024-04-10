import { ILangList } from "../_layout/types";

export interface ISelectBox {
    onClickLang: (lang: string) => void;
    list: ILangList[];
    activeLang: string;
}
