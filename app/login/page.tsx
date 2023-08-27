'use client'


import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense } from 'react'
import Loading from '../../components/Loaders/loading'

 
import LoginModal from '@/components/Modals/LoginModal'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useLoginModal from '@/hooks/authModal'

export default function Login() {
  const supabase = createClientComponentClient();
  const authModalHandler = useLoginModal();

  return (
    <section className='bg-slate-200 w-full min-h-[100vh] flex justify-center items-center'>
      {/* <div className="flex flex-col w-[400px] p-8 rounded-md gap-2 bg-white shadow-md"> */}

        {/* <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{' '}
          Back
        </Link> */}
      <Suspense fallback={<Loading />}>
      <LoginModal isOpen={authModalHandler.isOpen} onClose={authModalHandler.onClose}>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  // text-rose-900
                  brand: '#0d9488',
                  // text-rose-700
                  brandAccent: '#16a34a', 
                },
              },
            },
          }}
          
          providers={['github', 'google', 'facebook']}
          magicLink
        />
        </LoginModal>
        <section className='h-full w-1/3 flex flex-col gap-4 justify-center rounded-md'>
          <h1 className='text-5xl font-extralight p-2'>Please sign in.</h1>
          <button className='text-4xl font-extralight p-2 rounded-md text-left hover:text-white' onClick={() => authModalHandler.onOpen()}>Log in or register</button>
        </section>
      </Suspense>
        
    </section>
  )
}
