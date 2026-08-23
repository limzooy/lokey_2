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
