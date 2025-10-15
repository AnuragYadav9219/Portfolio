import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact, FaServer, FaDatabase, FaTools, FaUsers,
  FaHtml5, FaCss3Alt, FaJava, FaGitAlt,
  FaClock,
  FaComments,
  FaSyncAlt,
  FaUserTie
} from "react-icons/fa";
import {
  SiJavascript, SiRedux, SiTailwindcss, SiMysql,
  SiFirebase, SiPostman, SiSpringboot
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    icon: <FaReact className="text-sky-500" />,
    gradient: "from-sky-500/10 to-blue-500/5",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
    ],
  },
  {
    category: "Backend Development",
    icon: <FaJava className="text-orange-500" />,
    gradient: "from-orange-500/10 to-yellow-400/5",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "RESTful APIs", icon: <FaServer /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-purple-500" />,
    gradient: "from-purple-500/10 to-pink-500/5",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "JDBC", icon: <FaDatabase /> },
      { name: "Database Design", icon: <FaDatabase /> },
      { name: "Data Modeling", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools className="text-yellow-500" />,
    gradient: "from-yellow-500/10 to-orange-400/5",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <FaTools /> },
      { name: "Vercel", icon: <FaTools /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <FaUsers className="text-pink-500" />,
    gradient: "from-pink-500/10 to-rose-400/5",
    items: [
      { name: "Team Collaboration", icon: <FaUsers /> },
      { name: "Problem Solving", icon: <FaTools /> },
      { name: "Time Management", icon: <FaClock /> },
      { name: "Communication", icon: <FaComments /> },
      { name: "Adaptability", icon: <FaSyncAlt /> },
      { name: "Leadership", icon: <FaUserTie /> },
    ],
  },

];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-4"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <p
          className="text-gray-600 dark:text-gray-400 mb-16 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here’s what I love working with — from frontend magic to backend logic 💻
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={group.category}
              data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
              className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${group.gradient} backdrop-blur-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{group.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {skill.icon && (
                      <span className="text-base text-blue-600 dark:text-blue-400">
                        {skill.icon}
                      </span>
                    )}
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
