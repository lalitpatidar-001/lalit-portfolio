import Image from "next/image";
import js_logo from "@/assets/js-logo.png"
import react_logo from "@/assets/react-logo.png"
import ts_logo from "@/assets/ts-logo.png"
import next_logo from "@/assets/next_logo.png"
import express_logo from "@/assets/express-logo.png"
import nodejs_logo from "@/assets/node-logo.png"
import tailwind_logo from "@/assets/tailwind-logo.png"
import mongodb_logo from "@/assets/mongo_logo.png"

interface SkillBoxProps {
   index:number ,
   side:string,
   logo:string,
   title:string
}
 
const SkillBox: React.FC<SkillBoxProps> = ({index,side ,logo,title}) => {

    const obj:any ={
        js_logo:js_logo,
        react_logo:react_logo,
        ts_logo:ts_logo,
        next_logo:next_logo,
        express_logo:express_logo,
        nodejs_logo:nodejs_logo,
        tailwind_logo:tailwind_logo,
        mongodb_logo:mongodb_logo
    }


    return ( 
    <div className={`flex items-center justify-center gap-1 w-[120px] font-medium bg-[#ddd4d4] text-black rounded-2xl p-1 h-7 drop-shadow-lg drop-shadow-white
    ${side==="left" && (index===1 || index===2 ?"sm:self-end":"")}

    ${side==="right" && (index===1 || index===2 ?"self-start":"sm:self-end")}
    `}>
        <Image src={obj[logo]} className="h-5 w-6" height={5}  width={25} alt="icon"/>
        <span className="text-sm">{title}</span>
    </div>
     );
}
 
export default SkillBox;