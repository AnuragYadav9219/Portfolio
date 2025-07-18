import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 py-12 md:py-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      {/* 👉 Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0" data-aos="fade-right">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Crafting Code <br className="hidden sm:inline" /> 
          That Connects
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Anurag Yadav</span> — a full-stack developer passionate about clean code, smart systems, and stunning interfaces.
        </p>

        {/* 👉 Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Let's Collaborate
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            View Projects
          </a>
        </div>

        {/* 👉 Social Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-5 text-xl text-blue-600 dark:text-blue-400">
          <a href="https://github.com/AnuragYadav9219" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/anurag-yadav-98a79928b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:anuragyad1398@gmail.com"><FaEnvelope /></a>
        </div>

        {/* 👉 Stats */}
        <div className="mt-8 flex justify-center md:justify-start gap-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <div>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">5+</p>
            <p>Projects</p>
          </div>
          <div>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">3+</p>
            <p>Tech Stacks</p>
          </div>
          <div>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">1+</p>
            <p>Years Exp</p>
          </div>
        </div>
      </div>

      {/* 👉 Fullscreen Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-[60vh] md:h-screen" data-aos="fade-left">
        <div className="relative w-[60vw] h-[60vw] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <img
            src="src/assets/Image.jpg"
            alt="Anurag Yadav"
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
          />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-500 blur-xl opacity-30 animate-pulse z-[-1]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;