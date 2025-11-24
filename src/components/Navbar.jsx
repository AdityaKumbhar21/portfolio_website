import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', type: 'anchor' },
    { name: 'About', href: '#about', type: 'anchor' },
    { name: 'Projects', href: '#projects', type: 'anchor' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
  ];

  const handleNavigation = (item) => {
    setIsOpen(false);
    const element = document.querySelector(item.href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300">
              AK
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-3 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/106qBaCi5mp9ENlqjM_vBXSPn1W5p1aPy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-primary !py-2 !px-5 !text-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/106qBaCi5mp9ENlqjM_vBXSPn1W5p1aPy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 btn-primary"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 