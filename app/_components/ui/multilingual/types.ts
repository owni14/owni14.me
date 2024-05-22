export interface ISelectBox {
  onClickLang: (lang: string) => void;
  list: ILanguage[];
  activeLang: string;
}

export interface ILanguage {
  key: string;
  name: string;
}
