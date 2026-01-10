
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
          </nav>
        </div>
      </header>

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
  );
}
