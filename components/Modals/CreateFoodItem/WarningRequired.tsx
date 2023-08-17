import { IoWarningOutline } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge';

interface WarningRequiredProps {
    message?: string;
    isPrimary?: boolean
}

const WarningRequired: React.FC<WarningRequiredProps> = ({message, isPrimary}) => {
    // console.log(message)
    return <span className={twMerge('flex absolute items-center gap-2 -top-2 px-2 py-1 bg-slate-50 shadow-md text-rose-600 rounded-md right-10', isPrimary && 'right-2')}><IoWarningOutline />{message}</span>
}

export default WarningRequired;