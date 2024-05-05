import Text from "./Text";

interface AboutMeProps {

}

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center text-white " >
            <div className="w-full   max-w-3xl text-white">
                <h1 className="text-3xl text-[#EFAE02] font-bold py-3 text-center">About Me</h1>
                <Text/>
            </div>
        </section>
    );
}

export default AboutMe;