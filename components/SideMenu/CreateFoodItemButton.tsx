

import useCreateFood from "@/hooks/createFoodModal";
import { RxChevronRight } from 'react-icons/rx';
import { motion } from 'framer-motion'
import Link from 'next/link'
const CreateFoodItemModalButton:React.FC = () => {
    const toggleFoodForm = useCreateFood();

    return (
        <Link 
        className='flex justify-between  w-full text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-150 hover:translate-x-1 focus:outline-none'
        href='add-food'
        >Add Food Item <RxChevronRight size={18} />
        </Link>

    )
}

export default CreateFoodItemModalButton;