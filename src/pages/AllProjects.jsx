import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pair Program',
      description: 'Real-time collaborative coding platform for technical interviews with WebSockets, AI-powered code analysis, and secure JWT authentication.',
      longDescription: 'A collaborative coding platform designed for technical interviews. Features private room creation, join-link access, multi-user code synchronization using WebSockets/Y.js, JWT-based authentication, and AI-powered code analysis for time and space complexity evaluation across multiple programming languages.',
      image: '/pair_program.png',
      technologies: ['React', 'Node.js', 'WebSockets', 'Y.js', 'JWT', 'LLM', 'Express.js'],
      links: {
        live: 'https://pair-program-eta.vercel.app/',
        github: 'https://github.com/AdityaKumbhar21/pair_program'
      },
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Qz.ai - AI Quiz Generator',
      description: 'AI-powered flashcard quiz app generating MCQs in <3s with secure ownership & real-time scoring.',
      longDescription: 'A comprehensive AI-powered quiz generation platform that creates multiple-choice questions in under 3 seconds. Features include secure user ownership, real-time scoring, and an intuitive flashcard interface.',
      image: '/qz_ai.png',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI', 'PostgreSQL', 'Tailwind CSS'],
      links: {
        live: 'https://qz-ai.vercel.app/',
        github: 'https://github.com/AdityaKumbhar21/Qz_ai'
      },
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'NYN URL Shortener',
      description: 'Scalable URL shortener with sub-100 ms redirects and interactive analytics.',
      longDescription: 'A high-performance URL shortening service built with modern web technologies. Features sub-100ms redirect times, comprehensive analytics dashboard, and custom short link generation.',
      image: '/nyn_url_short.png',
      technologies: ['Next.js 15', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
      links: {
        live: 'https://nyn-url-shortner.vercel.app/',
        github: 'https://github.com/AdityaKumbhar21/NYN_URL_Shortner'
      },
      category: 'Full Stack'
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white opacity-50"></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 tracking-tight">All Projects</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A comprehensive collection of my work spanning full-stack development, AI/ML, and more.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card border border-white/10 bg-dark-900/50 overflow-hidden group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
