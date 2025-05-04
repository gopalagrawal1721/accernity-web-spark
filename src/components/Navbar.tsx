
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, FileText, Zap, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-display font-bold flex items-center">
            <div className="relative mr-3 flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-purple p-2 rounded-lg transform rotate-12 shadow-lg">
              <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
              <Code className="text-white z-10" size={20} />
              <Zap className="text-white z-10 mx-0.5" size={16} />
              <FileText className="text-white z-10" size={20} />
            </div>
            <span className="font-montserrat font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple tracking-tight">Code N Content</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-medium text-gray-800 hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="font-medium text-gray-800 hover:text-brand-blue transition-colors">
              Services
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="font-medium text-gray-800 hover:text-brand-blue transition-colors">
              About
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="font-medium text-gray-800 hover:text-brand-blue transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button className="gradient-bg text-white rounded-full">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="gradient-bg text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
