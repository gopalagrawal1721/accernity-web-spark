
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold">
              <span className="gradient-text">Accernity.</span>
            </Link>
            <p className="text-gray-600 mt-2">
              Transforming businesses through innovative digital marketing and web development solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-brand-blue mt-1" />
                <span className="text-gray-600">
                  123 Digital Avenue, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-blue" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-blue" />
                <span className="text-gray-600">hello@accernity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Accernity. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
