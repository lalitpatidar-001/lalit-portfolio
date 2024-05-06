"use client"
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import resumePDF from '@/assets/resume.pdf'

interface ActionsProps {
    
}
 
const Actions: React.FC<ActionsProps> = () => {

    const handleDownloadClick = () => {
        const pdfUrl = resumePDF
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'resume.pdf');
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
      }

      const handleClick = () => {
        window.location.href = 'mailto:lalitpatidar388@gmail.com'; 
      };

    return ( 
        <div className='flex gap-3 w-full justify-center'>
                <button onClick={handleDownloadClick} 
                className='bg-[#312b14] border rounded-lg p-1 text-sm text-[#EFAE02] border-[#EFAE02]
                flex items-center gap-1'><SaveAltOutlinedIcon style={{fontSize:18}}/><span>Resume</span></button>

                <button onClick={handleClick} className='bg-[#EFAE02] p-2 rounded-lg text-black font-semibold text-sm'>Hire Me</button>
        </div>
     );
}
 
export default Actions;