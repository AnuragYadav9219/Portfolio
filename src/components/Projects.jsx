import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive developer portfolio built with React and Tailwind CSS.',
      image: '/assets/Portfolio.jpg',
      demoLink: 'https://anuragyadav-sigma.vercel.app',
      githubLink: 'https://github.com/AnuragYadav9219/Portfolio',
      tags: ['React', 'Tailwind'],
    },
    {
      title: 'E-commerce App',
      description: 'A frontend application with shopping cart and admin dashboard features.',
      image: '/assets/E-commerse.png',
      demoLink: 'https://github.com/AnuragYadav9219/A-Kart',
      githubLink: 'https://github.com/AnuragYadav9219/A-Kart',
      tags: ['React', 'Redux'],
    },
    {
      title: 'ChatMate',
      description: 'A real-time social media and chat application with posts, reels, and chat.',
      image: '/assets/ChatApp.png',
      demoLink: 'https://github.com/AnuragYadav9219/ChatMate',
      githubLink: 'https://github.com/AnuragYadav9219/ChatMate',
      tags: ['React', 'Redux', 'Spring Boot', 'Web Socket'],
    },
    {
      title: 'AuthApp',
      description: 'A production-ready authentication system using JWT, protected routes, and secure APIs.',
      image: '/assets/AuthApp.png',
      demoLink: 'https://github.com/AnuragYadav9219/UniversalAuthService',
      githubLink: 'https://github.com/AnuragYadav9219/UniversalAuthService',
      tags: ['React', 'Zustand', 'Spring Boot', 'Security'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A curated list of projects showcasing real-world full-stack development skills.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="
              bg-white dark:bg-gray-800
              rounded-2xl overflow-hidden
              shadow-lg dark:shadow-[0_10px_25px_rgba(0,0,0,0.6)]
              hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                      bg-blue-100 text-blue-700
                      dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons (ALWAYS VISIBLE) */}
              <div className="flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md hover:shadow-lg transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 text-center px-4 py-2 rounded-lg bg-gray-900 hover:bg-black text-white text-sm font-medium
                    shadow-md hover:shadow-lg transition
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
