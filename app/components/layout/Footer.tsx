import dayjs from "dayjs";
import Github from "@public/images/github.svg";
import Blog from "@public/images/blog.svg";
import Mail from "@public/images/mail.svg";
import Link from "next/link";

const Footer = () => {
    const currentYear = dayjs().year();

    return (
        <div id="footer">
            <p>{`© ${currentYear}. Minwoo Kim. All rights reserved.`}</p>
            <div className="link-area">
                <Link href="https://github.com/owni14">
                    <Github />
                </Link>
                <Link href="https://owni14.github.io/">
                    <Blog />
                </Link>
                <Link href="mailto:kmwoo514@gmail.com">
                    <Mail />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
