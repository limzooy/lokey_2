
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
          </nav>
        </div>
      </header>

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
  );
}
