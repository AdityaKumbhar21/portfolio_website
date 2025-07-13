import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, TrendingUp, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Production-Ready ML Models: A Complete Guide',
      excerpt: 'Learn the best practices for deploying machine learning models in production, including model versioning, monitoring, and scaling strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      category: 'Machine Learning',
      readTime: '8 min read',
      date: '2024-01-15',
      views: '2.5k',
      url: '#',
      featured: true
    },
    {
      title: 'Advanced Feature Engineering Techniques for Better Model Performance',
      excerpt: 'Explore advanced feature engineering methods including polynomial features, interaction terms, and domain-specific transformations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      category: 'Data Science',
      readTime: '12 min read',
      date: '2024-01-10',
      views: '1.8k',
      url: '#'
    },
    {
      title: 'Time Series Forecasting with Prophet: A Practical Approach',
      excerpt: 'Step-by-step guide to implementing Facebook Prophet for time series forecasting with real-world examples and best practices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      category: 'Time Series',
      readTime: '10 min read',
      date: '2024-01-05',
      views: '3.2k',
      url: '#'
    },
    {
      title: 'NLP Pipeline: From Text Preprocessing to Model Deployment',
      excerpt: 'Complete pipeline for natural language processing projects, covering text cleaning, vectorization, and model deployment.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
      category: 'NLP',
      readTime: '15 min read',
      date: '2023-12-28',
      views: '2.1k',
      url: '#'
    },
    {
      title: 'A/B Testing for Data Scientists: Statistical Significance and Beyond',
      excerpt: 'Comprehensive guide to designing and analyzing A/B tests, including statistical methods and practical considerations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
      category: 'Statistics',
      readTime: '11 min read',
      date: '2023-12-20',
      views: '1.6k',
      url: '#'
    },
    {
      title: 'Building Scalable Data Pipelines with Apache Airflow',
      excerpt: 'Learn how to design and implement robust data pipelines using Apache Airflow for ETL processes and data orchestration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      category: 'Data Engineering',
      readTime: '14 min read',
      date: '2023-12-15',
      views: '1.9k',
      url: '#'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in data science and machine learning
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp size={14} />
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <BookOpen size={16} />
                    <span>Read on Medium</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
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
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <TrendingUp size={14} />
                    <span>{post.views} views</span>
                  </div>
                  
                  <motion.a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <BookOpen size={20} />
            <span>View All Posts on Medium</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 