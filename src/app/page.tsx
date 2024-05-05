import HeroSection from "@/components/Hero";
import AboutMe from "@/components/about-me/AboutMe";
import ConnectWithMe from "@/components/connect-with-me/ConnectWithMe";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0c0c0c]">
      <HeroSection/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <ConnectWithMe/>
    </main>
  );
}
