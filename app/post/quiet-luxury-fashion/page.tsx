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
        <Link href="/category/fashion" className="text-sm text-neutral-400 hover:text-white mb-4 inline-block">
          ← Fashion
        </Link>

        <div className="mb-8">
          <p className="text-sm text-neutral-500 mb-4">2026.01.10</p>
          <h1 className="text-4xl font-medium mb-4">
            요즘 20대가 선택하는 &apos;LoKey 패션&apos;의 공통점
          </h1>
          <p className="text-xl text-neutral-400">
            과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <Image
              src="/post1.png"
              alt="LoKey 패션"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              최근 20대 사이에서 &apos;로우키(Low-key)&apos;한 스타일이 주목받고 있다.
              과한 로고나 화려한 디자인 대신, 절제된 색감과 깔끔한 실루엣이 선택받는다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">1. 미니멀한 컬러 팔레트</h2>
            <p>
              블랙, 화이트, 베이지, 그레이. 요즘 20대의 옷장은 이 네 가지 색으로 이루어져 있다.
              화려한 색상보다는 조합이 쉽고, 어디에나 어울리는 기본 색상을 선호한다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">2. 브랜드보다 핏</h2>
            <p>
              로고가 크게 박힌 명품보다, 몸에 잘 맞는 노브랜드 옷을 선택하는 경우가 많다.
              &apos;입었을 때 편하고 자연스러운가&apos;가 구매의 핵심 기준이 되고 있다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">3. 지속 가능한 소비</h2>
            <p>
              빠르게 변하는 트렌드를 좇기보다, 오래 입을 수 있는 베이직 아이템에 투자한다.
              중고 거래 플랫폼을 활용하거나, 빈티지 제품을 찾는 움직임도 늘고 있다.
            </p>

            <h2 className="text-2xl font-medium text-white mt-8 mb-4">결론</h2>
            <p>
              요즘 20대의 패션은 &apos;나를 과시하기 위한&apos; 것이 아니라,
              &apos;나를 편안하게 표현하기 위한&apos; 수단으로 변화하고 있다.
              조용하지만 분명한 취향. 이것이 바로 LoKey 패션의 핵심이다.
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
