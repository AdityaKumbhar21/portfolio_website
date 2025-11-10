import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Link2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Qz.ai - AI Quiz Generator',
      description: 'Built an AI-powered flashcard quiz app with Next.js, Prisma, PostgreSQL & Clerk, generating 10 MCQs in <3s with secure ownership & real-time scoring. Engineered Gemini JSON-based prompt + parsing pipeline for 100% structured output reliability across topics. Delivered type-safe, responsive UI (TS + Tailwind) supporting 1000+ quizzes per user with immediate feedback & scoring. Automated user sync via Clerk webhooks + Prisma upsert, enabling zero manual user management and secure multi-device data integrity. Deployed on Vercel with Prisma fixes + schema generation, ensuring zero deployment issues and edge-scaled performance.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop',
      category: 'Full Stack',
      icon: Sparkles,
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
      links: [
        { name: 'Live App', url: 'https://qz-ai.vercel.app/', icon: ExternalLink },
        { name: 'GitHub', url: '#', icon: Github },
      ],
      featured: false
    },
    {
      title: 'NYN - Not Your Normal URL Shortener',
      description: 'Built NYNURL, a scalable Next.js 15 + TypeScript URL shortener with sub-100 ms redirects and interactive analytics, now actively used by real users. Delivered free advanced click analytics + visual insights, outperforming paid competitors. Shipped custom-branded, mobile-optimized SaaS UI, boosting usability and adoption.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Full Stack',
      icon: Link2,
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
      links: [
        { name: 'Live App', url: 'https://nyn-url-shortner.vercel.app/', icon: ExternalLink },
        { name: 'GitHub', url: '#', icon: Github },
      ],
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Web Application', 'Mobile App'];

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my full stack development projects, from web applications to mobile solutions
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-electric-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-accent-500 to-electric-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 neon-glow">
                    <project.icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-xs font-medium text-white bg-dark-900/90 backdrop-blur-md border border-primary-500/40 px-3 py-1.5 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-300 text-xs rounded-full hover:border-primary-500/60 hover:text-primary-400 hover:bg-dark-800 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-dark-800/80 backdrop-blur-sm border border-dark-700 hover:border-primary-500/60 hover:bg-primary-500/10 text-gray-300 hover:text-primary-400 rounded-lg text-sm transition-all duration-300 hover:shadow-md hover:shadow-primary-500/20"
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