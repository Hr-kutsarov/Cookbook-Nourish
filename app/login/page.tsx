'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense } from 'react'
import Loading from '../browse/loading'
import Link from 'next/link'
 
import LoginModal from '@/components/Modals/LoginModal'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Login() {
  const supabase = createClientComponentClient();

  useEffect(() => {

  })

  return (
    <section className='bg-slate-600 w-full h-full flex justify-center items-center'>
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
      <LoginModal isOpen>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#881337',
                  brandAccent: '#be123c',
                },
              },
            },
          }}
          
          providers={['github', 'google', 'facebook']}
          magicLink
        />
        </LoginModal>
        </Suspense>
        
    </section>
  )
}
