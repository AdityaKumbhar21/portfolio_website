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
    <section id="contact" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Feel free to reach out for collaboration, project opportunities, or just to connect!
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <Mail size={20} />
            <span>adityakumbhar915@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <MapPin size={20} />
            <span>Pune, India</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/AdityaKumbhar21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
            <Github size={20} /> GitHub
          </a>
          <a href="https://medium.com/@adityakumbhar915" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
            <Globe size={20} /> Medium
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumbhar-688a17252/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 