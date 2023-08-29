'use client'

import Header from "@/components/Header/Header";
import { twMerge } from "tailwind-merge";

import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import Image from "next/image";

const Contacts: React.FC = () => {

    const paragraphStyles = `p-4 text-slate-400 font-semibold tracking-wide`
    const basic = 'flex w-full h-full flex-col justify-center items-center p-2'
    // toast('in development')
    return (
        <span className={twMerge( 'flex flex-col bg-white min-h-[100vh] pb-24')}>
            <Toaster />
            <Header />
            <section className={twMerge('')}>
                <Link  href='https://github.com/Hr-kutsarov/Cookbook-Nourish' className="bg-gradient-to-br from-slate-600 to-slate-500 flex flex-row justify-evenly rounded-md mx-4 items-center py-6">
                    <h1 className="text-slate-50 text-lg font-semibold tracking-wide">Follow this project on GitHub </h1>
                    <p className="text-slate-50"><RxGithubLogo size={36} /></p>
                </Link>
            </section>
            <section className=" grid md:grid-cols-2 px-4 md:px-0 mt-4 gap-2">
                <Image className={twMerge(basic)} src='https://i.imgur.com/nwBJDh2.png' alt="asd" width={300} height={400}/>
                <p className={twMerge(paragraphStyles, basic)}>Figma snapshots.</p>
                
                <Image className={twMerge(basic)} src='https://i.imgur.com/XzmfuQD.png' alt="asd" width={360} height={200}/>
                <p className={twMerge(paragraphStyles, basic)}>Early washing machine design.</p>

                <Image className={twMerge(basic)} src='https://i.imgur.com/fmnTsIU.png' alt="asd" width={200} height={500}/>
                <p className={twMerge(paragraphStyles, basic)}>Scrapbook shot.</p>
                
                <Image className={twMerge(basic)} src='https://i.imgur.com/RiFZshd.png' alt="asd" width={400} height={500}/>
                <p className={twMerge(paragraphStyles, basic)}>90's applications nostalgia.</p>

            </section>
        </span >
    )
}

export default Contacts;