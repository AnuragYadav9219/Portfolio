import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaReact, FaNodeJs, FaDatabase, FaTools, FaUsers,
  FaHtml5, FaCss3Alt, FaJava, FaGitAlt
} from 'react-icons/fa';
import {
  SiJavascript, SiRedux, SiTailwindcss, SiMysql, SiFirebase, SiPostman, SiSpringboot
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaReact className="text-sky-500" />,
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
    ],
  },
  {
    category: 'Backend Development',
    icon: <FaNodeJs className="text-green-600" />,
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <FaNodeJs /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
    ],
  },
  {
    category: 'Databases',
    icon: <FaDatabase className="text-purple-600" />,
    items: [
      { name: 'MySQL', icon: <SiMysql /> }
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <FaTools className="text-yellow-600" />,
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGitAlt /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <FaTools /> },
      { name: 'Netlify', icon: <FaTools /> },
      { name: 'Vercel', icon: <FaTools /> },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <FaUsers className="text-pink-500" />,
    items: [
      { name: 'Team Collaboration' },
      { name: 'Problem Solving' },
      { name: 'Time Management' },
      { name: 'Communication' },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          A quick overview of my technical and soft skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={group.category}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{group.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill.icon && <span className="text-base">{skill.icon}</span>}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
