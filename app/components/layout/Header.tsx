import Link from "next/link";
import "./header.scss";

const Header = () => {
    return (
        <div id="header">
            <Link className="title" href="/" as={`/`}>
                MIN
            </Link>
            <div className="link">
                <Link href="/about">About</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Skills</Link>
                <Link href="/">Career</Link>
            </div>
        </div>
    );
};

export default Header;
