
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories - LoKey',
  description: '패션, 빈티지, 저도수 술까지, LoKey가 큐레이션하는 카테고리',
};

export default function CategoryPage() {
  const categories = [
    {
      slug: 'fashion',
      name: 'Fashion',
      description: '조용하지만 분명한 스타일의 패션 트렌드',
      image: '/post1.png',
    },
    {
      slug: 'vintage',
      name: 'Vintage',
      description: '다시 주목받는 빈티지 무드와 감성',
      image: '/post2.png',
    },
    {
      slug: 'low-alcohol',
      name: 'Low Alcohol',
      description: '새로운 음주 문화, 저도수 술의 매력',
      image: '/post3.png',
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Categories</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            관심 있는 카테고리를 탐색해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
                <div className="relative">
                    <div style={{backgroundImage: `url(${category.image})`}} className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
                <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{category.name}</h2>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
