import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Unauthenticated() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session }} = await supabase.auth.getSession()

    if (session) {
        redirect('/')
    }
    
    return (
        <div className='bg-slate-50 p-4 rounded-lg mg-4'>
        <h1>Please sign in</h1>
        <Link href='/'>Home</Link>
        </div>
    
    )
}