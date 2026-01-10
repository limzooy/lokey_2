import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories - LoKey',
  description: '패션, 빈티지, 저도수 술까지, LoKey가 큐레이션하는 카테고리',
};

export default function CategoryPage() {
  const categories = [
    {
      slug: 'fashion',
      name: 'Fashion',
      description: '조용하지만 분명한 스타일의 패션 트렌드',
      count: '12 posts'
    },
    {
      slug: 'vintage',
      name: 'Vintage',
      description: '다시 주목받는 빈티지 무드와 감성',
      count: '8 posts'
    },
    {
      slug: 'low-alcohol',
      name: 'Low Alcohol',
      description: '새로운 음주 문화, 저도수 술의 매력',
      count: '10 posts'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium">
            _Lokey_
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="/about" className="hover:text-neutral-400">About</Link>
            <Link href="/category" className="hover:text-neutral-400">Category</Link>
            <Link href="/contact" className="hover:text-neutral-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-medium mb-4">Categories</h1>
        <p className="text-xl text-neutral-400 mb-12">
          관심 있는 카테고리를 탐색해보세요
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors"
            >
              <h2 className="text-2xl font-medium mb-3">{category.name}</h2>
              <p className="text-neutral-400 mb-4">{category.description}</p>
              <p className="text-sm text-neutral-500">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-400">
              © 2026 Lokey. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
