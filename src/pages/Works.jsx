import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Works() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();


  const projects = [
    {
      title: "Clubhouse",
      description: "A full-stack application to manage hackathons and club events, with features like team matchmaking, leaderboards, and real-time chat.",
      image: "/projects/clubhouse.png",
      tags: ["Next.js", "JavaScript", "CSS"],
      githubLink: "https://github.com/aaryan4985/clubhouse",
      category: "fullstack"
    },
    
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 bg-amber-50 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
            My Works
          </h1>
          <p className="text-amber-700 text-lg">
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
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
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
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-amber-200"
            >
              <div className="aspect-video overflow-hidden bg-amber-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  {project.title}
                </h3>
                <p className="text-amber-700 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-100 rounded-full text-sm text-amber-800"
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
                    className="inline-flex items-center text-amber-700 hover:text-amber-900"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-700 hover:text-amber-900"
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
          <h2 className="text-2xl font-bold mb-4 text-amber-900">
            Interested in collaborating?
          </h2>
          <p className="text-amber-700 mb-6">
            I'm always open to discussing new projects or opportunities.
          </p>
          <button
          onClick={() => navigate('/contact')}
           className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}