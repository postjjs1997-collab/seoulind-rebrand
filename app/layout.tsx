import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEOULIND | 서울산업(주) — 정밀 가공",
  description:
    "서울산업(주) 자동차 부품 정밀 가공. BSM·전동화·조향·파워트레인·드라이브라인, 인증·연혁·품질·연구개발·설비 안내.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
