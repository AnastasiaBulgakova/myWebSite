import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  level: number;
  comment?: string;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const SkillsSection = forwardRef<HTMLDivElement, { isVisible: boolean }>(
  ({ isVisible }, ref) => {
    const { t } = useTranslation();

    const skillGroups = t("skills.groups", { returnObjects: true }) as SkillGroup[];
    const sectionTitle = t("skills.title");

    return (
      <section
        ref={ref}
        className={`bg-black text-lime-300 font-mono px-6 py-20 transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl mb-10 text-lime-400 glow">{sectionTitle}</h2>
          <div className="space-y-10">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="border border-lime-800 p-6 rounded-lg bg-zinc-900/50 backdrop-blur-md"
              >
                <h3 className="text-lg text-lime-200 mb-4">{group.category}</h3>
                <div className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between gap-4">
                      <span className="w-40">{skill.name}</span>
                      <div className="flex-1 bg-lime-700/20 h-3 rounded">
                        <div
                          className="bg-lime-400 h-3 rounded glitch-on-hover transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-lime-500 w-32 text-right">
                        {skill.comment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default SkillsSection;
