import type { MetadataRoute } from 'next';

import { categories, getPostsByCategory, sortedPosts } from '@/content/posts';
import { siteUrl, staticPageUpdatedAt } from '@/content/site';

// content/posts.ts 에 글을 추가하면 이 사이트맵에도 자동으로 반영됩니다.
export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = sortedPosts[0]?.date ?? staticPageUpdatedAt;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/category`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: staticPageUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: staticPageUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: staticPageUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: staticPageUpdatedAt,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => {
    const posts = getPostsByCategory(category.slug);

    return {
      url: `${siteUrl}/category/${category.slug}`,
      lastModified: posts[0]?.date ?? latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  const postPages: MetadataRoute.Sitemap = sortedPosts.map((post) => ({
    url: `${siteUrl}/post/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...postPages];
}
