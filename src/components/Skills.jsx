import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, Settings, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Skills = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
      color: 'from-green-500/10 to-emerald-500/10'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: ['Git', 'Docker', 'AWS', 'Vercel'],
      color: 'from-gray-500/10 to-slate-500/10'
    }
  ];

  return (
    <section id="skills" className="section-padding relative bg-dark-950 overflow-hidden">
      {/* Background */}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            My technical toolkit.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="glass-card p-8 border border-white/10 bg-dark-900/50 hover:bg-dark-900/70 transition-all h-full group relative overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <category.icon size={20} />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 cursor-default hover:bg-white/10 hover:text-white transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all z-10 group"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all z-10 group"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {skillCategories.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20"
              whileHover={{ scale: 1.5, backgroundColor: 'rgba(255,255,255,0.8)' }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 