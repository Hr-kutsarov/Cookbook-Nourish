import Header from "@/components/Header/Header";
import CreateFoodModal from "@/components/Modals/CreateFoodItem/CreateFoodItemModal";

import useCreateFood from "@/hooks/createFoodModal";

export default function AddFood () {

    return (
        <>
        <Header />
        <CreateFoodModal />
        </>
    )
}