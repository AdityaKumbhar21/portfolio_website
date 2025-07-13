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
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I’m passionate about extracting actionable insights from complex data and building impactful machine learning solutions. With a strong foundation in Python, statistics, and data analytics, I’m constantly exploring ways to learn, grow, and contribute to data-driven projects.
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
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full transform rotate-6"></div>
                <div className="absolute inset-2 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-600 dark:to-dark-500 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
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
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-dark-700"
                >
                  <stat.icon size={32} className="mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I have hands-on experience with data analysis, statistical modeling, and machine learning, and I’m proficient in tools such as Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and Tableau. I’m skilled in SQL for querying and managing relational databases, and also have experience working with NoSQL databases.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I’m comfortable using Jupyter Notebooks, version control with Git, and integrating REST APIs. I’ve also deployed data apps and dashboards using platforms like Vercel and Render, enabling end-to-end data solution delivery.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I’m driven by the goal of turning raw data into valuable insights and building solutions that make an impact. Always open to connecting with like-minded professionals, I thrive in collaborative environments where I can contribute, learn, and grow.
              </p>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
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
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-2"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
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