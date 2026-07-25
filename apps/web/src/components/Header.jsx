import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { PROJECTS } from '@/config/site.config.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const homeTimeoutRef = useRef(null);
  const projectsTimeoutRef = useRef(null);
  const workTimeoutRef = useRef(null);
  const location = useLocation();

  const openDropdown = (setter, timeoutRef) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setter(true);
  };

  const closeDropdown = (setter, timeoutRef) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setter(false), 150);
  };

  const homeLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About us' },
    { path: '/standards', label: 'Standards' },
    { path: '/reports', label: 'Inspection reports' },
    { path: '/contact', label: 'Contact us' },
  ];

  const projectLinks = [
    { path: '/projects', label: 'All Projects' },
    ...PROJECTS.map((project) => ({
      path: project.link,
      label: project.name,
    })),
  ];

  const workLinks = [
    { path: '/work#vacancies', label: 'Current vacancies' },
    { path: '/work#commitment', label: 'Commitment to staff' },
    { path: '/work#people', label: 'Meet our people' },
    { path: '/work#graduates', label: 'Graduate and apprentices' },
    { path: '/work#volunteers', label: 'Volunteers' },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center mr-6 group">
            <Logo className="group-hover:opacity-90" compact={false} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => openDropdown(setIsHomeOpen, homeTimeoutRef)}
              onMouseLeave={() => closeDropdown(setIsHomeOpen, homeTimeoutRef)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/"
                  className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-satash-blue-600 transition-colors"
                >
                  Home
                </Link>
                <button
                  type="button"
                  onClick={() => setIsHomeOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center rounded-full p-1 text-gray-700 hover:text-satash-blue-600 transition-colors"
                  aria-haspopup="menu"
                  aria-expanded={isHomeOpen}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHomeOpen ? 1 : 0, y: isHomeOpen ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 top-full mt-2 w-56 rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-200 z-50 ${
                  isHomeOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{ display: isHomeOpen ? 'block' : 'none' }}
              >
                <div className="py-2">
                  {homeLinks.slice(1).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-satash-blue-50 hover:text-satash-blue-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDropdown(setIsProjectsOpen, projectsTimeoutRef)}
              onMouseLeave={() => closeDropdown(setIsProjectsOpen, projectsTimeoutRef)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/projects"
                  className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-satash-blue-600 transition-colors"
                >
                  Projects
                </Link>
                <button
                  type="button"
                  onClick={() => setIsProjectsOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center rounded-full p-1 text-gray-700 hover:text-satash-blue-600 transition-colors"
                  aria-haspopup="menu"
                  aria-expanded={isProjectsOpen}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isProjectsOpen ? 1 : 0, y: isProjectsOpen ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-200 z-50 ${
                  isProjectsOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{ display: isProjectsOpen ? 'block' : 'none' }}
              >
                <div className="py-2">
                  {projectLinks.slice(1).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-satash-blue-50 hover:text-satash-blue-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDropdown(setIsWorkOpen, workTimeoutRef)}
              onMouseLeave={() => closeDropdown(setIsWorkOpen, workTimeoutRef)}
            >
              <button
                type="button"
                onClick={() => setIsWorkOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-satash-blue-600 transition-colors"
                aria-haspopup="menu"
                aria-expanded={isWorkOpen}
              >
                Work for us
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isWorkOpen ? 1 : 0, y: isWorkOpen ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-200 ${
                  isWorkOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{ display: isWorkOpen ? 'block' : 'none' }}
              >
                <div className="py-2">
                  {workLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-satash-blue-50 hover:text-satash-blue-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <Link
              to="/contact"
              className={`text-lg font-medium transition-colors ${
                isActive('/contact') ? 'text-satash-blue-600' : 'text-gray-700 hover:text-satash-blue-500'
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-satash-blue-50 transition-colors ml-auto"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-satash-blue-600" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-satash-blue-600" aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-4 space-y-3">
                <div className="px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-500">Home</div>
                {homeLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-satash-blue-50 hover:text-satash-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-500">Projects</div>
                {projectLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-satash-blue-50 hover:text-satash-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-500">Work for us</div>
                {workLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-satash-blue-50 hover:text-satash-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-satash-blue-50 hover:text-satash-blue-600"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
