import * as en from "./en";
import * as ko from "./ko";

interface localeType {
  [key: string]: { [key: string]: string | { [key: string]: string } };
}

export const localeKR: localeType = { ...ko };
export const localeEN: localeType = { ...en };
