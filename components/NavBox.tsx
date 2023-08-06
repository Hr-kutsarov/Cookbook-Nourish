'use client'
 
import { usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { HiHome, HiOutlineShoppingCart,HiUser } from 'react-icons/hi'
import { BiSearch, BiNews } from 'react-icons/bi'
import { HiInboxArrowDown, HiWrenchScrewdriver, HiMiniAtSymbol, HiMapPin,HiOutlineUserCircle,HiOutlineHeart } from 'react-icons/hi2'
import NavItem from './NavItem'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

interface NavigationProps {
    children?: React.ReactNode
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {

    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
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
        },
        {
            icon: HiMapPin,
            label: 'Stores',
            active: pathname === '/stores',
            href: '/stores'
        }
    ], [pathname])

  return (
        <div className='flex flex-row overflow-x-auto'>
        <nav className='flex flex-row gap-4 '>
            {routes.map((route) => (<NavItem key={route.label} {...route}/>))}
        </nav>
        </div>
     );
}

export default Navigation;