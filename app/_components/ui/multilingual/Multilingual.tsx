"use client";

import cx from "classnames";
import { useState } from "react";
import { HiMiniLanguage } from "react-icons/hi2";

import "./styles.scss";
import { IMultilingualProps } from "./types";

/**
 * Multilingual UI
 * @param {(lang:string) => void} onClick Click language
 * @param {ILanguage[]} list Language list
 * @param {string | undefined} activeLang Activated language
 * @returns {JSX.Element} JSX element
 */
const Multilingual = ({ onClick, list, activeLang }: IMultilingualProps): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div id="multilingual" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="language-wrapper">
        <HiMiniLanguage />
        {activeLang.name}
      </div>
      {isHover && (
        <ul>
          {list.map(lang => (
            <li key={lang.id} className={cx({ active: activeLang.id === lang.id })} onClick={() => onClick(lang.id)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Multilingual;
