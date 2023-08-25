'use client'

import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage'

import { useEffect } from 'react';

export default function BookMarkedCounter() {

    const bookmarkHandler = bookmarkFoodDataStore();

    useEffect(() => {
        console.log(bookmarkHandler.data)
    })
    return (
        <>
        <p>asd</p>
        {bookmarkHandler.data ? (<p>{bookmarkHandler.data.length}</p>) : null}
        </>
    )
}