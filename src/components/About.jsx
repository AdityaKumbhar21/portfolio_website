import { motion } from 'framer-motion';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'BTech (2023-2027)' },
    { icon: Award, label: 'Projects', value: '4-5' },
    { icon: Briefcase, label: 'Experience', value: 'Fresher' },
  ];

  const experiences = [
    {
      title: 'BTech in Electronics & Telecommunication',
      company: 'MIT Academy of Engineering',
      period: '2023 - 2027',
    }
  ];

  return (
    <section id="about" className="section-padding relative bg-dark-950">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white opacity-50"></div>
      </div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about building full-stack applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-6 blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 text-center border border-white/10 bg-dark-900/50"
                >
                  <stat.icon size={24} className="mx-auto mb-2 text-white" />
                  <div className="font-bold text-lg text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 border border-white/10 bg-dark-900/50">
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a full stack developer with expertise in building modern web applications. On the frontend, I work with React, Next.js, and modern CSS frameworks. On the backend, I develop robust APIs using Node.js and Python.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm proficient in database design, version control, and cloud deployment. I'm driven by the goal of creating seamless digital experiences.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="glass-card p-8 border border-white/10 bg-dark-900/50">
              <h3 className="text-xl font-bold mb-6 tracking-tight text-white">Education</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-white/20">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-white rounded-full"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-gray-300 font-medium text-sm">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.period}</p>
                    </div>
                  </div>
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