'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Food } from "@/app/types/FoodTypes"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function FoodDetails({data}: {data: Food}) {
    const [food, setFood] = useState(data)
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleEdit = async () => {
        console.log(data.id)
        await fetch(`http://localhost:3000/api/foods`, {
            method: 'PUT',
            body: JSON.stringify({ id: data.id })
        })
        router.refresh()
    }

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/api/foods`, {
            method: 'DELETE',
            body: JSON.stringify({ id: data.id})
        })
        router.refresh()
    }

    useEffect(() => {
        const channel = supabase.channel('realtime food list').on('postgres_changes', {
            event: 'UPDATE', 
            schema: 'public', 
            table: 'Foods',
            filter: `id=eq.${data.id}`
        }, (payload) => {
            setFood(payload.new as Food)
        }).subscribe()

    return () => {
        supabase.removeChannel(channel)
    }
    }, [supabase, food, setFood])

    return (
        <div className="flex flex-row gap-4 bg-slate-50 rounded-lg px-5 py-3">
            <p className="text-slate-300">{food.name}</p>
            <p className="text-slate-400">{food.fats}</p>
            <button className='text-pink-600' onClick={handleEdit}>Edit</button>
            <button className="text-red-700" onClick={handleDelete}>Delete</button>
        </div>
        
    )
}