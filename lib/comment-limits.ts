/**
 * 입력 길이 제한.
 * 클라이언트 폼과 서버 검증이 같은 값을 봐야 하므로 별도 파일로 뺐다.
 * (서버 전용 모듈인 lib/comments.ts 를 클라이언트가 import 하면
 *  bcryptjs·crypto 가 브라우저 번들에 딸려 들어간다)
 */
export const LIMITS = {
  nickname: { min: 1, max: 20 },
  body: { min: 2, max: 1000 },
  password: { min: 4, max: 72 },
} as const;
