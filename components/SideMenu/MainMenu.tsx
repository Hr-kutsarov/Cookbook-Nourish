'use client'


// import components
import Navigation from '../Header/NavBox'
import NavItem from '../Header/NavItem';

// hooks
import useSideMenu from '@/hooks/sideMenu'
import useCreateFood from '@/hooks/createFoodModal'
import MainMenuToggler from '@/hooks/mainMenu'
import prioritySwitcher from '@/hooks/prioritySwitcher';


// icons
import { HiMenu, HiHome } from "react-icons/hi";
import { RxPencil2, RxChevronUp, RxChevronLeft, RxMixerVertical } from 'react-icons/rx'

// libs

import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


const MainMenu: React.FC = ({}) => {

    const menuToggler = MainMenuToggler()
    
    const switcher = prioritySwitcher();
    const sidemenuToggler = useSideMenu();
    return (
        <nav
        className={twMerge(`
        flex 
        flex-col-reverse
        items-center 
        w-auto
        cursor-pointer
        text-slate-500
        focus:outline-none
        fixed
        bottom-4
        right-4
        shadow-md
        rounded-full
        z-50
        `)}
        >
            <button 
            onClick={ menuToggler.isOpen ? menuToggler.onClose : menuToggler.onOpen } 
            className={twMerge(`flex p-4 text-slate-600 focus:outline-slate-50 rounded-b-full rounded-t-full bg-white hover:text-emerald-700`, menuToggler.isOpen && 'rounded-t-none shadow-xl text-emerald-600')}
            >
                {menuToggler.isOpen ? <HiMenu size={28}/> : <RxChevronUp size={28}/>}
            </button>
            <div 
            className={twMerge('z-50 flex opacity-0 bg-white rounded-t-full w-full h-0 text-slate-400 flex-col-reverse items-center transition-all ', menuToggler.isOpen && 'opacity-1', menuToggler.isOpen && 'h-auto')}>
                
                {/* USING FLEX-REVERSE! */}
                
                {/* FOOD LIST SWITCHER */}
                {menuToggler.isOpen ?
                <span 
                className="p-4 relative aspect-square w-full group flex hover:text-slate-700 z-50"
                onClick={() => {switcher.priorityState === 'primary' ? switcher.onSecondary() : switcher.onPrimary()}}>
                    <RxMixerVertical size={24}/>
                    <span className='absolute mr-20 right-0 hidden group-hover:flex bg-slate-50 text-slate-600 p-2 rounded-md justify-center items-center shadow-md min-w-[6rem]'>
                        Switch
                        <span className='border-solid border-l-slate-100 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></span>
                    </span>
                </span>
                : null }

                {/* OPEN SIDE MENU */}

                {menuToggler.isOpen ? 
                <span 
                className="p-4 relative aspect-square w-full group flex hover:text-slate-700"
                onClick={() => {sidemenuToggler.isOpen ? sidemenuToggler.onClose() : sidemenuToggler.onOpen()}}>
                    <RxChevronLeft size={24}/>
                    <span className='absolute mr-20 right-0 hidden group-hover:flex bg-slate-50 text-slate-600 p-2 rounded-md justify-center items-center shadow-md min-w-[6rem]'>
                        Side menu
                        <span className=' border-solid border-l-slate-100 border-l-8 border-y-transparent border-y-[8px] border-r-0 absolute -right-2'></span>
                    </span>
                </span>
                : null }

                {/* OPEN CREATE FOOD MODAL */}
                {menuToggler.isOpen ?
                <Link 
                className="p-4 relative aspect-square w-full group flex hover:text-slate-700"
                href='/add-food'>
                    <RxPencil2 size={24}/>
                    <span className='absolute mr-20 right-0 hidden group-hover:flex bg-slate-50 text-slate-600 p-2 rounded-md justify-center items-center shadow-md min-w-[6rem]'>
                        New item
                        <span className='border-solid border-l-slate-100 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></span>
                    </span>
                </Link>
                : null }

                {/* NAV TO HOMEPAGE */}
                {menuToggler.isOpen ?
                <Link 
                className="p-4 relative aspect-square w-full group flex hover:text-slate-700"
                href='/'
                >
                    <HiHome size={24}/>
                    <span className='absolute mr-20 right-0 hidden group-hover:flex bg-slate-50 text-slate-600 p-2 rounded-md justify-center items-center shadow-md min-w-[6rem]'>
                        Home
                        <span className=' border-solid border-l-slate-100 border-l-8 border-y-transparent border-y-[8px] border-r-0 absolute -right-2'></span>
                    </span>
                </Link>
                : null }
            </div>
        </nav>
    )
}

export default MainMenu;