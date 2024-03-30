import type { Metadata } from "next";
import "@public/styles/global.scss";
import Layout from "./_components/_layout";

export const metadata: Metadata = {
    title: "Min's Portfolio",
    description: "Min's portfolio collection",
    keywords: "React, Next.js, portfolio, blog, front-end, front, sass, github",
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
