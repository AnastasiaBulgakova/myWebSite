import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX < 80) {
        setIsOpen(true);
      } else if (e.clientX > 250) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { t } = useTranslation();
   
  return (
    <div
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 h-auto bg-black border-l-2 border-orange-400
        text-white shadow-lg transition-all duration-300 
        ease-in-out z-50 rounded-md
         ${
        isOpen ? "w-48" : "w-0"
      } overflow-hidden`}
    >
      <nav className="flex flex-col items-start py-6 px-4 space-y-4">
        <a href="#hero" className="hover:text-orange-400 transition font-mono ">{t("navMenu.main")}</a>
        <div className="w-full h-[1px] bg-gray-700"></div>
        <a href="#skills" className="hover:text-orange-400 transition font-mono">{t("navMenu.skills")}</a>
        <div className="w-full h-[1px] bg-gray-700"></div>
        <a href="#soft-skills" className="hover:text-orange-400 transition font-mono">{t("navMenu.soft-skills")}</a>
        <div className="w-full h-[1px] bg-gray-700"></div>
        <a href="#projects" className="hover:text-orange-400 transition font-mono">{t("navMenu.projects")}</a>
        <div className="w-full h-[1px] bg-gray-700"></div>
        <a href="#contacts" className="hover:text-orange-400 transition font-mono">{t("navMenu.contacts")}</a>
      </nav>
    </div>
  );
};

export default SidebarMenu;
