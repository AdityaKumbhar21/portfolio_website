import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-orange-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-cyan-600' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'REST APIs', level: 85, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' },
        { name: 'MySQL', level: 80, color: 'from-orange-500 to-orange-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: [
        { name: 'Git', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-orange-600' },
        { name: 'Vercel', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'CI/CD', level: 75, color: 'from-purple-500 to-purple-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 via-accent-500 to-electric-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <category.icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2.5 bg-dark-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-dark-700 hover:border-primary-500/60 hover:text-primary-400 hover:bg-dark-800 transition-all duration-300 hover:shadow-md hover:shadow-primary-500/20 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Communication', 'Presentation', 'UI/UX Design'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-dark-800 rounded-full text-sm font-medium text-gray-300 border border-dark-700 hover:border-primary-500/50 hover:text-primary-400 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 