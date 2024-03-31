import { IGetCareer } from "./types";
import { TFunction } from "i18next";

export const getCareer = (t: TFunction): IGetCareer[] => {
    return [
        {
            id: "embrace",
            job: t("embrace.job"),
            period: t("embrace.period"),
            location: t("embrace.location"),
            link: "https://embracelabs.com/",
            jobDesc: t("embrace.jobDesc"),
            tags: [
                "React",
                "i18next",
                "Typescript",
                "React-Query",
                "React-Table",
                "Recoil",
                "dayjs",
                "React-Datepicker",
            ],
        },
    ];
};
