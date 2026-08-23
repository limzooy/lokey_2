import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { categories } from "@/content/posts";
import { siteUrl } from "@/content/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LoKey - 조용한 취향 코드",
  description: "20-30대가 조용히 소비하는 패션·빈티지·저도수 라이프스타일 트렌드를 큐레이션하는 미디어 플랫폼",
  keywords: ['패션', '빈티지', '저도수 술', '라이프스타일', '트렌드', 'quiet luxury', 'lokey'],
  openGraph: {
    title: 'LoKey - 조용한 취향 코드',
    description: '로우키하지만 확실한, 우리의 라이프스타일',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-5695434271475936',
  },
};

const navLinkStyle = "text-neutral-400 hover:text-white transition-colors";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/*
          애드센스 로더는 next/script 가 아니라 <head> 안의 순수 script 태그로 둔다.
          next/script 를 쓰면 태그에 data-nscript 속성이 붙어 애드센스가
          "AdSense head tag doesn't support data-nscript attribute" 경고를 낸다.
          (afterInteractive / beforeInteractive 둘 다 동일)
        */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5695434271475936"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-black text-neutral-200`}>
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-medium tracking-wider text-white">
              LoKey
            </Link>

            <nav className="hidden md:flex items-center space-x-8 text-sm">
              <Link href="/" className={navLinkStyle}>홈</Link>
              <Link href="/about" className={navLinkStyle}>소개</Link>
              <div className="relative group py-2">
                <Link href="/category" className={navLinkStyle}>카테고리</Link>
                <div className="absolute left-0 top-full w-40 bg-black border border-neutral-800 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                    >
                      {category.korean}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact" className={navLinkStyle}>문의</Link>
            </nav>

            {/* 모바일: 드롭다운 대신 카테고리를 한 줄로 펼쳐 보여준다 */}
            <nav className="flex md:hidden items-center gap-4 text-sm">
              <Link href="/category" className={navLinkStyle}>카테고리</Link>
              <Link href="/about" className={navLinkStyle}>소개</Link>
              <Link href="/contact" className={navLinkStyle}>문의</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-neutral-800 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div>
                <Link href="/" className="text-xl font-medium tracking-wider text-white">
                  LoKey
                </Link>
                <p className="text-neutral-500 mt-2 text-sm">조용한 럭셔리, 절제된 취향.</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/about" className={navLinkStyle}>소개</Link>
                <Link href="/contact" className={navLinkStyle}>문의</Link>
                <Link href="/privacy" className={navLinkStyle}>개인정보처리방침</Link>
                <Link href="/terms" className={navLinkStyle}>이용약관</Link>
              </div>
            </div>
            <div className="mt-8 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
              <p>&copy; {new Date().getFullYear()} LoKey. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
