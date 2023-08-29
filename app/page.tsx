import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

export const dynamic = "force-dynamic";

// interface IndexProps {
//   children: React.ReactNode;
// }

const Index = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const homepageIntroText = ""
  
  const textStyles = `w-full text-md font-normal tracking-normal text-slate-600 text-center`;
  const boxStyles = `flex flex-col w-full h-full items-center justify-center relative`;
  const btnStyles = `p-2 rounded-md shadow-sm max-w-[60%] bg-gradient-to-br from-green-600 to-teal-800`
  const semiboldStyles = `font-semibold tracking-wide`
  
  return (
    <span className={twMerge(" bg-slate-200 min-h-[100vh] flex flex-col relative")}>
      <Header />
      <section className={twMerge("min-h-[60vh] items-center justify-center gap-4", boxStyles)}>
        <h1 className={twMerge(textStyles, 'text-5xl font-light w-full')}>Welcome</h1>
        <h2 className={twMerge(textStyles, semiboldStyles, 'w-full px-2  text-slate-500')}>{homepageIntroText}</h2>
        <span className={twMerge( boxStyles)}>
          <Link className={twMerge(btnStyles, textStyles, semiboldStyles, 'text-slate-50  italic max-w-[220px]')} href='search'>Quickstart</Link>
        </span>
      </section>
    </span>
  );
};

export default Index;
