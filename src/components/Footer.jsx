import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Importing icons
import './Style.css';

const Footer = () => {
  return (
    <footer className="footer text-white py-6 from-purple-500 to-pink-500">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <NavLink to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
            <FaLinkedin size={24} />
          </NavLink>
          <NavLink to="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
            <FaGithub size={24} />
          </NavLink>
          <NavLink to="mailto:your-email@gmail.com" className="hover:text-yellow-300 transition duration-300">
            <FaEnvelope size={24} />
          </NavLink>
          <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
            <FaTwitter size={24} />
          </NavLink>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anurag Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
