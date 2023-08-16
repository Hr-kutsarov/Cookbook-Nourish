import useCreateFood from "@/hooks/createFoodModal";
import { RxChevronRight } from 'react-icons/rx';
import { motion } from 'framer-motion'

const CreateFoodItemModalButton:React.FC = () => {
    const toggleFoodForm = useCreateFood();

    return (
    <button 
        className=' flex justify-between  w-full text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-150 hover:translate-x-1 focus:outline-none'
        onClick={toggleFoodForm.isOpen ? toggleFoodForm.onClose : toggleFoodForm.onOpen}>Add Food Item <RxChevronRight size={18} />
    </button>
    )
}

export default CreateFoodItemModalButton;