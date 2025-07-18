import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5">
        
        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/AnuragYadav9219"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/anurag-yadav-98a79928b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:anuragyad1398@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        {/* Contact (Optional line) */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Based in India · anuragyad1398@gmail.com
        </p>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Anurag Yadav</span>. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
