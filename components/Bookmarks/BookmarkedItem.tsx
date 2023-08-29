'use client'

import { Food } from "@/app/types/FoodTypes";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { twMerge } from "tailwind-merge";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';
import { FaHamburger, FaLeaf, FaCheese } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";


interface BookmarkedItemTypes {
    item: Food;
}
const BookmarkedItem: React.FC<BookmarkedItemTypes> = ({item}) => {

    // input value is also the recipe multiplier 
    const [inputValue, setInputValue] = useState<number>(1.00);

    const bookmarkHandler = bookmarkFoodDataStore();

    const triggerStyles = `flex items-center shadow-lg rounded-md bg-gradient-to-b text-slate-500 from-slate-100 to-slate-200 mb-1 px-2 py-1 md:px-4`
    const hiddenCardContentColsStyles = `grid grid-cols-2 text-sm font-semibold px-2 py-1 rounded-md tracking-wide`
    const macroStyles = `grid grid-cols-1 md:grid-cols-2 p-1 justify-center gap-4`
    const labelStyles = twMerge('hidden md:flex text-sm justify-end items-center font-semibold text-slate-400')
    const valuesStyles = twMerge('text-end font-bold text-sm text-slate-600 flex justify-end items-center', 'lg:pr-[1.5rem]')

    return (
    <HoverCard>
        <HoverCardTrigger className={twMerge(triggerStyles, 'flex-col md:flex-row')}>
            <span className={twMerge("grid grid-cols-2  md:flex md:flex-row md:justify-between w-[100%] md:w-[15%] px-1")}>
                <span className="flex text-lg items-center ml-2 md:justify-center  text-slate-500 font-semibold " >
                    {item.name}
                </span>
                <div className="flex md:hidden w-full items-center p-1 gap-1 pl-1 md:pl-4 ">
                    <Input 
                    type="number" 
                    step="0.01" 
                    onChange={(e) => {
                        bookmarkHandler.setSumCalories(bookmarkHandler.sumCalories - (item.calories * inputValue) + (item.calories * (Number(e.target.value))));
                        bookmarkHandler.setSumProteins(bookmarkHandler.sumProteins - (item.proteins * inputValue) + (item.proteins * (Number(e.target.value))))
                        bookmarkHandler.setSumCarbs(bookmarkHandler.sumCarbs - (item.carbs * inputValue) + (item.carbs * (Number(e.target.value))))
                        bookmarkHandler.setSumFats(bookmarkHandler.sumFats - (item.fats * inputValue) + (item.fats * (Number(e.target.value))))
                        bookmarkHandler.setSumPrices(bookmarkHandler.sumPrices - (item.price * inputValue)  + (item.price * (Number(e.target.value))))
                        bookmarkHandler.setData([...bookmarkHandler.data.filter((i) => i.id !== item.id), {...item, multiplier: (Number(e.target.value))}])
                        setInputValue(Number(e.target.value))
                    }} 
                    value={inputValue}
                    />
                    <p className={twMerge(valuesStyles, 'lg:pr-0 pl-2')}>kg.</p>
                </div>

            </span>
            <span className={twMerge("grid grid-cols-5 md:grid-cols-6 w-[100%] md:w-[85%]", 'px-1 items-center ')}>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(labelStyles)}><FaHamburger /></p>
                <p className={twMerge(valuesStyles)}>{Number(item.calories * inputValue).toFixed(2)}</p>
                
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(labelStyles)}><TbMeat /></p>
                <p className={twMerge(valuesStyles)}>{Number(item.proteins * inputValue).toFixed(2)}</p>
                
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(labelStyles)}><FaLeaf /></p>
                <p className={twMerge(valuesStyles)}>{Number(item.carbs * inputValue).toFixed(2)}</p>
                
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(labelStyles)}><FaCheese /></p>
                <p className={twMerge(valuesStyles)}>{Number(item.fats * inputValue).toFixed(2)}</p>
                
                </span>
                <span className={twMerge(macroStyles)}>
                <p className={twMerge(labelStyles)}>$</p>
                <p className={twMerge(valuesStyles)}>{Number(item.price * inputValue).toFixed(2)}</p>
                
                </span>
                <div className="hidden md:flex w-full items-center p-1 gap-1 pl-1 md:pl-4">
                    <Input 
                    type="number" 
                    step="0.01" 
                    onChange={(e) => {
                        bookmarkHandler.setSumCalories(bookmarkHandler.sumCalories - (item.calories * inputValue) + (item.calories * (Number(e.target.value))));
                        bookmarkHandler.setSumProteins(bookmarkHandler.sumProteins - (item.proteins * inputValue) + (item.proteins * (Number(e.target.value))))
                        bookmarkHandler.setSumCarbs(bookmarkHandler.sumCarbs - (item.carbs * inputValue) + (item.carbs * (Number(e.target.value))))
                        bookmarkHandler.setSumFats(bookmarkHandler.sumFats - (item.fats * inputValue) + (item.fats * (Number(e.target.value))))
                        bookmarkHandler.setSumPrices(bookmarkHandler.sumPrices - (item.price * inputValue)  + (item.price * (Number(e.target.value))))
                        bookmarkHandler.setData([...bookmarkHandler.data.filter((i) => i.id !== item.id), {...item, multiplier: (Number(e.target.value))}])
                        setInputValue(Number(e.target.value))
                    }} 
                    value={inputValue}
                    />
                    <p className={twMerge(valuesStyles, 'lg:pr-0 pl-2')}>kg.</p>
                </div>
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