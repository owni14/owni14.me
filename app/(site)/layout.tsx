import type { Metadata } from "next";

import Footer from "@/_components/layout/Footer";
import Header from "@/_components/layout/Header";

import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Min's Blog",
  description: "Min's Blog And Portfolio Collection",
  keywords: "React, Next.js, portfolio, blog, front-end, front, sass, github, developer, scss, Korean",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
