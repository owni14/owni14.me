"use client";
import LangProvider from "@app/_context/Language";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LangProvider>
            <Header />
            <main id="root">{children}</main>
            <Footer />
        </LangProvider>
    );
};

export default Layout;
