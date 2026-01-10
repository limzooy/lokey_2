<<<<<<< HEAD

import Link from 'next/link';

export default function PrivacyPolicy() {
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
          </nav>
        </div>
      </header>

<<<<<<< HEAD
      <main className="container mx-auto px-6 py-16">
        <article className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">개인정보처리방침</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="lead">최종 업데이트: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">1. 서론</h2>
              <p>
                LoKey("회사", "우리")에 오신 것을 환영합니다. 우리는 귀하의 개인 정보와 프라이버시 권리를 보호하기 위해 최선을 다하고 있습니다. 본 개인정보처리방침은 귀하가 우리 웹사이트를 방문할 때 우리가 귀하의 정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">2. 수집하는 정보</h2>
              <p>
                우리는 귀하가 우리에게 직접 제공하는 정보와 귀하의 서비스 사용을 통해 자동으로 수집되는 정보를 수집합니다. 여기에는 다음이 포함됩니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>개인 정보:</strong> 뉴스레터 구독이나 문의 시 제공할 수 있는 이름, 이메일 주소 및 기타 연락처 정보.</li>
                <li><strong>로그 및 사용 데이터:</strong> 귀하의 IP 주소, 브라우저 유형, 기기 정보, 방문 페이지, 방문 시간 및 날짜를 자동으로 수집합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">3. 쿠키 및 웹 비콘</h2>
              <p>
                다른 웹사이트와 마찬가지로 LoKey는 '쿠키'를 사용합니다. 이 쿠키는 방문자의 기본 설정 및 방문자가 액세스하거나 방문한 웹사이트 페이지를 포함한 정보를 저장하는 데 사용됩니다. 이 정보는 방문자의 브라우저 유형 및/또는 기타 정보를 기반으로 웹 페이지 콘텐츠를 맞춤화하여 사용자 경험을 최적화하는 데 사용됩니다.
              </p>
              <p>
                쿠키에 대한 자세한 내용은 <a href="https://www.cookieconsent.com/what-are-cookies/" className="text-blue-500 hover:underline">"쿠키란 무엇인가"</a> 문서를 참조하십시오.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">4. Google 애드센스 및 DoubleClick DART 쿠키</h2>
              <p>
                우리는 사이트에 광고를 게재하기 위해 Google 애드센스를 사용합니다. Google은 사용자의 이전 방문 기록을 기반으로 광고를 게재하기 위해 쿠키를 사용하는 제3자 공급업체입니다. Google의 DoubleClick DART 쿠키 사용을 통해 Google과 파트너는 우리 사이트 및/또는 인터넷의 다른 사이트 방문 기록을 기반으로 사용자에게 광고를 게재할 수 있습니다.
              </p>
              <p>
                사용자는 <a href="https://adssettings.google.com/authenticated" className="text-blue-500 hover:underline">Google 광고 설정</a> 페이지를 방문하여 DART 쿠키 사용을 거부할 수 있습니다. 자세한 내용은 <a href="https://policies.google.com/technologies/ads" className="text-blue-500 hover:underline">Google의 광고 개인정보 및 약관</a>을 검토하십시오.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">5. 우리의 광고 파트너</h2>
              <p>
                일부 광고 파트너는 우리 사이트에서 쿠키와 웹 비콘을 사용할 수 있습니다. 우리의 광고 파트너는 다음과 같습니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google 애드센스</li>
                {/* 여기에 다른 파트너 추가 */}
              </ul>
              <p>
                각 광고 파트너는 사용자 데이터 정책에 대한 자체 개인정보처리방침을 가지고 있습니다. 더 쉬운 접근을 위해 아래에 해당 개인정보처리방침에 대한 하이퍼링크를 제공합니다.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">Google</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">6. 귀하의 정보 사용 방법</h2>
              <p>
                우리는 수집한 정보를 웹사이트를 제공, 운영 및 유지하고, 귀하의 경험을 개선 및 개인화하며, 귀하가 우리 사이트를 어떻게 사용하는지 이해하고, 귀하와 소통하고, 사기를 방지하는 데 사용합니다. 또한 위에서 설명한 대로 광고 목적으로 이 데이터를 사용합니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">7. 귀하의 데이터 보호 권리</h2>
              <p>
                귀하의 위치에 따라 GDPR 또는 CCPA와 같은 데이터 보호법에 따라 개인 데이터에 접근, 수정 또는 삭제할 권리를 포함한 권리를 가질 수 있습니다. 이러한 권리를 행사하려면 당사에 문의하십시오.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">8. 아동 정보</h2>
              <p>
                당사 서비스는 13세 미만의 어린이를 대상으로 하지 않습니다. 우리는 13세 미만의 어린이로부터 고의로 개인 식별 정보를 수집하지 않습니다. 귀하가 부모 또는 보호자이고 귀하의 자녀가 당사에 개인 정보를 제공했다는 사실을 알고 있는 경우 당사에 문의하십시오.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">9. 본 개인정보처리방침의 변경</h2>
              <p>
                우리는 수시로 개인정보처리방침을 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새 개인정보처리방침을 게시하고 "최종 업데이트" 날짜를 업데이트하여 귀하에게 통지할 것입니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">문의하기</h2>
              <p>
                개인정보처리방침에 대한 질문이나 제안이 있으시면 주저하지 말고 <Link href="/contact" className="text-blue-500 hover:underline">문의하기</Link>를 통해 문의하십시오.
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
  );
}
