'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveEmail } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      {pending ? '전송 중...' : '메시지 보내기'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(saveEmail, { errors: {}, message: '' });

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">제안, 협업, 또는 궁금한 점이 있으신가요? 아래 양식을 통해 문의해 주세요.</p>
          </div>

          <form action={formAction} className="bg-gray-100 dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">이름</label>
              <input type="text" id="name" name="name" required className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
              {state.errors?.name && <p className="text-red-500 dark:text-red-400 text-sm mt-2">{state.errors.name[0]}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">이메일</label>
              <input type="email" id="email" name="email" required className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
              {state.errors?.email && <p className="text-red-500 dark:text-red-400 text-sm mt-2">{state.errors.email[0]}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">메시지</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"></textarea>
              {state.errors?.message && <p className="text-red-500 dark:text-red-400 text-sm mt-2">{state.errors.message[0]}</p>}
            </div>

            <div className="pt-4">
              <SubmitButton />
            </div>

            {state.message && (
               <div className={`mt-5 text-center p-4 rounded-lg text-base ${state.errors && Object.keys(state.errors).length > 0 ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'}`}>
                {state.message}
              </div>
            )}
          </form>
      </div>
    </div>
  );
}
