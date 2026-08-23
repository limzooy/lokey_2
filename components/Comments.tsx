'use client';

import { useCallback, useEffect, useState } from 'react';

import { LIMITS } from '@/lib/comment-limits';

type Comment = {
  id: number;
  nickname: string;
  body: string;
  created_at: string;
};

const fieldStyle =
  'w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2.5 px-3 text-white ' +
  'placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors';

function formatWhen(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [body, setBody] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      const data = await res.json();
      setComments(data.comments ?? []);
    } catch {
      // 목록을 못 불러와도 작성 폼은 그대로 둔다
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    load();
  }, [load]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setPending(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, nickname, password, body }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? '댓글을 남기지 못했습니다.');
        return;
      }
      setComments((prev) => [...prev, data.comment]);
      setBody('');
      setPassword('');
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setPending(false);
    }
  }

  async function remove(id: number) {
    const input = window.prompt('작성할 때 입력한 비밀번호를 입력해 주세요.');
    if (!input) return;
    const res = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: input }),
    });
    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    } else {
      const data = await res.json().catch(() => ({}));
      window.alert(data.error ?? '삭제하지 못했습니다.');
    }
  }

  return (
    <section className="mt-16 pt-8 border-t border-neutral-800">
      <h2 className="text-xl font-medium mb-6">
        댓글 {comments.length > 0 && <span className="text-neutral-500">{comments.length}</span>}
      </h2>

      {loading ? (
        <p className="text-sm text-neutral-500 mb-8">불러오는 중...</p>
      ) : comments.length === 0 ? (
        <p className="text-sm text-neutral-500 mb-8">아직 댓글이 없습니다. 첫 댓글을 남겨보세요.</p>
      ) : (
        <ul className="space-y-5 mb-10">
          {comments.map((comment) => (
            <li key={comment.id} className="border border-neutral-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-medium text-white">{comment.nickname}</span>
                  <time dateTime={comment.created_at} className="text-xs text-neutral-500">
                    {formatWhen(comment.created_at)}
                  </time>
                </div>
                <button
                  type="button"
                  onClick={() => remove(comment.id)}
                  className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  삭제
                </button>
              </div>
              {/* React 가 자동으로 이스케이프한다. dangerouslySetInnerHTML 을 쓰지 말 것. */}
              <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap break-words">
                {comment.body}
              </p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={submit} className="border border-neutral-800 rounded-2xl p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={LIMITS.nickname.max}
            placeholder="닉네임"
            required
            className={fieldStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={LIMITS.password.min}
            maxLength={LIMITS.password.max}
            placeholder="비밀번호 (삭제할 때 필요합니다)"
            required
            className={fieldStyle}
          />
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          maxLength={LIMITS.body.max}
          placeholder="댓글을 남겨주세요."
          required
          className={fieldStyle}
        />
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-neutral-600">
            {body.length} / {LIMITS.body.max}
          </span>
          <button
            type="submit"
            disabled={pending}
            className="border border-neutral-700 rounded-full py-2.5 px-7 text-white hover:border-white
                       disabled:text-neutral-600 disabled:border-neutral-800 disabled:cursor-not-allowed
                       transition-colors"
          >
            {pending ? '남기는 중...' : '댓글 남기기'}
          </button>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </section>
  );
}
