import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { localeEN, localeKR } from "./locales";

i18next.use(initReactI18next).init({
  resources: { ko: localeKR, en: localeEN },
  ns: ["about", "blog", "projects"],
  lng: "ko",
  fallbackLng: ["en", "ko"],
  supportedLngs: ["en", "ko"],
  interpolation: { escapeValue: false },
  detection: { order: ["path", "navigator"] },
});

export default i18next;
