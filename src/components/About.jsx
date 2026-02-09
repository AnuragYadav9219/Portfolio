import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const skills = [
    'Java',
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'Transaction Management',
    'Spring Security',
    'JWT Authentication',
    'React',
    'Redux',
    'Tailwind CSS',
    'MySQL',
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-blue-700 flex justify-center dark:text-blue-400 mb-12">
        About <span className="text-gray-800 ml-3 dark:text-gray-100">Me</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative text-center" data-aos="fade-right">
          <div className="absolute -inset-2 rounded-full bg-blue-100 dark:bg-blue-900 blur-xl opacity-30"></div>

          <img
            src="/assets/Image.png"
            alt="Anurag Yadav"
            className="relative w-72 h-72 rounded-full object-cover mx-auto border-4 border-blue-300 dark:border-blue-500 shadow-xl"
          />

          <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
            Software Engineer | Full Stack Java Developer
          </div>
        </div>

        {/* Content */}
        <div data-aos="fade-left" className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I’m <span className="font-semibold text-blue-700 dark:text-blue-400">Anurag Yadav</span>,
            a Software Engineer focused on building scalable, secure web applications using
            Java and modern frontend technologies.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-base">
            I work with <strong>Java</strong> and <strong>Spring Boot</strong> to design
            <strong> microservices</strong>, develop <strong>REST APIs</strong>,
            handle <strong>transaction management</strong>, and implement
            <strong> authentication & authorization</strong>.
            On the frontend, I build responsive UIs using <strong>React</strong>, <strong>Shadcn</strong> and
            <strong> Tailwind CSS</strong>.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
