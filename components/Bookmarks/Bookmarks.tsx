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
import { useMemo, useState } from "react";

const Bookmarks = () => {
    const bookmarkHandler = bookmarkFoodDataStore();

    const sumCalories = bookmarkHandler.data.reduce((acc, obj) => acc + obj.calories, 0);
 

    const sumProteins = useMemo(() => {
        return bookmarkHandler.data.reduce((acc, obj) => acc + obj.proteins, 0);
    }, [bookmarkHandler])

    const sumCarbs = useMemo(() => {
        return bookmarkHandler.data.reduce((acc, obj) => acc + obj.carbs, 0);
    }, [bookmarkHandler])

    const sumFats = useMemo(() => {
        return bookmarkHandler.data.reduce((acc, obj) => acc + obj.fats, 0);
    }, [bookmarkHandler])
    
    const sumPrice = useMemo(() => {
        return bookmarkHandler.data.reduce((acc, obj) => acc + obj.price, 0);
    }, [bookmarkHandler])




    let bookmarkStoreIsNotEmpty = bookmarkHandler.data.length > 0

    const accordionContentStyles = 'bg-teal-600 flex w-full h-full flex-col p-2'

    return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        {/* there's a bug in NextJS rendering this. It throws a Warning: Prop `aria-controls` did not match. Server: "radix-:R36qrcq:" Client: "radix-:Rcrbdj9:" in the console. */}
        {/* TODO */}
        {/* for future reference https://github.com/radix-ui/primitives/issues/1684 */}
         <AccordionTrigger className="bg-slate-300 gap-4">
            {bookmarkStoreIsNotEmpty ? <div onClick={() => {
                bookmarkHandler.setData([])
                bookmarkHandler.setCalcData([])
            }}>clear bookmarks</div> : null}
            {bookmarkStoreIsNotEmpty ? <div>{bookmarkHandler.data.length} bookmarked item(s)</div> : <div>Bookmarks</div>}
         </AccordionTrigger>
        <AccordionContent>
        {bookmarkStoreIsNotEmpty ? bookmarkHandler.data.map((item) => <BookmarkedItem key={`bookmarked-${item.id}`} item={item} />) : <h1>no bookmarks yet</h1>}
        <span className="h-10 px-4 py-2 font-semibold justify-start text-sm rounded-lg text-slate-400 hover:text-slate-600 hover:shadow-sm transition-all delay-75 duration-100 hover:translate-x-2">
            <span className="flex w-[20%]">Summary</span>
            <span className='grid grid-cols-5'>
                <p>{sumCalories.toFixed(2)}</p>
                <p>{sumProteins.toFixed(2)}</p>
                <p>{sumCarbs.toFixed(2)}</p>
                <p>{sumFats.toFixed(2)}</p>
                <p>{sumPrice.toFixed(2)}</p>
            </span>
        </span>
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    )
}

export default Bookmarks;