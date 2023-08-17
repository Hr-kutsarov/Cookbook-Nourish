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
    price: number
}

// name: formData.name, 
// calories: formData.calories, 
// proteins: formData.proteins,
// carbs: formData.carbs,
// fats: formData.fats,
// // TODO FIX THIS
//         // TODO FIX THIS
//                 // TODO FIX THIS
// seasons: formData.seasons.map((i) => i.value),
// taste: formData.taste.map((i) => i.value),
// weight: formData.weight.value,
// volume: formData.volume.value,
// functionality: formData.functionality.value,
// price: formData.price