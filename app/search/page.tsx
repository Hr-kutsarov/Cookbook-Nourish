// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { useState } from "react"

const handleSubmit = async (formData: FormData) => {
    'use server'

    const {name, calories, proteins, carbs, fats, weight, volume, functionality, taste, seasons } = Object.fromEntries(formData.entries())
    const supabase = createServerActionClient({ cookies })
    await supabase.from('Foods').insert({ name, calories, proteins, carbs, fats, weight, volume, functionality, taste, seasons })
    revalidatePath('/search')
}

const Search: React.FC = async () => {

    const supabase = createServerActionClient({ cookies })

    const {data: foods } = await supabase.from('Foods').select();



    return (
        <span className="flex flex-col w-full h-full items-center justify-center">
            <h1> search pages</h1>
            <span className='flex flex-col gap-1 my-4'>
                {foods?.map((food) => (<p>{food.name}</p>))}
            </span>

            <form action={handleSubmit}>
                <input type='text' name="name" placeholder='Name' />
                <input className='flex w-full' name='calories' type="number" step="0.01" placeholder="Calories" />
                <input className='flex w-full' name='proteins' type="number" step="0.01" placeholder="Proteins" />
                <input className='flex w-full' name='carbs' type="number" step="0.01" placeholder="Carbs" />
                <input className='flex w-full' name='fats' type="number" step="0.01" placeholder="Fats" />
                <input className='flex w-full' name='weight' type="text" placeholder="Weight" />
                <input className='flex w-full' name='volume' type="text" placeholder="Volume" />
                <input className='flex w-full' name='functionality' type="text" placeholder="Functionality" />
                <select name="taste" multiple>
                    <option value="bitter">bitter</option>
                    <option value="sweet">sweet</option>
                    <option value="salty">salty</option>
                    <option value="bitter">bitter</option>
                    <option value="umami">umami</option>
                </select>
                <select name="seasons" multiple>
                    <option value="spring">spring</option>
                    <option value="summer">summer</option>
                    <option value="winter">winter</option>
                    <option value="autumn">autumn</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </span>
    )
}

export default Search;

