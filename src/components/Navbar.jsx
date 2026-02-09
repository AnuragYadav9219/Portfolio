import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const getLinkClass = (id) =>
    active === id
      ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4'
      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-700/60 shadow-[0_1px_4px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_6px_rgba(0,0,0,0.6)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Anurag Yadav
        </h1>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={id}>
                <a href={`#${id}`} className={getLinkClass(id)}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 space-y-4 font-medium border-t border-gray-200 dark:border-gray-800 shadow-md dark:shadow-xl">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => {
                    setActive(id);
                    setTimeout(() => setIsOpen(false), 200);
                  }}
                  className={getLinkClass(id)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
