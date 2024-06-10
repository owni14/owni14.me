"use client";

import cx from "classnames";

import "./styles.scss";
import { IHamburgerProps } from "./types";

/**
 * Hamburger UI
 * @param {boolean} isClick Click state
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsClick Change click state
 * @returns {JSX.Element} JSX element
 */
const Hamburger = ({ isClick, setIsClick }: IHamburgerProps): JSX.Element => {
  return (
    <div id="hamburger" onClick={() => setIsClick(prev => !prev)}>
      <div className={cx({ change: isClick })}></div>
      <div className={cx({ change: isClick })}></div>
      <div className={cx({ change: isClick })}></div>
    </div>
  );
};

export default Hamburger;
