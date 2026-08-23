import postgres from 'postgres';

/**
 * 댓글 저장용 Postgres 연결.
 *
 * DATABASE_URL 이 없으면 null 을 돌려준다. 이때 댓글 기능만 꺼지고
 * 사이트 나머지는 그대로 동작한다. (DB 를 붙이기 전에도 배포가 깨지지 않도록)
 *
 * 서버리스 환경이라 커넥션이 금방 쌓인다. 반드시 풀러(pooler) 주소를 쓸 것.
 *  - Neon:     ...-pooler.<region>.aws.neon.tech
 *  - Supabase: ...pooler.supabase.com:6543
 */
const connectionString =
  process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? null;

type Sql = ReturnType<typeof postgres>;

declare global {
  // 개발 중 핫리로드로 커넥션이 계속 새로 생기는 것을 막는다
  // eslint-disable-next-line no-var
  var __lokeySql: Sql | null | undefined;
}

function create(): Sql | null {
  if (!connectionString) return null;
  return postgres(connectionString, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false,
  });
}

export const sql: Sql | null = global.__lokeySql ?? create();
if (process.env.NODE_ENV !== 'production') global.__lokeySql = sql;

export const isDbConfigured = sql !== null;

let schemaReady: Promise<void> | null = null;

/** 첫 요청 때 한 번만 테이블을 만든다. 별도 마이그레이션 도구 없이 운영하기 위함. */
export function ensureSchema(): Promise<void> {
  if (!sql) return Promise.resolve();
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        create table if not exists comments (
          id            bigserial primary key,
          post_slug     text        not null,
          nickname      text        not null,
          body          text        not null,
          password_hash text        not null,
          ip_hash       text,
          created_at    timestamptz not null default now(),
          deleted_at    timestamptz
        )
      `;
      await sql`
        create index if not exists comments_slug_created_idx
          on comments (post_slug, created_at desc)
      `;
    })().catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}
