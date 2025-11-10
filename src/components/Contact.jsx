import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Medium',
      icon: Globe,
      url: 'https://medium.com/@yourusername',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="container-custom max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Feel free to reach out for collaboration, project opportunities, or just to connect!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center justify-center gap-3 text-gray-300 bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-4 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 group"
          >
            <Mail size={22} className="text-primary-400 group-hover:text-primary-300 transition-colors" />
            <span className="font-mono text-accent-400 group-hover:text-accent-300 transition-colors">adityakumbhar915@gmail.com</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center justify-center gap-3 text-gray-300 bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-4 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 group"
          >
            <MapPin size={22} className="text-primary-400 group-hover:text-primary-300 transition-colors" />
            <span className="font-mono text-accent-400 group-hover:text-accent-300 transition-colors">Pune, India</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            href="https://github.com/AdityaKumbhar21" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-dark-900/50 backdrop-blur-sm border border-dark-800 text-gray-300 hover:text-primary-400 hover:border-primary-500/50 font-medium transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-primary-500/20 group"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" /> GitHub
          </motion.a>
          <motion.a 
            href="https://medium.com/@adityakumbhar915" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-dark-900/50 backdrop-blur-sm border border-dark-800 text-gray-300 hover:text-accent-400 hover:border-accent-500/50 font-medium transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 group"
          >
            <Globe size={20} className="group-hover:scale-110 transition-transform" /> Medium
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/aditya-kumbhar-688a17252/" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-dark-900/50 backdrop-blur-sm border border-dark-800 text-gray-300 hover:text-electric-400 hover:border-electric-500/50 font-medium transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-electric-500/20 group"
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" /> LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 