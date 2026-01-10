<<<<<<< HEAD

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
          </nav>
        </div>
      </header>

<<<<<<< HEAD
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">화려함 속에서 본질을 찾다.</h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              <strong>LoKey는 섬세한 안목을 가진 분들을 위한 큐레이션 공간입니다.</strong> 우리는 현대적이고 안목 있는 독자들에게 반향을 일으키는, 미묘하지만 의미 있는 트렌드에 집중하는 미디어 플랫폼입니다.
            </p>
          </div>

          <div className="relative w-full h-96 rounded-xl shadow-2xl overflow-hidden mb-16">
            <Image 
              src="/main.png" 
              alt="감각적인 작업 공간" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-center mb-10">우리의 철학: 조용한 럭셔리, 절제된 취향</h2>
            <p>
              덧없는 트렌드와 요란한 선언으로 가득 찬 세상에서, 우리는 지속적이고 의미 있는 것에 집중하기로 했습니다. 우리의 미션은 독자들이 현대 문화의 미묘한 차이를 탐색할 수 있도록 차분하고, 통찰력 있으며, 신뢰할 수 있는 목소리를 제공하는 것입니다. 우리는 시대를 초월하는 빈티지 시계의 매력부터 세련된 저도수 칵테일의 부상까지, 스타일, 역사, 그리고 개인의 웰빙이 교차하는 지점을 탐구합니다.
            </p>
            <p>
              우리는 양보다 질, 화려함보다 본질을 중시하는 안목 있는 개인들의 커뮤니티를 구축하고자 합니다. LoKey는 단순한 매체를 넘어, 보다 의도적이고 조용히 자신감 있는 삶의 방식을 향한 움직임입니다.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">우리가 탐구하는 것들</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-3">변치 않는 패션</h3>
                <p className="text-gray-600 dark:text-gray-400">오래도록 지속되는 스타일과 그 뒤에 숨겨진 이야기를 분석합니다.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-3">빈티지 발견</h3>
                <p className="text-gray-600 dark:text-gray-400">역사와 개성을 지닌 물건들을 큐레이팅하고 기념합니다.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-3">의식적인 소비</h3>
                <p className="text-gray-600 dark:text-gray-400">저도수 라이프스타일과 의식적인 선택을 탐구합니다.</p>
              </div>
            </div>
          </div>

        </div>
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
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
  );
}
