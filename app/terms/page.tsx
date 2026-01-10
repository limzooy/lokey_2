<<<<<<< HEAD

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white tracking-wider">
            LoKey
          </Link>
          <nav className="space-x-6">
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">소개</Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">문의</Link>
=======
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
          </nav>
        </div>
      </header>

<<<<<<< HEAD
      <main className="container mx-auto px-6 py-16">
        <article className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">이용약관</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="lead">최종 업데이트: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">1. 약관 동의</h2>
              <p>
                라이프스타일 및 트렌드 분석 플랫폼인 LoKey("서비스")에 오신 것을 환영합니다. 당사 웹사이트에 접속하거나 사용함으로써 귀하는 본 이용약관("약관") 및 개인정보처리방침에 동의하는 것으로 간주됩니다. 본 약관에 동의하지 않을 경우, 귀하는 본 서비스를 이용할 수 있는 권한이 없습니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">2. 지적 재산권</h2>
              <p>
                본 서비스에 게시된 기사, 텍스트, 그래픽, 이미지, 로고, 소프트웨어를 포함하되 이에 국한되지 않는 모든 콘텐츠는 LoKey 또는 해당 콘텐츠 공급자의 자산이며 국제 저작권 및 상표법의 보호를 받습니다. 당사의 명시적인 사전 서면 동의 없이 콘텐츠를 무단으로 사용, 복제, 수정 또는 배포하는 것은 엄격히 금지됩니다. 여기에는 모든 형태의 데이터 스크래핑, 웹 크롤링 또는 자동화된 데이터 추출이 포함됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">3. 사용자 의무 및 행위</h2>
              <p>
                귀하는 합법적인 목적으로만 서비스를 사용하는 데 동의합니다. 다음과 같은 행위는 금지됩니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>불법적이거나, 명예를 훼손하거나, 음란하거나, 사기성이거나, 타인의 권리를 침해하는 콘텐츠를 게시 또는 전송하는 행위.</li>
                <li>당사의 허가 없이 상업적 제품이나 서비스를 광고하거나 권유하기 위해 서비스를 사용하는 행위.</li>
                <li>서비스 거부 공격과 같이 서비스의 기능을 비활성화, 과부하 또는 손상시킬 수 있는 모든 활동에 참여하는 행위.</li>
                <li>자동화된 스크립트를 사용하여 정보를 수집하거나 서비스와 상호 작용하는 행위.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">4. 제3자 링크 및 광고</h2>
              <p>
                본 서비스에는 Google 애드센스에서 제공하는 광고를 포함하여 제3자 웹사이트 및 서비스에 대한 링크가 포함될 수 있습니다. 당사는 제3자 사이트의 콘텐츠, 개인정보처리방침 또는 관행을 통제, 보증 또는 책임지지 않습니다. 귀하는 제3자 콘텐츠 또는 서비스 사용으로 인해 발생하는 손해나 손실에 대해 당사가 책임을 지지 않음을 인정합니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">5. 보증 부인 및 책임 제한</h2>
              <p>
                본 서비스는 어떠한 종류의 명시적 또는 묵시적 보증 없이 "있는 그대로" 및 "사용 가능한 대로" 제공됩니다. LoKey는 서비스가 중단되지 않거나, 오류가 없거나, 바이러스가 없음을 보증하지 않습니다. 법이 허용하는 최대 한도 내에서 LoKey, 그 임원, 이사 및 직원은 귀하의 서비스 사용 또는 사용 불능으로 인해 발생하는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">6. 면책</h2>
              <p>
                귀하는 귀하의 서비스 사용 또는 본 약관 위반으로 인해 발생하는 합리적인 변호사 수임료를 포함한 모든 청구, 책임, 손해 및 비용에 대해 LoKey 및 그 계열사를 방어하고 면책하며 해를 입히지 않는 데 동의합니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">7. 준거법</h2>
              <p>
                본 약관은 법률의 상충 원칙에 관계없이 서비스가 운영되는 관할권의 법률에 따라 규율되고 해석됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">8. 본 약관의 변경</h2>
              <p>
                당사는 언제든지 본 약관을 수정할 권리가 있습니다. 당사는 이 페이지에 새로운 약관을 게시하고 "최종 업데이트" 날짜를 업데이트하여 사용자에게 변경 사항을 통지할 것입니다. 그러한 변경 후에도 서비스를 계속 사용하는 것은 새로운 약관에 동의하는 것으로 간주됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">문의처 정보</h2>
              <p>
                본 이용약관에 관한 질문은 <Link href="/contact" className="text-blue-500 hover:underline">문의하기</Link>를 통해 문의해 주십시오.
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-16 border-t dark:border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} LoKey. 모든 권리 보유.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">이용약관</Link>
          </div>
        </div>
      </footer>
    </div>
=======
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
  );
}
