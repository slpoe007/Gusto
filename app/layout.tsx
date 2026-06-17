import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "格时图 GustoTechnik | 赛车配件与赛事服务",
  description:
    "格时图集团（Gusto Group）——中国领先的赛车配件供应商与TCR赛车亚洲官方经销商。代理ALCON、Öhlins、Millers Oils等全球顶级品牌，旗下捷凯车队6年13冠。香港·北京·深圳·肇庆。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${orbitron.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
