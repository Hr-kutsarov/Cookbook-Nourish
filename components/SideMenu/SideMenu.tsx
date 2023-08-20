'use client'

import { motion, AnimatePresence  } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react';
import useSideMenu from '@/hooks/sideMenu';
import CreateFoodItemModalButton from '@/components/SideMenu/CreateFoodItemButton'
import TopNavButton from './TopNavButton';
import BottomNavButton from './BottomNavButton';
import AsideElement from './AsideServerElement';

const SideMenu: React.FC = () => {
    const toggler = useSideMenu();

    return (
        <AnimatePresence>
        {toggler.isOpen && (
            <motion.div
                initial={{width: 0, opacity: 0}}
                animate={{width: '60vw', opacity: 1}}
                exit={{width: 0, opacity: 0}}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.15,
                }}
                className={`
                absolute
                p-4
                bg-slate-100
                h-auto
                right-24
                sm:max-w-[95vw]
                md:max-w-[240px]
                mb-4
                rounded-lg
                min-h-[75vh]
                shadow-xl
                flex
                flex-col
                items-end
                justify-between
                bottom-4
                `}>
                
                <AsideElement />
                <BottomNavButton />
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default SideMenu;