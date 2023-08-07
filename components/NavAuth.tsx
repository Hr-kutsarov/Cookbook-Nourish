'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
import useLoginModal from '@/hooks/authModal'
import { useRouter } from 'next/navigation'

const NavAuth: React.FC = () => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const [user, setUser] = useState<string>('');
    const handler = useLoginModal();

    useEffect(() => {
        supabase.auth.getUser()
            .then((res) => {
                if (res.data.user) {
                    setUser(res.data.user.email!)
                    console.log(res.data)
                }
            })
            router.refresh()
    }, [supabase, router])

    return (
        <span className='flex flex-row items-center gap-4 px-3 py-1'>
        {!user ? (            
            <Link
                onClick={handler.onOpen}
                href="/login"
                className="py-2 px-3 rounded-md text-sm text-white bg-gradient-to-b from-pink-700 to-slate-900 mr-3"
              >
                Login
            </Link>)
        : (
            <span className='flex flex-row gap-4 items-center px-3 py-1 rounded-md'>
                <p className='text-slate-600 font-bold text-xs'>{user}</p>
                <LogoutButton setUser={setUser} />
            </span>
        )}
        </span>
    )
}

export default NavAuth;