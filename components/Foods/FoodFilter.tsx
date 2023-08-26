'use client'

import { twMerge } from "tailwind-merge";
import prioritySwitcher from "@/hooks/prioritySwitcher";
import { FaCircle, FaLeaf } from 'react-icons/fa';
import { LuClover, LuCloudSunRain, LuSnowflake } from 'react-icons/lu';
import { RxSun } from 'react-icons/rx';
import { TbSalt, Tb360 } from 'react-icons/tb';
import { PiOrangeSliceFill } from 'react-icons/pi'
import { MdIcecream } from 'react-icons/md'
import { RxChevronDown, RxChevronUp, RxMixerHorizontal, RxBookmark } from 'react-icons/rx';
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';
import { IoMusicalNote } from "react-icons/io5";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import FoodDataStore from "@/hooks/foodStore";
import { Button } from "../ui/button";

const FoodFilter = () => {

    const dataStorage = FoodDataStore();

    const supabase = createClientComponentClient();

    const bookmarksHandler = bookmarkFoodDataStore();

    // GET INITIAL DATA
    const getFoods = async () => {
      const { data } = await supabase.from('Foods').select()
      if (data) {
        dataStorage.setData(data)
      }
    }
  
    // GET SORTED DATA
    const getNamesAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('name', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getNamesDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('name', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getCaloriesAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('calories', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getCaloriesDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('calories', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getProteinsAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('proteins', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getProteinsDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('proteins', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getCarbsAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('carbs', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getCarbsDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('carbs', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getFatsAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('fats', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getFatsDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('fats', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getPriceAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('price', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getPriceDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('price', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getWeightLight = async () => {
      const { data } = await supabase.from('Foods').select().eq('weight', 'light')
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getWeightLightMedium = async () => {
        const { data } = await supabase.from('Foods').select().eq('weight', 'lightMedium')
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getWeightMedium = async () => {
      const { data } = await supabase.from('Foods').select().eq('weight', 'medium')
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getWeightMediumHeavy = async () => {
        const { data } = await supabase.from('Foods').select().eq('weight', 'mediumHeavy')
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getWeightHeavy = async () => {
      const { data } = await supabase.from('Foods').select().eq('weight', 'heavy')
      if (data) {
        dataStorage.setData(data)
        }
      }
  
  
    const getSpringFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('seasons', ['spring'])
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getSummerFoods = async () => {
        const { data } = await supabase.from('Foods').select().contains('seasons', ['summer'])
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getAutumnFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('seasons', ['autumn'])
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getWinterFoods = async () => {
        const { data } = await supabase.from('Foods').select().contains('seasons', ['winter'])
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getBitterTastingFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('taste', ['bitter'])
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getSaltyTastingFoods = async () => {
        const { data } = await supabase.from('Foods').select().contains('taste', ['salty'])
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getSourTastingFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('taste', ['sour'])
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getUmamiTastingFoods = async () => {
        const { data } = await supabase.from('Foods').select().contains('taste', ['umami'])
        if (data) {
          dataStorage.setData(data)
        }
    }
  
    const getSweetTastingFoods = async () => {
      const { data } = await supabase.from('Foods').select().contains('taste', ['sweet'])
      if (data) {
        dataStorage.setData(data)
        }
      }
  
// a=5
      const getQuiet = async () => {
        const { data } = await supabase.from('Foods').select().eq('volume', 'quiet')
        if (data) {
          dataStorage.setData(data)
          }
        }
    
      const getQuietModerate = async () => {
          const { data } = await supabase.from('Foods').select().eq('volume', 'quietModerate')
          if (data) {
            dataStorage.setData(data)
          }
      }
    
      const getModerate = async () => {
        const { data } = await supabase.from('Foods').select().eq('volume', 'moderate')
        if (data) {
          dataStorage.setData(data)
          }
        }
    
      const getModerateLoud = async () => {
          const { data } = await supabase.from('Foods').select().eq('volume', 'moderateLoud')
          if (data) {
            dataStorage.setData(data)
          }
      }
    
      const getLoud = async () => {
        const { data } = await supabase.from('Foods').select().eq('volume', 'loud')
        if (data) {
          dataStorage.setData(data)
          }
        }
  

  
    const getFunctionAsc = async () => {
      const { data } = await supabase.from('Foods').select().order('functionality', {ascending: true})
      if (data) {
        dataStorage.setData(data)
        }
      }
  
    const getFunctionDesc = async () => {
        const { data } = await supabase.from('Foods').select().order('functionality', {ascending: false})
        if (data) {
          dataStorage.setData(data)
        }
    }

    const switcher = prioritySwitcher();

    const headingStyles = `flex items-center justify-center`;
    const weightBtnStyles = twMerge('flex p-1 text-slate-400 hover:text-slate-600 flex items-center justify-center');
    const buttonStyles = `flex aspect-square w-6 items-center justify-center rounded-md hover:bg-slate-400 hover:text-slate-50 hover:outline-none group`;
    const boxWeightIconsStyles = twMerge('grid grid-cols-5 px-1');

    return (
        <span className='lg:px-4 md:px-2 sm:px-1 flex bg-gradient-to-r h-[4vh] my-2'>
        <span className='hidden px-1 py-1 text-slate-600 font-semibold rounded-md w-full xl:flex'>
            <span className="flex w-[15%] ">
              {/* NAMES */}
              <div className={twMerge(headingStyles, 'ml-4')}>
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

                {bookmarksHandler.data.length > 0 ?
                  <button 
                  onClick={() => { bookmarksHandler.setData([])} } 
                  className={buttonStyles}
                  >
                    <RxBookmark size={24}/>
                    <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md ml-40 mb-4 text-slate-600">Remove Bookmarks</span>
                  </button>
                  :
                  null}
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

                  <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSpringFoods()}>
                      <LuClover size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSummerFoods()}>
                      <RxSun size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getAutumnFoods()}>
                      <LuCloudSunRain size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getWinterFoods()}>
                      <LuSnowflake size={20}/>
                    </Button>

                  </div>

                  {/* TASTE */}
                  <div className={headingStyles}>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getBitterTastingFoods()}>
                      <FaLeaf size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSaltyTastingFoods()}>
                      <TbSalt size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSourTastingFoods()}>
                      <PiOrangeSliceFill size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSweetTastingFoods()}>
                      <MdIcecream size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getUmamiTastingFoods()}>
                      <Tb360 size={20}/>
                    </Button>
                  </div>

                  {/* FATS */}
                  <div className={headingStyles}>
                  <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getQuiet()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getQuietModerate()}}
                    >
                    <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getModerate()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getModerateLoud()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getLoud()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
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
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSpringFoods()}>
                      <LuClover size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getSummerFoods()}>
                      <RxSun size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getAutumnFoods()}>
                      <LuCloudSunRain size={20}/>
                    </Button>
                    <Button 
                      size="sm"
                      variant='secondary'
                      onClick={() => getWinterFoods()}>
                      <LuSnowflake size={20}/>
                    </Button>
                    {/* <button 
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
                    </button> */}
                  </div>

                  {/* TASTE */}
                  <div className={headingStyles}>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getBitterTastingFoods()}}
                    >
                      <FaLeaf size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getSaltyTastingFoods()}}
                    >
                      <TbSalt size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getSourTastingFoods()}}
                    >
                      <PiOrangeSliceFill size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getSweetTastingFoods()}}
                    >
                      <MdIcecream size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getUmamiTastingFoods()}}
                    >
                      <Tb360 size={18}/>
                    </Button>
                  </div>

                  {/* VOLUME */}
                  <div className={headingStyles}>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getQuiet()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getQuietModerate()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getModerate()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getModerateLoud()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>
                    <Button 
                    size='sm'
                    variant='secondary'
                    onClick={() => { getLoud()}}
                    >
                      <IoMusicalNote size={18}/>
                    </Button>


                  </div>

                  {/* FUNCTIONALITY */}
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
    )
}

export default FoodFilter;