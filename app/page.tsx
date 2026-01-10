import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Image
            src="/main.png"
            alt="LoKey Brand Image"
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
        <h1 className="text-5xl font-medium mb-4">
          요즘 20대의<br />조용한 취향 코드
        </h1>
        <p className="text-xl text-neutral-400">
          로우키하지만 확실한, 우리 세대의 라이프스타일
        </p>
      </section>

      {/* Today's Pick */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-medium">Today&apos;s Pick</h2>
          <div className="flex gap-4 text-sm text-neutral-400">
            <Link href="/category/fashion" className="hover:underline">Fashion</Link>
            <Link href="/category/vintage" className="hover:underline">Vintage</Link>
            <Link href="/category/low-alcohol" className="hover:underline">Low Alcohol</Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="h-40 bg-neutral-800 rounded-xl mb-4" />
              <p className="text-sm text-neutral-400">{post.category}</p>
              <h3 className="font-medium mt-2">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Curated */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-medium">Weekly Curated</h2>
        <div className="border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-medium mb-3">
            요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점
          </h3>
          <p className="text-neutral-400 mb-4">
            조용하지만 분명한 취향의 흐름을 정리했다.
          </p>
          <Link href="/post/fashion" className="underline text-sm hover:text-neutral-400">
            Read more
          </Link>
        </div>
      </section>

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

const posts = [
  {
    slug: "fashion",
    title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
    category: "Fashion",
  },
  {
    slug: "vintage",
    title: "왜 다시 '빈티지 무드'가 주목받고 있을까?",
    category: "Vintage",
  },
  {
    slug: "low-alcohol",
    title: "요즘 20대가 '저도수 술'을 선택하는 이유",
    category: "Low Alcohol",
  },
];
