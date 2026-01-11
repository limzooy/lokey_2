
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "왜 다시 '빈티지 무드'가 주목받고 있을까? - LoKey",
  description: '새것보다 오래된 것의 가치를 찾는 움직임.',
  openGraph: {
    title: "왜 다시 '빈티지 무드'가 주목받고 있을까?",
    description: '새것보다 오래된 것의 가치를 찾는 움직임.',
  },
};

export default function VintagePostPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <Link href="/category/vintage" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 mb-4 inline-block">
          &larr; Vintage
        </Link>

        <div className="mb-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400 mb-2">2024. 07. 27.</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-4">
            왜 다시 &apos;빈티지 무드&apos;가 주목받고 있을까?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            새것보다 오래된 것의 가치를 찾는 움직임.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-dark max-w-none mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/post2.png"
              alt="빈티지 무드"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-xl">
              빈티지는 단순히 &apos;오래된 것&apos;이 아니다. 시간이 만들어낸 독특한 분위기와 스토리를 담고 있는 아이템을 의미한다. 요즘 20대는 왜 빈티지에 끌릴까?
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">1. 대량생산에 대한 피로감</h2>
              <p>
                패스트 패션의 시대, 같은 옷을 입은 사람을 거리에서 마주치는 건 어렵지 않다. 빈티지는 &apos;나만의 것&apos;을 찾고 싶은 욕구를 충족시킨다. 같은 제품이 두 개 없다는 점이 매력으로 작용한다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">2. 감성과 스토리</h2>
              <p>
                빈티지 제품에는 시간이 쌓인 흔적이 있다. 낡은 청바지의 색 바램, 가죽 가방의 자연스러운 주름. 이런 디테일은 새 제품에서는 느낄 수 없는 감성을 전달한다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">3. 환경에 대한 인식</h2>
              <p>
                중고 소비는 단순히 경제적인 이유만이 아니다. 새로운 제품을 생산하는 과정에서 발생하는 환경 부담을 줄이고, 이미 존재하는 물건에 새 생명을 불어넣는다는 의미가 있다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">결론</h2>
              <p>
                빈티지는 단순한 트렌드가 아니라, 소비에 대한 태도 변화를 반영한다. 새것보다 의미 있는 것, 빠르기보다 오래가는 것. 이것이 요즘 세대가 빈티지를 선택하는 이유다.
              </p>
            </section>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Related Posts</h3>
          <div className="space-y-6">
            <Link href="/post/fashion" className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-xl">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">Fashion</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
