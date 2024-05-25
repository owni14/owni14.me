import dayjs from "dayjs";
import Link from "next/link";
import "./styles.scss";

import { footerList } from "./consts";

/**
 * Footer layout
 * @returns {JSX.Element} JSX element
 */
const Footer = (): JSX.Element => {
  const currentYear = dayjs().year();

  return (
    <section id="footer">
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
    </section>
  );
};

export default Footer;
