'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import useLoginModal from '@/hooks/authModal'
import { Dispatch, SetStateAction } from "react";


function LogoutButton({setUser}:{setUser: Dispatch<SetStateAction<string>>}) {
  const router = useRouter()
  const handler = useLoginModal()
  const supabase = createClientComponentClient()

  const signOut = async () => {
    setUser('')
    await supabase.auth.signOut()
    router.push('/login')
    handler.onOpen
    router.refresh()

  }

  return (
    <button
      className="py-2 px-3 rounded-md text-sm text-white bg-gradient-to-b from-green-800 to-teal-900 "
      onClick={signOut}
    >
      Logout
    </button>
  )
}

export default LogoutButton;