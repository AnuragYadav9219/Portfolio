import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/AnuragYadav9219",
      label: "GitHub",
      hoverColor: "from-gray-400 to-gray-700",
      iconColor: "text-gray-800 dark:text-white",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/anurag-yadav7800",
      label: "LinkedIn",
      hoverColor: "from-blue-400 to-blue-700",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:anuragyad1398@gmail.com",
      label: "Email",
      hoverColor: "from-pink-400 to-red-500",
      iconColor: "text-red-500",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 px-6 text-gray-600 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative p-4 rounded-full bg-white dark:bg-gray-800
              shadow-md transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <span
                className={`text-xl transition-transform duration-300 
                group-hover:rotate-6 group-hover:scale-110 ${item.iconColor}`}
              >
                {item.icon}
              </span>

              {/* Glow Effect */}
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.hoverColor}
                opacity-0 group-hover:opacity-20 blur-xl transition duration-300`}
              ></span>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Based in India ·{" "}
          <a
            href="mailto:anuragyad1398@gmail.com"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            anuragyad1398@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700 dark:text-white">
            Anurag Yadav
          </span>. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="group mt-4 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
          text-white shadow-lg transition-all duration-300
          hover:scale-110 hover:shadow-2xl"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;