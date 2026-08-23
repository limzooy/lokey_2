import Link from 'next/link';
import Image from 'next/image';

import { categories, formatDate, getCategory, sortedPosts } from '@/content/posts';

export default function Homepage() {
  const [featured] = sortedPosts;

  return (
    <>
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
        <h1 className="text-5xl font-medium mb-4">Quiet Taste Code_Lokey</h1>
        <p className="text-xl text-neutral-400">
          로우키하지만 확실한, 우리의 라이프스타일
        </p>
      </section>

      {/* Today's Pick */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-medium">Today&apos;s Pick</h2>
          <div className="flex gap-4 text-sm text-neutral-400">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={post.image}
                  alt={`${post.title} thumbnail`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-neutral-400">
                {getCategory(post.category)?.name}
              </p>
              <h3 className="font-medium mt-2">{post.title}</h3>
              <time dateTime={post.date} className="text-sm text-neutral-500 mt-2 block">
                {formatDate(post.date)}
              </time>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Curated */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
          <h2 className="text-2xl font-medium">Weekly Curated</h2>
          <div className="border border-neutral-800 rounded-2xl p-8">
            <h3 className="text-xl font-medium mb-3">{featured.title}</h3>
            <p className="text-neutral-400 mb-4">{featured.excerpt}</p>
            <Link
              href={`/post/${featured.slug}`}
              className="underline text-sm hover:text-neutral-400 transition-colors"
            >
              Read more
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
