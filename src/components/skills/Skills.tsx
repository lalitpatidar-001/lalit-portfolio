import SkillBox from "./SkillBox";
import { backend_skills } from "./backend";
import { database_skills } from "./database";
import { devops_technologies } from "./devops";
import { frontend_skills } from "./frontend";

interface SkillsProps {

}

const Skills: React.FC<SkillsProps> = () => {
    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center text-white mt-10" >
            <div className="w-full   max-w-3xl text-white">
                <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Skills I Know</h1>

                <div>
                    {/* frontend skills*/}
                    <div className="w-full ">
                        <h1 className="text-xl text-center font-bold text-[#EFAE02] mb-2">Frontend </h1>
                        <div className="flex gap-2 w-full flex-wrap justify-center ">
                        {
                                frontend_skills?.map((skill) => (
                                    <SkillBox {...skill}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-8" />

                    {/* backend skills */}
                    <div className="w-full ">
                        <h1 className="text-xl text-center font-bold text-[#EFAE02] mb-2">Backend </h1>
                        <div className="flex gap-2 w-full flex-wrap justify-center ">
                        {
                                backend_skills?.map((skill) => (
                                    <SkillBox {...skill}/>
                                ))
                            }

                        </div>
                    </div>

                    <div className="mt-8" />
                    {/* devops skills */}
                    <div className="w-full ">
                        <h1 className="text-xl text-center font-bold text-[#EFAE02] mb-2">DevOps </h1>
                        <div className="flex gap-2 w-full flex-wrap justify-center ">
                        {
                                devops_technologies?.map((skill) => (
                                    <SkillBox {...skill}/>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-8" />
                    {/* database */}
                    <div className="w-full ">
                        <h1 className="text-xl text-center font-bold text-[#EFAE02] mb-2">Database </h1>
                        <div className="flex gap-2 w-full flex-wrap justify-center ">
                        {
                                database_skills?.map((skill) => (
                                    <SkillBox {...skill}/>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-8" />
                    {/* cloud */}
                    {/* <div className="w-full ">
                        <h1 className="text-xl text-center font-bold text-[#EFAE02] mb-2">Cloud </h1>
                        <div className="flex gap-2 w-full flex-wrap justify-center ">
                            {
                                frontend_skills?.map((skill) => (
                                    <SkillBox {...skill}/>
                                ))
                            }
                        </div>
                    </div> */}



                </div>
            </div>
        </section>
    );
}

export default Skills;