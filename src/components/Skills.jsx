import { motion } from 'framer-motion';
import { Code, Database, Brain, BarChart3, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'SQL', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'NoSQL', level: 70, color: 'from-purple-500 to-purple-600' },
        { name: 'JavaScript', level: 65, color: 'from-yellow-500 to-yellow-600' },
      ]
    },
    {
      title: 'Data Analysis & Visualization',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'NumPy', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'Matplotlib', level: 85, color: 'from-pink-500 to-pink-600' },
        { name: 'Seaborn', level: 80, color: 'from-purple-600 to-purple-700' },
        { name: 'Tableau', level: 75, color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Scikit-learn', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Statistical Modeling', level: 80, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Globe,
      skills: [
        { name: 'Jupyter Notebooks', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'Git', level: 85, color: 'from-red-500 to-red-600' },
        { name: 'REST APIs', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Vercel', level: 70, color: 'from-gray-500 to-gray-600' },
        { name: 'Render', level: 70, color: 'from-gray-600 to-gray-700' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and analytics
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
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-white dark:bg-dark-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600"
                  >
                    {skill.name}
                  </span>
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Analytics', 'Data Cleaning', 'Data Visualization',
              'Statistical Analysis', 'Machine Learning', 'Model Deployment',
              'Version Control', 'Collaborative Projects', 'End-to-End Solutions'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-dark-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
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