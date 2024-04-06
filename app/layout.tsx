import type { Metadata } from "next";
import Layout from "./_components/_layout";
import "@public/styles/global.scss";

export const metadata: Metadata = {
    title: "Min's Portfolio",
    description: "Min's portfolio collection",
    keywords: "React, Next.js, portfolio, blog, front-end, front, sass, github",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
