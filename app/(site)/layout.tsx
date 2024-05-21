import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "@/styles/global.scss";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
