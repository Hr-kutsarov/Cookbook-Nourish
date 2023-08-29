'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
import useLoginModal from '@/hooks/authModal'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Loaders/loading'
import { IoEnterOutline } from "react-icons/io5";

const NavAuth: React.FC = () => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const [user, setUser] = useState<string>('');
    const handler = useLoginModal();

    useEffect(() => {
        supabase.auth.getUser()
            .then((res) => {
                if (res.data.user) {
                    const x = res.data.user.email!
                    setUser(x.split('@')[0])
                    console.log(res.data)
                }
            })
            router.refresh()
    }, [supabase, router])

    return (
        <span className='flex flex-row items-center'>
        {!user ? (            
            <Link
                onClick={handler.onOpen}
                href="/login"
                className="py-2 px-3 rounded-md text-sm text-white bg-gradient-to-b from-green-600 to-green-900 mr-3 focus:outline-none"
              >
                <IoEnterOutline size={36} />
            </Link>)
        : (
            <span className='flex flex-row gap-4 items-center mr-4 rounded-md focus:outline-none'>
                <p className='hidden text-slate-400 text-sm italic md:flex font-semibold tracking-wide'>Hello, {user}!</p>
                <LogoutButton setUser={setUser} />
            </span>
        )}
        </span>
    )
}

export default NavAuth;