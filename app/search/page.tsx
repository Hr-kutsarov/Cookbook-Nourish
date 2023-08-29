'use client'

// components
import FoodList from '@/components/Foods/FoodsList';
import HeadingFoodList from '@/components/Foods/HeadingFoodList';
import Header from '@/components/Header/Header';
import FoodFilter from '@/components/Foods/FoodFilter'
import Bookmarks from '@/components/Bookmarks/Bookmarks';

// hooks
import prioritySwitcher from '@/hooks/prioritySwitcher';
import { Suspense, useEffect, useState, CSSProperties } from 'react'
import FoodDataStore from '@/hooks/foodStore'

// utils
import { DevTool } from "@hookform/devtools";
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { twMerge } from 'tailwind-merge';
import { ZodType, z } from 'zod'

// libs
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'

// icons
import { BiSearch } from 'react-icons/bi'
import { Toaster, toast } from 'react-hot-toast';


interface SearchDataType {
  searchParam: string;
}

export default function Search() {
  // moving from storing the data in local state to ----------->
  // const [foods, setFoods] = useState<Food[]>([]);

  // -------> storing it in LocalStorage with Zustand
  const dataStorage = FoodDataStore();

  const [loadingReset, setLoadingReset] = useState<boolean>(true)

  // this is unnecessary as I'm going to use React Hook Form and it has a built in state manager
  // const [searchParam, setSearchParam] = useState('')

  const schema: ZodType<SearchDataType> = z.object({
    searchParam: z.string().min(2).max(30),
  })

  const { control, handleSubmit, register, reset,  formState: { errors } } = useForm({
    defaultValues: {
      searchParam: '',
    },
    resolver: zodResolver(schema)
  });

  // removed conditional where the menu shrinks as the side menu opens
  // left on overlap for now

  // CREATE QUERY WORKER
  const supabase = createClientComponentClient()


  // GET INITIAL DATA
  const getFoods = async () => {
    const { data } = await supabase.from('Foods').select()
    if (data) {
      setLoadingReset(false)
      dataStorage.setData(data)
    }
  }

  // ON SUBMIT SEARCH
  const onSubmit = async (formData: SearchDataType) => {
    const supabase = createClientComponentClient();
    setLoadingReset(true)
    // PASSING EMPTY STRING WITH SEARCH RETURNS ALL DATA ???

    // IF THERE IS A SEARCH PARAM RETURN THE MATCHING QUERY

    const { data, error } = await supabase.from('Foods').select().like('name', `%${formData.searchParam}%`)

    if (error) {
      toast('There was an error');
      console.error(error)
    }

    if (data) {
      console.log(formData.searchParam)
      setLoadingReset(false)
      dataStorage.setData(data)
      if (data.length == 0) {
        toast('Nothing was found!')
        return
      }
      if (data.length == 1) {
        toast('Only one item was found.')
        return
      }
      toast(`${data.length} items found!`)
    }
  }

  // ON LOAD
  useEffect(() => {
    getFoods()
  }, [supabase])

  const inputSearchStyles = `px-4 lg:px-4 md:px-2 sm:px-1 flex flex-row w-full bg-slate-300 py-2`

  return (

    <span className={twMerge('flex flex-col min-h-[100vh]')}>
      <Header />
      
      <section className={twMerge('flex flex-col h-auto w-full min-h-[100vh] bg-slate-300')}>
        <Bookmarks />

      {/* SEARCH FORM */}
      <>
        <form 
        // max-h-[5vh] is the height of the search bar
        className={twMerge(inputSearchStyles, 'group relative', 'py-3')}
        onSubmit={handleSubmit(onSubmit)}
        >
          <label 
            className={twMerge('p-2 ml-1 flex cursor-pointer aspect-square  items-center justify-center text-slate-50 rounded-md mr-2 hover:bg-slate-50 hover:text-slate-600')}
          >
            {!loadingReset 
            ? 
            <BiSearch 
              size={28}
              onClick={() => {
                getFoods()
                setLoadingReset(true)
              }}
            />
          :
          <motion.div
            className={twMerge('')}
            initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{duration:1.8, delay: 0.2, repeat: Infinity}}
          >
            <BiSearch 
              size={36} 
            />
          </motion.div>
            }
          </label>

          <input 
            {...register("searchParam")}
            // class name = merging (basic styles) , with (temporary)
            className={twMerge('p-2 min-w-[165px] h-[3rem] sm:min-w-[180px] md:min-w-[205px] flex rounded-md focus:outline-none text-sm font-semibold text-slate-600 tracking-wide', '')}
          />


        {!loadingReset ?           
          <input 
            className={twMerge('p-2 flex rounded-md cursor-pointer text-sm font-semibold bg-slate-600 text-slate-50 ml-2 tracking-wide hover:bg-slate-400 hover:text-slate-50', 'w-full justify-center md:max-w-[120px]')}
            type="submit" 
          /> 
          :           
          <motion.div
          className={twMerge('p-2 items-center justify-center flex min-w-[120px] rounded-md ml-2')}
          initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration:1.8, delay: 0.2, repeat: Infinity}}
        >
          <BiSearch 
            size={36} 
          />
        </motion.div>
        }
        </form>

        {/* More red flags than a national day in China with this DevTool thingy */}
        {/* <DevTool control={control} /> */}
        <Toaster />
      </>

        <span className='px-4'>
          {/* Heading */}
          <HeadingFoodList />

          {/* Filter buttons */}
          <FoodFilter />

          {/* Search Results */}
          <FoodList data={dataStorage.data}/>
        </span>

      
    </section>
    
    </span>
  )
}
