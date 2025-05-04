import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Code, FileText, Zap } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    facebook: "https://facebook.com/codencontent",
    twitter:  "https://x.com/9347094615",
    instagram: "https://www.instagram.com/code_n_content?igsh=bjZ1azlmZWR5MWNn",
    linkedin: "https://www.linkedin.com/company/code-n-content/"
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-display font-bold flex items-center">
              <div className="relative mr-3 flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-purple p-2 rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
                <Code className="text-white z-10" size={18} />
                <Zap className="text-white z-10 mx-0.5" size={14} />
                <FileText className="text-white z-10" size={18} />
              </div>
              <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Code N Content</span>
            </Link>
            <p className="text-gray-600 mt-2">
              Transforming businesses through innovative digital marketing and web development solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors" 
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors" 
                aria-label="Visit our Twitter profile"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors" 
                aria-label="Visit our Instagram profile"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors" 
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
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
                <Link to="/"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-brand-blue mt-1" />
                <span className="text-gray-600">
                HSR Layout<br />
                Hosapalya, Bengaluru, Karnataka (560068)
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-blue" />
                <div className="space-y-1">
                <p className="text-gray-600">8374672687</p>
                <p className="text-gray-600">8969912581</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-blue" />
                <div className="space-y-1">
                <p className="text-gray-600">Chander@codencontent.com</p>
                <p className="text-gray-600">Gopal@codencontent.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Code N Content. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* <Link to="/terms"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap"     onClick={() => window.scrollTo(0, 0)}
 className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                Sitemap
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
