import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "진호쌤의 실험교실",
  description: "진호쌤이 직접 설계한 교육용 수학 실험실",
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
