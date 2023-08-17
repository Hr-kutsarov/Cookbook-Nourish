import { Food } from "@/app/types/FoodTypes"
import { useRouter } from "next/navigation"


import { RxSun, } from 'react-icons/rx'
import { LuCloudSunRain, LuClover, LuSnowflake, LuPower, LuOrbit, LuSalad } from 'react-icons/lu'
import {FaCheese} from 'react-icons/fa'
import { twMerge } from "tailwind-merge"
import useCreateFood from "@/hooks/createFoodModal"


export default function FoodItem({item}: {item: Food}) {
    const router = useRouter()

    const handleEdit = async () => {
        console.log(item.id)
        await fetch(`http://localhost:3000/api/foods`, {
            method: 'PUT',
            body: JSON.stringify({ id: item.id })
        })
        router.refresh()
    }

    const createFormHandler = useCreateFood();

    const innerSectionStyles = "flex flex-row justify-between items-center px-2 py-1";
    const bottomInnerContainerStyles = twMerge("grid grid-cols-2 w-full justify-center items-center relative")
    

    return (
        <div className={twMerge('grid grid-cols-2 items-center min-h-[2.25rem] shadow-lg rounded-md bg-gradient-to-b text-slate-600 from-slate-100 to-slate-200 ' )}>
            
            {/* THE GREAT UNIFIER HAHA */}
            <span className="grid grid-cols-2">
                
                <span className="flex h-full flex-row justify-between p-2">
                    <p className="text-lg">{item.name}</p>
                    <span className="relative bg-teal-900 flex items-center justify-center border-1 rounded-[100%] aspect-square h-[3rem]" >
                    <p className="text-teal-50">34%</p>
                </span>
                </span>

                {/* <span className="grid h-full justify-between p-3">
                    <p className="flex items-center gap-2"><LuPower />Calories:</p>
                    <p className="flex items-center gap-2"><LuOrbit />Proteins:</p>
                    <p className="flex items-center gap-2"><LuSalad />Carbs:</p>
                    <p className="flex items-center gap-2"><FaCheese />Fats:</p>
                </span>

                <span className="grid h-full justify-between p-3">
                    <p className="flex items-center ml-6">{item.calories.toFixed(2)} </p>
                    <p className="flex items-center ml-6">{item.proteins.toFixed(2)}</p>
                    <p className="flex items-center ml-6">{item.carbs.toFixed(2)}</p>
                    <p className="flex items-center ml-6">{item.fats.toFixed(2)}</p>
                </span> */}

                <section className="grid grid-cols-4 h-full">
                    {/* CALORIES */}
                    <span className={innerSectionStyles}>
                        <p className="relative">.</p>
                        <p className="relative flex flex-col items-end">
                            {item.calories}
                        </p>
                    </span>

                    {/* PROTEINS */}
                    <span className={innerSectionStyles}>
                        <p className="relative">3%</p>
                        <p className="relative flex flex-col items-end">
                            {item.proteins}
                        </p>
                    </span>


                    {/* CARBS */}
                    <span className={innerSectionStyles}>
                        <p className="relative">14%</p>
                        <p className="relative flex flex-col items-end">
                            {item.carbs}
                        </p>
                    </span>

                    {/* FATS */}
                    <span className={innerSectionStyles}>
                        <p className="relative">20%</p>
                        <p className="relative flex flex-col items-end">
                            {item.fats}
                        </p>
                    </span>
                </section>

            </span>


            <span className="grid grid-cols-6 h-full">

                {/* Weight */}
                <span className={innerSectionStyles}>
                    {/* <p className="relative">Weight:</p> */}
                    <p className="relative flex w-full justify-center">
                        {item.weight === 'light' ? <span>Light</span> : null}
                        {item.weight === 'lightMedium' ? <span>Medium Light</span> : null}
                        {item.weight === 'medium' ? <span>Medium</span> : null}
                        {item.weight === 'mediumHeavy' ? <span>Medium Heavy</span> : null}
                        {item.weight === 'heavy' ? <span>Heavy</span> : null}
                    </p>
                </span>
                {/* SEASONS */}
                <span className={innerSectionStyles}>
                    {/* <p className="relative">Seasons:</p> */}
                    <span className={bottomInnerContainerStyles}>
                        {item.seasons.map((i) => (
                            <p className="p-1 text-center">
                            {i === 'spring' ? <LuClover size={14} /> : null}
                            {i === 'summer' ? <RxSun size={14} /> : null}
                            {i === 'autumn' ? <LuCloudSunRain size={14} /> : null}
                            {i === 'winter' ? <LuSnowflake size={14} /> : null}
                            </p>
                        ))}
                        <span className="absolute right-12 bottom-2 bg-slate-50 text-slate-600 font-bold rounded-md shadow-md hidden group-hover:flex gap-2 px-4 py-2 flex-col  ">{item.seasons.map(i => (<p>{i}</p>))}</span>
                    </span>
                </span>

                {/* TASTE */}
                <span className={innerSectionStyles}>
                    {/* Taste: {item.taste.map((i) => (<p>{i}</p>))} */}
                    {/* <p className="relative ">Taste:</p> */}
                    <span className={bottomInnerContainerStyles}>{item.taste.map((i) => (<p>{i}</p>))}</span>
                </span>


                {/* Volume */}

                <span className={twMerge(bottomInnerContainerStyles, 'items-center relative flex w-full justify-center')}>
                    {item.volume === 'quiet' ? <span>Quiet</span> : null}
                    {item.volume === 'quietModerate' ? <span>Quiet-Moderate</span> : null}
                    {item.volume === 'moderate' ? <span>Moderate</span> : null}
                    {item.volume === 'moderateLoud' ? <span>Moderate-Loud</span> : null}
                    {item.volume === 'loud' ? <span>Loud</span> : null}
                    </span>

                {/* Functionality */}
                <span className={innerSectionStyles}>
                {/* <p className="relative ">Functionality:</p> */}
                    <span className={twMerge(bottomInnerContainerStyles, 'items-center relative flex w-full justify-center')}>{item.functionality}</span>
                </span>



                {/* Price */}
                <span className={innerSectionStyles}>
                {/* <p className="relative ">Price:</p> */}
                    <span className={twMerge(bottomInnerContainerStyles, 'sm:hidden md:flex')}>
                    <span>{item.price}</span>
                    </span>
                </span>
        </span>

            {/* <button className='text-slate-600' onClick={() => {}}>Edit</button> */}
        </div>
    )
}