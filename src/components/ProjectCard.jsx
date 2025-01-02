import { motion } from 'framer-motion';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

export  const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full h-[400px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        initial={false}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImageIcon className="w-12 h-12 text-amber-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-between transform group-hover:translate-y-0 translate-y-[60%] transition-transform duration-500">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
              {project.type}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/20 text-white rounded-md text-sm backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-amber-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-amber-300 transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};