import useCreateFood from "@/hooks/createFoodModal";
import { IoMdArrowDropright } from 'react-icons/io';

const CreateFoodItemModalButton:React.FC = () => {
    const toggleFoodForm = useCreateFood();

    return (
    <button 
        className=' flex justify-between  w-full text-slate-500 hover:text-slate-800 text-sm font-bold transition-transform hover:translate-x-1'
        onClick={toggleFoodForm.isOpen ? toggleFoodForm.onClose : toggleFoodForm.onOpen}>Add Food Item <IoMdArrowDropright size={18} />
    </button>
    )
}

export default CreateFoodItemModalButton;