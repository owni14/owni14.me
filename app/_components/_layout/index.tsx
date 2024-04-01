"use client";
import Footer from "./Footer";
import Header from "./Header";
import "@app/_plugins/i18n";
import "./styles.scss";
import { LangProvider } from "@app/contexts/Language";
import { ILayout } from "./types";

const Layout = ({ children }: ILayout) => {
    return (
        <LangProvider>
            <Header />
            <main id="root">{children}</main>
            <Footer />
        </LangProvider>
    );
};

export default Layout;
