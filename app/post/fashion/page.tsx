
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점 - LoKey",
  description: '과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.',
  openGraph: {
    title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
    description: '과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.',
  },
};

export default function FashionPostPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <Link href="/category/fashion" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 mb-4 inline-block">
          &larr; Fashion
        </Link>

        <div className="mb-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400 mb-2">2024. 07. 29.</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-4">
            요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-dark max-w-none mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/post1.png"
              alt="LoKey 패션"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-xl">
              최근 20대 사이에서 &apos;로우키(Low-key)&apos;한 스타일이 주목받고 있다.
              과한 로고나 화려한 디자인 대신, 절제된 색감과 깔끔한 실루엣이 선택받는다.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">1. 미니멀한 컬러 팔레트</h2>
              <p>
                블랙, 화이트, 베이지, 그레이. 요즘 20대의 옷장은 이 네 가지 색으로 이루어져 있다.
                화려한 색상보다는 조합이 쉽고, 어디에나 어울리는 기본 색상을 선호한다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">2. 브랜드보다 핏</h2>
              <p>
                로고가 크게 박힌 명품보다, 몸에 잘 맞는 노브랜드 옷을 선택하는 경우가 많다.
                &apos;입었을 때 편하고 자연스러운가&apos;가 구매의 핵심 기준이 되고 있다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">3. 지속 가능한 소비</h2>
              <p>
                빠르게 변하는 트렌드를 좇기보다, 오래 입을 수 있는 베이직 아이템에 투자한다.
                중고 거래 플랫폼을 활용하거나, 빈티지 제품을 찾는 움직임도 늘고 있다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">결론</h2>
              <p>
                요즘 20대의 패션은 &apos;나를 과시하기 위한&apos; 것이 아니라,
                &apos;나를 편안하게 표현하기 위한&apos; 수단으로 변화하고 있다.
                조용하지만 분명한 취향. 이것이 바로 LoKey 패션의 핵심이다.
              </p>
            </section>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Related Posts</h3>
          <div className="space-y-6">
            <Link href="/post/vintage" className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-xl">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">Vintage</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">왜 다시 &apos;빈티지 무드&apos;가 주목받고 있을까?</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
