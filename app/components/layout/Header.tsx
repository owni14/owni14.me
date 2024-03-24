import Link from "next/link";
import "./styles.scss";
import { usePathname } from "next/navigation";
import { LANG_TOGGLE, NAV } from "./consts";
import cx from "classNames";
import { useContext } from "react";
import { LangContext } from "@app/context/Language";

const Header = () => {
    const path = usePathname();
    const { lang, setLang } = useContext(LangContext);

    const onClickToggle = (lang: string) => {
        setLang(lang);
    };

    return (
        <div id="header">
            <Link className="title" href="/" as={`/`}>
                MIN
            </Link>
            <div className="right-area">
                <div className="nav-link">
                    {NAV.map(item => (
                        <Link href={item.href} className={path === item.href ? "active" : ""}>
                            {item.title}
                        </Link>
                    ))}
                </div>
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
