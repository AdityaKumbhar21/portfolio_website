import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-lg mt-20">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              AK
            </div>
            <span className="font-bold text-lg tracking-tight">Aditya Kumbhar</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:text-primary-500 transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
            <a href="/blog" className="hover:text-primary-500 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/AdityaKumbhar21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-kumbhar-688a17252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://medium.com/@adityakumbhar915" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          <p>© {currentYear} Aditya Kumbhar. Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 