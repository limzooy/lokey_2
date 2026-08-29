import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - LoKey',
  description:
    'LoKey는 "요즘 이게 유행"이라는 말을 국세통계·질병관리청·네이버 데이터랩 같은 공개 데이터로 직접 확인하는 곳입니다. 확인 과정과 한계를 함께 공개합니다.',
};

/** 공개 데이터로 확인할 때 우리가 지키는 규칙. 실제로 냈던 오류에서 나온 것들이다. */
const rules = [
  {
    title: '대조군 없이 읽지 않습니다',
    body:
      '어떤 키워드가 20% 줄었다는 사실만으로는 아무것도 알 수 없습니다. 같은 기간 ' +
      '플랫폼 전체가 15% 줄었다면 그건 사실상 보합입니다. 항상 기준값을 함께 봅니다.',
  },
  {
    title: '전년 같은 달과 비교합니다',
    body:
      '주류와 패션은 계절을 크게 탑니다. 직전 분기와 비교하면 계절 효과를 변화로 ' +
      '착각하게 됩니다.',
  },
  {
    title: '바닥에서의 변화율은 쓰지 않습니다',
    body:
      '검색량이 이미 0에 가까운 키워드는 작은 흔들림도 몇십 퍼센트로 표시됩니다. ' +
      '표본이 얇으면 수치를 싣지 않거나, 얇다는 사실을 함께 적습니다.',
  },
  {
    title: '검색량을 소비량으로 읽지 않습니다',
    body:
      '익숙해진 말은 검색되지 않습니다. 검색이 줄었다는 것은 관심이 식었다는 뜻일 수도, ' +
      '더 이상 찾아볼 필요가 없어졌다는 뜻일 수도 있습니다. 어느 쪽인지는 다른 자료로 확인합니다.',
  },
  {
    title: '한 가지 자료로 결론 내지 않습니다',
    body:
      '검색량으로 실마리를 찾되, 판매·출고·설문처럼 성격이 다른 통계로 교차검증한 뒤에야 ' +
      '글로 옮깁니다.',
  },
];

const sources = [
  '국세청 국세통계연보 — 주류 출고량',
  '질병관리청 지역사회건강조사 — 음주 행태',
  '네이버 데이터랩 — 검색량 추이',
  '통계청 및 업계 보도자료',
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-4xl font-medium mb-4">About LoKey</h1>
        <p className="text-xl text-neutral-400">
          요즘 뜬다는 말, 공개 데이터로 확인해봤습니다
        </p>
      </div>

      <div className="space-y-8 text-neutral-300 leading-relaxed">
        <section className="border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-white mb-4">우리가 하는 일</h2>
          <p className="mb-4">
            &ldquo;요즘 20대는 술을 안 마신다&rdquo;, &ldquo;조용한 럭셔리가 대세다&rdquo;.
            이런 말은 매일 쏟아지지만 근거는 좀처럼 따라오지 않습니다.
          </p>
          <p>
            LoKey는 그 말을 공개 데이터로 직접 열어봅니다. 결과가 통념과 같으면 같다고,
            다르면 다르다고 씁니다. 대체로는 <strong className="text-white">절반만 맞습니다</strong>.
            흥미로운 부분은 늘 그 나머지 절반에 있었습니다.
          </p>
        </section>

        <section className="border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-white mb-4">무엇으로 확인하나</h2>
          <p className="mb-4">
            누구나 열어볼 수 있는 공개 통계만 씁니다. 글마다 출처를 링크로 남기므로
            같은 자료로 직접 확인해보실 수 있습니다.
          </p>
          <ul className="space-y-3">
            {sources.map((source) => (
              <li key={source} className="flex items-start">
                <span className="text-neutral-500 mr-3">—</span>
                {source}
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-white mb-4">우리가 지키는 규칙</h2>
          <p className="mb-6 text-neutral-400">
            데이터를 잘못 읽는 방법은 생각보다 많습니다. 아래는 실제로 저희가 냈던
            오류에서 나온 규칙들입니다.
          </p>
          <ul className="space-y-6">
            {rules.map((rule) => (
              <li key={rule.title}>
                <p className="text-white mb-1">{rule.title}</p>
                <p className="text-neutral-400 text-[0.95rem]">{rule.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-white mb-4">틀리면 고칩니다</h2>
          <p className="mb-4">
            이 사이트의 초기 글들은 근거 없이 일반론을 서술한 것이었습니다. 지금은 전부
            데이터로 다시 쓰고, 무엇을 어떻게 고쳤는지 글 맨 위에 정정 표시로 남겨두었습니다.
          </p>
          <p>
            글을 조용히 수정하지 않습니다. 새로운 자료가 나와 결론이 바뀌면 그 사실을
            글에 남깁니다. 모든 글은 <strong className="text-white">「이 분석의 한계」</strong>로
            끝납니다 — 저희가 확인하지 못한 것이 무엇인지 밝히기 위해서입니다.
          </p>
        </section>

        <section className="border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-medium text-white mb-4">제안과 반론</h2>
          <p className="mb-6">
            분석이 틀렸다고 생각하시면 알려주세요. 근거가 있으면 글을 고치고 정정 표시를
            남기겠습니다. 확인해볼 만한 주장 제보도 환영합니다.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-neutral-700 rounded-full py-3 px-8 text-white hover:border-white transition-colors"
          >
            Contact 페이지로 이동
          </Link>
        </section>
      </div>
    </div>
  );
}
