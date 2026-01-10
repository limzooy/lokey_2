<<<<<<< HEAD

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
=======
import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium">
            _Lokey_
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="/about" className="hover:text-neutral-400">About</Link>
            <Link href="/category" className="hover:text-neutral-400">Category</Link>
            <Link href="/contact" className="hover:text-neutral-400">Contact</Link>
          </nav>
        </div>
      </header>

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
        <h1 className="text-5xl font-medium mb-4">
          요즘 20대의<br />조용한 취향 코드
        </h1>
        <p className="text-xl text-neutral-400">
          로우키하지만 확실한, 우리 세대의 라이프스타일
        </p>
      </section>

      {/* Today's Pick */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-medium">Today&apos;s Pick</h2>
          <div className="flex gap-4 text-sm text-neutral-400">
            <Link href="/category/fashion" className="hover:underline">Fashion</Link>
            <Link href="/category/vintage" className="hover:underline">Vintage</Link>
            <Link href="/category/low-alcohol" className="hover:underline">Low Alcohol</Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="h-40 bg-neutral-800 rounded-xl mb-4" />
              <p className="text-sm text-neutral-400">{post.category}</p>
              <h3 className="font-medium mt-2">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Curated */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-medium">Weekly Curated</h2>
        <div className="border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-medium mb-3">
            요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점
          </h3>
          <p className="text-neutral-400 mb-4">
            조용하지만 분명한 취향의 흐름을 정리했다.
          </p>
          <Link href="/post/fashion" className="underline text-sm hover:text-neutral-400">
            Read more
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-400">
              © 2026 Lokey. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const posts = [
  {
    slug: "fashion",
    title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
    category: "Fashion",
  },
  {
    slug: "vintage",
    title: "왜 다시 '빈티지 무드'가 주목받고 있을까?",
    category: "Vintage",
  },
  {
    slug: "low-alcohol",
    title: "요즘 20대가 '저도수 술'을 선택하는 이유",
    category: "Low Alcohol",
  },
];
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
