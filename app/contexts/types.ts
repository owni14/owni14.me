export interface ILanguage {
    lang: string;
    setLang: React.Dispatch<React.SetStateAction<string>>;
}

export interface ILangProvider {
    children: React.ReactNode;
}
