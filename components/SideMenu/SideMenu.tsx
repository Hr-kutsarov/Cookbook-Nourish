'use client'
import { motion, AnimatePresence  } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react';
import useSideMenu from '@/hooks/sideMenu';
import CreateFoodItemModalButton from '@/components/SideMenu/CreateFoodItemButton'

const SideMenu: React.FC = () => {
    const toggler = useSideMenu();

    return (
        <AnimatePresence>
        {toggler.isOpen && (
            <motion.div
                initial={{width: 0, opacity: 0}}
                animate={{width: '300px', opacity: 1}}
                exit={{width: 0, opacity: 0}}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.15,
                }}
                className={`
                flex
                flex-col
                w-[300px]
                min-h-[calc(100vh-3.9rem)]
                p-4
                bg-slate-100
                shadow-md
                absolute
                mt-[3.9rem]
                `}>
                <aside>
                    
                    <CreateFoodItemModalButton />
                    <p>
                        aside
                    </p>

                </aside>
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default SideMenu;