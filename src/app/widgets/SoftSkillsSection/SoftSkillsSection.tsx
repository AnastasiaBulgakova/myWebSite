import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

type SoftSkill = {
  name: string;
  level: number;
  comment?: string;
};

type SoftSkillGroup = {
  category: string;
  skills: SoftSkill[];
};

const SoftSkillsSection = forwardRef<HTMLDivElement, { isVisible: boolean }>(
  ({ isVisible }, ref) => {
    const { t } = useTranslation();

    const softSkillGroups = t("softSkills.groups", {
      returnObjects: true,
    }) as SoftSkillGroup[];

    const sectionTitle = t("softSkills.title");

    return (
      <section
        id='soft-skills'
        ref={ref}
        className={`bg-black text-orange-300 font-mono px-3 py-10 md:px-6 md:py-20 transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl mb-5 md:mb-10 text-orange-400 glow">{sectionTitle}</h2>
          <div className="space-y-5 md:space-y-10">
            {softSkillGroups.map((group, idx) => (
              <div
                key={idx}
                className="border border-orange-800 p-3 md:p-6 rounded-lg bg-zinc-900/50 backdrop-blur-md"
              >
                <h3 className="text-lg text-orange-200 mb-2 md:mb-4">{group.category}</h3>
                <div className="space-y-2 md:space-y-3">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between gap-2 md:gap-4">
                      <span className="w-40">{skill.name}</span>
                      <div className="flex-1 bg-orange-700/20 h-3 rounded">
                        <div
                          className="bg-orange-400 h-3 rounded glitch-on-hover transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-orange-500 w-32 text-right">
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

export default SoftSkillsSection;
