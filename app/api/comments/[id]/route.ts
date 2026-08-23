import { NextResponse } from 'next/server';

import { ensureSchema, isDbConfigured, sql } from '@/lib/db';
import { verifyPassword } from '@/lib/comments';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Params = { params: { id: string } };

/** 작성 시 입력한 비밀번호가 맞아야 지울 수 있다. 실제 행은 남기고 deleted_at 만 채운다. */
export async function DELETE(request: Request, { params }: Params) {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ error: '댓글 기능이 연결되지 않았습니다.' }, { status: 503 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }

  let password = '';
  try {
    password = ((await request.json()) as { password?: string }).password ?? '';
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }
  if (!password) {
    return NextResponse.json({ error: '비밀번호를 입력해 주세요.' }, { status: 400 });
  }

  try {
    await ensureSchema();
    const [row] = await sql<{ password_hash: string }[]>`
      select password_hash from comments
       where id = ${id} and deleted_at is null
    `;
    if (!row) return NextResponse.json({ error: '이미 삭제된 댓글입니다.' }, { status: 404 });

    if (!(await verifyPassword(password, row.password_hash))) {
      return NextResponse.json({ error: '비밀번호가 맞지 않습니다.' }, { status: 403 });
    }

    await sql`update comments set deleted_at = now() where id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[comments] DELETE 실패', error);
    return NextResponse.json({ error: '삭제하지 못했습니다.' }, { status: 500 });
  }
}
