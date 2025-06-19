import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-800 text-5xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-5xl" /> },
    { name: 'Git', icon: <FaGit className="text-red-600 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-10">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
