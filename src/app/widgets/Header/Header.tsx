import { FC } from "react";
import { tg, ig, linkedin, github } from "@app/assets";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-white h-12 fixed top-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 border-b-2 border-neutral-200 z-50">
     <div className="flex items-center gap-2 md:gap-4">
        <p className="font-mono text-xs sm:text-base font-medium text-neutral-900 whitespace-nowrap">
            Anastasia Bulgakova
        </p>

         <div className="flex gap-2 center items-center mr-3">
            <button
                onClick={() => toggleLanguage('ru')}
                className={`w-6 h-6 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-full border text-sm font-mono transition-all duration-200 ${
                i18n.language === 'ru'
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-black hover:bg-black hover:text-white '
                }`}
            >
                RU
            </button>
            <button
                onClick={() => toggleLanguage('en')}
                className={`w-6 h-6 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-full border text-sm font-mono transition-all duration-200 ${
                i18n.language === 'en'
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-black hover:bg-black hover:text-white'
                }`}
            >
                EN
            </button>
        </div>
        </div>
        <nav className="flex flex-row items-center gap-2 sm:gap-3">
          <a href="https://www.instagram.com/ultranastialense/" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://t.me/nbwdn" target="_blank" rel="noopener noreferrer">
            <img src={tg} alt="Telegram" className="w-6 h-6" />
          </a>
          <a href="https://github.com/AnastasiiaBulgakova" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/anastasia-bulgakova/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
          </a>
        </nav>
    </header>
  );
};

export default Header;
