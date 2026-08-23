import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import {
  categories,
  formatDate,
  getCategory,
  getPostsByCategory,
} from '@/content/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.slug);
  if (!category) return { title: 'Not Found - LoKey' };

  return {
    title: `${category.name} - LoKey`,
    description: category.description,
  };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(category.slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <Link
          href="/category"
          className="text-sm text-neutral-400 hover:text-white mb-4 inline-block transition-colors"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-4xl font-medium mb-4">{category.name}</h1>
        <p className="text-xl text-neutral-400">{category.description}</p>
      </div>

      {categoryPosts.length === 0 ? (
        <p className="text-neutral-500">아직 이 카테고리에 올라온 글이 없습니다.</p>
      ) : (
        <div className="space-y-8">
          {categoryPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="block border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors"
            >
              <time dateTime={post.date} className="text-sm text-neutral-500 mb-2 block">
                {formatDate(post.date)}
              </time>
              <h2 className="text-2xl font-medium mb-3">{post.title}</h2>
              <p className="text-neutral-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
