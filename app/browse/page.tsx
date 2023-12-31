import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Suspense } from 'react';
import Loading from '@/components/Loaders/loading';

// export const dynamic = 'force-dynamic'

import FoodList from "@/components/Foods/FoodsList";
import Header from '@/components/Header/Header';

export const revalidate = 30;

export default async function Browse() {

  const supabase = createServerComponentClient({ cookies })

	const { data: { session }} = await supabase.auth.getSession()
  const { data } = await supabase.from('Foods').select()
  
  
	if (!session) {
		redirect('/login')
	}


  return (
    
    <section className='flex flex-col w-full bg-slate-300 min-h-[100vh]'>
    <Header />
      <span className="pt-[0vh]">
        <section className='flex md:hidden min-h-[2rem] mt-[7vh] fixed w-auto p-2 rounded-b-md'>
          <h1 className='text-slate-400 font-semibold text-sm'>Hello, {session.user.email}</h1>
        </section>
        <FoodList data={data ?? []}/>
      </span>
    </section>
    
    )

}