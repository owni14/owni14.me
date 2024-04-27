import dayjs from "dayjs";
import Link from "next/link";
import { footerList } from "./consts";

const Footer = () => {
    const currentYear = dayjs().year();

    return (
        <div id="footer">
            <p>{`© ${currentYear}. owni14. All rights reserved.`}</p>
            <div className="link-area">
                {footerList.map(foot => (
                    <Link key={foot.id} href={foot.link}>
                        <foot.icon />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Footer;
