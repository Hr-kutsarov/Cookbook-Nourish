'use client'

import FoodList from '@/components/Foods/FoodsList'
import HeadingFoodList from '@/components/Foods/HeadingFoodList'
import Header from '@/components/Header/Header'
import prioritySwitcher from '@/hooks/prioritySwitcher'
import { DevTool } from "@hookform/devtools"
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense, useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { BiSearch } from 'react-icons/bi'
import { RxChevronDown, RxChevronUp, RxMixerHorizontal } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import { ZodType, z } from 'zod'
import Loading from '../loading'
import { Food } from '../types/FoodTypes'
import { LuClover, LuCloudSunRain, LuSnowflake } from 'react-icons/lu';
import { RxSun } from 'react-icons/rx'

import { motion } from 'framer-motion'
import { FaCircle, FaLeaf,  } from 'react-icons/fa'
import { TbSalt, Tb360 } from 'react-icons/tb'
import { PiOrangeSliceFill } from 'react-icons/pi'
import { MdIcecream } from 'react-icons/md'

interface SearchDataType {
  searchParam: string;
}

export default function Search() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loadingReset, setLoadingReset] = useState<boolean>(false)



  // this is unnecessary as I'm going to use React Hook Form and it has a built in state manager
  // const [searchParam, setSearchParam] = useState('')

  const schema: ZodType<SearchDataType> = z.object({
    searchParam: z.string().min(2).max(30),
  })

  const { control, handleSubmit, register, reset,  formState: { errors } } = useForm({
    defaultValues: {
      searchParam: 'Search...',
    },
    resolver: zodResolver(schema)
  });

  const switcher = prioritySwitcher()

  // CREATE QUERY WORKER
  const supabase = createClientComponentClient()

  // GET INITIAL DATA
  const getFoods = async () => {
    const { data } = await supabase.from('Foods').select()
    if (data) {
      setLoadingReset(false)
      setFoods(data)
    }
  }

  // GET SORTED DATA
  const getNamesAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('name', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getNamesDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('name', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getCaloriesAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('calories', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getCaloriesDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('calories', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getProteinsAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('proteins', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getProteinsDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('proteins', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getCarbsAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('carbs', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getCarbsDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('carbs', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getFatsAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('fats', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getFatsDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('fats', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getPriceAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('price', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getPriceDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('price', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getWeightLight = async () => {
    const { data } = await supabase.from('Foods').select().eq('weight', 'light')
    if (data) {
      setFoods(data)
      }
    }

  const getWeightLightMedium = async () => {
      const { data } = await supabase.from('Foods').select().eq('weight', 'lightMedium')
      if (data) {
        setFoods(data)
      }
  }

  const getWeightMedium = async () => {
    const { data } = await supabase.from('Foods').select().eq('weight', 'medium')
    if (data) {
      setFoods(data)
      }
    }

  const getWeightMediumHeavy = async () => {
      const { data } = await supabase.from('Foods').select().eq('weight', 'mediumHeavy')
      if (data) {
        setFoods(data)
      }
  }

  const getWeightHeavy = async () => {
    const { data } = await supabase.from('Foods').select().eq('weight', 'heavy')
    if (data) {
      setFoods(data)
      }
    }


  const getSpringFoods = async () => {
    const { data } = await supabase.from('Foods').select().contains('seasons', ['spring'])
    if (data) {
      setFoods(data)
      }
    }

  const getSummerFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('seasons', ['summer'])
      if (data) {
        setFoods(data)
      }
  }

  const getAutumnFoods = async () => {
    const { data } = await supabase.from('Foods').select().contains('seasons', ['autumn'])
    if (data) {
      setFoods(data)
      }
    }

  const getWinterFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('seasons', ['winter'])
      if (data) {
        setFoods(data)
      }
  }

  const getBitterTastingFoods = async () => {
    const { data } = await supabase.from('Foods').select().contains('taste', ['bitter'])
    if (data) {
      setFoods(data)
      }
    }

  const getSaltyTastingFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('taste', ['salty'])
      if (data) {
        setFoods(data)
      }
  }

  const getSourTastingFoods = async () => {
    const { data } = await supabase.from('Foods').select().contains('taste', ['sour'])
    if (data) {
      setFoods(data)
      }
    }

  const getUmamiTastingFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('taste', ['umami'])
      if (data) {
        setFoods(data)
      }
  }

  const getSweetTastingFoods = async () => {
    const { data } = await supabase.from('Foods').select().contains('taste', ['sweet'])
    if (data) {
      setFoods(data)
      }
    }


  const getVolumeAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('volume', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getVolumeDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('volume', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  const getFunctionAsc = async () => {
    const { data } = await supabase.from('Foods').select().order('functionality', {ascending: true})
    if (data) {
      setFoods(data)
      }
    }

  const getFunctionDesc = async () => {
      const { data } = await supabase.from('Foods').select().order('functionality', {ascending: false})
      if (data) {
        setFoods(data)
      }
  }

  // ON SUBMIT SEARCH

  const onSubmit = async (formData: SearchDataType) => {
    const supabase = createClientComponentClient();

    // PASSING EMPTY STRING WITH SEARCH RETURNS ALL DATA


    // IF THERE IS A SEARCH PARAM RETURN THE MATCHING QUERY

  const { data, error } = await supabase.from('Foods').select().like('name', `%${formData.searchParam}%`)

    if (error) {
      // TODO Implement HOT TOAST
    }

    if (data) {
      console.log(formData.searchParam)
      setLoadingReset(false)
      setFoods(data)
    }
  }

  // ON LOAD
  useEffect(() => {
    getFoods()
  }, [supabase, setFoods])

  const weightBtnStyles = twMerge('flex p-1 hover:text-slate-400 flex items-center justify-center')
  const boxWeightIconsStyles = twMerge('grid grid-cols-5 px-1')
  const inputSearchStyles = `lg:px-4 md:px-2 sm:px-1 flex flex-row w-full bg-slate-300 py-2`
  const headingStyles = `flex items-center justify-center`
  const buttonStyles = `flex aspect-square w-6 items-center justify-center rounded-md hover:bg-slate-400 hover:text-slate-50 hover:outline-none`

  return (
    <span className={twMerge('flex flex-row bg-slate-300 min-h-[100vh]', '')}>
      <Header />
      <Suspense fallback={<Loading />}>
        <section className={twMerge('flex flex-col h-auto w-full')}>
        {/* SEARCH FORM */}
        <>
        <form 
        className={twMerge(inputSearchStyles, 'mt-[7vh]')}
        onSubmit={handleSubmit(onSubmit)}>
          <label 
            className={twMerge('px-2 py-1 flex cursor-pointer aspect-square w-full items-center justify-center text-slate-50 rounded-md mr-2 hover:bg-slate-50 hover:text-slate-600', 'max-w-[5vh]')}
          >
            {!loadingReset 
            ? 
            <BiSearch 
            size={24}
            onClick={() => {
              getFoods()
              setLoadingReset(true)
            }}
          />
          :
          <motion.div
            className={twMerge()}
            initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{duration:1.8, delay: 0.2, repeat: Infinity}}
          >
            <BiSearch 
              size={24} 
            />
          </motion.div>
            }
          </label>

          <input 
            {...register("searchParam")}
            // class name = merging (basic styles) , with (temporary)
            className={twMerge('px-2 py-1 flex rounded-md focus:outline-none', 'max-w-[60%]')}
          />

          <input 
            className={twMerge('px-3 py-1 flex rounded-md cursor-pointer bg-slate-400 text-slate-50 ml-2 hover:bg-slate-800 hover:text-slate-50', 'max-w-[20%]')}
            type="submit" 
          />

        </form>

        {/* More red flags than a national day in China with this DevTool thingy */}
        {/* <DevTool control={control} /> */}
      </>

        {/* Heading */}
        <HeadingFoodList />

        {/* Filter buttons */}
        <span className='lg:px-4 md:px-2 sm:px-1 flex bg-gradient-to-r h-[4vh] my-2'>
            <span className='hidden px-1 py-1 text-slate-600 font-semibold rounded-md w-full xl:flex'>
                <span className="flex w-[15%] ">
                  {/* NAMES */}
                  <div className={twMerge(headingStyles, 'ml-4')}>
                    <button 
                    onClick={() =>getNamesAsc()} 
                    className='flex aspect-square w-6 items-center justify-center transition-all delay-3 ease-in-out rounded-full'
                    >
                      <RxChevronDown size={24}/>
                    </button> 

                    <button 
                    onClick={() => { getNamesDesc()} } 
                    className={buttonStyles}
                    >
                      <RxChevronUp size={24}/>
                    </button>
                  </div>
                </span>
                <span className="grid grid-cols-2 w-[85%]">
                    <span className="grid grid-cols-5">

                      {/* CALORIES */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getCaloriesAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getCaloriesDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* PROTEINS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getProteinsAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getProteinsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* CARBS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getCarbsAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getCarbsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* FATS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getFatsAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getFatsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getPriceAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getPriceDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>


                    </span>
                    <span className="grid grid-cols-5 w-full">
                      {/* WEIGHT */}
                      <div className={boxWeightIconsStyles}>
                        <button 
                        onClick={() =>getWeightLight()} 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button> 

                        <button 
                        onClick={() => { getWeightLightMedium()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={12}/>
                        </button>

                        <button 
                        onClick={() => { getWeightMedium()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button>

                        <button 
                        onClick={() => { getWeightMediumHeavy()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={12}/>
                        </button>
                        <button 
                        onClick={() => { getWeightHeavy()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button>
                      </div>

                      {/* SEASON */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getSpringFoods()} 
                        className={buttonStyles}
                        >
                          <LuClover size={20}/>
                        </button> 

                        <button 
                        onClick={() => { getSummerFoods()} } 
                        className={buttonStyles}
                        >
                          <RxSun size={20}/>
                        </button>
                        
                        <button 
                        onClick={() => { getAutumnFoods()} } 
                        className={buttonStyles}
                        >
                          <LuCloudSunRain size={20}/>
                        </button>

                        
                        <button 
                        onClick={() => { getWinterFoods()} } 
                        className={buttonStyles}
                        >
                          <LuSnowflake size={20}/>
                        </button>
                      </div>

                      {/* TASTE */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getBitterTastingFoods()} 
                        className={buttonStyles}
                        >
                          <FaLeaf size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getSaltyTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <TbSalt size={18}/>
                        </button>

                        <button 
                        onClick={() => getSourTastingFoods()} 
                        className={buttonStyles}
                        >
                          <PiOrangeSliceFill size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getUmamiTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <Tb360 size={18}/>
                        </button>

                        <button 
                        onClick={() => { getSweetTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <MdIcecream size={18}/>
                        </button>
                      </div>

                      {/* FATS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getVolumeAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getVolumeDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={18}/>
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getFunctionAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getFunctionDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>
                    </span>
                </span>
            </span>
            <span className='flex px-1 text-slate-600 font-semibold rounded-md w-full xl:hidden'>
                <span className="flex w-[20%] gap-8">
                    {/* NAMES */}
                    <div className={headingStyles}>
                    <button 
                    onClick={() =>getNamesAsc()} 
                    className={buttonStyles}
                    >
                      <RxChevronUp size={24}/>
                    </button> 

                    <button 
                    onClick={() => { getNamesDesc()} } 
                    className={buttonStyles}
                    >
                      <RxChevronDown size={24}/>
                    </button>
                    </div>
                    <div className={headingStyles}>
                    {switcher.priorityState === 'primary' 
                    ? 
                    <button 
                    onClick={() => switcher.onSecondary()} 
                    className={buttonStyles}
                    >
                      <RxMixerHorizontal size={24}/>
                      </button>
                    : 
                    <button 
                    onClick={() => switcher.onPrimary()} 
                    className={buttonStyles}>
                      <RxMixerHorizontal size={24}/>
                    </button>}
                    
                    </div>
                </span>
                
                {switcher.priorityState === 'primary' ? 
                    <span className="grid grid-cols-1 w-[80%]">
                        <span className="grid grid-cols-5">
                      {/* CALORIES */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getCaloriesAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getCaloriesDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* PROTEINS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getProteinsAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getProteinsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>
                      
                      {/* CARBS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getCarbsAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getCarbsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* FATS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getFatsAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getFatsDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>

                      {/* PRICES */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getPriceAsc()} 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={24}/>
                        </button> 

                        <button 
                        onClick={() => { getPriceDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>
                        </span>
                    </span>
                    :
                    <span className="grid grid-cols-1 w-[80%]">
                    <span className="grid grid-cols-5 w-full">
                      {/* WEIGHT */}
                      <div className={boxWeightIconsStyles}>
                        <button 
                        onClick={() =>getWeightLight()} 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button> 

                        <button 
                        onClick={() => { getWeightLightMedium()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={12}/>
                        </button>

                        <button 
                        onClick={() => { getWeightMedium()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button>

                        <button 
                        onClick={() => { getWeightMediumHeavy()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={12}/>
                        </button>
                        <button 
                        onClick={() => { getWeightHeavy()} } 
                        className={weightBtnStyles}
                        >
                          <FaCircle size={16}/>
                        </button>
                      </div>

                      {/* SEASON */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getSpringFoods()} 
                        className={buttonStyles}
                        >
                          <LuClover size={20}/>
                        </button> 

                        <button 
                        onClick={() => { getSummerFoods()} } 
                        className={buttonStyles}
                        >
                          <RxSun size={20}/>
                        </button>
                        
                        <button 
                        onClick={() => { getAutumnFoods()} } 
                        className={buttonStyles}
                        >
                          <LuCloudSunRain size={20}/>
                        </button>

                        
                        <button 
                        onClick={() => { getWinterFoods()} } 
                        className={buttonStyles}
                        >
                          <LuSnowflake size={20}/>
                        </button>
                      </div>

                      {/* TASTE */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() =>getBitterTastingFoods()} 
                        className={buttonStyles}
                        >
                          <FaLeaf size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getSaltyTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <TbSalt size={18}/>
                        </button>

                        <button 
                        onClick={() => getSourTastingFoods()} 
                        className={buttonStyles}
                        >
                          <PiOrangeSliceFill size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getUmamiTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <Tb360 size={18}/>
                        </button>

                        <button 
                        onClick={() => { getSweetTastingFoods()} } 
                        className={buttonStyles}
                        >
                          <MdIcecream size={18}/>
                        </button>
                      </div>

                      {/* FATS */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getVolumeAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getVolumeDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={18}/>
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className={headingStyles}>
                        <button 
                        onClick={() => getFunctionAsc() } 
                        className={buttonStyles}
                        >
                          <RxChevronUp size={18}/>
                        </button> 

                        <button 
                        onClick={() => { getFunctionDesc()} } 
                        className={buttonStyles}
                        >
                          <RxChevronDown size={24}/>
                        </button>
                      </div>
                      </span>
                    </span>
                }

            </span>
        </span>

        {/* Search Results */}
        <FoodList data={foods}/>
        
      </section>
    </Suspense>
    </span>
  )
}
