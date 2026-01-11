
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Low Alcohol - LoKey',
  description: '새로운 음주 문화, 저도수 술의 매력',
};

export default function LowAlcoholCategoryPage() {
  const posts = [
    {
      slug: 'low-alcohol',
      title: "요즘 20대가 '저도수 술'을 선택하는 이유",
      excerpt: '취하기보다 즐기는, 새로운 음주 문화의 시작.',
      date: '2026.01.08'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link href="/category" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl font-medium mb-4">Low Alcohol</h1>
          <p className="text-xl text-neutral-400">
            새로운 음주 문화, 저도수 술의 매력
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
