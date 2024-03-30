import Link from "next/link";
import { LANG_TOGGLE, defaultNav } from "./consts";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "@app/context/Language";
import { INav } from "./types";
import cx from "classNames";
import "./styles.scss";

const Header = () => {
    const { lang, setLang } = useContext(LangContext);
    const [navBar, setNavBar] = useState<INav[]>(defaultNav);
    const [scrollY, setScrollY] = useState<number>(window.scrollY);

    /** Todo
     * 현재 링크 누르게 되면 useEffect 겹쳐서 나오는 현상 수저 필요
     * 스크롤 할때마다 useEffect타게 되니 성능 개선 필요.
     * debounce or throttle
     */
    useEffect(() => {
        navBar.forEach(nav => {
            const targetOffset = document.getElementById(nav.id)?.offsetTop as number;
            const headerHeight = document.getElementById("header")?.offsetHeight as number;
            if (targetOffset - headerHeight < scrollY) {
                onActiveNav(nav.id);
            }
        });

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [scrollY]);

    /** Scroll handler */
    const onScroll = () => {
        setScrollY(window.scrollY);
    };

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
                    {navBar.map(nav => (
                        <li onClick={onClickLink} className={cx({ active: nav.active })}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="language-wrppaer">
                    <div className="border-area">
                        {LANG_TOGGLE.map(toggle => (
                            <div
                                className={cx("toggle", { active: lang === toggle })}
                                onClick={() => onClickToggle(toggle)}>
                                {toggle}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
