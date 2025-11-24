import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Feel free to reach out for collaboration, project opportunities, or just to connect!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <div className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
            <Mail size={20} className="text-primary-500" />
            <span className="font-mono text-sm">adityakumbhar915@gmail.com</span>
          </div>
          <div className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
            <MapPin size={20} className="text-primary-500" />
            <span className="font-mono text-sm">Pune, India</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="https://github.com/AdityaKumbhar21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
          <a 
            href="https://medium.com/@adityakumbhar915" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary flex items-center gap-2"
          >
            <Globe size={18} /> Medium
          </a>
          <a 
            href="https://www.linkedin.com/in/aditya-kumbhar-688a17252/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 