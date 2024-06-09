import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

import "@/styles/global.scss";
import Main from "./_components/layout/main/Main";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Min's Blog",
  description: "Min's Blog And Portfolio Collection",
  keywords: "React, Next.js, portfolio, blog, front-end, front, sass, github, developer, scss, Korean",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
