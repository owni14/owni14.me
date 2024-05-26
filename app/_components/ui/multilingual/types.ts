export interface IMultilingualProps {
  onClickLang: (lang: string) => void;
  list: ILanguage[];
  activeLang: ILanguage;
}

export interface ILanguage {
  id: string;
  name: string;
}
