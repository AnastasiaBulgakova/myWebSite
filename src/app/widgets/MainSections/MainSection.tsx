import { FC, useEffect, useState } from 'react';
import { grain, glitch1, glitch2, glitch3, glitch4 } from '@app/assets';
import { useTranslation } from 'react-i18next';
const glitchFrames = [
  glitch1,
  glitch2,
  glitch3,
  glitch4,
];

const normalBackground = grain;

const HeroGlitch: FC = () => {
  const [bgImage, setBgImage] = useState(normalBackground);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let glitchIndex = 0;

    const loop = () => {
      setBgImage(normalBackground); 

      const glitchTimeout = setTimeout(() => {
    
        glitchIndex = (glitchIndex + 1) % glitchFrames.length;
        setBgImage(glitchFrames[glitchIndex]);

        setTimeout(() => {
          setBgImage(normalBackground); 
          loop(); 
        }, 400);

      }, 2000); 

      return glitchTimeout;
    };

    const glitchCycle = loop();

    return () => clearTimeout(glitchCycle);
  }, []);

  const { t } = useTranslation();

  const name = t("mainSection.name");

  return (
    <section id='hero'
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-50 mix-blend-screen pointer-events-none transition-all duration-300"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="max-w-4xl text-center font-mono">
        <h1 className="text-3xl sm:text-6xl text-glitch font-bold leading-tight">
        {name}.
        <br/>
        Middle Frontend Developer
        </h1>
        <p className="mt-4 text-xl text-zinc-400">
          {`>`} welcome_to ~/anastasia.dev
          <span className="text-green-400">{cursorVisible ? '▌' : ' '}</span>
        </p>
      
      </div>
    </section>
  );
};

export default HeroGlitch;
