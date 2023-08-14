import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { motion } from 'framer-motion'
export const dynamic = 'force-dynamic'

interface IndexProps {
  children: React.ReactNode
}

const Index: React.FC<IndexProps> = async ({children}) => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
      <section className='grid m-auto bg-slate-200 w-full h-full items-center justify-center'>
      <h1
        className='text-5xl font-extralight'
        >
          Home
        </h1>
        {children}
      </section>
  )
}

export default Index;