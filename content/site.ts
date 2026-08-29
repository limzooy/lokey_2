// ---------------------------------------------------------------------------
// 사이트 전역 설정
//
// 나중에 자체 도메인(예: lokey.co.kr)을 붙이면 아래 기본값만 바꾸거나,
// Vercel 환경변수에 NEXT_PUBLIC_SITE_URL 을 넣어주면 됩니다.
// sitemap.xml, robots.txt, Open Graph 이미지 주소가 전부 이 값을 따라갑니다.
// ---------------------------------------------------------------------------

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lokey-2.vercel.app';

/** 소개·약관처럼 글과 무관한 고정 페이지의 최종 수정일 */
export const staticPageUpdatedAt = '2026-08-29';
