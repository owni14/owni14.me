import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import { ISelectBox } from "./types";
import cx from "classnames";
import "./styles.scss";

const LangSelectBox = ({ onClickLang, list, activeLang }: ISelectBox) => {
    const [isClick, setIsClick] = useState<boolean>(false);

    return (
        <div id="language-wrapper">
            <label onClick={() => setIsClick(prev => !prev)}>
                <AiOutlineGlobal />
            </label>
            {isClick && (
                <ul>
                    {list.map(lang => (
                        <li
                            key={lang.key}
                            className={cx({ active: activeLang === lang.key })}
                            onClick={() => onClickLang(lang.key)}>
                            {lang.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LangSelectBox;
