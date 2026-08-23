import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import {
  formatDate,
  getCategory,
  getPost,
  getRelatedPosts,
  posts,
} from '@/content/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Not Found - LoKey' };

  return {
    title: `${post.title} - LoKey`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const related = getRelatedPosts(post.slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href={`/category/${post.category}`}
        className="text-sm text-neutral-400 hover:text-white mb-6 inline-block transition-colors"
      >
        ← {category?.name ?? 'Back'}
      </Link>

      <header className="mb-10">
        <time dateTime={post.date} className="text-sm text-neutral-500 mb-4 block">
          {formatDate(post.date)}
        </time>
        <h1 className="text-4xl font-medium leading-snug mb-4">{post.title}</h1>
        <p className="text-xl text-neutral-400">{post.excerpt}</p>
      </header>

      <div className="mb-12">
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={600}
          className="w-full h-auto rounded-2xl"
          priority
        />
      </div>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p className="text-xl text-neutral-200">{post.lead}</p>

        {post.sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading && (
              <h2 className="text-2xl font-medium text-white mt-10 mb-4">
                {section.heading}
              </h2>
            )}
            <p>{section.body}</p>

            {section.image && (
              <figure className="mt-8">
                <Image
                  src={section.image}
                  alt={section.imageAlt ?? ''}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-2xl border border-neutral-800"
                />
                {section.caption && (
                  <figcaption className="mt-3 text-sm text-neutral-500">
                    {section.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>

      {post.sources && post.sources.length > 0 && (
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h2 className="text-sm font-medium text-neutral-400 mb-4">데이터 출처</h2>
          <ul className="space-y-2 text-sm">
            {post.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-20 pt-8 border-t border-neutral-800">
          <h2 className="text-xl font-medium mb-6">Related Posts</h2>
          <div className="space-y-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/post/${item.slug}`}
                className="block p-6 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-colors"
              >
                <p className="text-sm text-neutral-500 mb-1">
                  {getCategory(item.category)?.name}
                </p>
                <p className="font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
