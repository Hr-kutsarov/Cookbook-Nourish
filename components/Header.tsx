'use client'

import NavBox from '@/components/NavBox'
import NavAuth from '@/components/NavAuth'
import { HiMenu } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import useSideMenu from '@/hooks/sideMenu'


const Header: React.FC = () => {
    const toggler = useSideMenu()
    const toggleSidebar = useCallback(() => {
        toggler.isOpen ? toggler.onClose() : toggler.onOpen()
    }, [toggler])
    return (
        <header className="flex flex-row items-center h-[4.25rem] w-full justify-between bg-slate-50 overflow-hidden shadow-md">
            <span className='flex flex-row items-center'>
                <button onClick={toggleSidebar} className='flex p-4'>
                    <HiMenu size={28}/>
                </button>
                <span className='flex flex-row'>
                    <p className='text-slate-600 font-md text-2xl pb-0'>Nourish</p>
                </span>
            <NavBox />
            </span>
            <NavAuth />
        </header>
    )
}

export default Header;