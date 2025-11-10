import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'BTech in Electronics & Telecommunication',
      company: 'MIT Academy of Engineering',
      period: '2023 - 2027',
      description: 'Pursuing Bachelor\'s degree with focus on software development and modern web technologies.',
      color: 'from-primary-500 to-primary-600',
      glowColor: 'shadow-primary-500/30'
    },
    {
      type: 'project',
      icon: Code,
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Building scalable web applications using React, Next.js, Node.js, and modern cloud technologies.',
      color: 'from-accent-500 to-accent-600',
      glowColor: 'shadow-accent-500/30'
    },
    {
      type: 'skill',
      icon: Award,
      title: 'Tech Enthusiast',
      company: 'Continuous Learning',
      period: 'Always',
      description: 'Passionate about learning new technologies, contributing to open source, and building innovative solutions.',
      color: 'from-electric-500 to-electric-600',
      glowColor: 'shadow-electric-500/30'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My path in technology, from education to building real-world applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-electric-500 opacity-30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} ${exp.glowColor} shadow-lg flex items-center justify-center border-4 border-dark-900`}
                    >
                      <Icon size={12} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="card p-6 group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg ${exp.glowColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-primary-400 font-medium mb-1">{exp.company}</p>
                          <p className="text-sm text-gray-400 font-mono">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Decorative gradient line */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${exp.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

