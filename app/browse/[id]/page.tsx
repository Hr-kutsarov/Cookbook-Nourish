// import supabase from "@/app/utils/supabase";
import { notFound } from "next/navigation";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import FoodDetails from '@/components/Foods/FoodDetails'
import { Suspense } from "react";
import Loading from "@/app/loading";

// export async function generateStaticParams() {
//     const { data: foods } = await supabase.from('Foods').select('id')
//     return foods ?? []
// }

export default async function Post({ params: { id }}: { params: { id: string}}) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.from('Foods').select().match({ id }).single()
    // const { data } = await supabase.from('Foods').select()

    // if(!data) {
    //     // return 404 page
    //     notFound()
    // }

    return (
        <Suspense fallback={<Loading />}>
            <span className='bg-slate-300'>
                {data ? <FoodDetails data={data} /> : <p>oppsie</p>}
            </span>
        </Suspense>
    )
}