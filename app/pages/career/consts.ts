import { useTranslation } from "react-i18next";
import { IGetCareer } from "./types";
import { NAMESPACE } from "@app/consts";

export const getCareer = (): IGetCareer[] => {
    const { t } = useTranslation(NAMESPACE.CAREER);

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
