import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectCard }  from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.location.href = '/works'}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-amber-200 transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;