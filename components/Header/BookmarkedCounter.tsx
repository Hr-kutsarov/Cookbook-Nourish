'use client'

import bookmarkFoodDataStore from '@/hooks/bookmarkFoodStorage'
import NavItem from './NavItem';
import { RxBookmark } from 'react-icons/rx'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function BookMarkedCounter() {

    const bookmarkHandler = bookmarkFoodDataStore();
    const pathname = usePathname()
    const routes = useMemo(() => [
        {
            icon: RxBookmark,
            label: 'Bookmarks',
            active: pathname == '/bookmarks',
            href: '/bookmarks'
        },
    ], [pathname])
    return (
        <span className='flex group relative'>
        <NavItem key='bookmarks' {...routes[0]} primary/>
        <span className='absolute flex items-center justify-center left-4 rounded-full aspect-square p-[0.5rem]'>
            {bookmarkHandler.data.length > 0 ? (<p className='text-sm text-slate-400 font-semibold group-hover:text-slate-600'>{bookmarkHandler.data.length}</p>) : null}
        </span>
        <span className='flex md:hidden'><RxBookmark /></span>
        </span>
    )
}