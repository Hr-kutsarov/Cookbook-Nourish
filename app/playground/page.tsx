import Loading from "@/components/Loaders/loading";

import ButtonLoader from "@/components/Loaders/ButtonLoader";


export default function Playground() {
    return (
        <>
        <Loading />
        <span className="absolute top-[30%] left-[40%] text-green-200">
            <ButtonLoader />
        </span>
        <span className="absolute top-[60%] left-[60%] text-green-400">
            <ButtonLoader />
        </span>
        </>
    )
}