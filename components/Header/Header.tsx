'use client'

import NavBox from './NavBox'
import NavAuth from './NavAuth'
import Image from 'next/image'
// This hook 
// import useSideMenu from '@/hooks/sideMenu'
import { twMerge } from 'tailwind-merge';
import logo from '@/app/logo.svg'
import BookMarkedCounter from './BookmarkedCounter';

const Header: React.FC = () => {
    // const toggler = useSideMenu();

    return (
        <header className="flex flex-row top-0 items-center h-[12vh] w-full justify-between bg-slate-50/90 backdrop-blur-sm overflow-hidden shadow-sm z-50 relative">
            <span className='flex flex-row items-center md:ml-4 '>
                {/* might use this again */}
                {/* <button onClick={ toggler.isOpen ? toggler.onClose : toggler.onOpen } className={twMerge(`flex p-4 text-slate-600 focus:outline-slate-50`, `${toggler.isOpen && `text-rose-800`}`)}>
                    <HiMenu size={28}/>
                </button> */}
                <span className='hidden md:flex'>
                    <Image alt='logo' src={logo} width={28} height={28}/>
                </span>

                <span className='hidden md:flex flex-row md:ml-4'>
                    <p className=' text-slate-600 font-md text-2xl pb-0'>Nourish</p>
                </span>
                <NavBox />
                {/* <BookMarkedCounter /> */}
            </span>
            <NavAuth />
        </header>
    )
}

export default Header;