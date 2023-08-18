

export default function HeadingFoodList() {
    return (

        <span className='grid grid-cols-2 px-1 py-2 text-slate-600 font-semibold shadow-md rounded-md'>
            <span className="grid grid-cols-2">
            <div className="pl-4">Name</div>
            <span className="grid grid-cols-4 w-full">
                <div className="flex pl-4 ">Cals</div>
                <div className="flex pl-4 ">Proteins</div>
                <div className="flex pl-4 ">Carbs</div>
                <div className="flex pl-4 ">Fats</div>
            </span>
            </span>
                <span className="grid grid-cols-6">
                    <div className="flex pl-4">Weight</div>
                    <div className="flex pl-4">Season</div>
                    <div className="flex pl-4">Taste</div>
                    <div className="flex pl-4" >Volume</div>
                    <div className="flex pl-4">Function</div>
                    <div className="flex pl-4">Price</div>
                </span>
        </span>
    )
}