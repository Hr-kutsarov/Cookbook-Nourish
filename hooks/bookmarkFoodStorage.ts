import { create } from 'zustand';

import { Food } from '@/app/types/FoodTypes';

interface BookmarkFoodDataStorePros {
    data: Food[];
    setData: (data: Food[]) => void;
}

const bookmarkFoodDataStore = create<BookmarkFoodDataStorePros>((set) => ({
    data: [],
    setData: (data) => set({ data: data}),
    delData: () => set({ data: []}),
    })
)

export default bookmarkFoodDataStore;