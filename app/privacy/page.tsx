import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - LoKey',
  description: 'LoKey의 개인정보 처리방침',
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-medium mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p className="text-sm text-neutral-400 mb-6">
              최종 수정일: 2026년 1월 10일
            </p>
            <p>
              LoKey(&quot;회사&quot; 또는 &quot;우리&quot;)는 귀하의 개인정보를 중요하게 생각합니다.
              본 개인정보 처리방침은 LoKey 웹사이트를 이용하실 때 수집되는 정보와 그 사용 방법을 설명합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. 수집하는 정보</h2>
            <p className="mb-3">우리는 다음과 같은 정보를 수집할 수 있습니다:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>방문자 통계 (Google Analytics)</li>
              <li>쿠키 및 유사 기술을 통한 웹사이트 이용 데이터</li>
              <li>이메일을 통한 문의 시 제공하는 연락처 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. 정보 사용 목적</h2>
            <p className="mb-3">수집된 정보는 다음과 같은 목적으로 사용됩니다:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>웹사이트 성능 개선 및 사용자 경험 향상</li>
              <li>콘텐츠 큐레이션 및 맞춤화</li>
              <li>문의에 대한 응답</li>
              <li>광고 게재 (Google AdSense)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. 정보 공유</h2>
            <p>
              우리는 귀하의 개인정보를 제3자에게 판매하거나 임대하지 않습니다.
              다만, 법적 요구가 있거나 서비스 제공을 위해 필요한 경우
              (예: Google Analytics, AdSense) 제한적으로 공유될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. 쿠키</h2>
            <p>
              본 웹사이트는 사용자 경험을 개선하고 웹사이트 트래픽을 분석하기 위해 쿠키를 사용합니다.
              브라우저 설정을 통해 쿠키를 거부할 수 있으나, 이 경우 일부 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. 데이터 보안</h2>
            <p>
              우리는 귀하의 개인정보를 보호하기 위해 적절한 보안 조치를 취하고 있습니다.
              그러나 인터넷을 통한 전송은 100% 안전을 보장할 수 없음을 양해해 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. 귀하의 권리</h2>
            <p className="mb-3">귀하는 다음과 같은 권리를 가집니다:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>개인정보 열람, 수정, 삭제 요청</li>
              <li>정보 처리 정지 요청</li>
              <li>데이터 이동권</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. 정책 변경</h2>
            <p>
              본 개인정보 처리방침은 필요에 따라 업데이트될 수 있습니다.
              중요한 변경 사항이 있을 경우 웹사이트를 통해 공지하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. 문의</h2>
            <p>
              개인정보 처리방침에 관한 문의는{' '}
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
