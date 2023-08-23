import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "@/components/Header/Header";

import { motion } from "framer-motion";
export const dynamic = "force-dynamic";

// interface IndexProps {
//   children: React.ReactNode;
// }

const Index = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Header />
      <section className="mt-[7vh] flex bg-slate-200 w-full min-h-[93vh] items-center justify-center">
        <h1 className="text-5xl font-extralight">Home</h1>
        {/* {children} */}
      </section>
    </>
  );
};

export default Index;
