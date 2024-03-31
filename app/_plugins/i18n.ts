import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { localeEN, localeKR } from "./locales";

i18next.use(initReactI18next).init({
    resources: {
        ko: {
            intro: {
                test: "테스트",
            },
        },
        en: {
            intro: {
                test: "test",
            },
        },
    },
    fallbackLng: ["en", "ko"],
    supportedLngs: ["en", "ko"],
    keySeparator: false,
    interpolation: { escapeValue: false },
    detection: { order: ["path", "navigator"] },
});

export default i18next;
