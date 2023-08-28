'use client'

require('dotenv').config();
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Food } from "@/app/types/FoodTypes"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast, Toaster } from "react-hot-toast"
import { twMerge } from "tailwind-merge";

export default function FoodDetails({data, admin}: {data: Food, admin: string}) {
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
        
        const { data: { user } } = await supabase.auth.getUser()

        if (user?.email !== admin) {
        toast(`Only the admin can delete food items. Your email is ${user?.email}.`)
        return
        }

        const res = await fetch(`http://localhost:3000/api/foods`, {
            method: 'DELETE',
            body: JSON.stringify({ id: data.id})
        })
        if (res.status === 200) {
            toast('deleted successfully')
        }
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

    const textStyles = `font-semibold tracking-wide`
    const boxStyles = `flex items-center justify-center rounded-md p-2`
    const deletionBtnStyles = `text-slate-100 hover:text-slate-50 bg-rose-800 hover:bg-rose-600`
    
    return (
        <div className="flex flex-row gap-4 h-1/3 w-2/3 rounded-lg p-4 bg-slate-50">
            <Toaster />
            <section className="flex justify-between w-full">
                <h1 className={twMerge(boxStyles, textStyles, 'text-slate-400')}>{food.name}</h1>
                {/* <button className='text-pink-600' onClick={handleEdit}>Edit</button> */}
                <button className={twMerge(deletionBtnStyles, boxStyles, textStyles)} onClick={handleDelete}>Delete</button>
            </section>
        </div>
        
    )
}