'use client'

import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion';
import useCreateFood from "@/hooks/createFoodModal";
import FoodItemForm from './FoodItemForm';
import useSideMenu from '@/hooks/sideMenu';
import { useEffect } from 'react';

interface ModalProps {
    isOpen?: boolean;
    onSubmit?: () => void;
    onClose?: () => void;
    title?: string;
    children?: React.ReactNode;
}

const CreateFoodModal: React.FC<ModalProps> = ({
    isOpen,
    title,
    children,
    onSubmit,
    onClose
}) => {

    const handler = useCreateFood();

    return (
    <AnimatePresence>
    {handler.isOpen && (
        <section className="flex w-full h-full absolute z-50 items-center justify-center bg-slate-600/30 backdrop-blur-sm">
        <motion.div 
        initial={{opacity: 0, x: '-100vh'}}
        animate={{opacity: 1, x: '0'}}
        exit={{opacity: 0, x: '-100vh'}}
        transition={{
            duration: 0.4,
            type: "spring",
            bounce: 0.15,
            delay: 0.2
        }}
        className="
            flex 
            flex-col
            justify-center
            bg-slate-50
            p-8
            min-w-[450px]
            max-w-[60%]
            rounded-md
            "
        >
            <span 
            className="flex flex-col relative items-end cursor-pointer group text-slate-500 hover:text-rose-
            00"
            onClick={handler.onClose}>
                <IoMdClose size={28}/>
                {/* tooltip */}
                <span
                    className='absolute pr-8 right-0 hidden group-hover:flex'
                >
                    <span
                        className='bg-slate-100 relative flex text-slate-600 px-3 py-2 items-center rounded-md shadow-md'
                    >
                        Close
                    </span>
                </span>
            </span>
            {children}
            <h1 className='text-5xl font-extralight'>Create</h1>
            <FoodItemForm />
        </motion.div>
        </section>
    )}
    
    </AnimatePresence>
    
    )
}

export default CreateFoodModal;