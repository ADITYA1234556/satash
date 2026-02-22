import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-satash-blue-700 to-satash-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4 group">
              <img src="https://horizons-cdn.hostinger.com/d9b46d16-4dc3-4cd0-84b6-ed6cf9e16076/fe5debdf442433f8f7ad6befc8157312.png" alt="Satash Community Care logo" className="h-[50px] md:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>

            <p className="text-satash-blue-100 leading-relaxed">
              Empowering independence and ensuring dignity through person-centred care services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-satash-blue-100 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-satash-blue-100 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-satash-blue-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#privacy" className="text-satash-blue-100 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-satash-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-satash-blue-100">109 - 111 Mollands Lane, South Ockendon,
Essex,
RM15 6DJ</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-satash-green-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+442012345678" className="text-satash-blue-100 hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-satash-green-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@satashcare.org" className="text-satash-blue-100 hover:text-white transition-colors">contact@satashcommunitycare.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Follow Us</span>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Satashcommunitycare?locale=en_GB" className="p-3 bg-satash-blue-600 rounded-lg hover:bg-satash-blue-500 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/satash-community-care-project-limited/about/" className="p-3 bg-satash-blue-600 rounded-lg hover:bg-satash-blue-500 transition-colors" aria-label="Follow us on LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-satash-blue-100 mt-4 text-sm">
              Stay connected with our community and latest updates.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-satash-blue-600 mt-8 pt-8 text-center">
          <p className="text-satash-blue-100">
            &copy; {currentYear} Satash Community Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;