'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Button } from "../ui/button";
import bookmarkFoodDataStore from "@/hooks/bookmarkFoodStorage";
import { twMerge } from "tailwind-merge";
import BookmarkedItem from "./BookmarkedItem";
import { useEffect, useMemo, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaHamburger, FaLeaf, FaCheese } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";

const Bookmarks = () => {
    const bookmarkHandler = bookmarkFoodDataStore();

    let bookmarkStoreIsNotEmpty = bookmarkHandler.data.length > 0

    const gridValuesStyles = 'flex flex-col md:flex-row w-full items-center justify-end md:grid-cols-2 p-1 gap-2'
    const summedValuesStyles = 'flex justify-end md:ml-2 lg:pr-6 font-bold tracking-wide'
    const macroLabelStyles = 'items-center justify-end font-semibold text-slate-500 hidden md:flex'

    return (
    <Accordion type="single" collapsible>
        {/* apparently value is mandatory here, sigh */}
    <AccordionItem value="item-1">
        {/* there's a bug in NextJS rendering this. It throws a Warning: Prop `aria-controls` did not match. Server: "radix-:R36qrcq:" Client: "radix-:Rcrbdj9:" in the console. */}
        {/* TODO */}
        {/* for future reference https://github.com/radix-ui/primitives/issues/1684 */}
         <AccordionTrigger className=" h-12 gap-4 justify-between px-6">
            {bookmarkStoreIsNotEmpty ? 
            <div 
            className="text-slate-50 py-4 px-1"
            onClick={() => {
                bookmarkHandler.setData([])
                bookmarkHandler.setSumCalories(0);
                bookmarkHandler.setSumCarbs(0);
                bookmarkHandler.setSumProteins(0);
                bookmarkHandler.setSumFats(0);
                bookmarkHandler.setSumPrices(0);
            }}><FaTrash size={28}/></div> : null}
            {bookmarkStoreIsNotEmpty 
                ? 
                <div>
                    <p className={twMerge(macroLabelStyles, 'text-slate-600')}>{bookmarkHandler.data.length} bookmarked item(s)</p>
                </div> 
                : 
            <div className={twMerge(macroLabelStyles, 'text-slate-600')}>Bookmarks</div>}


         </AccordionTrigger>
        <AccordionContent className='px-2'>

        {bookmarkStoreIsNotEmpty 
            ? 
        bookmarkHandler.data.map((item) => <BookmarkedItem key={`bookmarked-${item.id}`} item={item} />) 
            : 
        <span className={twMerge(macroLabelStyles, 'justify-start')}>
            <h1>You do not have any bookmarks.</h1>
        </span>}

        {bookmarkStoreIsNotEmpty ?         
        <span className="grid grid-cols-1 md:flex md:flex-row p-2 font-semibold justify-start text-sm rounded-lg text-slate-400 hover:text-slate-600 hover:shadow-md">
            <span className="flex mb-2 md:mb-0 md:w-[15%] pl-1 h-full">Total:</span>
            <span className='grid grid-cols-5 md:grid-cols-6 md:w-[85%]'>
                <span className={gridValuesStyles}>
                    <p className={twMerge(macroLabelStyles)}>Calories</p>
                    <p className={twMerge('md:hidden')}><FaHamburger /></p>
                    <p className={twMerge(summedValuesStyles, 'text-green-600')}>{bookmarkHandler.sumCalories.toFixed(2)}</p>
                </span>
                <span className={gridValuesStyles}>
                    <p className={twMerge(macroLabelStyles)}>Proteins:</p>
                    <p className={twMerge('md:hidden')}><TbMeat /></p>
                    <p className={twMerge(summedValuesStyles, 'text-green-700')}>{bookmarkHandler.sumProteins.toFixed(2)}</p>
                </span>
                <span className={gridValuesStyles}>
                    <p className={twMerge(macroLabelStyles)}>Carbs:</p>
                    <p className={twMerge('md:hidden')}><FaLeaf /></p>
                    <p className={twMerge(summedValuesStyles, 'text-emerald-700')}>{bookmarkHandler.sumCarbs.toFixed(2)}</p>
                </span>
                <span className={gridValuesStyles}>
                    <p className={twMerge(macroLabelStyles)}>Fats:</p>
                    <p className={twMerge('md:hidden')}><FaCheese /></p>
                    <p className={twMerge(summedValuesStyles, 'text-emerald-700')}>{bookmarkHandler.sumFats.toFixed(2)}</p>
                </span>
                <span className={gridValuesStyles}>
                    <p className={twMerge(macroLabelStyles)}>Price:</p>
                    <p className={twMerge('md:hidden')}>$</p>
                    <p className={twMerge(summedValuesStyles, 'text-teal-800')}>{bookmarkHandler.sumPrices.toFixed(2)}</p>
                </span>
            </span>
        </span> 
        : 
        null}
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    )
}

export default Bookmarks;