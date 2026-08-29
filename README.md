# LoKey - 요즘 뜬다는 말, 확인해봤습니다

"요즘 이게 유행"이라는 말을 공개 데이터로 직접 확인하고, 그 과정과 한계를 함께 공개하는 미디어

## 프로젝트 개요

- **컨셉**: 트렌드 주장의 데이터 검증. 주제가 아니라 방법이 정체성이다
- **목표**: 통념을 공개 통계로 확인하고, 틀리면 정정 표시를 남기며 고쳐 나가기
- **데이터**: `../lokey-analysis/` 에서 수집·분석 (네이버 데이터랩 주간 자동 수집)
- **수익 모델**: Google AdSense
- **원칙**: 발행 전 반드시 사람이 검토한다 (애드센스 scaled content abuse 방지)

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (권장)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
npm start
```

## 페이지 구조

- `/` - 홈페이지
- `/category` - 카테고리 목록
- `/category/fashion` - 패션 카테고리
- `/category/low-alcohol` - 저도수 술 카테고리
- `/post/[slug]` - 개별 포스트
- `/about` - About 페이지
- `/contact` - Contact 페이지
- `/privacy` - 개인정보 처리방침
- `/terms` - 이용약관

## SEO 최적화

- 각 페이지에 Metadata 구성
- OpenGraph 설정
- 구조화된 내부 링크

## AdSense 준비

- 정책 페이지 완성 (Privacy, Terms, About, Contact)
- 콘텐츠 기반 광고 삽입 가능 구조

## 향후 계획

1. Google AdSense 승인 신청
2. 콘텐츠 추가 (목표: 주 2-3개 포스트)
3. Google Analytics 연동
4. 제휴 링크 추가
5. 브랜드 협업 확대

## License

© 2026 LoKey. All rights reserved.
