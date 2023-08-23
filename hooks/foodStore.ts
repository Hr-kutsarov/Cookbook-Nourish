import { create } from 'zustand';

import { Food } from '@/app/types/FoodTypes';

interface FoodDataStorePros {
    data: Food[];
    setData: (data: Food[]) => void;
}

const FoodDataStore = create<FoodDataStorePros>((set) => ({
    data: [],
    setData: (data) => set({ data: data}),
    delData: () => set({ data: []}),
    })
)

export default FoodDataStore;