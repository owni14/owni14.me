"use client";

import cx from "classnames";
import { useState } from "react";
import "./styles.scss";

const Hamburger = () => {
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
