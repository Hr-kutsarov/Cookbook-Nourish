'use client'

import NavBox from '@/components/NavBox'
import NavAuth from '@/components/NavAuth'
import Image from 'next/image'
// This hook 
// import useSideMenu from '@/hooks/sideMenu'
import { twMerge } from 'tailwind-merge';
import logo from '../app/g1.png'

const Header: React.FC = () => {
    // const toggler = useSideMenu();

    return (
        <header className="flex flex-row items-center h-[4.25rem] w-full justify-between bg-slate-200 overflow-hidden shadow-sm z-99 relative">
            <span className='flex flex-row items-center ml-4'>
                {/* might use this again */}
                {/* <button onClick={ toggler.isOpen ? toggler.onClose : toggler.onOpen } className={twMerge(`flex p-4 text-slate-600 focus:outline-slate-50`, `${toggler.isOpen && `text-rose-800`}`)}>
                    <HiMenu size={28}/>
                </button> */}
                <Image alt='logo' src={logo} width={28} height={28}/>
                <span className='flex flex-row ml-4'>
                    <p className='hidden md:flex text-slate-600 font-md text-2xl pb-0'>Nourish</p>
                </span>
            <NavBox />
            </span>
            <NavAuth />
        </header>
    )
}

export default Header;