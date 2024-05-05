import Card from "./Card";

interface ProjectsProps {
    
}
 
const Projects: React.FC<ProjectsProps> = () => {
    return ( 
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center mt-10  " >
        <div className="w-full   max-w-3xl  ">
            <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Projects I've Worked On</h1>

            <div className="flex flex-col gap-3">
                <Card/>
                <Card/>
                <Card/>
            </div>
           
        </div>
    </section>
     );
}
 
export default Projects;