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
            p-2
            
            text-slate-400
            focus:outline-none
            relative
            hover:text-slate-600
            `, 

            active && `bg-gradient-radial`, 
            active && `from-slate-100`,
            active && `via-slate-50`,
            active && `to-slate-200`,
            active && `text-slate-400`,
            active && `hover:from-slate-50`,
            active && `hover:via-teal-50`,
            active && `hover:to-slate-200`,
            active && `hover:text-slate-500`,

 
            active && `pr-3`
            )}>
                <Icon size={36}/>
                {primary ? <p className='truncate w-100 hidden tracking-wide lg:flex'>{label}</p> : null}
        </Link>
     );
}
 
export default NavItem;