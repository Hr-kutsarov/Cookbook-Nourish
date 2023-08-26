import { create } from 'zustand';

import { Food } from '@/app/types/FoodTypes';

export type CalcFoodType = {
    id: string,
    name: string,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number,
    price: number
}


interface BookmarkFoodDataStorePros {
    data: Food[];
    setData: (data: Food[]) => void;
    delData: (data: Food[]) => void;
    calcData: CalcFoodType[];
    setCalcData: (data: CalcFoodType[]) => void;
    delCalcData: (data: CalcFoodType[]) => void;


}

const bookmarkFoodDataStore = create<BookmarkFoodDataStorePros>((set) => ({
    data: [],
    setData: (data) => set({ data: data}),
    delData: () => set({ data: []}),
    calcData: [],
    setCalcData: (data: CalcFoodType[]) => set({ calcData: data}),
    delCalcData: () => set({ data: []}),
    })
)

export default bookmarkFoodDataStore;