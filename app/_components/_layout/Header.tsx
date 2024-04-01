import Link from "next/link";
import { LANG_TOGGLE, Nav } from "./consts";
import cx from "classnames";
import { useContext, useEffect, useState } from "react";
import i18next from "i18next";
import { LangContext } from "@app/contexts/Language";

const Header = () => {
    const [lang, setLang] = useState("ko");
    const { setLang: setCtxLang } = useContext(LangContext);
    const [visibleSection, setVisibleSection] = useState<string>(Nav[0].id);

    useEffect(() => {
        const targetSections = document.querySelectorAll("section");

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.getAttribute("id") as string); // about / projects / skills / career
                }
            });
        }, options);

        targetSections.forEach(section => {
            observer.observe(section);
        });
    }, []);

    /** Toggle click */
    const onClickToggle = (lang: string) => {
        i18next.changeLanguage(lang);
        setCtxLang(lang);
        setLang(lang);
    };

    /** Link click */
    const onClickLink = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const targetId = target.getAttribute("href")?.replace("#", "");
        const targetHeight = document.getElementById(String(targetId))?.offsetTop;
        const headerHeight = document.getElementById("header")?.offsetHeight;
        const isClickAbout = targetId === "about";

        history.pushState(null, "", isClickAbout ? "/" : `#${targetId}`);

        if (targetHeight !== undefined && headerHeight !== undefined) {
            window.scrollTo({
                behavior: "smooth",
                top: isClickAbout ? 0 : targetHeight - headerHeight,
            });
        }
    };

    /** Logo click */
    const onClickLogo = (e: React.SyntheticEvent) => {
        e.preventDefault();
        history.pushState(null, "", "/portfolio");
        window.scrollTo({ behavior: "smooth", top: 0 });
    };

    return (
        <div id="header">
            <Link className="title" href="https://owni14.github.io/portfolio/" as={`/`} onClick={onClickLogo}>
                MIN
            </Link>
            <div className="right-area">
                <ul className="nav-link">
                    {Nav.map(nav => (
                        <li key={nav.id} onClick={onClickLink} className={cx({ active: visibleSection === nav.id })}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="language-wrppaer">
                    <div className="border-area">
                        {LANG_TOGGLE?.map(toggle => (
                            <div
                                key={toggle}
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
