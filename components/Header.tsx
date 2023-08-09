'use client'

import NavBox from '@/components/NavBox'
import NavAuth from '@/components/NavAuth'
import { HiMenu } from "react-icons/hi";
import useSideMenu from '@/hooks/sideMenu'
import { twMerge } from 'tailwind-merge';


const Header: React.FC = () => {
    const toggler = useSideMenu();

    return (
        <header className="flex flex-row items-center h-[4.25rem] w-full justify-between bg-slate-50 overflow-hidden shadow-md">
            <span className='flex flex-row items-center'>
                <button onClick={ toggler.isOpen ? toggler.onClose : toggler.onOpen } className={twMerge(`flex p-4 text-slate-600`, `${toggler.isOpen && `text-rose-800`}`)}>
                    <HiMenu size={28}/>
                </button>
                <span className='flex flex-row ml-4'>
                    <p className='text-slate-600 font-md text-2xl pb-0'>Nourish</p>
                </span>
            <NavBox />
            </span>
            <NavAuth />
        </header>
    )
}

export default Header;