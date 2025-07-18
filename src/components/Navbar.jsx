import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // Close mobile menu on larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Reduced threshold to detect shorter sections too
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (id) =>
    active === id
      ? 'text-blue-600 font-semibold underline underline-offset-4'
      : 'hover:text-blue-600';

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-blue-600">Anurag Yadav</h1>

        {/* Mobile button */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
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
        <ul className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 font-medium text-gray-700 shadow-md">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => {
                    setActive(id);
                    setTimeout(() => setIsOpen(false), 300); // Allow scroll to happen first
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
