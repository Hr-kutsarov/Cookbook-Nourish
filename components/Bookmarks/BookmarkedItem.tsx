import { Food } from "@/app/types/FoodTypes";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { twMerge } from "tailwind-merge";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';

interface BookmarkedItemTypes {
    item: Food;
}
const BookmarkedItem: React.FC<BookmarkedItemTypes> = ({item}) => {

    // input value is also the recipe multiplier 
    const [inputValue, setInputValue] = useState<number>(1.00);

    const bookmarkHandler = bookmarkFoodDataStore();

    const data = useMemo(() => {
        const x = bookmarkHandler.data.find((i) => i.id === item.id);
        const y = { id: x?.id!, name: x?.name!, calories: x?.calories! * inputValue, proteins: x?.proteins! * inputValue, carbs: x?.carbs! * inputValue, fats: x?.fats! * inputValue, price: x?.price! * inputValue}
        bookmarkHandler.setCalcData([...bookmarkHandler.calcData, y])
        return y
    }, [inputValue])


    const triggerStyles = `flex flex-row items-center shadow-md rounded-md bg-gradient-to-b text-slate-500 from-slate-100 to-slate-200 mb-1 px-2 py-1 md:px-4`
    const hiddenCardContentColsStyles = `grid grid-cols-2 text-sm font-semibold px-2 py-1 rounded-md tracking-wide`
    const macroStyles = `grid grid-cols-3 p-1 justify-center gap-4`
    const labelStyles = 'text-sm font-semibold text-slate-400';
    const valuesStyles = 'text-end font-bold text-sm text-slate-600'
    return (
    <HoverCard>
        <HoverCardTrigger className={twMerge(triggerStyles)}>
            <span className={twMerge("flex justify-between flex-row w-[20%] xl:w-[15%]", "px-1")}>
                <span className="flex text-lg items-center justify-center  text-slate-500  font-semibold">
                    {item.name}
                </span>
                <div className="flex w-full max-w-[100px] items-center p-1 gap-1">
                    <Input 
                    type="number" 
                    step="0.01" 
                    onChange={(e) => {
                        setInputValue(Number(e.target.value))
                    }} 
                    value={inputValue}
                    />
                    <p>kg.</p>
                </div>
            </span>
            <span className={twMerge("grid grid-cols-5 w-[80%] xl:w-[85%]", 'px-1 ')}>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(valuesStyles)}>{data.calories.toFixed(2)}</p><p>32%</p><p className={twMerge(labelStyles)}>Calories</p>
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(valuesStyles)}>{data.proteins.toFixed(2)}</p><p>32%</p><p className={twMerge(labelStyles)}>Proteins</p>
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(valuesStyles)}>{data.carbs.toFixed(2)}</p><p>32%</p><p className={twMerge(labelStyles)}>Carbs</p>
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(valuesStyles)}>{data.fats.toFixed(2)}</p><p>32%</p><p className={twMerge(labelStyles)}>Fats</p>
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(valuesStyles)}>{data.price.toFixed(2)}</p><p>32%</p><p className={twMerge(labelStyles)}>Price</p>
                </span>
            </span>
            
            {/* bookmarked item */}
            {/* summed stats */}
        </HoverCardTrigger>
        <HoverCardContent>

            <span className={twMerge(hiddenCardContentColsStyles)}>
                <p>Weight:</p><p>{item.weight}</p>
                <p>Season:</p><span>{item.seasons.map(i => <p>{i}</p>)}</span>
                <p>Taste:</p><span>{item.taste.map(i => <p>{i}</p>)}</span>
                <p>Volume:</p><p>{item.volume}</p>
                <p>Function:</p><p>{item.functionality}</p>
            </span>

        </HoverCardContent>
    </HoverCard>
    )
}

export default BookmarkedItem;