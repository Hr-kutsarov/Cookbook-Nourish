import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Suspense } from 'react';
import Loading from './loading';
// export const dynamic = 'force-dynamic'

import FoodList from "@/components/Foods/FoodsList";

export const revalidate = 30;

export default async function Browse() {

  const supabase = createServerComponentClient({ cookies })

	const { data: { session }} = await supabase.auth.getSession()
  const { data } = await supabase.from('Foods').select()

	if (!session) {
		redirect('/login')
	}

  return (
      <Suspense fallback={<Loading />}>
        <span className='flex flex-col w-full h-auto bg-slate-300'>
            <section className='flex md:hidden bg-slate-50 min-h-[2rem] mt-[4.25rem] fixed w-auto p-2 rounded-b-md'>
            <h1 className='text-slate-400 font-semibold text-sm'>Hello, {session.user.email}</h1>
            </section>
            <span className='bg-slate-300 flex w-full h-200px'>asd</span>
              <FoodList data={data ?? []}/>
        </span>
      </Suspense>
    )
}