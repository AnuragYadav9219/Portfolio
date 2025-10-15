import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive developer portfolio built with React and Tailwind CSS.',
      image: '/assets/Portfolio.jpg',
      demoLink: 'https://anuragyadav-sigma.vercel.app',
      githubLink: 'https://github.com/AnuragYadav9219/Portfolio',
      tags: ['React', 'Tailwind', 'Responsive'],
    },
    {
      title: 'E-commerce App',
      description: 'A frontend application with shopping cart and admin dashboard features.',
      image: '/assets/E-commerse.jpg',
      demoLink: 'https://github.com/AnuragYadav9219/A-Kart',
      githubLink: 'https://github.com/AnuragYadav9219/A-Kart',
      tags: ['Frontend', 'Redux'],
    },
    {
      title: 'ChatMate',
      description: 'A real-time social media and chat application with posts, reels, and chat. Built with React, Redux, Tailwind CSS, and Spring Boot.',
      image: '/assets/chat.png',
      demoLink: 'https://github.com/AnuragYadav9219/ChatMate',
      githubLink: 'https://github.com/AnuragYadav9219/ChatMate',
      tags: ['React', 'Redux', 'Spring Boot'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center">
        Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 block"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition"
                  onClick={(e) => e.stopPropagation()} // Prevent parent link from blocking
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm font-medium transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Projects;
