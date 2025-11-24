import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code, ArrowUpRight, Zap, Layers, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Pair Program',
      description: 'Real-time collaborative coding platform for technical interviews with WebSockets, AI-powered code analysis, and secure JWT authentication.',
      image: '/pair_program.png',
      technologies: ['React', 'Node.js', 'WebSockets', 'Y.js', 'LLM'],
      links: [
        { name: 'Live', url: 'https://pair-program-eta.vercel.app/' },
        { name: 'Code', url: 'https://github.com/AdityaKumbhar21/pair_program' },
      ],
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: 'Qz.ai - AI Quiz Generator',
      description: 'AI-powered flashcard quiz app generating MCQs in <3s with secure ownership & real-time scoring.',
      image: '/qz_ai.png',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI'],
      links: [
        { name: 'Live', url: 'https://qz-ai.vercel.app/' },
        { name: 'Code', url: 'https://github.com/AdityaKumbhar21/Qz_ai' },
      ],
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-dark-950">
      {/* Aesthetic Background */}
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
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Selected Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A collection of projects that showcase my passion for building robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Project 1 - Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 md:row-span-2 glass-card overflow-hidden border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0">
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-white/80" size={14} />
                    <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{projects[0].title}</h3>
                  <p className="text-gray-300 text-xs mb-4 max-w-md leading-relaxed">{projects[0].description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {projects[0].technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/90 border border-white/10 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 ml-4">
                  {projects[0].links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors group/btn"
                      title={link.name}
                    >
                      {link.name === 'Live' ? (
                        <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                      ) : (
                        <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative md:col-span-2 md:row-span-1 glass-card overflow-hidden border border-white/10"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0">
              <img 
                src={projects[1].image} 
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{projects[1].title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{projects[1].description}</p>
                  <div className="flex gap-2">
                    {projects[1].technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/90 border border-white/10 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 ml-4">
                  {projects[1].links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-black border border-white/10 transition-all group/btn"
                      title={link.name}
                    >
                      {link.name === 'Live' ? (
                        <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                      ) : (
                        <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group border border-white/10 bg-dark-900/50"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Code className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white tracking-tight">Tech Stack</h3>
                <p className="text-sm text-gray-400 leading-relaxed">React, Next.js, Node.js, Python, TypeScript, Tailwind</p>
              </div>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden border border-white/10 bg-dark-900/50"
            onClick={() => window.open('https://github.com/AdityaKumbhar21', '_blank')}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Github className="text-white" size={20} />
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-white tracking-tight">GitHub</h3>
                <p className="text-sm text-gray-400">Check out my code</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-medium group"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 