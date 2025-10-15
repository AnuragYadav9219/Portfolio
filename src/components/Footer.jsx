import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-10 px-6 text-gray-600 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          {[{
            icon: <FaGithub />,
            link: "https://github.com/AnuragYadav9219",
            label: "GitHub"
          },{
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/anurag-yadav-98a79928b",
            label: "LinkedIn"
          },{
            icon: <FaEnvelope />,
            link: "mailto:anuragyad1398@gmail.com",
            label: "Email"
          }].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact info */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Based in India · <a href="mailto:anuragyad1398@gmail.com" className="hover:underline text-blue-600 dark:text-blue-400">anuragyad1398@gmail.com</a>
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">Anurag Yadav</span>. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-4 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
