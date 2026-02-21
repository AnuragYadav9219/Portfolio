import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-24
       bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-950 dark:via-gray-900
       px-6 dark:to-gray-950 sm:px-8 lg:px-20 py-16 sm:py-20 transition-colors"
    >
      {/* Background Glow Shapes */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl -bottom-40 -right-40"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* IMAGE */}
          <div
            className="flex-1 flex justify-center order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]">

              {/* Skeleton Loader */}
              {loading && (
                <div className="absolute inset-0 rounded-2xl sm:rounded-full overflow-hidden z-20">
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                </div>
              )}

              {/* Image */}
              <img
                src="/assets/Img.png"
                alt="Anurag Yadav"
                onLoad={() => setLoading(false)}
                className={`w-full h-full object-cover shadow-2xl transition-opacity duration-700
                rounded-2xl sm:rounded-full border-4 border-white dark:border-gray-800
                ${loading ? "opacity-0" : "opacity-100"}`}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-full 
              bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 
              blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div
            className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Anurag Yadav
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack Java Developer
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-lg">
              I design and develop scalable web applications, REST APIs,
              and microservices using Java, Spring Boot, and modern frontend
              technologies. Passionate about building high-performance systems
              and clean architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700
                hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                View Projects
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 pt-4 text-xl">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative p-4 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span
                    className={`text-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${item.iconColor}`}
                  >
                    {item.icon}
                  </span>

                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.hoverColor} opacity-0 group-hover:opacity-20 blur-xl transition duration-300`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">5+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Projects
                </p>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-purple-600">3+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Domains
                </p>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-pink-600">1+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Years Exp
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
