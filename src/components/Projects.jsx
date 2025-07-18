import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,     // trigger a bit before the element reaches the middle
      once: false,      // animate every time when scroll
      easing: 'ease-in-out'
    });
  }, []);


  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive developer portfolio built with React and Tailwind CSS.',
      image: 'src/assets/Portfolio.jpg',
      demoLink: 'https://your-portfolio-demo-link.com',
      githubLink: 'https://github.com/AnuragYadav9219/Portfolio',
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack MERN application with shopping cart and admin dashboard features.',
      image: 'src/assets/E-commerse.jpg',
      demoLink: 'https://your-ecommerce-demo-link.com',
      githubLink: 'https://github.com/AnuragYadav9219/A-Kart',
    },
    {
      title: 'Expense Tracker App',
      description: 'A full-stack application with expense tracking and admin dashboard features.',
      image: 'src/assets/expenseTracker.jpg',
      demoLink: 'https://your-ecommerce-demo-link.com',
      githubLink: 'https://github.com/AnuragYadav9219/Expense-Tracker',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 70} // stagger by 70ms
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg dark:shadow-md transition text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-4 border-4 border-white dark:border-gray-700 shadow-md"
            />

            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mt-2 mb-4">{project.description}</p>

            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm font-medium"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-900 dark:hover:bg-gray-600 transition text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
