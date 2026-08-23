'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveEmail } from '../actions';

const fieldStyle =
  'w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full border border-neutral-700 rounded-full py-3 px-6 text-white hover:border-white disabled:text-neutral-600 disabled:border-neutral-800 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? '전송 중...' : '메시지 보내기'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(saveEmail, { errors: {}, message: '' });
  const hasErrors = state.errors && Object.keys(state.errors).length > 0;

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-medium mb-4">Contact Us</h1>
        <p className="text-xl text-neutral-400">
          제안, 협업, 또는 궁금한 점이 있으신가요? 아래 양식을 통해 문의해 주세요.
        </p>
      </div>

      <form action={formAction} className="border border-neutral-800 rounded-2xl p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-neutral-300 mb-2">이름</label>
          <input type="text" id="name" name="name" required className={fieldStyle} />
          {state.errors?.name && (
            <p className="text-red-400 text-sm mt-2">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-neutral-300 mb-2">이메일</label>
          <input type="email" id="email" name="email" required className={fieldStyle} />
          {state.errors?.email && (
            <p className="text-red-400 text-sm mt-2">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-neutral-300 mb-2">메시지</label>
          <textarea id="message" name="message" rows={5} required className={fieldStyle} />
          {state.errors?.message && (
            <p className="text-red-400 text-sm mt-2">{state.errors.message[0]}</p>
          )}
        </div>

        <div className="pt-2">
          <SubmitButton />
        </div>

        {state.message && (
          <p
            className={`text-center text-sm ${hasErrors ? 'text-red-400' : 'text-neutral-300'}`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
