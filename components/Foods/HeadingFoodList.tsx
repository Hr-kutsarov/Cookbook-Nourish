'use client'

export default function HeadingFoodList() {
    return (

            <span className='grid grid-cols-2 items-center rounded-lg bg-gradient-to-r text-teal-50 from-green-600 to-teal-800 max-w-[92%]'>
                <span className="flex">
                <div>Name</div>
                    <span className="grid grid-cols-4 w-full">
                        <div className="flex justify-center ">Calories</div>
                        <div className="flex justify-center ">Proteins</div>
                        <div className="flex justify-center ">Carbs</div>
                        <div className="flex justify-center ">Fats</div>
                    </span>
                </span>
                    <span className="grid grid-cols-6">
                        <div className="flex justify-center">Weight</div>
                        <div className="flex justify-center">Season</div>
                        <div className="flex justify-center">Taste</div>
                        <div className="flex justify-center" >Volume</div>
                        <div className="flex justify-center">Function</div>
                        <div className="flex justify-center">Price</div>
                    </span>
            </span>
    )
}