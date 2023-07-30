import { Food } from "@/app/types/FoodTypes"
import { useRouter } from "next/navigation"
import FoodDetails from "./FoodDetails"


export default function FoodItem({item}: {item: Food}) {
    const router = useRouter()

    const handleEdit = async () => {
        console.log(item.id)
        await fetch(`http://localhost:3000/api/foods`, {
            method: 'PUT',
            body: JSON.stringify({ id: item.id })
        })
        router.refresh()
    }
    return (
        <div className='flex flex-row gap-4 px-5 py-3 rounded-lg'>
            <p>Food name: {item.name}</p>
            <p>{item.id}</p>
            <p>{item.fats}</p>
            <button className='text-slate-600' onClick={handleEdit}>Edit</button>
        </div>
    )
}