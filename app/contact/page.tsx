
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
          </nav>
        </div>
      </header>

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
  );
}
