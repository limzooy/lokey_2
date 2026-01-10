import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fashion - LoKey',
  description: '요즘 20대가 선택하는 조용하지만 분명한 패션 트렌드',
};

export default function FashionCategoryPage() {
  const posts = [
    {
<<<<<<< HEAD
      slug: 'quiet-luxury-fashion',
=======
      slug: 'fashion',
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
      title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
      excerpt: '과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.',
      date: '2026.01.10'
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
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link href="/category" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl font-medium mb-4">Fashion</h1>
          <p className="text-xl text-neutral-400">
            조용하지만 분명한 스타일의 패션 트렌드
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="block border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors"
            >
              <p className="text-sm text-neutral-500 mb-2">{post.date}</p>
              <h2 className="text-2xl font-medium mb-3">{post.title}</h2>
              <p className="text-neutral-400">{post.excerpt}</p>
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
