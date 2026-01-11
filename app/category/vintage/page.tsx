
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vintage - LoKey',
  description: '다시 주목받는 빈티지 무드와 감성',
};

export default function VintageCategoryPage() {
  const posts = [
    {
      slug: 'vintage',
      title: "왜 다시 '빈티지 무드'가 주목받고 있을까?",
      excerpt: '새것보다 오래된 것의 가치를 찾는 움직임.',
      date: '2026.01.09'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link href="/category" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl font-medium mb-4">Vintage</h1>
          <p className="text-xl text-neutral-400">
            다시 주목받는 빈티지 무드와 감성
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
