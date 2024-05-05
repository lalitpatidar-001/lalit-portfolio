import Card from "./Card";

interface ExperienceProps {

}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center mt-10  " >
            <div className="w-full   max-w-3xl  ">
                <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Experience</h1>
                <Card />
            </div>
        </section>
        );
}

export default Experience;