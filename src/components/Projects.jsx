import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  { name: "Project 1", description: "A brief description of project 1.", github: "/project1", live: "/project1/live" },
  { name: "Project 2", description: "A brief description of project 2.", github: "/project2", live: "/project2/live" },
  { name: "Project 3", description: "A brief description of project 3.", github: "/project3", live: "/project3/live" },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-base md:text-lg mb-8 text-center">Here are some of the projects I've worked on:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-white text-black p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg md:text-xl">{project.name}</h3>
            <p className="text-sm md:text-base mt-2">{project.description}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={project.github}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
              >
                <FaGithub className="inline mr-2" /> View on GitHub
              </Link>
              <Link
                to={project.live}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 text-center"
              >
                <FaExternalLinkAlt className="inline mr-2" /> Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
