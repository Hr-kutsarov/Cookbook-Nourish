export type Food = {
    id: string,
    created_at: string,
    name: string,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number,
    seasons: string[],
    taste: string[],
    weight: string,
    volume: string,
    functionality: string,
    price: number,
    multiplier?: number
}
