import Link from "next/link";
import "./styles.scss";
import { LANG_TOGGLE, NAV } from "./consts";
import cx from "classNames";
import { useContext, useRef } from "react";
import { LangContext } from "@app/context/Language";

const Header = () => {
    const { lang, setLang } = useContext(LangContext);

    /** Toggle click */
    const onClickToggle = (lang: string) => {
        setLang(lang);
    };

    /** Link click */
    const onClickLink = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(String(id));

        element?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div id="header">
            <Link className="title" href="/" as={`/`}>
                MIN
            </Link>
            <div className="right-area">
                <ul className="nav-link">
                    {NAV.map(item => (
                        <li onClick={onClickLink} className={"about" === item.id ? "active" : ""}>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="language-wrppaer">
                    <div className="border-area">
                        {LANG_TOGGLE.map(item => (
                            <div
                                className={cx("toggle", { active: lang === item })}
                                onClick={() => onClickToggle(item)}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
