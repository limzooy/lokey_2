
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - LoKey',
  description: 'LoKey는 20-30대가 조용히 소비하는 패션·빈티지·저도수 라이프스타일 트렌드를 큐레이션하는 미디어 플랫폼입니다.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">About LoKey</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">조용한 취향, 깊이 있는 라이프스타일</p>
        </div>

        <div className="space-y-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">우리는</h2>
            <p>
              LoKey는 조용하지만 분명한 취향을 가진 20-30대를 위한 트렌드 큐레이션 미디어입니다.
              과한 광고나 클릭을 유도하지 않고, 신뢰할 수 있는 정보와 해석을 제공합니다.
            </p>
          </section>

          <section className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">우리가 다루는 것</h2>
            <ul className="space-y-4 list-disc list-inside text-left">
              <li className="flex items-start"><span className="text-indigo-500 dark:text-indigo-400 font-bold mr-3">✓</span>미니멀하고 절제된 패션 트렌드</li>
              <li className="flex items-start"><span className="text-indigo-500 dark:text-indigo-400 font-bold mr-3">✓</span>빈티지와 지속 가능한 소비 문화</li>
              <li className="flex items-start"><span className="text-indigo-500 dark:text-indigo-400 font-bold mr-3">✓</span>저도수 술과 새로운 음주 문화</li>
              <li className="flex items-start"><span className="text-indigo-500 dark:text-indigo-400 font-bold mr-3">✓</span>조용한 럭셔리와 라이프스타일</li>
            </ul>
          </section>

          <section className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">우리의 철학</h2>
            <p>
              우리는 제품을 직접 판매하지 않습니다.
              대신 트렌드를 분석하고, 의미를 해석하며, 가치 있는 정보를 큐레이션합니다.
              독자의 신뢰를 최우선으로 생각합니다.
            </p>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-xl">
              제안, 협업, 문의는 언제나 환영합니다.
            </p>
            <Link href="/contact" className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
              Contact 페이지로 이동
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
