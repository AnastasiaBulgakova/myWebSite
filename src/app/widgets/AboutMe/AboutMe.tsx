import { FC, useEffect, useRef, useState } from "react";

import HeroGlitch from "../MainSections/MainSection";
import SkillsSection from "../Skills/Skills";
import SoftSkillsSection from "../SoftSkillsSection/SoftSkillsSection";
import ContactSection from "../Contacts/Contacts";
import SidebarMenu from "../NavMenu/NavMenu";
import ProjectsGrid from "../ProjectsArchive/ProjectsArchive";

const AboutMe: FC = () => {

    const HardSkillDef = useRef<HTMLDivElement>(null);
    const SoftSkillDef = useRef<HTMLDivElement>(null);
    const ProjectDef = useRef<HTMLDivElement>(null);
    const ContactDef = useRef<HTMLDivElement>(null);
    

    const [isHardSkillVisible, setIsHardSkillVisible] = useState(false);
    const [isSoftSkillVisible, setIsSoftSkillVisible] = useState(false);
    const [isProjectVisible, setIsProjectVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const target = entry.target;
      
              const isVisible = entry.isIntersecting;
      
              if (target === HardSkillDef.current) setIsHardSkillVisible(isVisible);
              if (target === SoftSkillDef.current) setIsSoftSkillVisible(isVisible);
              if (target === ProjectDef.current) setIsProjectVisible(isVisible);
              if (target === ContactDef.current) setIsContactVisible(isVisible);
            });
          },
          {
            threshold: 0.05, 
          }
        );
      
        if (HardSkillDef.current) observer.observe(HardSkillDef.current);
        if (SoftSkillDef.current) observer.observe(SoftSkillDef.current);
        if (ProjectDef.current) observer.observe(ProjectDef.current);
        if (ContactDef.current) observer.observe(ContactDef.current);
      
        return () => observer.disconnect();
      }, []);
      
    return ( 
        <>
        <SidebarMenu/>
        <HeroGlitch />
        <SkillsSection ref={HardSkillDef} isVisible={isHardSkillVisible}/>
        <SoftSkillsSection ref={SoftSkillDef} isVisible={isSoftSkillVisible}/>
        <ProjectsGrid ref={ProjectDef} isVisible={isProjectVisible}/>
        <TransitionDivider/>
        <ContactSection ref={ContactDef} isVisible={isContactVisible}/>
        </>
     );
};
 
export default AboutMe;
const TransitionDivider = () => {
    return (
      <div className="relative h-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center text-lime-600 text-sm font-mono">
          ↓ ↓ ↓
        </div>
      </div>
    );
  };