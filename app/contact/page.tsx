import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - LoKey',
  description: 'LoKey에 대한 제안, 협업, 문의를 보내주세요.',
};

export default function ContactPage() {
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
        <h1 className="text-4xl font-medium mb-8">Contact</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Get in Touch</h2>
            <p>
              LoKey에 대한 제안, 협업 문의, 피드백을 보내주세요.
              여러분의 의견은 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Email</h2>
            <p className="text-white">
              wndus7330@naver.com
            </p>
            <p className="text-sm text-neutral-400 mt-2">
              * 이메일은 예시이며, 실제 운영 시 업데이트될 예정입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">협업 문의</h2>
            <p>
              브랜드 협업, 광고 문의, 콘텐츠 제휴에 관심이 있으시다면
              이메일로 간단한 소개와 함께 연락 주시기 바랍니다.
            </p>
            <p className="mt-4 text-neutral-400">
              단, LoKey는 과도한 광고나 직접 판매를 하지 않으며,
              독자의 신뢰를 최우선으로 하는 콘텐츠만을 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Response Time</h2>
            <p>
              영업일 기준 2-3일 내에 답변드립니다.
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
