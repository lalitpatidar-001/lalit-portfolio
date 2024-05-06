import Card from "./Card";
import { advance_weather_app } from "./advance_weather_app";
import { chatting_app } from "./chatting_app";
import { mobile_ordering_website } from "./mobile_ordering_website";
import { pdf_editor_website } from "./pdf_editor_website";
import { pet_adoption_project_details } from "./pet_adoption";
import { room_rental_website_project } from "./room_rental-website";

interface ProjectsProps {
    
}
 
const Projects: React.FC<ProjectsProps> = () => {
    return ( 
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center mt-10  " >
        <div className="w-full   max-w-3xl  ">
            <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Projects I've Worked On</h1>

            <div className="flex flex-col   gap-3">
                <Card {...pet_adoption_project_details}/>
                <Card {...room_rental_website_project}/>
                <Card {...mobile_ordering_website}/>
                <Card {...chatting_app}/>
                <Card {...advance_weather_app}/>
                <Card {...pdf_editor_website}/>
                {/* <Card/>
                <Card/> */}
            </div>
           
        </div>
    </section>
     );
}
 
export default Projects;