import { createContext, useEffect, useState } from "react";

interface ILangContext {
    lang: string;
    setLang: React.Dispatch<React.SetStateAction<string>>;
}

export const LangContext = createContext<ILangContext>({ lang: "ko", setLang: () => ({}) });

const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState("ko");

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export default LangProvider;
