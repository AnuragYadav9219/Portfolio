const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive developer portfolio built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1581276879432-15a67f2d8b5d?auto=format&fit=crop&w=800&q=80',
      demoLink: 'https://your-portfolio-demo-link.com',
      githubLink: 'https://github.com/yourusername/portfolio-project',
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack MERN application with shopping cart and admin dashboard features.',
      image: 'src/assets/E-commerse.jpg',
      demoLink: 'https://your-ecommerce-demo-link.com',
      githubLink: 'https://github.com/yourusername/ecommerce-app',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-2xl font-semibold text-blue-700">{project.title}</h3>
            <p className="text-gray-700 mt-2 mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition text-sm font-medium"
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
