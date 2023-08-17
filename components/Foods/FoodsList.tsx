'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Food } from "@/app/types/FoodTypes"
// new router!!
import { useRouter } from "next/navigation"
import FoodItem from "./FoodItem"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { twMerge } from "tailwind-merge"
import useCreateFood from "@/hooks/createFoodModal"
import HeadingFoodList from './HeadingFoodList'

export default function FoodList({data}: {data: Food[]}) {
    // const [foods, setFoods] = useState(data)
    const router = useRouter()
    const supabase = createClientComponentClient();
    const createFormHandler = useCreateFood()

    useEffect(() => {
        // supabase will /watch this channel
        const channel = supabase.channel('realtime food list').on('postgres_changes', {
            event: '*', 
            schema: 'public', 
            table: 'Foods'
        }, () => {
            router.refresh()
        }).subscribe()

        // on complete request the channel is removed
        return () => {
            supabase.removeChannel(channel)
        }
        }, [])

    return (
        <section className="bg-slate-300 flex flex-col min-h-[90vh] p-2 mt-[4rem] lg:ml-4 mr-4 md:mr-4">
            <HeadingFoodList />
            {data?.map((f) => (
            <span 
            className="bg-slate-50 relative h-auto w-full flex flex-col items-between max-w-[92%] px-5 py-3 rounded-md shadow-lg"
            key={f.id}>
                <FoodItem key={f.id} item={f}/>
                <Link className='absolute bottom-2 left-40 bg-gradient-to-r from-slate-100 to-slate-200 h-auto p-2 rounded-lg' href={`/browse/${f.id}`}>Details</Link>
            </span>
        ))}
        </section>
    )
}