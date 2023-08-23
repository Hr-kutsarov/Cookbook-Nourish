import { IconType } from 'react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Suspense } from 'react';

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
            pr-5
            pl-3
            py-1
            
            text-slate-400
            focus:outline-none
            relative
            hover:text-slate-600
            `, 
            active && `bg-slate-600`, 
            active && `text-slate-50`,
            active && `hover:bg-slate-600`,
            active && `hover:bg-slate-50`,
            active && `pr-3`
            )}>
                <Icon size={28}/>
                {primary ? <p className='truncate w-100 hidden lg:flex'>{label}</p> : null}
        </Link>
     );
}
 
export default NavItem;