import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl font-montserrat font-bold gradient-text">Tejas Bhosale</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="home" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            About
          </Link>
          <Link to="research" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            Research
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-text-primary hover:text-accent transition-colors cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
            <span className="text-xl">🔗</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
            <span className="text-xl">🐙</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
            <span className="text-xl">🐦</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-4 space-y-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="research"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
                <span className="text-xl">🔗</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
                <span className="text-xl">🐙</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
