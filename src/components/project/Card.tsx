import Image from "next/image";
import img from "@/assets/image.png"
import SkillBox from "@/components/skills/SkillBox";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

interface ITechnology{
    logo:string,
    name:string
}
interface CardProps {
    // projectImage:string,
    // projectName:string,
    // technologies:ITechnology[],
    // githubLink:string,
    // liveLink:string,
}

const Card: React.FC<CardProps> = () => {
    return (
        <div className="flex px-2  bg-blue-500 rounded-2xl text-white items-center">
            <div className="flex-1">
                <Image src={img} className="w-full h-[200px] rounded-2xl" alt="project-image" />
            </div>

            <div className="flex-1 flex flex-col gap-2 p-2 w-full ">
                {/* project name */}
                <h1 className="font-bold text-xl ">Pet Adoption WebApp</h1>

                {/* technologies */}
                <div className="w-full ">
                    <h3 className="text-sm text-gray-300 ">Technologies I have used</h3>
                    <div className="flex flex-wrap w-full  gap-1 pl-2">
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                        <SkillBox />
                    </div>
                </div>

                {/* take a look */}
                <div>
                    <h3 className="text-sm text-gray-300 ">Take A Look Here</h3>
                    <div className="flex items-center gap-4 pl-2">
                        <Link target="_blank" href="#">
                            <div className="flex gap-1 items-center hover:text-blue-800 
                            hover:border-blue-600 transition-all ease-in-out cursor-pointer border rounded-xl px-2 bg-[rgba(233,233,233,0.2)] ">
                                <span className="font-medium">Live</span>
                                <OpenInNewIcon style={{ fontSize: 16 }} />
                            </div>
                        </Link>
                        <Link target="_blank" href="#">
                            <div className="flex gap-1 items-center hover:text-blue-800 
                             transition-all ease-in-out 
                             hover:border-blue-600 
                             cursor-pointer border rounded-xl  px-2 bg-[rgba(233,233,233,0.2)] ">
                                <span>Github</span>
                                <GitHubIcon style={{ fontSize: 16 }} />
                            </div>
                        </Link>
                        <button className="px-1 py-1 rounded-xl "></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;