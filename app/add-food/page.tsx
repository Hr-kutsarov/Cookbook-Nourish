import Header from "@/components/Header/Header";
import CreateFoodModal from "@/components/Modals/CreateFoodItem/CreateFoodItemModal";

import CreateFoodItemToggler from "@/components/Foods/CreateFoodItemToggler";

export default function AddFood () {

    return (
        <span className="flex flex-col min-h-[100vh] relative w-full">
        <Header />
        <span className="flex w-full h-full min-h-[60vh] items-center justify-center">
            <CreateFoodItemToggler />
        </span>
        <CreateFoodModal />
        </span>
    )
}