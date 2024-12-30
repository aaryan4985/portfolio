// src/pages/Works.jsx
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Works() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Ecommerce Website",
      description: "A full-stack ecommerce platform built with Next.js 13, featuring product management, cart functionality, and secure checkout process.",
      image: "/images/ecommerce.png", // Add placeholder image
      tags: ["Next.js", "JavaScript", "CSS"],
      githubLink: "https://github.com/aaryan4985/ecommerce-website",
      category: "fullstack"
    },
    {
      title: "Personal Portfolio",
      description: "Modern portfolio website built using React and Three.js, showcasing projects and skills with interactive 3D elements.",
      image: "/images/portfolio.png", // Add placeholder image
      tags: ["React", "Three.js", "CSS"],
      githubLink: "https://github.com/aaryan4985/Personal-Portfolio",
      category: "frontend"
    },
    {
      title: "Netflix Clone",
      description: "Netflix interface clone with modern UI, responsive design, and dynamic content loading. Features user authentication and video playback.",
      image: "/images/netflix.png", // Add placeholder image
      tags: ["React", "CSS", "Firebase"],
      githubLink: "https://github.com/aaryan4985/Netflix-Clone",
      category: "frontend"
    },
    {
      title: "Food Delivery App",
      description: "Food delivery application with real-time order tracking, user authentication, and restaurant management system.",
      image: "/images/food-delivery.png", // Add placeholder image
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/aaryan4985/food-delivery-app",
      category: "fullstack"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Works
          </h1>
          <p className="text-gray-600 text-lg">
            A collection of my projects that showcase my skills in web development,
            from frontend interfaces to full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.title}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-black"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-black"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new projects or opportunities.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}