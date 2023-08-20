'use client'

import { useEffect, useState } from "react"

import { Food } from "@/app/types/FoodTypes"
import { motion, AnimatePresence } from "framer-motion"
// new router!!
import { useRouter } from "next/navigation"
import FoodItem from "./FoodItem"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { twMerge } from "tailwind-merge"
import useCreateFood from "@/hooks/createFoodModal"
import HeadingFoodList from './HeadingFoodList'
import useSideMenuHook from '@/hooks/sideMenu'

export default function FoodList({data}: {data: Food[]}) {
    // const [foods, setFoods] = useState(data)
    const router = useRouter()
    const supabase = createClientComponentClient();
    const createFormHandler = useCreateFood()
    const handlerSideMenu = useSideMenuHook();
    

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
            <section className={twMerge('bg-slate-300 flex flex-col min-h-[96vh] p-2 gap-2 mt-[4rem] w-full max-w-[94%]', handlerSideMenu.isOpen && 'max-w-[75%]')}>
            <HeadingFoodList />
            {/* <AnimatePresence>
                <motion.div 
                initial={{opacity: 0, y: '150vh'}}
                animate={{opacity: 1, y: '0'}}
                exit={{opacity: 0, y: '150vh'}}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.15,
                    delay: 0.1
                }}
                className={twMerge("bg-slate-50 h-auto w-full flex flex-col items-between p-1 rounded-md shadow-lg", createFormHandler.isOpen && '-z-40')}
                >
                    {data?.map((f) => <FoodItem key={f.id} item={f}/>)}
            </motion.div> */}
        
            {data.map((f) => <FoodItem key={f.id} item={f}/>)}
            {/* </AnimatePresence> */}
        </section>
    )
}