// import supabase from "@/app/utils/supabase";
import { notFound } from "next/navigation";

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import FoodDetails from '@/components/Foods/FoodDetails'
import { Suspense } from "react";
import Loading from "@/components/Loaders/loading";
import { Toaster } from "react-hot-toast";

// export async function generateStaticParams() {
//     const { data: foods } = await supabase.from('Foods').select('id')
//     return foods ?? []
// }

export default async function Post({ params: { id }}: { params: { id: string}}) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from('Foods').select().match({ id }).single();
    const adminEmail = process.env.ADMIN_EMAIL!;

    // if(!data) {
    //     // return 404 page
    //     notFound()
    // }

    return (
        <span className='bg-slate-200 w-full h-full min-h-[100vh] flex items-center justify-center '>
            <Toaster />
            {data ? <FoodDetails data={data} admin={adminEmail} /> : <p>The item was deleted.</p>}
        </span>
    )
}