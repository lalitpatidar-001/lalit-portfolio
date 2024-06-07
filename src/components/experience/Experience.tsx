import Card from "./Card";
import { experience_list } from "./index"
interface ExperienceProps {

}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center mt-10  " >
            <div className="w-full   max-w-3xl  ">
                <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Experience</h1>
                <div className="flex flex-col gap-2">
                    {
                        experience_list.map((item, index) => (
                            <Card key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Experience;