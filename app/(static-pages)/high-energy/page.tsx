'use client'

// components
import FoodList from '@/components/Foods/FoodsList';
import HeadingFoodList from '@/components/Foods/HeadingFoodList';
import Header from '@/components/Header/Header';
import Loading from '@/components/Loaders/loading'
import FoodFilter from '@/components/Foods/FoodFilter'

// hooks
import { Suspense, useEffect } from 'react'
import FoodDataStore from '@/hooks/foodStore'

// utils
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { twMerge } from 'tailwind-merge';

export default function HighEnergyFoods() {
  const dataStorage = FoodDataStore();
  const supabase = createClientComponentClient()

  const getFoods = async () => {
    const { data } = await supabase.from('Foods').select().order('calories', {ascending: false})
    if (data) {
      dataStorage.setData(data)
    }
  }

  useEffect(() => {
    getFoods()
  }, [supabase])

  return (
    <Suspense fallback={<Loading />}>
        <span className={twMerge('flex flex-col bg-slate-300 min-h-[100vh]', '')}>
            <Header />
            
            <section className={twMerge('flex flex-col h-auto w-full')}>

            {/* Heading */}
            <HeadingFoodList />

            {/* Filter buttons */}
            <FoodFilter />

            {/* Search Results */}
            <FoodList data={dataStorage.data}/>
            
            </section>

        </span>
    </Suspense>
  )
}
