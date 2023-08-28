'use client'

import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion';
import useCreateFood from "@/hooks/createFoodModal";
import FoodItemForm from './FoodItemForm';
// keeping these unused props as they are, they might come in handy later
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
        <section className="flex h-full w-full absolute z-30 items-center justify-center mt-[12vh] lg:mt-[7vh] backdrop-blur-sm">
        <motion.div 
        initial={{opacity: 0, y: '120vh'}}
        animate={{opacity: 1, y: '0'}}
        exit={{opacity: 0, y: '120vh'}}
        transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.15,
            delay: 0.1
        }}
        className="
            flex 
            flex-col
            justify-center
            bg-slate-50
            p-4
            md:w-3/5
            lg:w-2/5
            rounded-md
            "
        >
            <span className='flex flex-row justify-between p-2'>

            {children}

                <h1 className='text-4xl font-slate-600 font-extralight items-center'>Create Food Type</h1>
                <span 
                className="flex flex-col relative p-2 cursor-pointer group text-slate-500 h-full justify-center "
                onClick={handler.onClose}>
                    <IoMdClose size={36}/>
                    {/* tooltip */}
                    <span className='absolute pr-8 right-0 hidden group-hover:flex'>
                        <span className='bg-slate-100 relative flex text-slate-600 px-3 py-2 items-center rounded-md shadow-md'>
                            Close
                            {/* triangle */}
                            <span className='border-solid border-l-slate-100 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></span>
                        </span>
                    </span>
                </span>
            </span>
            <FoodItemForm />
        </motion.div>
        </section>
    )}
    
    </AnimatePresence>
    
    )
}

export default CreateFoodModal;