import { NextResponse } from 'next/server';

import { ensureSchema, isDbConfigured, sql } from '@/lib/db';
import { clientIp, hashIp, hashPassword, validate } from '@/lib/comments';
import { getPost } from '@/content/posts';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** 같은 IP 에서 1분 안에 이 개수를 넘기면 막는다. */
const RATE_LIMIT = { windowMinutes: 1, max: 3 };

function dbOff() {
  return NextResponse.json(
    { error: '댓글 기능이 아직 연결되지 않았습니다.' },
    { status: 503 }
  );
}

export async function GET(request: Request) {
  if (!isDbConfigured || !sql) return NextResponse.json({ comments: [] });

  const slug = new URL(request.url).searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });

  try {
    await ensureSchema();
    const rows = await sql`
      select id, nickname, body, created_at
        from comments
       where post_slug = ${slug}
         and deleted_at is null
       order by created_at asc
       limit 200
    `;
    return NextResponse.json({ comments: rows });
  } catch (error) {
    console.error('[comments] GET 실패', error);
    return NextResponse.json({ error: '댓글을 불러오지 못했습니다.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isDbConfigured || !sql) return dbOff();

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }

  const checked = validate(payload as Record<string, string>);
  if (!checked.ok) return NextResponse.json({ error: checked.error }, { status: 400 });

  const { slug, nickname, body, password } = checked.value;
  if (!getPost(slug)) {
    return NextResponse.json({ error: '존재하지 않는 글입니다.' }, { status: 404 });
  }

  const ip = hashIp(clientIp(request.headers));

  try {
    await ensureSchema();

    if (ip) {
      const [{ count }] = await sql<{ count: string }[]>`
        select count(*) from comments
         where ip_hash = ${ip}
           and created_at > now() - ${`${RATE_LIMIT.windowMinutes} minutes`}::interval
      `;
      if (Number(count) >= RATE_LIMIT.max) {
        return NextResponse.json(
          { error: '너무 빠르게 작성하고 있습니다. 잠시 후 다시 시도해 주세요.' },
          { status: 429 }
        );
      }
    }

    const [row] = await sql`
      insert into comments (post_slug, nickname, body, password_hash, ip_hash)
      values (${slug}, ${nickname}, ${body}, ${await hashPassword(password)}, ${ip})
      returning id, nickname, body, created_at
    `;
    return NextResponse.json({ comment: row }, { status: 201 });
  } catch (error) {
    console.error('[comments] POST 실패', error);
    return NextResponse.json({ error: '댓글을 저장하지 못했습니다.' }, { status: 500 });
  }
}
