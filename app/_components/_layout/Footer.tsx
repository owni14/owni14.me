import dayjs from "dayjs";
import Link from "next/link";
import { FaGithub, FaBlogger } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
    const currentYear = dayjs().year();

    return (
        <div id="footer">
            <p>{`© ${currentYear}. owni14. All rights reserved.`}</p>
            <div className="link-area">
                <Link href="https://github.com/owni14">
                    <FaGithub />
                </Link>
                <Link href="https://owni14.github.io/">
                    <FaBlogger />
                </Link>
                <Link href="mailto:kmwoo514@gmail.com">
                    <SiMinutemailer />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
