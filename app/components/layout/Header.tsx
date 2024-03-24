import Link from "next/link";
import "./header.scss";

const Header = () => {
    return (
        <div id="header">
            <Link className="title" href="/" as={`/`}>
                MIN
            </Link>
            <div className="link">
                <Link href="/">About</Link>
                <Link href="/pages/projects">Projects</Link>
                <Link href="/pages/skills">Skills</Link>
                <Link href="/pages/career">Career</Link>
            </div>
        </div>
    );
};

export default Header;
