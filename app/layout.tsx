
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoKey - Quiet Luxury, Low-key Taste.",
  description: "A curated space for the quiet connoisseurs. We are a media platform dedicated to the subtle yet significant trends in fashion, vintage, and low-alcohol lifestyles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white tracking-wider">
              LoKey
            </Link>
            <nav className="space-x-8 hidden md:flex items-center">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
               <div className="relative group">
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none">
                  Categories
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <Link href="/category/fashion" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Fashion</Link>
                  <Link href="/category/vintage" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Vintage</Link>
                  <Link href="/category/low-alcohol" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Low-Alcohol</Link>
                </div>
              </div>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
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
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Quiet Luxury, Low-key Taste.</p>
                </div>
                <div className="flex space-x-6">
                  <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</Link>
                  <Link href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link>
                  <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</Link>
                  <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</Link>
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
