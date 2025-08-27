import React from "react";

const ClassicPortfolio: React.FC = () => {
  const projects = [
    {
      title: "Проект 1",
      description: ["Функция X", "Функция Y"],
      stack: "React, TypeScript",
      github: "https://github.com/example",
      nda: false,
    },
    {
      title: "Проект под NDA",
      nda: true,
    },
  ];

  const skills = [
    { category: "Frontend", skills: [{ name: "React", level: 90 }, { name: "TypeScript", level: 85 }] },
    { category: "Tools", skills: [{ name: "Webpack", level: 80 }, { name: "Git", level: 85 }] },
  ];

  const softSkills = [
    { category: "Коммуникация", skills: [{ name: "Teamwork", level: 90 }, { name: "Problem-solving", level: 85 }] },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Anastasia</h1>
        <p className="text-lg mt-2">Frontend Developer</p>
        <p className="text-gray-400 mt-4">welcome_to ~/anastasia.dev</p>
        <a
          href="#projects"
          className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Мои проекты
        </a>
      </header>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-16 px-4" id="skills">
        <h2 className="text-2xl font-semibold mb-6">Hard Skills</h2>
        {skills.map((group, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-medium mb-2">{group.category}</h3>
            {group.skills.map((skill, idx) => (
              <div key={idx} className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Soft Skills */}
      <section className="max-w-4xl mx-auto py-16 px-4 bg-gray-100" id="soft-skills">
        <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
        {softSkills.map((group, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-medium mb-2">{group.category}</h3>
            {group.skills.map((skill, idx) => (
              <div key={idx} className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16 px-4" id="projects">
        <h2 className="text-2xl font-semibold mb-6">Проекты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h3 className="text-xl font-medium">{proj.title}</h3>
              {proj.nda && <p className="text-sm text-gray-500 italic">Проект под NDA</p>}
              {proj.description && proj.description.map((d, i) => (
                <p key={i} className="text-sm text-gray-700">- {d}</p>
              ))}
              {proj.stack && <p className="text-sm mt-2">Стек: {proj.stack}</p>}
              {proj.github && (
                <a
                  href={proj.github}
                  className="text-orange-500 hover:underline text-sm mt-2 inline-block"
                >
                  GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <h2 className="text-xl mb-4">Контакты</h2>
        <p>Email: example@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/yourgithub" className="text-orange-500 hover:underline">
            github.com/yourgithub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ClassicPortfolio;
