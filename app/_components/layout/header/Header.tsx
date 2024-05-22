'use client';

import Multilingual from '@/components/ui/multilingual/Multilingual';
import { langList } from '@/components/ui/multilingual/consts';
import cx from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { navList } from './consts';
import './styles.scss';

/**
 * Header component
 */
const Header = () => {
  const [activeLink, setActiveLink] = useState<string>(navList[0].id);
  const [activeLang, setActiveLang] = useState<string>('한국어');

  return (
    <section id="header">
      <Link className="title" href="/">
        Min's
      </Link>
      <div className="nav-wrapper">
        <ul className="nav-link">
          {navList.map(nav => (
            <li key={nav.id} onClick={() => setActiveLink(nav.id)} className={cx({ active: activeLink === nav.id })}>
              {nav.title}
            </li>
          ))}
        </ul>
        <Multilingual list={langList} onClickLang={(lang: string) => setActiveLang(lang)} activeLang={activeLang} />
      </div>
    </section>
  );
};

export default Header;
