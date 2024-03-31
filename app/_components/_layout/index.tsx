"use client";
import Footer from "./Footer";
import Header from "./Header";
import "@app/_plugins/i18n";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main id="root">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
