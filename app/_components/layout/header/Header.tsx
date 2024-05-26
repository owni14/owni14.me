"use client";

import cx from "classnames";
import Link from "next/link";
import { useState } from "react";

import { langList } from "@/components/ui/multilingual/consts";
import Multilingual from "@/components/ui/multilingual/Multilingual";
import { ILanguage } from "@/components/ui/multilingual/types";

import { navList } from "./consts";

import "./styles.scss";

/**
 * Header layout
 * @returns {JSX.Element} JSX element
 */
const Header = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>(navList[0].id);
  const [activeLang, setActiveLang] = useState<ILanguage>(langList[0]);

  return (
    <section id="header">
      <div className="header-wrapper">
        <Link className="title" href="/" onClick={() => setActiveLink(navList[0].id)}>
          {"Min"}
        </Link>
        <div className="nav-wrapper">
          <ul className="nav-link">
            {navList.map(nav => (
              <li key={nav.id} className={cx({ active: activeLink === nav.id })}>
                <Link href={nav.path} onClick={() => setActiveLink(nav.id)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <Multilingual
            list={langList}
            onClickLang={(id: string) => setActiveLang(langList.find(lang => lang.id === id) ?? langList[0])}
            activeLang={activeLang}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
