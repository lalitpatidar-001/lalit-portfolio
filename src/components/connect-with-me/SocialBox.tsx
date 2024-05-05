import Image from "next/image";
import linkedinLogo from "@/assets/linkedin-logo.png"
import twitterLogo from "@/assets/twitter-logo.png"
import instagramLogo from "@/assets/instagram-logo.png"
import githubLogo from "@/assets/github-logo.png"
import gmailLogo from "@/assets/gmail-logo.png"
import Link from "next/link";

interface SocialBoxProps {
    logoName: string,
    title: string,
    textColor: string,
    link:string,

}

const SocialBox: React.FC<SocialBoxProps> = ({ logoName, title, textColor,link }) => {

    const logos: any = {
        linkedinLogo: linkedinLogo,
        twitterLogo: twitterLogo,
        instagramLogo: instagramLogo,
        githubLogo: githubLogo,
        gmailLogo: gmailLogo
    }

    return (
        <Link href={`${link}`} target="_blank">
            <div className="flex bg-white rounded-2xl items-center font-bold px-1 cursor-pointer hover:bg-gray-400">
                <Image src={logos[logoName]} className="h-[40px] w-[40px]" alt="twitter logo" />
                <span className={`text-[#${'2275D5'}]`}>{title}</span>
            </div>
        </Link>
    );
}

export default SocialBox;