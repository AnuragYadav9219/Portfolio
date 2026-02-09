import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 lg:px-24 py-14 md:py-0
      bg-gradient-to-br from-blue-100 via-white to-blue-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      {/* LEFT — TEXT */}
      <div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Software Engineer
          <span className="block text-blue-600 dark:text-blue-400">
            Building Scalable Systems
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I’m{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Anurag Yadav
          </span>
          , a Full Stack Java Developer experienced in designing
          <strong> scalable web applications</strong>, building
          <strong> RESTful APIs</strong>, and implementing
          <strong> microservices</strong> using
          <strong> Java</strong> and
          <strong> Spring Boot</strong>, with modern frontend technologies.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-7 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium shadow-md
            hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-7 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400
            rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            View Projects
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center md:justify-start gap-6 text-xl text-blue-600 dark:text-blue-400">
          <a
            aria-label="GitHub"
            href="https://github.com/AnuragYadav9219"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/anurag-yadav7800/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            aria-label="Email"
            href="mailto:anuragyad1398@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* STATS */}
        <div className="flex justify-center md:justify-start gap-8 pt-6 text-gray-700 dark:text-gray-300">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              5+
            </p>
            <p className="text-sm">Projects Delivered</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              3+
            </p>
            <p className="text-sm">Tech Domains</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              1+
            </p>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0"
        data-aos="fade-left"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
          <img
            src="/assets/Img.png"
            alt="Anurag Yadav"
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-xl"
          />
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-500 blur-xl opacity-30 animate-pulse -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
