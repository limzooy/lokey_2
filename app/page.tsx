
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    slug: 'vintage-finds',
    title: '시간이 흘러도 변치 않는 빈티지의 매력',
    description: '클래식 아이템에 담긴 이야기를 탐구하고, 현대적인 옷장에 자연스럽게 녹여내는 방법을 소개합니다.',
    image: '/post1.png',
    category: 'Vintage',
    categorySlug: 'vintage',
  },
  {
    slug: 'low-alcohol-living',
    title: '음미하고 즐기는: 저도수 칵테일의 부상',
    description: '맛과 경험을 놓치지 않으면서도 세련된, 저도수 음료 가이드.',
    image: '/post3.png',
    category: 'Low-Alcohol',
    categorySlug: 'low-alcohol',
  },
  {
    slug: 'quiet-luxury-fashion',
    title: '일상 패션 속 조용한 럭셔리의 미학',
    description: '품질과 장인정신에 초점을 맞춰, 속삭이듯 큰 울림을 주는 옷장을 만드는 방법.',
    image: '/post2.png',
    category: 'Fashion',
    categorySlug: 'fashion',
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-200">

      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/main.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wider">
            Quiet Luxury, Low-key Taste.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A curated space for the quiet connoisseurs. Discover the subtle yet significant trends in fashion, vintage, and beyond.
          </p>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">최신 포스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link href={`/post/${post.slug}`} key={post.slug}>
                <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                  <div className="relative w-full h-56">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-blue-400 font-semibold text-sm mb-2">{post.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 flex-grow">{post.description}</p>
                    <p className="mt-4 text-white font-semibold self-start">더 알아보기 &rarr;</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">카테고리별로 둘러보기</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/category/fashion" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Fashion
            </Link>
            <Link href="/category/vintage" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Vintage
            </Link>
            <Link href="/category/low-alcohol" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Low-Alcohol
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
