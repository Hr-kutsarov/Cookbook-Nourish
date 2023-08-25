'use client'

import { useEffect, useState } from "react";
import { Food } from "@/app/types/FoodTypes";

interface BookmarkBtnProps {
    item: Food;
}

const BookmarkButton: React.FC<BookmarkBtnProps> = ({ item }) => {

    const [favourited, favourite] = useState<boolean>(false)
    
    useEffect(() => {

    })

    return (
    <>

    </>)
}

export default BookmarkButton;