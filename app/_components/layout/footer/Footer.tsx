"use client";

import cx from "classnames";
import dayjs from "dayjs";
import Link from "next/link";

import useDevice from "@/hooks/useDevice";

import { footerList } from "./consts";

import "./styles.scss";

/**
 * Footer layout
 * @returns {JSX.Element} JSX element
 */
const Footer = (): JSX.Element => {
  const currentYear = dayjs().year();
  const { isTablet } = useDevice();

  return (
    <section id="footer">
      <div className={cx("footer-wrapper", { tablet: isTablet })}>
        <p>{`© ${currentYear}. owni14. All rights reserved.`}</p>
        <div className="link-area">
          {footerList.map(foot => {
            const FooterIcon = foot.icon;
            return (
              <Link key={foot.id} href={foot.link}>
                <FooterIcon />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
