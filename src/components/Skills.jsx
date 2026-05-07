'use client';

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaReact,
  FaNode,
  FaDocker,
  FaGit,
  FaGithub
} from 'react-icons/fa';
import {
  SiC,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiKotlin,
  SiSpringboot,
  SiTailwindcss,
  SiJest,
  SiFirebase,
  SiMongodb,
  SiJunit5,
} from 'react-icons/si';

export default function Skills() {
  const skills = {
    frontend: [
      { name: 'React', level: 'Intermediate', Icon: FaReact },
      { name: 'HTML/CSS', level: 'Advanced', Icon: FaHtml5 },
      { name: 'Tailwind CSS', level: 'Intermediate', Icon: SiTailwindcss },
      { name: 'Jest', level: 'Basic', Icon: SiJest },
    ],
    backend: [
      { name: 'Spring Boot', level: 'Intermediate', Icon: SiSpringboot },
      { name: 'Node.js', level: 'Intermediate', Icon: FaNode },
      { name: 'Firebase', level: 'Intermediate', Icon: SiFirebase },
      { name: 'Docker', level: 'Basic', Icon: FaDocker },
      { name: 'JUnit', level: 'Intermediate', Icon: SiJunit5 },
      { name: 'MySQL', level: 'Basic', Icon: SiMysql },
      { name: 'MongoDB', Icon: SiMongodb },
    ],
    languages: [
      { name: 'Java', level: 'Intermediate', Icon: FaJava },
      { name: 'Python', level: 'Intermediate', Icon: FaPython },
      { name: 'C', level: 'Basic', Icon: SiC },
      { name: 'TypeScript', level: 'Intermediate', Icon: SiTypescript },
      { name: 'JavaScript', level: 'Intermediate', Icon: SiJavascript },
      { name: 'Kotlin', level: 'Basic', Icon: SiKotlin },
    ],
    other: [
      { name: 'Git', Icon: FaGit },
      { name: 'GitHub', Icon: FaGithub },
    ],
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-semibold mb-6">
        Skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Frontend */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Frontend</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.frontend.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <skill.Icon className="text-3xl text-gray-900" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{skill.name}</p>
                  {skill.level && <p className="text-xs text-gray-600">{skill.level}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Backend</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.backend.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <skill.Icon className="text-3xl text-gray-900" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{skill.name}</p>
                  {skill.level && <p className="text-xs text-gray-600">{skill.level}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Languages</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.languages.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <skill.Icon className="text-3xl text-gray-900" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{skill.name}</p>
                  {skill.level && <p className="text-xs text-gray-600">{skill.level}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Other</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.other.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <skill.Icon className="text-3xl text-gray-900" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{skill.name}</p>
                  {skill.level && <p className="text-xs text-gray-600">{skill.level}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
