import ClearAllIcon from '@mui/icons-material/ClearAll';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="bg-white h-10 p-2 flex items-center justify-between rounded-3xl ">
            <div className="flex items-center gap-1">
                <div className="bg-black h-9 w-9 text-white font-serif flex justify-center items-center rounded-full">
                    <span>L</span>
                    <span>P</span>
                </div>
                <h2 className="font-bold font-sans text-black ">Lalit Patidar</h2>
            </div>
            <div className='bg-black flex items-center gap-2 text-white rounded-2xl p-[2px] pl-1'>
                <span className='text-xs font-medium'>Menu</span>
                <div className='text-white bg-[#EFAE02] h-6 w-6 rounded-full' >
                    <ClearAllIcon />
                </div>
            </div>

        </nav>
    );
}

export default Navbar;