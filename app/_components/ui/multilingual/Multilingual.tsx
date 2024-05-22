'use client';

import cx from 'classnames';
import { useState } from 'react';
import { HiMiniLanguage } from 'react-icons/hi2';
import './styles.scss';
import { ISelectBox } from './types';

/**
 * Multilingual component
 * @param onClickLang
 * @returns
 */
const Multilingual = ({ onClickLang, list, activeLang }: ISelectBox) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div id="multilingual" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="language-wrapper">
        <HiMiniLanguage />
        {activeLang}
      </div>
      {isHover && (
        <ul>
          {list.map(lang => (
            <li
              key={lang.key}
              className={cx({ active: activeLang === lang.name })}
              onClick={() => onClickLang(lang.name)}
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Multilingual;
