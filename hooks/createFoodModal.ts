import { create } from 'zustand';

interface CreateFoodProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    label?: string;
}

const useCreateFood = create<CreateFoodProps>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
})
)

export default useCreateFood;