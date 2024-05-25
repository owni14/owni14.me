"use client";

import cx from "classnames";
import { useState } from "react";
import "./styles.scss";

/**
 * Hamburger UI
 * @returns {JSX.Element} JSX element
 */
const Hamburger = (): JSX.Element => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div id="hamburger" onClick={() => setIsClick(prev => !prev)}>
      <div className={cx({ change: isClick })}></div>
      <div className={cx({ change: isClick })}></div>
      <div className={cx({ change: isClick })}></div>
    </div>
  );
};

export default Hamburger;
