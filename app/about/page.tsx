import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - LoKey',
  description: 'LoKey는 20-30대가 조용히 소비하는 패션·빈티지·저도수 라이프스타일 트렌드를 큐레이션하는 미디어 플랫폼입니다.',
};

export default function AboutPage() {
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

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-medium mb-8">About LoKey</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">우리는</h2>
            <p>
              LoKey는 조용하지만 분명한 취향을 가진 20-30대를 위한 트렌드 큐레이션 미디어입니다.
              과한 광고나 클릭을 유도하지 않고, 신뢰할 수 있는 정보와 해석을 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">우리가 다루는 것</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>미니멀하고 절제된 패션 트렌드</li>
              <li>빈티지와 지속 가능한 소비 문화</li>
              <li>저도수 술과 새로운 음주 문화</li>
              <li>조용한 럭셔리와 라이프스타일</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">우리의 철학</h2>
            <p>
              우리는 제품을 직접 판매하지 않습니다.
              대신 트렌드를 분석하고, 의미를 해석하며, 가치 있는 정보를 큐레이션합니다.
              독자의 신뢰를 최우선으로 생각합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Contact</h2>
            <p>
              제안, 협업, 문의는 <Link href="/contact" className="underline hover:text-white">Contact 페이지</Link>를 통해 연락해 주세요.
            </p>
          </section>
        </div>
      </div>

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
