import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const skills = ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'Redux', 'AI'];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-blue-700 flex justify-center dark:text-blue-400 mb-12 leading-tight">
        About <span className="text-gray-800 ml-3 dark:text-gray-100">Me</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div className="relative text-center" data-aos="fade-right">
          <div className="absolute -inset-2 rounded-full bg-blue-100 dark:bg-blue-900 blur-xl opacity-30 animate-pulse"></div>
          <img
            src="/assets/Image.png"
            alt="Anurag Yadav"
            className="relative w-72 h-72 rounded-full object-cover mx-auto border-4 border-blue-300 dark:border-blue-500 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <div className="mt-4 text-blue-500 dark:text-blue-400 font-semibold tracking-wide">
            Full Stack Developer
          </div>
        </div>

        {/* Bio */}
        <div data-aos="fade-left" className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm <span className="font-semibold text-blue-700 dark:text-blue-400">Anurag Yadav</span>, a creative and
            passionate full-stack developer from India. I love building clean, responsive, and efficient applications
            that solve real-world problems.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            My toolkit includes <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and{' '}
            <strong>MySQL</strong>. I enjoy integrating intuitive frontends with scalable backend systems. I'm also
            fascinated by emerging technologies like <strong>AI</strong> and <strong>blockchain</strong>.
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium transition transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition transform duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
