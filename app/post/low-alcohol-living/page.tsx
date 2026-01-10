import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "요즘 20대가 '저도수 술'을 선택하는 이유 - LoKey",
  description: '취하기보다 즐기는, 새로운 음주 문화의 시작.',
  openGraph: {
    title: "요즘 20대가 '저도수 술'을 선택하는 이유",
    description: '취하기보다 즐기는, 새로운 음주 문화의 시작.',
  },
};

export default function LowAlcoholPostPage() {
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
        <Link href="/category/low-alcohol" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
          ← Low Alcohol
        </Link>

        <div className="mb-8">
          <p className="text-sm text-neutral-500 mb-4">2026.01.08</p>
          <h1 className="text-4xl font-medium mb-4">
            요즘 20대가 &apos;저도수 술&apos;을 선택하는 이유
          </h1>
          <p className="text-xl text-neutral-400">
            취하기보다 즐기는, 새로운 음주 문화의 시작.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <Image
              src="/post3.png"
              alt="저도수 술"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              과거의 음주 문화는 &apos;빨리, 많이&apos;였다면,
              요즘은 &apos;천천히, 적당히&apos;로 변하고 있다.
              저도수 술이 주목받는 이유는 무엇일까?
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">1. 건강에 대한 관심</h2>
            <p>
              20대도 건강을 생각한다.
              다음 날 컨디션, 장기적인 건강 영향을 고려해
              알코올 도수가 낮은 술을 선택하는 경우가 늘고 있다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">2. 음주의 목적 변화</h2>
            <p>
              술은 이제 &apos;취하기 위한&apos; 것이 아니라 &apos;즐기기 위한&apos; 것이다.
              분위기를 만들고, 대화를 나누는 도구로서의 역할이 중요해졌다.
              그렇기에 적당한 도수의 술이 더 선호된다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">3. 다양한 선택지</h2>
            <p>
              과거에는 저도수 술이라고 하면 막걸리, 와인 정도였다.
              하지만 지금은 하드셀처, 과일주, 논알코올 맥주 등
              다양한 저도수 옵션이 생겨나면서 선택의 폭이 넓어졌다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">4. 소셜 미디어 영향</h2>
            <p>
              감각적인 패키지의 저도수 술은 인스타그램, 틱톡에서 인기를 끈다.
              음료처럼 마시는 가벼운 술은 일상의 소소한 즐거움으로 자리잡고 있다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">결론</h2>
            <p>
              저도수 술의 인기는 단순한 트렌드가 아니라,
              라이프스타일의 변화를 보여준다.
              &apos;건강하게, 적당히, 즐겁게&apos;
              이것이 요즘 세대가 선택한 음주 문화다.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h3 className="text-xl font-medium mb-6">Related Posts</h3>
          <div className="space-y-4">
            <Link href="/post/vintage-finds" className="block p-4 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
              <p className="text-sm text-neutral-500 mb-1">Vintage</p>
              <p className="font-medium">왜 다시 &apos;빈티지 무드&apos;가 주목받고 있을까?</p>
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
