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
		redirect('/unauthenticated')
	}

  return (
      <Suspense fallback={<Loading />}>
            <h1>Hello, {session.user.email}</h1>
						<span className='text-slate-600'>
              <FoodList data={data ?? []}/>
            </span>
      </Suspense>
    )
}