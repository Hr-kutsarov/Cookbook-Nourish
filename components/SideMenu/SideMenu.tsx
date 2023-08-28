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
                animate={{width: '262px', opacity: 1}}
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
                rounded-lg
                min-h-[80vh]
                shadow-xl
                flex
                flex-col
                items-end
                justify-between
                bottom-4
                z-50
                `}>
                
                <AsideElement />
                <BottomNavButton />
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default SideMenu;