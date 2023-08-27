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
    multiplier?: number
}


interface BookmarkFoodDataStorePros {
    data: Food[];
    setData: (data: Food[]) => void;
    delData: (data: Food[]) => void;
    sumCalories: number;
    setSumCalories: (data: number) => void;
    sumProteins: number;
    setSumProteins: (data: number) => void;
    sumCarbs: number;
    setSumCarbs: (data: number) => void;
    sumFats: number;
    setSumFats: (data: number) => void;
    sumPrices: number;
    setSumPrices: (data: number) => void;
}

const bookmarkFoodDataStore = create<BookmarkFoodDataStorePros>((set) => ({
    data: [],
    setData: (data) => set({ data: data}),
    delData: () => set({ data: []}),
    sumCalories: 0,
    setSumCalories: (data: number) => set({ sumCalories: data}),
    sumProteins: 0,
    setSumProteins: (data: number) => set({ sumProteins: data}),
    sumCarbs: 0,
    setSumCarbs: (data: number) => set({ sumCarbs: data}),
    sumFats: 0,
    setSumFats: (data: number) => set({ sumFats: data}),
    sumPrices: 0,
    setSumPrices: (data: number) => set({ sumPrices: data}),
    })
)

export default bookmarkFoodDataStore;