import profile_img from "@/assets/bg-less-img1.png"
import Image from "next/image";
import LeftSkills from "./LeftSkills";
import RightSkills from "./RightSkills";
interface ImageProfileProps {

}

const ImageProfile: React.FC<ImageProfileProps> = () => {
    return (
        <div className="relative">
            <div className="flex justify-center relative mt-10">
                <div className="bg-[#EFAE02] shape absolute -top-[10.5px]   h-[210px] w-[210px]
            "/>
                <div className="relative">
                    <LeftSkills  />
                </div>
                <Image src={profile_img} className="h-[200px] drop-shadow-2xl  shadow-black z-20 w-[150px]" height={100} alt="profile"></Image>
                <div className="relative ">
                <RightSkills/>
                </div>
            </div>
        </div>


    );
}

export default ImageProfile;