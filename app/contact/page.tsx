<<<<<<< HEAD

'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { saveEmail } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      aria-disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(saveEmail, { errors: null, message: null });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white tracking-wider">
            LoKey
          </Link>
          <nav className="space-x-6">
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
=======
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - LoKey',
  description: 'LoKey에 대한 제안, 협업, 문의를 보내주세요.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium">
            _Lokey_
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="/about" className="hover:text-neutral-400">About</Link>
            <Link href="/category" className="hover:text-neutral-400">Category</Link>
            <Link href="/contact" className="hover:text-neutral-400">Contact</Link>
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
          </nav>
        </div>
      </header>

<<<<<<< HEAD
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-4">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form action={formAction}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                  {state.errors?.name && <p className="text-red-500 text-sm mt-2">{state.errors.name[0]}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                  {state.errors?.email && <p className="text-red-500 text-sm mt-2">{state.errors.email[0]}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"></textarea>
                  {state.errors?.message && <p className="text-red-500 text-sm mt-2">{state.errors.message[0]}</p>}
                </div>
              </div>
              
              <div className="mt-8">
                <SubmitButton />
              </div>
              
              {state.message && (
                 <div className={`mt-6 text-center p-4 rounded-lg ${state.errors ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200' : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200'}`}>
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-16 border-t dark:border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} LoKey. All Rights Reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
=======
      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-medium mb-8">Contact</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Get in Touch</h2>
            <p>
              LoKey에 대한 제안, 협업 문의, 피드백을 보내주세요.
              여러분의 의견은 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Email</h2>
            <p className="text-white">
              limjy0524@naver.com
            </p>
            <p className="text-sm text-neutral-400 mt-2">
              * 이메일은 예시이며, 실제 운영 시 업데이트될 예정입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">협업 문의</h2>
            <p>
              브랜드 협업, 광고 문의, 콘텐츠 제휴에 관심이 있으시다면
              이메일로 간단한 소개와 함께 연락 주시기 바랍니다.
            </p>
            <p className="mt-4 text-neutral-400">
              단, LoKey는 과도한 광고나 직접 판매를 하지 않으며,
              독자의 신뢰를 최우선으로 하는 콘텐츠만을 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Response Time</h2>
            <p>
              영업일 기준 2-3일 내에 답변드립니다.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-400">
              © 2026 Lokey. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
>>>>>>> c08bdfa8a51feba8240a285505323e9d31b2d4cc
  );
}
