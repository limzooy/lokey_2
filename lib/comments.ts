import bcrypt from 'bcryptjs';
import { createHash } from 'crypto';

import { LIMITS } from './comment-limits';

export { LIMITS };

export type CommentInput = {
  slug: string;
  nickname: string;
  body: string;
  password: string;
};

/** 사용자 입력 검증. 통과하면 다듬은 값을, 실패하면 사람이 읽을 메시지를 돌려준다. */
export function validate(input: Partial<CommentInput>):
  | { ok: true; value: CommentInput }
  | { ok: false; error: string } {
  const slug = (input.slug ?? '').trim();
  const nickname = (input.nickname ?? '').trim();
  const body = (input.body ?? '').trim();
  const password = input.password ?? '';

  if (!slug) return { ok: false, error: '잘못된 요청입니다.' };
  if (nickname.length < LIMITS.nickname.min || nickname.length > LIMITS.nickname.max)
    return { ok: false, error: `닉네임은 1~${LIMITS.nickname.max}자로 입력해 주세요.` };
  if (body.length < LIMITS.body.min || body.length > LIMITS.body.max)
    return { ok: false, error: `댓글은 2~${LIMITS.body.max}자로 입력해 주세요.` };
  if (password.length < LIMITS.password.min || password.length > LIMITS.password.max)
    return { ok: false, error: `비밀번호는 ${LIMITS.password.min}자 이상 입력해 주세요.` };

  return { ok: true, value: { slug, nickname, body, password } };
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * IP 는 원문으로 저장하지 않는다. 도배 차단에 필요한 만큼만 해시로 남긴다.
 * COMMENT_IP_SALT 를 설정하면 더 안전하다.
 */
export function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  const salt = process.env.COMMENT_IP_SALT ?? 'lokey';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

export function clientIp(headers: Headers): string | null {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return headers.get('x-real-ip');
}
