// ---------------------------------------------------------------------------
// LoKey 콘텐츠 데이터
//
// 새 글을 추가하려면 아래 posts 배열에 객체 하나만 추가하면 됩니다.
// 페이지 파일(app/post/[slug], app/category/[slug])은 손댈 필요가 없습니다.
//
//   1. slug     : 주소가 됩니다. /post/<slug>  (영문 소문자·하이픈만)
//   2. category : 아래 categories 배열의 slug 중 하나
//   3. date     : 'YYYY-MM-DD' 형식 하나만 씁니다. 화면 표기는 자동 변환됩니다.
//   4. image    : public/ 폴더에 넣은 이미지 경로
//   5. sections : heading(소제목)은 생략 가능, body는 문단 텍스트
// ---------------------------------------------------------------------------

export type Category = {
  slug: string;
  name: string;
  korean: string;
  description: string;
  image: string;
};

export type Section = {
  heading?: string;
  body: string;
  /** 문단 아래에 넣을 그래프·사진 (public/ 경로) */
  image?: string;
  imageAlt?: string;
  /** 이미지 밑에 작게 붙는 설명 */
  caption?: string;
};

export type Source = {
  label: string;
  url: string;
};

/**
 * 발행 후 사실관계가 바뀌었을 때 글 맨 위에 붙는 정정 알림.
 * 원문을 몰래 고치지 않고 무엇이 틀렸는지 남긴다.
 */
export type Correction = {
  date: string;
  body: string;
  link?: { label: string; slug: string };
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  lead: string;
  sections: Section[];
  /** 데이터 기반 글이면 출처를 남긴다. 독자가 검증할 수 있어야 한다. */
  sources?: Source[];
  correction?: Correction;
};

export const categories: Category[] = [
  {
    slug: 'fashion',
    name: 'Fashion',
    korean: '패션',
    description: '조용하지만 분명한 스타일의 패션 트렌드',
    image: '/post1.png',
  },
  {
    slug: 'vintage',
    name: 'Vintage',
    korean: '빈티지',
    description: '다시 주목받는 빈티지 무드와 감성',
    image: '/post2.png',
  },
  {
    slug: 'low-alcohol',
    name: 'Low Alcohol',
    korean: '저도수',
    description: '새로운 음주 문화, 저도수 술의 매력',
    image: '/post3.png',
  },
];

export const posts: Post[] = [
  {
    slug: 'low-alcohol-data',
    title: "'저도수 술' 트렌드를 국세청 데이터로 검증해봤다",
    excerpt: '20대가 저도수 술을 마신다는 말은 사실일까. 국세통계연보 21년치와 네이버 검색량 11년치를 직접 열어봤다.',
    category: 'low-alcohol',
    date: '2026-08-23',
    image: '/chart-liquor-total.png',
    imageAlt: '2005~2025년 국내 주류 총 출고량 추이',
    lead:
      '요즘 20대는 저도수 술을 마신다고 한다. 이 사이트에도 그런 글을 썼다. 그런데 근거를 댄 적은 없었다. ' +
      '국세청이 매년 내는 국세통계연보에는 주종별 출고량이 그대로 실려 있다. 2005년부터의 숫자를 직접 열어봤다. ' +
      '결론부터 말하면, 통념은 절반만 맞았다.',
    sections: [
      {
        heading: '1. 술을 덜 마신다 — 이건 사실이다',
        body:
          '국내 주류 출고량은 2008년 359만 kL로 정점을 찍은 뒤 내려왔다. 2025년은 299만 kL로 정점 대비 16.9% 적다. ' +
          '2021년의 281만 kL는 코로나 저점이었고 이후 반등했지만, 정점을 회복하지는 못했다. ' +
          '술 소비가 줄고 있다는 이야기는 데이터로 확인된다.',
        image: '/chart-liquor-total.png',
        imageAlt: '2005년부터 2025년까지 국내 주류 총 출고량 추이 그래프',
        caption: '2022~2023년은 주종별 원자료를 확보하지 못해 점선으로 비워뒀다.',
      },
      {
        heading: "2. 그런데 '소주 대신 다른 걸 마신다'는 틀렸다",
        body:
          '여기서 예상이 빗나갔다. 희석식 소주가 전체 출고량에서 차지하는 비중은 2005년 28.64%에서 ' +
          '2021년 29.35%로 오히려 0.71%p 늘었다. 같은 기간 맥주는 56.04%에서 54.69%로 줄었다. ' +
          '소주에서 다른 술로 갈아탄 흔적은 통계에 없다. 소주는 여전히, 오히려 조금 더 마시고 있었다.',
      },
      {
        heading: '3. 늘어난 주종은 있다. 다만 판을 바꾸진 못했다',
        body:
          '증가율만 보면 극적이다. 기타주류는 1,516 kL에서 31,495 kL로 20.8배, 증류식 소주는 6.1배 늘었다. ' +
          '하지만 2021년 기준 기타주류는 전체의 1.12%, 증류식 소주는 0.09%다. ' +
          '기사 제목이 되기 좋은 숫자지만 시장을 바꾼 규모는 아니다. ' +
          '예외는 탁주로, 5.12%에서 12.91%까지 올라 실제로 판도를 움직였다.',
      },
      {
        heading: '4. 진짜 변화는 통계에 잡히지 않는 곳에 있었다',
        body:
          '출고량 통계는 무엇을 몇 리터 마셨는지는 알려주지만, 그 술이 몇 도인지는 알려주지 않는다. ' +
          '참이슬 후레쉬는 2006년 19.8도로 출발해 2012년 17.8도, 2018년 17.2도, 2019년 17도를 거쳐 2024년 16도가 됐다. ' +
          '이 도수를 출고량에 곱해 순알코올로 환산하면 그림이 달라진다. ' +
          '2006년 대비 2021년 소주 출고량은 13.9% 줄었지만, 순알코올 기준으로는 26.1% 줄었다. 감소폭이 거의 두 배다.',
        image: '/chart-soju-alcohol.png',
        imageAlt: '참이슬 후레쉬 도수 변천과 소주 출고량 대비 순알코올 환산량 비교 그래프',
        caption: '도수는 리뉴얼 시점마다 계단식으로 내려간다. 위 칸의 계단이 아래 칸 두 선의 간격을 만든다.',
      },
      {
        heading: '5. 그리고 하이볼 붐은 이미 끝났다',
        body:
          '출고량 통계는 2021년에서 멈춘다. 그 이후를 보려면 다른 자료가 필요하다. ' +
          '네이버 데이터랩으로 20대의 검색량을 2016년부터 2026년 8월까지 뽑았다. ' +
          '그런데 주류 키워드가 하나같이 줄어서, 이게 술에 대한 관심이 식은 것인지 ' +
          '네이버 검색량 자체가 준 것인지 구분되지 않았다. ' +
          "그래서 '날씨'를 대조군으로 같이 요청했다. 날씨 검색량은 같은 기간 오히려 늘었다. " +
          '주류 키워드의 감소는 실제였다.',
      },
      {
        body:
          "날씨로 보정하면 그림이 선명해진다. 20대의 '저도수·하이볼·하드셀처' 검색량은 " +
          '2016년을 100으로 놓을 때 2022년 403까지 치솟았다가 2026년 33으로 내려앉았다. ' +
          '정점 대비 92% 감소이고, 붐이 시작되기도 전인 2016년보다 낮다. ' +
          '소주는 달랐다. 붐도 반등도 없이 100에서 24까지 10년 내내 단조롭게 줄었다. ' +
          '논알코올은 아예 존재감이 없었다. 조회한 11년 내내 소주의 30분의 1 수준을 넘은 적이 없다.',
        image: '/chart-search-trend.png',
        imageAlt: '20대의 저도수·하이볼 검색량과 소주 검색량 추이 (2016~2026)',
        caption: "'날씨' 검색량으로 나눠 네이버 전체 검색량 변동을 보정한 값이다.",
      },
      {
        heading: '6. 그래서 무엇이 달라졌나',
        body:
          "'저도수 트렌드'라는 한 단어 안에 사실은 성격이 다른 두 가지가 섞여 있었다. " +
          '하나는 하이볼이라는 유행이다. 2022년에 정점을 찍고 이미 끝났다. ' +
          '다른 하나는 소주 도수의 하락이다. 20년째 조용히 진행 중이고 지금도 멈추지 않았다. ' +
          '언론이 트렌드라고 보도한 쪽은 전자였지만, 한국인의 음주를 실제로 바꾼 건 후자였다. ' +
          '새 카테고리를 띄우는 것보다 늘 마시던 술의 도수를 낮추는 쪽이 시장에서 통했다는 뜻이기도 하다.',
      },
      {
        heading: '이 분석의 한계',
        body:
          '세 가지를 밝혀둔다. 첫째, 국세통계 출고량은 국내 제조분 기준이라 수입 주류가 빠져 있다. ' +
          '통계상 국내 위스키 출고량이 99% 줄었지만 이를 위스키 소비 감소로 읽으면 오독이다. ' +
          '둘째, 주종별 원자료는 2021년까지만 확보했고 2022~2023년은 비어 있다. ' +
          '셋째, 도수는 참이슬 후레쉬 한 브랜드 기준이다. 희석식 소주 전체의 실제 가중평균 도수는 이보다 높거나 낮을 수 있다. ' +
          '순알코올 26.1% 감소는 정확한 값이 아니라 방향과 크기를 보여주는 추정치로 읽어주시길 바란다. ' +
          '넷째, 검색량은 소비량이 아니다. 하이볼이 익숙해지면 굳이 검색할 이유가 사라진다. ' +
          '검색량 감소를 곧바로 소비 감소로 읽어서는 안 되며, 이 글에서도 관심의 크기로만 해석했다. ' +
          "다섯째, 대조군은 '날씨' 하나뿐이라 완벽한 통제라고 할 수 없다. " +
          '여섯째, 2026년 값은 1~8월만 반영된 것이다.',
      },
    ],
    sources: [
      {
        label: '국세통계연보 주종별 출고량 (2005~2021) — 한국건강증진개발원 절주온',
        url: 'https://www.khepi.or.kr/acs/acsStat/result?menuId=MENU00685&tableGubun=DATA040101',
      },
      {
        label: '국내 주류 출고량 지표 — e-나라지표',
        url: 'https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2824',
      },
      {
        label: '참이슬 도수 변천 연표 — 위키백과',
        url: 'https://ko.wikipedia.org/wiki/참이슬',
      },
      {
        label: '검색어 트렌드 (2016~2026, 20대) — 네이버 데이터랩 오픈 API',
        url: 'https://datalab.naver.com/keyword/trendSearch.naver',
      },
    ],
  },

  {
    slug: 'fashion',
    title: "요즘 20대가 선택하는 'LoKey 패션'의 공통점",
    excerpt: '과하지 않지만 분명한, 요즘 세대의 패션 코드를 분석했다.',
    category: 'fashion',
    date: '2026-01-10',
    image: '/post1.png',
    imageAlt: 'LoKey 패션',
    lead: "최근 20대 사이에서 '로우키(Low-key)'한 스타일이 주목받고 있다. 과한 로고나 화려한 디자인 대신, 절제된 색감과 깔끔한 실루엣이 선택받는다.",
    sections: [
      {
        heading: '1. 미니멀한 컬러 팔레트',
        body: '블랙, 화이트, 베이지, 그레이. 요즘 20대의 옷장은 이 네 가지 색으로 이루어져 있다. 화려한 색상보다는 조합이 쉽고, 어디에나 어울리는 기본 색상을 선호한다.',
      },
      {
        heading: '2. 브랜드보다 핏',
        body: "로고가 크게 박힌 명품보다, 몸에 잘 맞는 노브랜드 옷을 선택하는 경우가 많다. '입었을 때 편하고 자연스러운가'가 구매의 핵심 기준이 되고 있다.",
      },
      {
        heading: '3. 지속 가능한 소비',
        body: '빠르게 변하는 트렌드를 좇기보다, 오래 입을 수 있는 베이직 아이템에 투자한다. 중고 거래 플랫폼을 활용하거나, 빈티지 제품을 찾는 움직임도 늘고 있다.',
      },
      {
        heading: '결론',
        body: "요즘 20대의 패션은 '나를 과시하기 위한' 것이 아니라, '나를 편안하게 표현하기 위한' 수단으로 변화하고 있다. 조용하지만 분명한 취향. 이것이 바로 LoKey 패션의 핵심이다.",
      },
    ],
  },
  {
    slug: 'vintage',
    title: "왜 다시 '빈티지 무드'가 주목받고 있을까?",
    excerpt: '새것보다 오래된 것의 가치를 찾는 움직임.',
    category: 'vintage',
    date: '2026-01-09',
    image: '/post2.png',
    imageAlt: '빈티지 무드',
    lead: "빈티지는 단순히 '오래된 것'이 아니다. 시간이 만들어낸 독특한 분위기와 스토리를 담고 있는 아이템을 의미한다. 요즘 20대는 왜 빈티지에 끌릴까?",
    sections: [
      {
        heading: '1. 대량생산에 대한 피로감',
        body: "패스트 패션의 시대, 같은 옷을 입은 사람을 거리에서 마주치는 건 어렵지 않다. 빈티지는 '나만의 것'을 찾고 싶은 욕구를 충족시킨다. 같은 제품이 두 개 없다는 점이 매력으로 작용한다.",
      },
      {
        heading: '2. 감성과 스토리',
        body: '빈티지 제품에는 시간이 쌓인 흔적이 있다. 낡은 청바지의 색 바램, 가죽 가방의 자연스러운 주름. 이런 디테일은 새 제품에서는 느낄 수 없는 감성을 전달한다.',
      },
      {
        heading: '3. 환경에 대한 인식',
        body: '중고 소비는 단순히 경제적인 이유만이 아니다. 새로운 제품을 생산하는 과정에서 발생하는 환경 부담을 줄이고, 이미 존재하는 물건에 새 생명을 불어넣는다는 의미가 있다.',
      },
      {
        heading: '결론',
        body: '빈티지는 단순한 트렌드가 아니라, 소비에 대한 태도 변화를 반영한다. 새것보다 의미 있는 것, 빠르기보다 오래가는 것. 이것이 요즘 세대가 빈티지를 선택하는 이유다.',
      },
    ],
  },
  {
    slug: 'low-alcohol',
    title: "요즘 20대가 '저도수 술'을 선택하는 이유",
    excerpt: '취하기보다 즐기는, 새로운 음주 문화의 시작.',
    category: 'low-alcohol',
    date: '2026-01-08',
    image: '/post3.png',
    imageAlt: '저도수 술',
    lead: "과거의 음주 문화는 '빨리, 많이'였다면, 요즘은 '천천히, 적당히'로 변하고 있다. 저도수 술이 주목받는 이유는 무엇일까?",
    correction: {
      date: '2026-08-23',
      body:
        '이 글은 소비자가 하드셀처·과일주·논알코올 등 다른 주종으로 옮겨가고 있다고 서술했습니다. ' +
        '이후 국세통계연보의 주종별 출고량을 직접 확인한 결과, 희석식 소주의 비중은 2005년 28.64%에서 ' +
        '2021년 29.35%로 오히려 늘었고, 주종 교체를 뒷받침하는 근거는 확인되지 않았습니다. ' +
        '실제로 확인된 변화는 소주 자체의 도수가 낮아진 것이었습니다. ' +
        '또한 이 글은 하드셀처와 논알코올 맥주를 주요 선택지로 들었으나, ' +
        '네이버 검색어트렌드로 확인한 결과 논알코올은 2016~2026년 내내 소주의 30분의 1 수준을 넘은 적이 없었고, ' +
        "'저도수·하이볼' 관심도는 2022년 정점을 찍은 뒤 2026년에는 붐 이전인 2016년보다도 낮아졌습니다. " +
        '원문은 기록을 위해 고치지 않고 그대로 둡니다.',
      link: {
        label: '국세청 데이터로 검증한 글 보기',
        slug: 'low-alcohol-data',
      },
    },
    sections: [
      {
        heading: '1. 건강에 대한 관심',
        body: '20대도 건강을 생각한다. 다음 날 컨디션, 장기적인 건강 영향을 고려해 알코올 도수가 낮은 술을 선택하는 경우가 늘고 있다.',
      },
      {
        heading: '2. 음주의 목적 변화',
        body: "술은 이제 '취하기 위한' 것이 아니라 '즐기기 위한' 것이다. 분위기를 만들고, 대화를 나누는 도구로서의 역할이 중요해졌다. 그렇기에 적당한 도수의 술이 더 선호된다.",
      },
      {
        heading: '3. 다양한 선택지',
        body: '과거에는 저도수 술이라고 하면 막걸리, 와인 정도였다. 하지만 지금은 하드셀처, 과일주, 논알코올 맥주 등 다양한 저도수 옵션이 생겨나면서 선택의 폭이 넓어졌다.',
      },
      {
        heading: '4. 소셜 미디어 영향',
        body: '감각적인 패키지의 저도수 술은 인스타그램, 틱톡에서 인기를 끈다. 음료처럼 마시는 가벼운 술은 일상의 소소한 즐거움으로 자리잡고 있다.',
      },
      {
        heading: '결론',
        body: "저도수 술의 인기는 단순한 트렌드가 아니라, 라이프스타일의 변화를 보여준다. '건강하게, 적당히, 즐겁게' 이것이 요즘 세대가 선택한 음주 문화다.",
      },
    ],
  },
];

// --- 아래는 페이지들이 쓰는 헬퍼 함수입니다. 보통 수정할 일이 없습니다. ---

/** 최신 글이 앞에 오도록 정렬된 전체 글 목록 */
export const sortedPosts: Post[] = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return sortedPosts.filter((post) => post.category === categorySlug);
}

/** 같은 카테고리 글을 먼저, 모자라면 최신 글로 채워서 관련 글을 고른다 */
export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const current = getPost(slug);
  if (!current) return [];

  const sameCategory = sortedPosts.filter(
    (post) => post.slug !== slug && post.category === current.category
  );
  const others = sortedPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

/** '2026-01-10' -> '2026.01.10' (사이트 전체가 이 표기를 씁니다) */
export function formatDate(date: string): string {
  return date.replaceAll('-', '.');
}
