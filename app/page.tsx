import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import NavBox from '@/components/NavBox'
export const dynamic = 'force-dynamic'

interface IndexProps {
  children: React.ReactNode
}

const Index: React.FC<IndexProps> = async ({children}) => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center">
      {children}
    </div>
  )
}

export default Index;