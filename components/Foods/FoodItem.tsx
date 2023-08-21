// types
import { Food } from "@/app/types/FoodTypes"

// utils
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

// icons
import { IoMusicalNote } from "react-icons/io5";
import { RxSun, RxValueNone} from 'react-icons/rx'
import { LuCloudSunRain, LuClover, LuSnowflake } from 'react-icons/lu'
import { MdIcecream } from 'react-icons/md'
import { PiOrangeSliceFill } from 'react-icons/pi'
import { TbSalt, Tb360 } from 'react-icons/tb'
import {LuThermometerSnowflake, LuThermometerSun } from 'react-icons/lu'
import {FaCheese, FaHamburger, FaKiwiBird, FaLeaf, FaCircle, FaHotjar, FaLemon} from 'react-icons/fa'

// hooks
import useCreateFood from "@/hooks/createFoodModal"
import useSideMenu from "@/hooks/sideMenu"


export default function FoodItem({item}: {item: Food}) {
    const router = useRouter()

    
    // const handleEdit = async () => {
    //     console.log(item.id)
    //     await fetch(`http://localhost:3000/api/foods`, {
    //         method: 'PUT',
    //         body: JSON.stringify({ id: item.id })
    //     })
    //     router.refresh()
    // }

    const handlerSideMenu = useSideMenu();

    const innerSectionStyles = "flex flex-row  items-center px-3 py-1 gap-2";
    const bottomInnerContainerStyles = twMerge("grid gap-1")
    

    return (
        <>
        <div className={twMerge('flex items-center min-h-[1.5rem] shadow-lg rounded-md bg-gradient-to-b text-slate-600 from-slate-100 to-slate-200 ' )}>
            
            {/* THE GREAT UNIFIER SPAN ALMIGHTY */}
                <span className="flex h-full flex-row justify-between items-center py-2 w-[10%]">
                    <p className="text-lg pl-4 font-semibold">{item.name}</p>
                    {/* That pie chart component just drags my console into red hot hell. Let's make it simple */}
                    {/* <PieDataComponent key={`${item.id}-pie`} item={item} /> */}
                    
                </span>

                <section className="grid grid-cols-2 w-[90%] h-full">
                    {/* LEFT SIDE */}
                    <span className="grid grid-cols-5 h-full">
                        {/* CALORIES */}
                        <span className={innerSectionStyles}>
                        {!handlerSideMenu.isOpen ? <p className="relative"><FaHamburger /></p> : null}
                            <p className="relative flex flex-col ">
                                {item.calories.toFixed(1)}
                            </p>
                            

                        </span>
                        {/* PROTEINS */}
                        <span className={innerSectionStyles}>
                        {!handlerSideMenu.isOpen ? <p className="relative"><FaKiwiBird /></p> : null}
                        <p className="relative flex">
                            
                            {item.proteins.toFixed(1)}
                        </p>

                        </span>
                        {/* CARBS */}
                        <span className={innerSectionStyles}>
                        {!handlerSideMenu.isOpen ? <p className="relative"><FaLeaf /></p> : null}
                            <p className="relative flex">
                                {item.carbs.toFixed(1)}
                            </p>
                            
                        </span>
                        {/* FATS */}
                        <span className={innerSectionStyles}>
                        {!handlerSideMenu.isOpen ? <p className="relative"><FaCheese /></p> : null}
                        <p className="relative flex">
                                {item.fats.toFixed(1)}
                            </p>
                            
                        </span>
                        {/* Price */}
                        <span className={innerSectionStyles}>
                            <span className={twMerge(bottomInnerContainerStyles)}>
                                <span className="flex justify-center w-full h-full items-center relative group text-slate-600">$ {item.price.toFixed(2)}
                                    <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">EUR/kg</span>
                                </span> 
                            </span>
                        </span>
                    </span>

                    {/* RIGHT SIDE */}
                    <span>
                        <span className="grid grid-cols-5 h-full">
                        {/* Weight */}
                        <span className={innerSectionStyles}>
                            {/* <p className="relative">Weight:</p> */}
                            <p className="relative flex w-full justify-between items-center">
                                {item.weight === 'light' ? <span className={twMerge("flex text-center items-center gap-1", 'group relative')}>
                                    <span><FaCircle size={16}/></span>
                                    <span className="text-slate-300"><FaCircle size={12}/></span>
                                    <span className="text-slate-300"><FaCircle size={16}/></span>
                                    <span className="text-slate-300"><FaCircle size={12}/></span>
                                    <span className="text-slate-300"><FaCircle size={16}/></span>
                                    <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Light</span>
                                </span> : null}
                                {item.weight === 'lightMedium' ? 
                                    <span className={twMerge("flex text-center items-center gap-1", 'group relative')}>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span className="text-slate-300"><FaCircle size={16}/></span>
                                        <span className="text-slate-300"><FaCircle size={12}/></span>
                                        <span className="text-slate-300"><FaCircle size={16}/></span>
                                        <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Light-Medium</span>
                                    </span>
                                    : null}
                                {item.weight === 'medium' ? 
                                    <span className={twMerge("flex text-center items-center gap-1", 'group relative')}>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span><FaCircle size={16}/></span>
                                        <span className="text-slate-300"><FaCircle size={12}/></span>
                                        <span className="text-slate-300"><FaCircle size={16}/></span>
                                        <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Medium</span>
                                    </span>
                                    : null}
                                {item.weight === 'mediumHeavy' ? 
                                    <span className={twMerge("flex text-center items-center gap-1", 'group relative')}>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span className="text-slate-300"><FaCircle size={16}/></span>
                                        <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Medium-Heavy</span>
                                    </span>
                                : null}
                                {item.weight === 'heavy' ? 
                                    <span className={twMerge("flex text-center items-center gap-1", 'group relative')}>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span><FaCircle size={16}/></span>
                                        <span><FaCircle size={12}/></span>
                                        <span><FaCircle size={16}/></span>
                                        <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Heavy</span>
                                    </span>
                                : null}
                            </p>
                        </span>

                        {/* SEASONS */}
                        <span className={innerSectionStyles}>
                            <span className={twMerge(bottomInnerContainerStyles, 'grid-cols-4')}>
                            {item.seasons.map((i) => (
                                    <span className="grid grid-cols-5 justify-center items-center" key={`${item.id}${i}`}>
                                        {i === 'spring' ?
                                        <span className="group relative w-full items-center">
                                            <LuClover size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Spring
                                            </span>
                                        </span> : null}
                                        {i === 'summer' ?
                                        <span className="group relative w-full items-center">
                                            <RxSun size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Summer
                                            </span>
                                        </span> : null}
                                        {i === 'autumn' ?
                                        <span className="group relative w-full items-center">
                                            <LuCloudSunRain size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Autumn
                                            </span>
                                        </span> : null}
                                        {i === 'winter' ?
                                        <span className="group relative w-full items-center">
                                            <LuSnowflake size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Winter
                                            </span>
                                        </span> : null}
                                    </span>
                            ))}
                            </span>
                        </span>

                        {/* TASTE */}
                        <span className={innerSectionStyles}>
                            {/* Taste: {item.taste.map((i) => (<p>{i}</p>))} */}
                            {/* <p className="relative ">Taste:</p> */}
                            <span className={twMerge(bottomInnerContainerStyles, 'grid-cols-5')}>
                            {item.taste.map((i) => (
                                    <span className="grid grid-cols-5 justify-center items-center" key={`${item.id}${i}`}>
                                        {i === 'bitter' ?
                                        <span className="group relative w-full items-center">
                                            <FaLeaf size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Bitter
                                            </span>
                                        </span> : null}
                                        {i === 'salty' ?
                                        <span className="group relative w-full items-center">
                                            <TbSalt size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Salty
                                            </span>
                                        </span> : null}
                                        {i === 'sour' ?
                                        <span className="group relative w-full items-center">
                                            <PiOrangeSliceFill size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Sour
                                            </span>
                                        </span> : null}
                                        {i === 'sweet' ?
                                        <span className="group relative w-full items-center">
                                            <MdIcecream size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Sweet
                                            </span>
                                        </span> : null}
                                        {i === 'umami' ?
                                        <span className="group relative w-full items-center">
                                            <Tb360 size={18} />
                                            <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                Umami
                                            </span>
                                        </span> : null}
                                    </span>
                            ))}
                            </span>
                        </span>
                        {/* Volume */}
                        <span className={twMerge(bottomInnerContainerStyles, 'items-center relative flex w-full justify-center')}>
                            <p className="relative flex w-full h-full items-center justify-center">
                            {item.volume === 'quiet' ?  <span className="flex justify-center w-full h-full items-center relative group">
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="hidden absolute left-41% group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Quiet</span>
                            </span> : null}
                            {item.volume === 'quietModerate' ?  <span className="flex justify-center w-full h-full items-center relative group">
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md text-center">Quiet-Moderate</span>
                            </span> : null}
                            {item.volume === 'moderate' ?  <span className="flex justify-center w-full h-full items-center relative group">
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600 "><IoMusicalNote size={20}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Moderate</span>
                            </span> : null}
                            {item.volume === 'moderateLoud' ?  <span className="flex justify-center w-full h-full items-center relative group">
                                <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                                <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                                <span className="text-slate-300"><IoMusicalNote size={16}/></span>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md text-center">Moderate-Loud</span>
                            </span> 
                            : null}
                            {item.volume === 'loud' ?  <span className="flex justify-center w-full h-full items-center relative group">
                            <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                            <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                            <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                            <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                            <span className="text-slate-600"><IoMusicalNote size={20}/></span>
                            <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Loud</span>
                        </span> 
                        : null}
                            </p>
                        </span>
                        {/* Functionality */}
                        <span className={innerSectionStyles}>
                        {/* <p className="relative ">Functionality:</p> */}
                            <span className={twMerge(bottomInnerContainerStyles, 'items-center relative flex w-full justify-center')}>
                                {item.functionality === 'warming' ? 
                                <span className="flex justify-center w-full h-full items-center relative group text-slate-600"><LuThermometerSun size={20}/>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Warming</span>
                                </span> 
                                : null}
                                {item.functionality === 'cooling' ? 
                                <span className="flex justify-center w-full h-full items-center relative group text-slate-600"><LuThermometerSnowflake size={20}/>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Cooling</span>
                                </span> 
                                : null}
                                {item.functionality === 'none' ? 
                                <span className="flex justify-center w-full h-full items-center relative group text-slate-600"><RxValueNone size={20}/>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">None</span>
                                </span> 
                                : null}
                                {item.functionality === 'heating' ? 
                                <span className="flex justify-center w-full h-full items-center relative group text-slate-600"><FaHotjar size={20}/>
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">Heating</span>
                                </span> 
                                : null}
                                </span>
                        </span>
                        </span>
                    </span>
                </section>




            {/* <button className='text-slate-600' onClick={() => {}}>Edit</button> */}
        </div>
        <Link className='flex w-auto text-sm font-semibold text-slate-400 h-auto p-1 rounded-lg' href={`/browse/${item.id}`}>Details</Link>
        </>
    )
}