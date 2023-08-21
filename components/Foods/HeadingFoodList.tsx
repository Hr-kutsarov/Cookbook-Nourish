export default function HeadingFoodList() {

    const headingStyles = `flex items-center justify-center`

    return (
        <span className='flex px-1 py-2 text-slate-600 font-semibold shadow-md rounded-md w-full'>
            <span className="flex w-[10%] ">
                <p className="pl-4">Name</p>
            </span>
            <span className="grid grid-cols-2 w-[90%]">
                <span className="grid grid-cols-5">
                    <div className="">Cals</div>
                    <div className={headingStyles}>Proteins</div>
                    <div className={headingStyles}>Carbs</div>
                    <div className={headingStyles}>Fats</div>
                    <div className={headingStyles}>Price</div>
                </span>
                <span className="grid grid-cols-5">
                    <div className={headingStyles}>Weight</div>
                    <div className={headingStyles}>Season</div>
                    <div className={headingStyles}>Taste</div>
                    <div className={headingStyles} >Volume</div>
                    <div className={headingStyles}>Function</div>
                </span>
            </span>
        </span>

    )
}
