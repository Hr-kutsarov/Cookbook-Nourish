 import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch, BiNews, BiUpload } from 'react-icons/bi'
import { HiWrenchScrewdriver, HiMiniAtSymbol } from 'react-icons/hi2'
import NavItem from './NavItem'

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
            icon: BiUpload,
            label: 'Add Item',
            active: pathname === '/add-food',
            href: '/add-food'
        },
        {
            icon: HiWrenchScrewdriver,
            label: 'Playground',
            active: pathname === '/playground',
            href: '/playground'
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