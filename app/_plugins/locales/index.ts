import * as ko from "./ko";
import * as en from "./en";

type localeType = { [key: string]: string };

export const localeKR: localeType = { ...ko };
export const localeEN: localeType = { ...en };

export default { localeKR, localeEN };
