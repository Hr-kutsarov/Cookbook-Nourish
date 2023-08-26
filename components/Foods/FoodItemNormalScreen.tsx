import { Food } from "@/app/types/FoodTypes"
import { twMerge } from "tailwind-merge"
import useSideMenu from "@/hooks/sideMenu";

import { IoMusicalNote } from "react-icons/io5";
import { RxSun, RxValueNone} from 'react-icons/rx'
import { LuCloudSunRain, LuClover, LuSnowflake } from 'react-icons/lu'
import { MdIcecream } from 'react-icons/md'
import { PiOrangeSliceFill } from 'react-icons/pi'
import { TbSalt, Tb360 } from 'react-icons/tb'
import { LuThermometerSnowflake, LuThermometerSun } from 'react-icons/lu'
import { FaCheese, FaHamburger, FaKiwiBird, FaLeaf, FaCircle, FaHotjar } from 'react-icons/fa'
import prioritySwitcher from "@/hooks/prioritySwitcher";


interface FoodItemNormalScreenProps {
    item: Food;
}
const FoodItemNormalScreen: React.FC<FoodItemNormalScreenProps> = ({item}) => {

    const handlerSideMenu = useSideMenu();
    const switcher = prioritySwitcher();

    const innerSectionStyles = "flex flex-row  items-center justify-between px-1";
    const macroStyles = "flex flex-row  items-center justify-between px-8 py-1 gap-2";
    const bottomInnerContainerStyles = twMerge("grid gap-1")

    return (
        <div 
        className={twMerge('flex items-center min-h-[1.5rem] shadow-lg rounded-md bg-gradient-to-b text-slate-600 from-slate-100 to-slate-200 xl:hidden' )}>
            <span className="flex h-full flex-row justify-between items-center py-2 w-[20%]">
                <p className="text-lg pl-4 font-semibold">{item.name}</p>
                {/* That pie chart component just drags my console into red hot hell. There's got to be a better way. */}
                {/* <PieDataComponent key={`${item.id}-pie`} item={item} /> */}
                    
                </span>
                {switcher.priorityState === 'primary' ? 
                <section className="grid grid-cols-1 w-[80%] h-full">
                    <span className="grid grid-cols-5 h-full">
                    {/* CALORIES */}
                    <span className={macroStyles}>
                    {!handlerSideMenu.isOpen ? <p className="relative"><FaHamburger /></p> : null}
                    <p className="relative flex">
                        {item.calories.toFixed(1)}
                    </p>
                        
                    </span>
                    {/* PROTEINS */}
                    <span className={macroStyles}>
                    {!handlerSideMenu.isOpen ? <p className="relative"><FaKiwiBird /></p> : null}
                    <p className="relative flex">
                        {item.proteins.toFixed(1)}
                    </p>

                    </span>
                    {/* CARBS */}
                    <span className={macroStyles}>
                    {!handlerSideMenu.isOpen ? <p className="relative"><FaLeaf /></p> : null}
                    <p className="relative flex">
                        {item.carbs.toFixed(1)}
                    </p>
                        
                    </span>
                    {/* FATS */}
                    <span className={macroStyles}>
                    {!handlerSideMenu.isOpen ? <p className="relative"><FaCheese /></p> : null}
                    <p className="relative flex">
                        {item.fats.toFixed(1)}
                    </p>
                        
                    </span>
                    {/* Price */}
                    <span className={twMerge(innerSectionStyles, 'justify-center')}>
                        <span className={twMerge(bottomInnerContainerStyles)}>
                            <span className="flex justify-center w-full h-full items-center relative group text-slate-600">$ {item.price.toFixed(2)}
                                <span className="hidden absolute group-hover:flex p-2 bg-slate-50 shadow-md rounded-md">EUR/kg</span>
                            </span> 
                        </span>
                    </span>
                    </span>
                </section>
                 : 
                 <section className="grid grid-cols-1 w-[80%] h-full">
                    <span className="grid grid-cols-5 h-full">
                            {/* Weight */}
                            <span className={innerSectionStyles}>
                                <span className="flex w-full justify-center items-center">
                                    {item.weight === 'light' ? 
                                        <span className={twMerge("grid grid-cols-5 w-full", 'group relative')}>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className="hidden absolute group-hover:flex w-full justify-center bg-slate-50 shadow-md rounded-md ">Light</span>
                                        </span> : null}
                                    {item.weight === 'lightMedium' ? 
                                        <span className={twMerge("grid grid-cols-5 w-full ", 'group relative')}>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Light-Medium</span>
                                        </span>
                                        : null}
                                    {item.weight === 'medium' ? 
                                        <span className={twMerge("grid grid-cols-5 w-full", 'group relative')}>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Medium</span>
                                        </span>
                                        : null}
                                    {item.weight === 'mediumHeavy' ? 
                                        <span className={twMerge("grid grid-cols-5 w-full", 'group relative')}>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full', 'text-slate-400')}><FaCircle size={16}/></span>
                                            <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Medium-Heavy</span>
                                        </span>
                                    : null}
                                    {item.weight === 'heavy' ? 
                                        <span className={twMerge("grid grid-cols-5 w-full", 'group relative')}>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={12}/></span>
                                            <span className={twMerge('flex items-center justify-center h-full w-full')}><FaCircle size={16}/></span>
                                            <span className="hidden absolute group-hover:flex p-2 w-full justify-center bg-slate-50 shadow-md rounded-md">Heavy</span>
                                        </span>
                                    : null}
                                    </span>
                                </span>
                                {/* SEASONS - SMALL SCREEN */}
                                <span className={innerSectionStyles}>
                                    <span className={twMerge('flex flex-row w-full items-center justify-center')}>
                                    {item.seasons.map((i) => (
                                        <span className={twMerge('flex ')} key={`${item.id}${i}`}>
                                            {i === 'spring' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <LuClover size={20} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Spring
                                                </span>
                                            </span> : null}
                                            {i === 'summer' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <RxSun size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Summer
                                                </span>
                                            </span> : null}
                                            {i === 'autumn' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <LuCloudSunRain size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Autumn
                                                </span>
                                            </span> : null}
                                            {i === 'winter' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <LuSnowflake size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Winter
                                                </span>
                                            </span> : null}
                                        </span>
                                    ))}
                                    </span>
                                </span>
                                {/* TASTE - SMALL SCREEN*/}
                                <span className={innerSectionStyles}>
                                    <span className={twMerge('flex flex-row w-full items-center justify-center')}>
                                    {item.taste.map((i) => (
                                        <span className="flex" key={`${item.id}${i}`}>
                                            {i === 'bitter' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <FaLeaf size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Bitter
                                                </span>
                                            </span> : null}
                                            {i === 'salty' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <TbSalt size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Salty
                                                </span>
                                            </span> : null}
                                            {i === 'sour' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <PiOrangeSliceFill size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Sour
                                                </span>
                                            </span> : null}
                                            {i === 'sweet' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <MdIcecream size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Sweet
                                                </span>
                                            </span> : null}
                                            {i === 'umami' ?
                                            <span className={twMerge('group relative w-full px-1 items-center')}>
                                                <Tb360 size={18} />
                                                <span className="hidden absolute bottom-8 left-2 group-hover:flex bg-slate-50 rounded-md px-2 py-1 shadow-lg">
                                                    Umami
                                                </span>
                                            </span> : null}
                                        </span>
                                    ))}
                                    </span>
                                </span>
                                {/* VOLUME - SMALL SCREEN*/}
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
                                {/* FUNCTIONALITY - SMALL SCREEN*/}
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

                </section>
                }
        </div>
    )
}

export default FoodItemNormalScreen;