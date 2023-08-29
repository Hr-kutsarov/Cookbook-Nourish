'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import useLoginModal from '@/hooks/authModal'
import { Dispatch, SetStateAction } from "react";
import { IoExitOutline } from "react-icons/io5";


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
      className="px-2 py-1 rounded-md text-sm text-slate-50 bg-gradient-to-br font-semibold tracking-wide from-green-600 to-teal-800 "
      onClick={signOut}
    >
      <IoExitOutline size={36} />
    </button>
  )
}

export default LogoutButton;