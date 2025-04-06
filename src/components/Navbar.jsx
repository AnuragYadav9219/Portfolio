import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Importing icons
import "./Style.css"; // Importing custom styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="bg-gradient-to-r from-blue-500 to-green-500 shadow-lg fixed w-full z-50">

      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <NavLink to="/">Anurag Yadav</NavLink>
        </h1>

        {/* Social Icons */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <NavLink to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaLinkedin size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaGithub size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:your-email@gmail.com" className="text-white hover:text-yellow-300">
              <FaEnvelope size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <FaTwitter size={24} />
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute bg-green-700 rounded-md top-16 left-0 w-full md:hidden transition-all duration-300 ${menuOpen ? "h-auto opacity-100 transform translate-y-0" : "h-0 opacity-0 overflow-hidden -translate-y-10"       
          }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li className="flex items-center space-x-2">
            <NavLink to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white flex hover:text-yellow-300">
              <FaLinkedin size={24} />
              <span className="text-white pl-2">LinkedIn</span>
            </NavLink>
          </li>
          <hr className=" border-t-2 border-white/30 w-full "/>
          <li className="flex items-center space-x-2">
            <NavLink to="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white flex hover:text-yellow-300">
              <FaGithub size={24} />
              <span className="text-white pl-2">GitHub</span>
            </NavLink>
          </li>
          <hr className=" border-t-2 border-white/30 w-full "/>
          <li className="flex items-center space-x-2">
            <NavLink to="mailto:your-email@gmail.com" className="text-white flex hover:text-yellow-300">
              <FaEnvelope size={24} />
              <span className="text-white pl-2">Gmail</span>
            </NavLink>
          </li>
          <hr className=" border-t-2 border-white/30 w-full "/>
          <li className="flex items-center space-x-2">
            <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white flex hover:text-yellow-300">
              <FaTwitter size={24} />
              <span className="text-white pl-2">Twitter</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
