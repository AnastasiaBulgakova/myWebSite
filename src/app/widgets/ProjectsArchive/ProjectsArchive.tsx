import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  image?: string;
  github?: string;
  stack?: string;
  nda?: boolean;
  description?: string[];
  link?: string;
};

const ProjectsGrid = forwardRef<HTMLDivElement, { isVisible: boolean }>(({ isVisible }, ref) => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true }) as Project[];
  const sectionTitle = t("projects.title");
  const ndaNote = t("projects.ndaNote");
  const githubLabel = t("projects.github");
  const linkLabel = t("projects.link");

  return (
    <section
    id='projects'
      ref={ref}
      className={`relative transition-all duration-1000 ease-in-out transform
        bg-black text-lime-300 px-6 py-20 font-mono
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{
        background: `linear-gradient(to right, #1f1f1f 0%, transparent 10%, transparent 90%, #1f1f1f 100%),
        linear-gradient(to bottom, #1f1f1f 0%, transparent 10%, transparent 90%, #1f1f1f 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl mb-10" style={{ color: '#ff7d29' }}>
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, rotate: -0.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`relative group bg-zinc-900/80 border border-lime-800 rounded-xl overflow-hidden p-4 shadow-lg ${
                proj.nda ? 'opacity-70 blur-[0.5px] hover:blur-0 hover:opacity-100' : ''
              }`}
            >
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-lg mb-2" style={{ color: '#ff7d29' }}>
                {proj.title}
              </h3>
              {proj.nda && (
                <p className="text-sm text-zinc-400 mb-2 italic">{ndaNote}</p>
              )}
              {proj.description?.map((item, idx) => (
                <p className="text-sm text-lime-400 mb-2" key={idx}>- {item}</p>
              ))}
              {proj.stack && (
                <p className="text-xs text-lime-500 mb-2">Stack: {proj.stack}</p>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-lime-300 underline hover:text-lime-100"
                >
                  {githubLabel}
                </a>
              )}
               {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-lime-300 underline hover:text-lime-100"
                >
                  {linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsGrid;
