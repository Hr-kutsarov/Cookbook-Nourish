'use client'
 
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { HiHome, HiOutlineShoppingCart,HiUser } from 'react-icons/hi'
import { BiSearch, BiNews } from 'react-icons/bi'
import { HiInboxArrowDown, HiWrenchScrewdriver, HiMiniAtSymbol, HiMapPin,HiOutlineUserCircle,HiOutlineHeart } from 'react-icons/hi2'
import NavItem from './NavItem'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'

interface NavigationProps {
    children?: React.ReactNode
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
    const [user, setUser] = useState<string>('')


    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname == '/',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        },
        {
            icon: BiNews,
            label: 'Browse',
            active: pathname === '/browse',
            href: '/browse'
        },
        {
            icon: HiInboxArrowDown,
            label: 'Brochure',
            active: pathname === '/brochure',
            href: '/brochure'
        },
        {
            icon: HiWrenchScrewdriver,
            label: 'Services',
            active: pathname === '/services',
            href: '/services'
        },
        {
            icon: HiMiniAtSymbol,
            label: 'Contacts',
            active: pathname === '/contacts',
            href: '/contacts'
        }
    ], [pathname])

  return (
        <nav className='flex flex-row h-auto gap-1 ml-8 relative'>
            {routes.map((route) => (<NavItem key={route.label} {...route} primary/>))}
        </nav>
     );
}

export default Navigation;