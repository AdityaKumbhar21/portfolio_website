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
    },
    {
      type: 'project',
      icon: Code,
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Building scalable web applications using React, Next.js, Node.js, and modern cloud technologies.',
    },
    {
      type: 'skill',
      icon: Award,
      title: 'Tech Enthusiast',
      company: 'Continuous Learning',
      period: 'Always',
      description: 'Passionate about learning new technologies, contributing to open source, and building innovative solutions.',
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My path in technology.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-black shadow-lg"></div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="glass-card p-6 hover:border-primary-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <p className="text-sm text-primary-500">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {exp.description}
                      </p>
                      <p className="text-xs text-gray-400 font-mono">{exp.period}</p>
                    </div>
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

