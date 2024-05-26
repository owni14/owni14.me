"use client";

import cx from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Hamburger from "@/components/ui/hamburger/Hamburger";
import { langList } from "@/components/ui/multilingual/consts";
import Multilingual from "@/components/ui/multilingual/Multilingual";

import { navList } from "./consts";
import "./styles.scss";
import { IActive } from "./types";

/**
 * Header layout
 * @returns {JSX.Element} JSX element
 */
const Header = (): JSX.Element => {
  const [active, setActive] = useState<IActive>({ link: navList[0].id, lang: langList[0] });
  const [tablet, setTablet] = useState<boolean>(false);
  const [isClickHamburger, setIsClickHamburger] = useState<boolean>(false);

  const isTablet = useMediaQuery({ maxWidth: 768 });
  const headerRef = useRef<HTMLElement>(null);

  /* Check the tablet resolution */
  useEffect(() => {
    setTablet(isTablet);
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

  /* Link click handler */
  const onLinkClick = useCallback((id: string) => {
    setActive(prev => ({
      ...prev,
      link: id,
    }));
    setIsClickHamburger(false);
  }, []);

  /* Navigation link renderer */
  const navLinkRenderer = useMemo(() => {
    return (
      <ul className={cx("nav-link", { tablet: isClickHamburger })}>
        {navList.map(nav => (
          <li key={nav.id} className={cx({ active: active.link === nav.id })}>
            <Link href={nav.path} onClick={() => onLinkClick(nav.id)}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }, [isClickHamburger, active.link, onLinkClick]);

  /* Multilingual renderer */
  const multilingualRenderer = useMemo(() => {
    return (
      <Multilingual
        list={langList}
        onClickLang={(id: string) =>
          setActive(prev => ({
            ...prev,
            lang: langList.find(lang => lang.id === id) ?? langList[0],
          }))
        }
        activeLang={active.lang}
      />
    );
  }, [active.lang]);

  return (
    <section id="header" ref={headerRef}>
      <div className={cx("header-wrapper", { tablet: isClickHamburger })}>
        <div className={cx({ "tablet-header": tablet })}>
          <Link
            className="title"
            href="/"
            onClick={() =>
              setActive(prev => ({
                ...prev,
                link: navList[0].id,
              }))
            }
          >
            {"Min"}
          </Link>
          {tablet && (
            <div className="tablet-header-nav">
              {multilingualRenderer}
              <Hamburger isClick={isClickHamburger} setIsClick={setIsClickHamburger} />
            </div>
          )}
        </div>
        {(!tablet || isClickHamburger) && (
          <div className={cx("nav-wrapper", { tablet: isClickHamburger })}>
            {navLinkRenderer}
            {!isClickHamburger && multilingualRenderer}
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
