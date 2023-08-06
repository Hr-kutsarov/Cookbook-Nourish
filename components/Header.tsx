import NavBox from './NavBox'


const Header: React.FC = () => {
    return (
        <header className="flex flex-row gap-4 items-center h-40 w-full">
            <button className='flex p-4'>
                Menu 
            </button>
            <span>
                Logo
            </span>
            <NavBox />
        </header>
    )
}

export default Header;