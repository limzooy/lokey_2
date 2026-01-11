
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5695434271475936"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white tracking-wider">
              LoKey
            </Link>
            <nav className="space-x-8 hidden md:flex items-center">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">홈</Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">소개</Link>
               <div className="relative group">
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none">
                  카테고리
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <Link href="/category/fashion" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">패션</Link>
                  <Link href="/category/vintage" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">빈티지</Link>
                  <Link href="/category/low-alcohol" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">저도수</Link>
                </div>
              </div>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">문의</Link>
            </nav>
            {/* Mobile menu button could be added here */}
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-white dark:bg-gray-800 mt-16 border-t dark:border-gray-700">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
                <div>
                  <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">LoKey</Link>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">조용한 럭셔리, 절제된 취향.</p>
                </div>
                <div className="flex space-x-6">
                  <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">소개</Link>
                  <Link href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">문의</Link>
                  <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">개인정보처리방침</Link>
                  <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">이용약관</Link>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
               <p>&copy; {new Date().getFullYear()} LoKey. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
