import React from 'react';
import { motion } from 'framer-motion'; 
import { FaJs, FaReact, FaCss3Alt, FaPython, FaHtml5 } from 'react-icons/fa';

const skills = [
  { name: "JavaScript", level: 65, icon: <FaJs /> },
  { name: "React", level: 80, icon: <FaReact /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt /> },
  { name: "Python", level: 75, icon: <FaPython /> },
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
 
];

const SkillsChart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">My Skills</h1>
      <p className="text-lg mb-8">Here are some of the skills I've acquired:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white mx-8 md:m-7 duration-300 cursor-pointer hover:scale-105 text-black p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-1">
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.name}</span>
              <span className="ml-auto">{skill.level}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-4">
              <motion.div
                className="bg-blue-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsChart;
