'use client'

import { useEffect, useState } from "react";
import { Food } from "@/app/types/FoodTypes";
import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage';
import { Button } from "../ui/button";
import { RxHeart, RxHeartFilled } from 'react-icons/rx'

interface BookmarkBtnProps {
    item: Food;
}

const BookmarkButton: React.FC<BookmarkBtnProps> = ({ item }) => {

    const [favourited, setFavourite] = useState<boolean>(false)

    const bookmarkHandler = bookmarkFoodDataStore();
    
    const handleBookmark = () => {
        bookmarkHandler.setData([...bookmarkHandler.data, item])
    }

    useEffect(() => {
        const x = bookmarkHandler.data.find((i) => i.id === item.id);
        if (x) {
            setFavourite(true)
        }
    })

    return (
    <>
        {!favourited ? <Button variant='link' onClick={() => handleBookmark()}><RxHeart /></Button> : <Button variant='link'><RxHeartFilled /></Button>}
    </>)
}

export default BookmarkButton;