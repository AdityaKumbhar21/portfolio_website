import { motion } from 'framer-motion';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'BTech (2023-2027)' },
    { icon: Award, label: 'Projects', value: '4-5' },
    { icon: Briefcase, label: 'Experience', value: 'Fresher' },
  ];

  // No work experience, so timeline is academic/courses
  const experiences = [
    {
      title: 'BTech in Electronics & Telecommunication',
      company: 'MIT Academy of Engineering',
      period: '2023 - 2027',
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm passionate about building full-stack applications that solve real-world problems. With expertise in modern web technologies, I create scalable and performant solutions from frontend to backend.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image with enhanced styling */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative group">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full transform rotate-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-float"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full transform -rotate-6 opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Inner container */}
                <div className="absolute inset-2 bg-dark-900 rounded-full flex items-center justify-center border-2 border-dark-800 group-hover:border-primary-500/50 transition-colors duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 rounded-full flex items-center justify-center overflow-hidden p-1">
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <stat.icon size={32} className="mx-auto mb-2 text-primary-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a full stack developer with expertise in building modern web applications. On the frontend, I work with React, Next.js, and modern CSS frameworks to create responsive and interactive user interfaces. On the backend, I develop robust APIs and server-side logic using Node.js, Python, and various frameworks.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm proficient in database design and management, working with both SQL and NoSQL databases. I'm experienced with version control using Git, deploying applications to cloud platforms like Vercel, AWS, and Render, and implementing best practices for code quality and performance optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm driven by the goal of creating seamless digital experiences and building scalable solutions that make an impact. Always open to connecting with like-minded professionals, I thrive in collaborative environments where I can contribute, learn, and grow.
              </p>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Academic Journey
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-500/30"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-2 glow"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                    {/* Removed exp.description rendering */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 