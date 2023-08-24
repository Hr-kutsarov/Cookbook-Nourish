import { Button } from "../ui/button";
import { RxChevronDown, RxPieChart, RxStar, RxLoop,RxBarChart, RxIconjarLogo } from 'react-icons/rx';
import { LuFlower, LuCloudSunRain , LuSun, LuCloudSnow} from 'react-icons/lu';
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const QuickLinks = () => {

    const linkStyles = "max-w-[90%] gap-2 justify-start text-sm rounded-lg text-slate-400 hover:text-slate-600 hover:shadow-sm transition-all delay-75 duration-100 hover:translate-x-2 h-10 px-4 py-2"
    const btnStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
    
    return (
        <section className="flex flex-col w-full h-auto overflow-y-scroll no-scrollbar">  
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mr-4">Useful links <RxChevronDown size={18}/></span>
            <Link className={twMerge(btnStyles, linkStyles)} href='high-energy'>High energy</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='high-protein'>Protein rich foods</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='high-carbs'>Most carbohydrates</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='high-fats'>Fatty foods</Link>
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mt-4 mr-4">Find by season <RxChevronDown size={18}/></span>
            <Link className={twMerge(btnStyles, linkStyles)} href='spring-foods'><LuFlower />Spring</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='summer-foods'><LuSun />Summer</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='autumn-foods'><LuCloudSunRain />Autumn</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='winter-foods'><LuCloudSnow />Winter</Link>
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mt-4 mr-4">Most frequent <RxChevronDown size={18}/></span>
            <Link className={twMerge(btnStyles, linkStyles)} href='/'><RxPieChart />My nutrition</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='/'><RxPieChart /><RxBarChart />Calculate macros</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='/'><RxLoop />Match flavors</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='/'><RxIconjarLogo />Build a recipe</Link>
            <Link className={twMerge(btnStyles, linkStyles)} href='/'><RxStar />Find inspiration</Link>
        </section>
    )
}

export default QuickLinks;