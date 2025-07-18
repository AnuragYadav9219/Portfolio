import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMysql,
} from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGit className="text-red-600" /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, easing: 'ease-in-out' });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-12 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-950"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        My Skills
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {skills.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl transition-all hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center transform transition-transform hover:scale-110 hover:shadow-md"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
