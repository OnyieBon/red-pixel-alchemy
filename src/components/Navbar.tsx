import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              B.<span className="text-secondary">ONYANGO</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-secondary hover:text-primary font-medium transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-secondary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
            <Link
              to="/"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
