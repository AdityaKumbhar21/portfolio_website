import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Presentation, Database, Brain, BarChart3, Cpu, TrendingUp, Coffee, Users, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pizza Sales Forecasting (Python & Time Series)',
      description: 'Developed a sales forecasting model using Python (ARIMA/Prophet) to predict future sales trends with high accuracy. Conducted EDA to identify seasonal patterns and key sales drivers, visualizing insights via Tableau dashboards.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop',
      category: 'Time Series Analysis',
      icon: TrendingUp,
      technologies: ['Python', 'ARIMA', 'Prophet', 'Tableau', 'EDA', 'Time Series'],
      links: [
        { name: 'Dashboard', url: '#', icon: BarChart3 },
        { name: 'GitHub', url: 'https://github.com/AdityaKumbhar21/Pizza_Sales_Analysis_and_Forecasting', icon: Github },
        { name: 'Blog', url: '#', icon: FileText },
        { name: 'PPT', url: 'https://www.canva.com/design/DAGsfnHfxyA/0GiAfzLRkzJmdqou8yJo0w/view?utm_content=DAGsfnHfxyA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7c8f25b690', icon: Presentation },
      ],
      featured: true
    },
    {
      title: 'Monday Coffee Expansion Analysis (SQL)',
      description: 'Conducted data-driven market analysis using advanced SQL queries to recommend top 3 cities for new coffee shop expansion. Analyzed sales, customer behavior, and cost-efficiency to provide actionable insights for strategic investment decisions.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
      category: 'Data Analysis',
      icon: Coffee,
      technologies: ['SQL', 'Data Analysis', 'Market Research', 'Business Intelligence'],
      links: [
        { name: 'Link', url: 'https://github.com/AdityaKumbhar21/Monday_coffee_expansion_analysis_SQL', icon: ExternalLink },
        { name: 'Blog', url: 'https://medium.com/@adityakumbhar915/brewing-success-a-data-driven-expansion-strategy-for-monday-coffee-2b004d7c9ded', icon: FileText },
      ]
    },
    {
      title: 'Customer & Sales Performance Dashboard (Tableau)',
      description: 'Created dynamic Tableau dashboards to monitor key customer and sales performance indicators (KPIs). Improved data accessibility and enabled stakeholders to identify trends and opportunities for business growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Data Visualization',
      icon: BarChart3,
      technologies: ['Tableau', 'Data Visualization', 'KPIs', 'Business Intelligence'],
      links: [
        { name: 'Dashboard', url: 'https://public.tableau.com/app/profile/aditya.kumbhar5912/viz/SalesDashboard_17515113910860/SalesDashboard', icon: BarChart3 },
        { name: 'GitHub', url: 'https://github.com/AdityaKumbhar21/Sales_and_Customer_Dashboard', icon: Github },
        { name: 'Blog', url: 'https://medium.com/@adityakumbhar915/building-actionable-sales-customer-dashboards-a-data-story-e7031e0756a7', icon: FileText },
      ]
    },
    {
      title: 'Customer Churn Prediction (Python & Machine Learning)',
      description: 'Built an end-to-end ML pipeline in Python to predict customer churn, achieving 80% Recall and 58% F1-score on unseen data. Addressed class imbalance with SMOTE and optimized model performance through Hyperparameter Tuning and created an UI for the end user using React and Tailwind.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Machine Learning',
      icon: Brain,
      technologies: ['Python', 'Machine Learning', 'SMOTE', 'React', 'Tailwind', 'Hyperparameter Tuning'],
      links: [
        { name: 'App', url: 'https://customer-churn-prediction-ui.vercel.app/', icon: ExternalLink },
        { name: 'GitHub', url: 'https://github.com/AdityaKumbhar21/Customer_Churn_Prediction', icon: Github },
        { name: 'Blog', url: 'https://medium.com/@adityakumbhar915/predicting-customer-churn-a-deep-dive-into-preventing-customer-loss-808fde23177e', icon: FileText },
        { name: 'PPT', url: 'https://www.canva.com/design/DAGqxrdv3eY/kfacleE_9h_KqdHxgHdu4A/view?utm_content=DAGqxrdv3eY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha3f93a78ab', icon: Presentation },
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Time Series Analysis', 'Data Analysis', 'Data Visualization'];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my data science projects, from machine learning models to data engineering solutions
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <project.icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                      >
                        <link.icon size={16} />
                        <span>{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <project.icon size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded text-sm transition-colors duration-200"
                    >
                      <link.icon size={14} />
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/AdityaKumbhar21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 