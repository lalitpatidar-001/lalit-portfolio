"use server"
import Image from "next/image";
import SocialBox from "./SocialBox";
import avatar from "@/assets/img-avatar.jpeg"

interface ConnectWithMeProps {}

const ConnectWithMe: React.FC<ConnectWithMeProps> = () => {

    const handleClick = () => {
       
    };

    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center mt-10  " >
            <div className="w-full   max-w-3xl  ">
                <h1 className="text-3xl text-center font-bold text-[#EFAE02] mb-4">Connect With Me</h1>
                <div className="flex flex-col  gap-4">
                    <div className="flex justify-center gap-2">
                        <SocialBox
                            link="https://www.linkedin.com/in/lalit-patidar-665a55258/"
                            title="LinkedIn"
                            logoName="linkedinLogo"
                            textColor="#2275D5"
                        />
                        <SocialBox
                            link="https://github.com/lalitpatidar-001"
                            title="GitHub"
                            logoName="githubLogo"
                            textColor="#2275D5"
                        />
                    </div>
                    <div className="flex justify-center gap-2">
                        <SocialBox
                            link="https://twitter.com/lalitpatidar001"
                            title="Twitter"
                            logoName="twitterLogo"
                            textColor="#2275D5"
                        />
                        <SocialBox
                            link="https://www.instagram.com/lalitpatidar_001/"
                            title="Instagram"
                            logoName="instagramLogo"
                            textColor="#2275D5"
                        />
                    </div>
                    <div className="flex justify-center gap-2">
                        <SocialBox
                            shouldClick={true}
                            link=""
                            title="lalitpatidar388@gmail.com"
                            logoName="gmailLogo"
                            textColor="#2275D5"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <Image src={avatar} alt="avatar" className="h-[200px] w-[200px] rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default ConnectWithMe;
