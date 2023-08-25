'use client'

import Header from "@/components/Header/Header";
import { twMerge } from "tailwind-merge";

import { Toaster, toast } from "react-hot-toast";

const Contacts: React.FC = () => {

    toast('in development')
    return (
        <>
            <Toaster />
            <Header />
            <section className={twMerge('mt-[7vh]')}>
            </section>
        </>
    )
}

export default Contacts;