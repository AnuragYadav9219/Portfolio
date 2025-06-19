const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-4 text-center text-gray-600">
      <div className="max-w-4xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/AnuragYadav9219"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="mailto:anuragyad1398@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Anurag Yadav</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
