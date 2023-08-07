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
            transition
            rounded-lg
            px-2
            py-1
            text-slate-600
            `, 
            active && `bg-slate-200`, 
            active && `text-pink-600`,
            )}>
                <Icon size={20}/><p className='truncate w-100'>{label}</p>
        </Link>
     );
}
 
export default NavItem;