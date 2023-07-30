import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
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
		<span className="p-4 rounded-lg bg-white min-w-[60%] m-4">
            <h1>Hello, {session.user.email}</h1>
						<span className='text-slate-600'>
                {/* {foods?.map((item) => (
                    <div className='grid grid-cols-5' key={item.id}>
                    <p>{item.id} - {item.name}</p>
                    <p>{item.fats}</p>
                    <p>{item.calories}</p>
                    <p>{item.proteins}</p>
                    <p>{item.carbs}</p>
                    </div>
                ))} */}
                <FoodList data={data ?? []}/>
            </span>
        </span>
    )
}