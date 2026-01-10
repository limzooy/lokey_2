import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - LoKey',
  description: 'LoKey의 이용약관',
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-medium mb-8">Terms of Service</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p className="text-sm text-neutral-400 mb-6">
              최종 수정일: 2026년 1월 10일
            </p>
            <p>
              LoKey 웹사이트를 이용함으로써 귀하는 본 이용약관에 동의하는 것으로 간주됩니다.
              약관에 동의하지 않는 경우 웹사이트 이용을 중단해 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. 서비스 개요</h2>
            <p>
              LoKey는 트렌드 큐레이션 및 분석 콘텐츠를 제공하는 미디어 플랫폼입니다.
              우리는 정보 제공 목적으로만 콘텐츠를 게시하며, 직접적인 제품 판매는 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. 콘텐츠 사용</h2>
            <p className="mb-3">
              LoKey의 모든 콘텐츠는 저작권법의 보호를 받습니다.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>개인적, 비상업적 목적으로만 콘텐츠를 열람할 수 있습니다</li>
              <li>무단 복제, 배포, 수정은 금지됩니다</li>
              <li>출처를 명시한 인용은 허용됩니다</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. 사용자 책임</h2>
            <p className="mb-3">웹사이트를 이용하는 사용자는 다음을 준수해야 합니다:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>법률 및 규정을 위반하는 행위 금지</li>
              <li>타인의 권리를 침해하는 행위 금지</li>
              <li>웹사이트의 정상적인 운영을 방해하는 행위 금지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. 면책 조항</h2>
            <p>
              LoKey는 콘텐츠의 정확성과 신뢰성을 위해 노력하지만,
              모든 정보의 완전성, 정확성, 유용성을 보증하지 않습니다.
              콘텐츠 이용으로 발생하는 결과에 대한 책임은 사용자에게 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. 제휴 링크</h2>
            <p>
              일부 콘텐츠에는 제휴 링크가 포함될 수 있습니다.
              제휴 링크를 통한 구매 시 LoKey는 소정의 수수료를 받을 수 있으나,
              이는 콘텐츠의 객관성에 영향을 미치지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. 광고</h2>
            <p>
              본 웹사이트는 Google AdSense 등의 광고 서비스를 이용합니다.
              광고 내용에 대한 책임은 광고주에게 있으며,
              LoKey는 광고를 통해 제공되는 제품이나 서비스에 대해 보증하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. 서비스 변경 및 중단</h2>
            <p>
              우리는 사전 통지 없이 웹사이트의 내용, 기능, 디자인을 변경하거나
              서비스를 일시적 또는 영구적으로 중단할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. 약관 변경</h2>
            <p>
              본 이용약관은 필요에 따라 수정될 수 있습니다.
              변경된 약관은 웹사이트에 게시된 시점부터 효력이 발생합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. 준거법</h2>
            <p>
              본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">10. 문의</h2>
            <p>
              이용약관에 관한 문의는{' '}
              <Link href="/contact" className="underline hover:text-white">
                Contact 페이지
              </Link>
              를 통해 연락해 주세요.
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
