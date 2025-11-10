import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = ['Full Stack Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Innovator'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950">
      {/* Particle Background */}
      <ParticleBackground particleCount={60} />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 z-0"></div>
      
      {/* Gradient Orbs with neon colors */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-500 rounded-full filter blur-[140px] opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-500 rounded-full filter blur-[140px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-500 rounded-full filter blur-[140px] opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Code-like decorations with better styling */}
      <div className="absolute top-20 left-10 opacity-20 font-mono text-sm text-primary-400 hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="text-accent-400">const</span>
          <span className="text-primary-400">developer</span>
          <span className="text-gray-500">=</span>
          <span className="text-accent-300">{'{'}</span>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 font-mono text-sm text-accent-400 hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">{'}'}</span>
          <span className="text-primary-400">;</span>
        </div>
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute top-1/4 right-20 opacity-10 font-mono text-xs text-gray-400 hidden xl:block">
        <div className="code-block max-w-xs">
          <div className="text-accent-400">function</div>
          <div className="text-primary-400 ml-4">buildPortfolio()</div>
          <div className="text-gray-500 ml-4">{'{'}</div>
          <div className="text-gray-300 ml-8">return awesome;</div>
          <div className="text-gray-500 ml-4">{'}'}</div>
        </div>
      </div>

      <div className="container-custom relative z-20">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-dark-900/80 backdrop-blur-sm border border-primary-500/40 text-primary-400 shadow-lg shadow-primary-500/10"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
              <span className="font-mono text-accent-400">Available for new opportunities</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="font-mono text-accent-400 text-lg sm:text-xl mb-4 opacity-80">
              <span className="text-primary-400">const</span> <span className="text-accent-300">developer</span> <span className="text-gray-500">=</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">
                Aditya Kumbhar
              </span>
            </h1>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-2 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
              <TypingAnimation words={roles} speed={100} deleteSpeed={50} delay={2000} />
            </div>
            <div className="font-mono text-accent-400 text-lg sm:text-xl opacity-80">
              <span className="text-gray-500">;</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            I'm a <span className="text-primary-400 font-medium">BTech student</span> (2023-2027), passionate about building <span className="text-accent-400 font-medium">scalable web applications</span> and creating seamless user experiences. I love turning ideas into reality through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.button>
            
            <motion.a
              href="https://drive.google.com/file/d/1h7lx5x03ZTm5KSLq7Lvx5nEHqqsamMoS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download size={20} />
              <span>View Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center space-x-12 text-gray-400 mt-16"
          >
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">2027</div>
              <div className="text-sm text-gray-500 font-mono">Graduation</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-dark-700 to-transparent"></div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">Code</div>
              <div className="text-sm text-gray-500 font-mono">Enthusiast</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 