import Actions from "./Actions";
import Intro from "./Intro";
import Navbar from "./Navbar";
import ImageProfile from "@/components/ImageProfile";

interface HeroSectionProps {

}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="bg-[#0c0c0c] h-screen w-full pt-2 px-1 flex justify-center text-white" >
            <div className="w-full   max-w-3xl ">
                <Navbar />
                <div className=" lg:mt-2">
                    <div>
                        <Intro />
                        <div className="flex gap-2 items-center w-full justify-center mt-6 ">
                            
                        </div>
                        <Actions/>
                    </div>
                    <ImageProfile />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;