'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import useLoginModal from '@/hooks/authModal'
import { Dispatch, SetStateAction } from "react";
import { IoLogOut } from 'react-icons/io5';


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
      className="p-2 rounded-md text-sm text-white bg-gradient-to-br font-semibold tracking-wide from-green-600 to-teal-800 "
      onClick={signOut}
    >
      <IoLogOut size={36} />
    </button>
  )
}

export default LogoutButton;