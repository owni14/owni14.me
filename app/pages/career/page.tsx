"use client";
import Category from "@app/_components/_category";
import { FaPlus, FaMinus, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Tag from "@app/_components/_tag";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { CAREER } from "./consts";
import { IFold } from "./types";
import "./styles.scss";

const Career = () => {
    const [isFold, setIsFold] = useState<IFold[]>([]);

    /** Initial set up */
    useEffect(() => {
        setIsFold(CAREER.map(career => ({ id: career.id, state: true })));
    }, [CAREER]);

    /** Click plus or minus button */
    const onClickFold = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        setIsFold(prev => prev.map(fold => (fold.id === name ? { ...fold, state: !fold.state } : fold)));
    };

    return (
        <section id="career">
            <Category category="Career" />
            <p className="title">경력 사항에 대한 요약</p>
            <div className="career-wrapper">
                {CAREER.map((career, idx) => (
                    <div key={career.id} className="career-detail-area">
                        <div
                            className={cx("career-fold-detail", {
                                fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                            })}>
                            <div className="summary">
                                <p className="job">{career.job}</p>
                                <div className="period-area">
                                    <p className="period">{career.period}</p>
                                    <button name={career.id} onClick={onClickFold}>
                                        {isFold[idx]?.id === career.id && isFold[idx]?.state ? <FaPlus /> : <FaMinus />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx("career-detail", {
                                fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                            })}>
                            <div className="detail">
                                <div className="company-area">
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
