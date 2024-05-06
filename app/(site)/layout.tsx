import type { Metadata } from "next";
import "@/styles/global.scss";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

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
