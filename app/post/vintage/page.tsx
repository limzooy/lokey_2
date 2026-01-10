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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/category/vintage" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
          ← Vintage
        </Link>

        <div className="mb-8">
          <p className="text-sm text-neutral-500 mb-4">2026.01.09</p>
          <h1 className="text-4xl font-medium mb-4">
            왜 다시 &apos;빈티지 무드&apos;가 주목받고 있을까?
          </h1>
          <p className="text-xl text-neutral-400">
            새것보다 오래된 것의 가치를 찾는 움직임.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <Image
              src="/post2.png"
              alt="빈티지 무드"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              빈티지는 단순히 &apos;오래된 것&apos;이 아니다.
              시간이 만들어낸 독특한 분위기와 스토리를 담고 있는 아이템을 의미한다.
              요즘 20대는 왜 빈티지에 끌릴까?
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">1. 대량생산에 대한 피로감</h2>
            <p>
              패스트 패션의 시대, 같은 옷을 입은 사람을 거리에서 마주치는 건 어렵지 않다.
              빈티지는 &apos;나만의 것&apos;을 찾고 싶은 욕구를 충족시킨다.
              같은 제품이 두 개 없다는 점이 매력으로 작용한다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">2. 감성과 스토리</h2>
            <p>
              빈티지 제품에는 시간이 쌓인 흔적이 있다.
              낡은 청바지의 색 바램, 가죽 가방의 자연스러운 주름.
              이런 디테일은 새 제품에서는 느낄 수 없는 감성을 전달한다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">3. 환경에 대한 인식</h2>
            <p>
              중고 소비는 단순히 경제적인 이유만이 아니다.
              새로운 제품을 생산하는 과정에서 발생하는 환경 부담을 줄이고,
              이미 존재하는 물건에 새 생명을 불어넣는다는 의미가 있다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">결론</h2>
            <p>
              빈티지는 단순한 트렌드가 아니라,
              소비에 대한 태도 변화를 반영한다.
              새것보다 의미 있는 것, 빠르기보다 오래가는 것.
              이것이 요즘 세대가 빈티지를 선택하는 이유다.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h3 className="text-xl font-medium mb-6">Related Posts</h3>
          <div className="space-y-4">
            <Link href="/post/fashion" className="block p-4 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
              <p className="text-sm text-neutral-500 mb-1">Fashion</p>
              <p className="font-medium">요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점</p>
            </Link>
          </div>
        </div>
      </article>

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
