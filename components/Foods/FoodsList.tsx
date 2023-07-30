'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Food } from "@/app/types/FoodTypes"
// new router!!
import { useRouter } from "next/navigation"
import FoodItem from "./FoodItem"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"


export default function FoodList({data}: {data: Food[]}) {
    // const [foods, setFoods] = useState(data)
    const router = useRouter()
    const supabase = createClientComponentClient();

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

    return (data?.map((f) => (
            <div key={f.id}>
            <FoodItem item={f}/>
            <Link href={`/browse/${f.id}`}>Details</Link>
            </div>
        ))
    )
}