import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'Home', href: '#home' },
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Contact', href: '#contact' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'Resume', href: '#resume', external: false },
          { name: 'GitHub', href: 'https://github.com/AdityaKumbhar21', external: true },
          { name: 'Medium', href: 'https://medium.com/@adityakumbhar915', external: true },
          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-kumbhar-688a17252/', external: true },
        ]
      }
    ],
    social: [
      { name: 'GitHub', icon: Github, url: 'https://github.com/AdityaKumbhar21' },
      { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/aditya-kumbhar-688a17252/' },
      { name: 'Medium', icon: Globe, url: 'https://medium.com/@adityakumbhar915' },
    ]
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AK</span>
                </div>
                <span className="text-xl font-bold">Aditya Kumbhar</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Data Science portfolio. Passionate about extracting actionable insights from complex data and building impactful machine learning solutions.<br />MIT Academy of Engineering
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-left"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-dark-700 py-8"
        >
          <div className="flex justify-center items-center">
            <span className="text-gray-400">© {currentYear} Aditya Kumbhar | MIT Academy of Engineering</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 