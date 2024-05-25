export interface ISelectBox {
  onClickLang: (lang: string) => void;
  list: ILanguage[];
  activeLang: string | undefined;
}

export interface ILanguage {
  id: string;
  name: string;
}
