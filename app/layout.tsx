import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나만의 교육용 웹앱",
  description: "Vercel로 즉시 배포 가능한 교육용 웹앱 보일러플레이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
            {/* 여기에 새로운 섹션이나 레이아웃 요소를 추가하세요 */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
