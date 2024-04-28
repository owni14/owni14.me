"use client";
import { useState } from "react";
import cx from "classnames";
import "./styles.scss";

const Hamburger = () => {
    const [isClick, setIsClick] = useState<boolean>(false);

    return (
        <div id="hamburger-wrapper" onClick={() => setIsClick(prev => !prev)}>
            <div className={cx({ change: isClick })}></div>
            <div className={cx({ change: isClick })}></div>
            <div className={cx({ change: isClick })}></div>
        </div>
    );
};

export default Hamburger;
