import TopNavButton from "./TopNavButton";
import CreateFoodItemModalButton from "./CreateFoodItemButton";
import QuickLinks from "./QuickLinks";

const AsideElement = () => {
    return (

    <aside className='flex flex-col gap-4 w-full overflow-y-scroll max-h-[70vh] no-scrollbar'>
        <TopNavButton />
        <CreateFoodItemModalButton />
        <QuickLinks />
    </aside>
    )
}

export default AsideElement;