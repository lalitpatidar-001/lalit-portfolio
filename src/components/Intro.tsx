interface IntroProps {

}

const Intro: React.FC<IntroProps> = () => {
    return (
        <article className="flex flex-col items-center gap-2 w-full mt-10 ">
            <div className="flex text-3xl ">
                <h1 className="text-white font-bold font-serif">Hello! I&apos;m <span className="text-[#EFAE02]"> Lalit Patidar</span></h1>
            </div>
            <div className="flex font-medium gap-2 ">
                <h1>A Full Stack Web Developer</h1>
                <span>|</span>
                <h1>MERN Developer</h1>
            </div>
            <div className="flex items-center gap-1 text-sm ">
        <span>With</span>
        <div className="bg-[#242424] p-1 rounded-full"><span className="text-[#EFAE02] font-medium">1 year 2 month</span></div> 
        <span>Experience</span> 
            </div>
        </article>
    );
}

export default Intro;