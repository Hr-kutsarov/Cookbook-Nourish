import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";
import Link from "next/link";
export const dynamic = "force-dynamic";

// interface IndexProps {
//   children: React.ReactNode;
// }

const Index = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const homepageIntroText = "This app is for the homecook who seeks inspiration. It is for the kitchen chef who wants to save his recipes. It is for the people who are self-conscious of what they are eating. It is also for the students who wants to eat something tasty yet cheap. It is also for all amateurs in the kitchen who can now match flavors perfectly in two clicks. It is for those who love to cook and want to surprize their guests at the gathering. "
  return (
    <span className="flex w-full h-full bg-slate-200 items-center justify-center relative">
      <Header />
      <section className="mt-[7vh] rounded-md flex flex-col w-2/3 xl:w-1/3 gap-4  min-h-[93vh] items-center justify-center">
        <h1 className="text-5xl font-extralight flex w-full opacity-30">Home</h1>
        <h2 className="text-4xl font-extralight text-slate-500 italic">{homepageIntroText}</h2>
        <span className='flex w-full justify-end'>
          <Link className='flex bg-gradient-to-r text-lg tracking-wide from-green-600 to-teal-800 hover:gradient-to-br hover:from-green-500 hover:to-teal-700 font-semibold px-3 py-1 rounded-md text-slate-50' href='search'>Quickstart</Link>
        </span>
        {/* {children} */}
      </section>
    </span>
  );
};

export default Index;
