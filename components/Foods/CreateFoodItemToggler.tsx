'use client'

import useCreateFood from "@/hooks/createFoodModal"
import { Button } from "../ui/button";

const CreateFoodItemToggler: React.FC = () => {

    const modalHandler = useCreateFood();

    return (
        <Button variant='link' onClick={() => modalHandler.onOpen()}>
            Create another
        </Button>
    )
}

export default CreateFoodItemToggler;