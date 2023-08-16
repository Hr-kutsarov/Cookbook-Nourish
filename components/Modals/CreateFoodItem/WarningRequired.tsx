import { IoWarningOutline } from 'react-icons/io5'

interface WarningRequiredProps {
    message?: string;
}

const WarningRequired: React.FC<WarningRequiredProps> = ({message}) => {
    // console.log(message)
    return <span className='flex absolute items-center gap-2 right-10 -top-2 px-2 py-1 bg-slate-50 shadow-md text-rose-600 rounded-md'><IoWarningOutline />{message}</span>
}

export default WarningRequired;