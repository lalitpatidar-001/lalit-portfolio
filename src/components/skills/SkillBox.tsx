import logo from "@/assets/react-logo.png"
import Image from "next/image";

interface SkillBoxProps {

}

const SkillBox: React.FC<SkillBoxProps> = () => {
    return (
        <div className='flex items-center gap-1 w-fit bg-white px-2 py-1 rounded-2xl '>
            <Image src={logo} className="h-4 w-5" height={5} width={25} alt="icon" />
            <span className="text-[12px] font-semibold text-black ">ReactJs</span>
        </div>
    );
}

export default SkillBox;