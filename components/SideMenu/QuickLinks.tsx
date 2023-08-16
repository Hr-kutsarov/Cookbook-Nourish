import { Button } from "../ui/button";
import { RxChevronDown, RxPieChart, RxStar, RxLoop,RxBarChart, RxIconjarLogo } from 'react-icons/rx';
import { LuFlower, LuCloudSunRain , LuSun, LuCloudSnow} from 'react-icons/lu';


const QuickLinks = () => {
    return (
        <section className="flex flex-col w-full h-auto overflow-y-scroll no-scrollbar">  
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mr-4">Useful links <RxChevronDown size={18}/></span>
            <Button onClick={() => console.log('high energy foods')} variant='link'>High energy</Button>
            <Button onClick={() => console.log('proteins')} variant='link'>Protein rich foods</Button>
            <Button onClick={() => console.log('carbs')} variant='link'>Most carbohydrates</Button>
            <Button onClick={() => console.log('fats')} variant='link'>Fatty</Button>
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mt-4 mr-4">Find by season <RxChevronDown size={18}/></span>
            <Button onClick={() => console.log('spring')} variant='link'><LuFlower />Spring</Button>
            <Button onClick={() => console.log('summer')} variant='link'><LuSun />Summer</Button>
            <Button onClick={() => console.log('autumn')} variant='link'><LuCloudSunRain />Autumn</Button>
            <Button onClick={() => console.log('winter')} variant='link'><LuCloudSnow />Winter</Button>
            <span className="flex w-full justify-between text-slate-500 hover:text-slate-700 text-md font-bold transition-all delay-75 duration-100 hover:translate-x-1 focus:outline-none mb-1 mt-4 mr-4">Most frequent <RxChevronDown size={18}/></span>
            <Button onClick={() => console.log('my nutition')} variant='link'><RxPieChart />My nutrition</Button>
            <Button onClick={() => console.log('calculator')} variant='link'><RxBarChart />Macros calculator</Button>
            <Button onClick={() => console.log('flavors')} variant='link'><RxLoop />Match flavors</Button>
            <Button onClick={() => console.log('recipe')} variant='link'><RxIconjarLogo />Build a recipe</Button>
            <Button onClick={() => console.log('inspiration')} variant='link'><RxStar />Find inspiration</Button>
        </section>
    )
}

export default QuickLinks;