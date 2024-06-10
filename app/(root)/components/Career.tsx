import cx from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLink, FaLocationDot } from "react-icons/fa6";

import Tag from "@/components/ui/tag/Tag";

import { NAMESPACE } from "../../_plugins";
import { getCareer } from "../consts";
import { IFold } from "../types";

const Career = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);
  const [isFold, setIsFold] = useState<IFold[]>([]);

  const careers = useMemo(() => {
    return getCareer(t);
  }, [t]);

  /** Initial set up */
  useEffect(() => {
    setIsFold(careers.map(career => ({ id: career.id, state: true })));
  }, [careers]);

  /** Click plus or minus button */
  const onClickFold = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setIsFold(prev => prev.map(fold => (fold.id === id ? { ...fold, state: !fold.state } : fold)));
  };

  return (
    <>
      <p>{t("career")}</p>
      <div className="career-box">
        {careers.map((career, idx) => (
          <div
            id={career.id}
            key={career.id}
            className={cx("career-detail", {
              fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
            })}
            onClick={onClickFold}
          >
            <div
              className={cx("career-title-area", {
                fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
              })}
            >
              <p>{career.job}</p>
              <p
                className={cx({
                  fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                })}
              >
                {career.period}
              </p>
            </div>
            <div className="career-info-area">
              <div
                className={cx("company-area", {
                  fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                })}
              >
                <div className="company-detail">
                  <FaLocationDot />
                  <p>{career.location}</p>
                </div>
                <div className="company-detail">
                  <FaLink />
                  <a href={career.link}>{career.link}</a>
                </div>
              </div>
              <div className="company-area">
                <div className="job-description">{career.jobDesc}</div>
              </div>
              <div className="company-area">
                <Tag tags={career.tags} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Career;
