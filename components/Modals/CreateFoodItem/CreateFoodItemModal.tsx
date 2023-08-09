'use client'

import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion';
import useCreateFood from "@/hooks/createFoodModal";
import FoodItemForm from './FoodItemForm';

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
        <section className="flex bg-transparent w-full h-full absolute items-center justify-center">
        <motion.div 
        initial={{opacity: 0, x: '-100vh'}}
        animate={{opacity: 1, x: '0'}}
        exit={{opacity: 0, x: '-100vh'}}
        transition={{
            duration: 0.4,
            type: "spring",
            bounce: 0.15,
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
            className="flex flex-col items-end cursor-pointer text-slate-500 hover:text-rose-
            00"
            onClick={handler.onClose}>
                <IoMdClose size={28}/>
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