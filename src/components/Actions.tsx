import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

interface ActionsProps {
    
}
 
const Actions: React.FC<ActionsProps> = () => {
    return ( 
        <div className='flex gap-3 w-full justify-center'>
                <button className='bg-[#312b14] border rounded-lg p-1 text-sm text-[#EFAE02] border-[#EFAE02]
                flex items-center gap-1'><SaveAltOutlinedIcon style={{fontSize:18}}/><span>Resume</span></button>

                <button className='bg-[#EFAE02] p-2 rounded-lg text-black font-semibold text-sm'>Hire Me</button>
        </div>
     );
}
 
export default Actions;