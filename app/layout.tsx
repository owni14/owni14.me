import type { Metadata } from "next";
import "@public/styles/global.scss";
import Layout from "./components/layout/page";

export const metadata: Metadata = {
    title: "Min's Portfolio",
    description: "Min's portfolio collection",
    keywords: "React, Next.js, portfolio, blog",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
