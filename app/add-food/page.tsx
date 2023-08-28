import Header from "@/components/Header/Header";
import CreateFoodModal from "@/components/Modals/CreateFoodItem/CreateFoodItemModal";

import useCreateFood from "@/hooks/createFoodModal";

export default function AddFood () {

    return (
        <span className="flex min-h-[100vh] relative w-full">
        <Header />
        <CreateFoodModal />
        </span>
    )
}