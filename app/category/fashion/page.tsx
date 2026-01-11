
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fashion - LoKey',
  description: '요즘 20대가 선택하는 조용하지만 분명한 패션 트렌드',
};

export default function FashionCategoryPage() {
  const posts = [
    {
      slug: 'fashion',
      title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
      excerpt: '과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.',
      date: '2026.01.10'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
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
    </main>
  );
}
