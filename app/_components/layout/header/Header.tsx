"use client";

import cx from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Hamburger from "@/components/ui/hamburger/Hamburger";
import { languageList } from "@/components/ui/multilingual/consts";
import Multilingual from "@/components/ui/multilingual/Multilingual";
import useDevice from "@/hooks/useDevice";

import { navList } from "./consts";
import "./styles.scss";
import { IActive } from "./types";

/**
 * Header layout
 * @returns {JSX.Element} JSX element
 */
const Header = (): JSX.Element => {
  const [active, setActive] = useState<IActive>({ link: navList[0].id, language: languageList[0] });
  const [isClickHamburger, setIsClickHamburger] = useState<boolean>(false);
  const { isTablet } = useDevice();

  const headerRef = useRef<HTMLElement>(null);

  /* Check the tablet resolution */
  useEffect(() => {
    setIsClickHamburger(false);
  }, [isTablet]);

  /* Outside click handler */
  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setIsClickHamburger(false);
      }
    };

    window.addEventListener("click", outsideClick);
    return () => {
      window.removeEventListener("click", outsideClick);
    };
  }, []);

  /* Click link */
  const handleLink = useCallback((id: string) => {
    setActive(prev => ({
      ...prev,
      link: id,
    }));
    setIsClickHamburger(false);
  }, []);

  /* Change Language */
  const handleLanguage = useCallback((id: string) => {
    setActive(prev => ({
      ...prev,
      language: languageList.find(language => language.id === id) ?? languageList[0],
    }));
  }, []);

  /* Multilingual renderer */
  const multilingualRenderer = useMemo(() => {
    return (
      <Multilingual list={languageList} onClick={(id: string) => handleLanguage(id)} activeLang={active.language} />
    );
  }, [active.language, handleLanguage]);

  return (
    <section id="header" ref={headerRef}>
      <div className={cx("header-wrapper", { tablet: isClickHamburger })}>
        <div className={cx({ "tablet-header": isTablet })}>
          <Link className="title" href="/" onClick={() => handleLink(navList[0].id)}>
            {"Min"}
          </Link>
          {isTablet && (
            <div className="tablet-header-nav">
              {multilingualRenderer}
              <Hamburger isClick={isClickHamburger} setIsClick={setIsClickHamburger} />
            </div>
          )}
        </div>
        <div className={cx("nav-wrapper", { tablet: isClickHamburger, hidden: isTablet && !isClickHamburger })}>
          <ul className={cx("nav-link", { tablet: isClickHamburger })}>
            {navList.map(nav => (
              <li key={nav.id} className={cx({ active: active.link === nav.id })}>
                <Link href={nav.path} onClick={() => handleLink(nav.id)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          {!isTablet && multilingualRenderer}
        </div>
      </div>
    </section>
  );
};

export default Header;
