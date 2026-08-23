import Link from 'next/link';
import type { Metadata } from 'next';

import { categories, getPostsByCategory } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Categories - LoKey',
  description: '패션, 빈티지, 저도수 술까지, LoKey가 큐레이션하는 카테고리',
};

export default function CategoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-4xl font-medium mb-4">Categories</h1>
        <p className="text-xl text-neutral-400">관심 있는 카테고리를 탐색해보세요.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const count = getPostsByCategory(category.slug).length;

          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors"
            >
              <div
                style={{ backgroundImage: `url(${category.image})` }}
                className="h-48 bg-cover bg-center"
              />
              <div className="p-6">
                <h2 className="text-2xl font-medium mb-2">{category.name}</h2>
                <p className="text-neutral-400 mb-4">{category.description}</p>
                <p className="text-sm text-neutral-500">{count}개의 글</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
