import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
            Resume will be available soon.<br />
            <span className="inline-flex items-center gap-2 mt-2">
              <Download size={20} /> Download PDF (coming soon)
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 