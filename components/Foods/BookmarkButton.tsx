'use client'

import { useMemo, useState } from "react";
import { Food } from "@/app/types/FoodTypes";
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';
import { Button } from "../ui/button";
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx'

interface BookmarkBtnProps {
    item: Food;
}

const BookmarkButton: React.FC<BookmarkBtnProps> = ({ item }) => {

    const bookmarkHandler = bookmarkFoodDataStore();
    
    const addBookmark = () => {
        bookmarkHandler.setData([...bookmarkHandler.data, item])
    }

    const removeBookmark = () => {
        const data = bookmarkHandler.data.filter((i) => i.id !== item.id)
        bookmarkHandler.setData(data)
    }

    const bookmarked = useMemo(() => {
        return bookmarkHandler.data.find((i) => i.id === item.id)
    }, [bookmarkHandler])

    return (
    <>
        {!bookmarked ? 
        <Button variant='link' onClick={() => addBookmark()}><RxBookmark /></Button> 
        : 
        <Button variant='link' onClick={() => removeBookmark()}><RxBookmarkFilled /></Button>}
    </>)
}

export default BookmarkButton;