import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "赵维殳 - 深海生命科学研究者",
  description: "赵维殳博士个人网站 - 上海交通大学生命科学技术学院副研究员，专注于深海生命科学、深渊微生物和极端环境生物学研究",
  keywords: "赵维殳,深海生物,马里亚纳海沟,深渊微生物,上海交通大学,生命科学",
  authors: [{ name: "赵维殳" }],
  openGraph: {
    title: "赵维殳 - 深海生命科学研究者",
    description: "上海交通大学生命科学技术学院副研究员，专注于深海生命科学研究",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
