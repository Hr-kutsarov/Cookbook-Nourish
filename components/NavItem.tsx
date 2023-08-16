import { IconType } from 'react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    primary?: boolean;
    href: string;
}

const NavItem: React.FC<NavItemProps> = ({
    icon: Icon, 
    label, 
    active, 
    href,
    primary
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
            text-slate-400
            focus:outline-none
            relative
            `, 
            active && `bg-slate-200`, 
            active && `text-teal-800`,
            )}>
                <Icon size={28}/>
                {primary ? <p className='truncate w-100 hidden lg:flex'>{label}</p> : null}
        </Link>
     );
}
 
export default NavItem;