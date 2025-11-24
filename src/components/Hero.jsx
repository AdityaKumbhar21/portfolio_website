import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-dark-950">
      {/* Aesthetic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white opacity-50"></div>
        {/* Subtle Spotlight */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-dark-950 to-transparent pointer-events-none"></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-white mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900 dark:text-white mb-2">Aditya Kumbhar</span>
            <span className="block text-gray-900 dark:text-white">
              <TypingAnimation words={roles} speed={100} deleteSpeed={50} delay={2000} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting digital experiences with a focus on aesthetics and performance. 
            I build accessible, pixel-perfect, and performant web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 px-6">
              <a href="https://github.com/AdityaKumbhar21" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/adityakumbhar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:adityakumbhar@example.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-gray-400 rounded-full mb-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 