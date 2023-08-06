import { IconType } from 'react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const NavItem: React.FC<NavItemProps> = ({
    icon: Icon, 
    label, 
    active, 
    href
}) => {
    return ( 
        <Link href={href} className={twMerge(`
            flex 
            flex-row 
            items-center 
            w-auto
            gap-2
            text-sm 
            font-medium 
            cursor-pointer 
            hover:text-green-400 
            text-green-600 
            transition py-1
            rounded-lg
            px-3
            py-2
            `, active && `bg-slate-600`)}>
                <Icon size={28}/><p className='truncate w-100'>{label}</p>
        </Link>
     );
}
 
export default NavItem;