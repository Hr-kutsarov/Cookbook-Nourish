'use client'

import { useMemo, useState } from "react";
import { Food } from "@/app/types/FoodTypes";
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';
import { Button } from "../ui/button";
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx'
import { twMerge } from "tailwind-merge";

interface BookmarkBtnProps {
    item: Food;
}

const BookmarkButton: React.FC<BookmarkBtnProps> = ({ item }) => {

    const bookmarkHandler = bookmarkFoodDataStore();
    
    const addBookmark = () => {
        bookmarkHandler.setData([...bookmarkHandler.data, {...item, multiplier: 1}])

        // increment sum of calories
        bookmarkHandler.setSumCalories(bookmarkHandler.sumCalories += item.calories)
        // increment sum of proteins
        bookmarkHandler.setSumProteins(bookmarkHandler.sumProteins += item.proteins)
        // increement sum of carbs
        bookmarkHandler.setSumCarbs(bookmarkHandler.sumCarbs += item.carbs)
        // increment sum of fats
        bookmarkHandler.setSumFats(bookmarkHandler.sumFats += item.fats)
        // incremenet sum of prices
        bookmarkHandler.setSumPrices(bookmarkHandler.sumPrices += item.price)
    }

    const removeBookmark = () => {
        const rest = bookmarkHandler.data.filter((i) => i.id !== item.id)
        bookmarkHandler.setData(rest)
        const x = bookmarkHandler.data.filter((i) => i.id === item.id)[0];
        // decrement sum of calories
        bookmarkHandler.setSumCalories(bookmarkHandler.sumCalories -= x.calories * x.multiplier!)
        // decrement sum of proteins
        bookmarkHandler.setSumProteins(bookmarkHandler.sumProteins -= x.proteins * x.multiplier!)
        // decrement sum of carbs
        bookmarkHandler.setSumCarbs(bookmarkHandler.sumCarbs -= x.carbs * x.multiplier!)
        // decrement sum of fats
        bookmarkHandler.setSumFats(bookmarkHandler.sumFats -= x.fats * x.multiplier!)
        // decrement sum of prices
        bookmarkHandler.setSumPrices(bookmarkHandler.sumPrices -= x.price * x.multiplier!)
    }

    const bookmarked = useMemo(() => {
        return bookmarkHandler.data.find((i) => i.id === item.id)
    }, [bookmarkHandler])

    const additionalBtnStyles = `text-teal-800 ml-2 md:ml-0`;

    return (
    <>
        {!bookmarked ? 
        <Button className={twMerge(additionalBtnStyles)} variant='link' size="lg" onClick={() => addBookmark()}><RxBookmark size={24}/></Button> 
        : 
        <Button className={twMerge(additionalBtnStyles)} variant='link' size="lg" onClick={() => removeBookmark()}><RxBookmarkFilled size={24}/></Button>}
    </>)
}

export default BookmarkButton;