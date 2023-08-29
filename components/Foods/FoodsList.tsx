'use client'

import { useEffect, useState, Suspense } from "react"

import { Food } from "@/app/types/FoodTypes"
import { motion, AnimatePresence } from "framer-motion"
// new router!!
import { useRouter } from "next/navigation"
import FoodItem from "./FoodItem"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { twMerge } from "tailwind-merge"

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

    return (
            <section className={twMerge('flex flex-col h-full mb-32 gap-2 w-full', '')}>
            <AnimatePresence>
                    <motion.div 
                    initial={{opacity: 0, y: '30vh'}}
                    animate={{opacity: 1, y: '1vh'}}
                    exit={{opacity: 0, y: '60vh'}}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.2,
                        delay: 0.1
                    }}
                    className={twMerge(" h-auto w-full flex flex-col items-between p-1 rounded-md shadow-lg bg-slate-200")}
                    >
                        {data?.map((f) => <FoodItem key={f.id} item={f}/>)}
                    </motion.div>
            </AnimatePresence>
            
            </section>
    )
}