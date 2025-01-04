import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full h-[400px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
        {/* Top Content */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
            {project.type}
          </span>
          <h3 className="text-2xl font-bold mb-3 text-amber-400">
            {project.title}
          </h3>
          <p className="text-gray-200">
            {project.description}
          </p>
        </div>

        {/* Bottom Content */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/20 text-white rounded-md text-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors group"
            >
              <ExternalLink className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors group"
            >
              <Github className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;