import { createContext, useContext, useState } from "react";
import { ILangProvider, ILanguage } from "./types";
import { defaultLang } from "./consts";

export const LangContext = createContext<ILanguage>(defaultLang);

export const LangProvider = ({ children }: ILangProvider) => {
    const [lang, setLang] = useState<string>("ko");

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};
