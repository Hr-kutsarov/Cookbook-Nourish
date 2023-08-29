import prioritySwitcher from "@/hooks/prioritySwitcher"
import { twMerge } from "tailwind-merge";

export default function HeadingFoodList() {

    const headingStyles = `flex items-center justify-center`
    const switcher = prioritySwitcher()

    return (
        <span className='lg:px-4'>
        <span className='hidden p-2 h-[5vh] text-slate-600 font-semibold shadow-md rounded-md w-full xl:flex'>
            <span className={twMerge("flex w-[15%] pl-4" )}>
                <p className={headingStyles}>Name</p>
            </span>
            <span className="grid grid-cols-2 w-[85%]">
                <span className="grid grid-cols-5">
                    <div className={headingStyles}>Cals</div>
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
        <span className='flex px-1 py-2 text-slate-600 font-semibold shadow-md rounded-md w-full xl:hidden mt-[1vh]'>
            <span className="hidden md:flex md:w-[20%] ">
                <p className="pl-4">Name</p>
            </span>
            
            {switcher.priorityState === 'primary' ? 
                <span className="grid grid-cols-1 w-[100%] md:w-[80%]">
                    <span className="grid grid-cols-5">
                    <div className={headingStyles}>Cal</div>
                    <div className={headingStyles}>Proteins</div>
                    <div className={headingStyles}>Carbs</div>
                    <div className={headingStyles}>Fats</div>
                    <div className={headingStyles}>Price</div>
                    </span>
                </span>
                :
                <span className="grid grid-cols-1 w-[100%] md:w-[80%]">
                <span className="grid grid-cols-5">
                    <div className={headingStyles}>Weight</div>
                    <div className={headingStyles}>Season</div>
                    <div className={headingStyles}>Taste</div>
                    <div className={headingStyles}>Volume</div>
                    <div className={headingStyles}>Function</div>
                </span>
                </span>
            }
            
        </span>
        
        </span>

    )
}
