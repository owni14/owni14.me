import Link from "next/link";
import "./styles.scss";
import { LANG_TOGGLE, defaultNav } from "./consts";
import cx from "classNames";
import { useContext, useState } from "react";
import { LangContext } from "@app/context/Language";
import { INav } from "./types";

const Header = () => {
    const { lang, setLang } = useContext(LangContext);
    const [navBar, setNavBar] = useState<INav[]>(defaultNav);

    /** Toggle click */
    const onClickToggle = (lang: string) => {
        setLang(lang);
    };

    /** Activate nav bar */
    const onActiveNav = (id: string) => {
        setNavBar(prev => prev.map(nav => ({ ...nav, active: nav.id === id })));
    };

    /** Link click */
    const onClickLink = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const targetId = target.getAttribute("href")?.replace("#", "");
        const targetHeight = document.getElementById(String(targetId))?.offsetTop;
        const headerHeight = document.getElementById("header")?.offsetHeight;
        onActiveNav(targetId as string);

        if (targetHeight !== undefined && headerHeight !== undefined) {
            window.scrollTo({
                behavior: "smooth",
                top: targetHeight - headerHeight,
            });
        }
    };

    /** Logo click */
    const onClickLogo = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onActiveNav(navBar[0].id);
        window.scrollTo({ behavior: "smooth", top: 0 });
    };

    return (
        <div id="header">
            <Link className="title" href="/" as={`/`} onClick={onClickLogo}>
                MIN
            </Link>
            <div className="right-area">
                <ul className="nav-link">
                    {navBar.map(item => (
                        <li onClick={onClickLink} className={cx({ active: item.active })}>
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
