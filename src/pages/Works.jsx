import { useState, useEffect } from 'react';
import { Github, Code, Box, Activity, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Works() {
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('https://api.github.com/users/aaryan4985/repos');
      const repos = await response.json();
      const formattedProjects = repos.map(repo => ({
        title: repo.name,
        description: repo.description || 'No description provided.',
        githubLink: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        tags: repo.topics || [],
      }));
      setAllProjects(formattedProjects);
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-amber-100 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="max-w-3xl mb-16 relative">
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-amber-200 rounded-full opacity-50 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 relative z-10">
            My Works
          </h1>
          <p className="text-amber-700 text-lg relative z-10">
            Exploring the intersection of creativity and technology through my projects.
          </p>
        </div>

        {/* Projects Grid with Interactive Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={project.title}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`
                p-6 rounded-2xl transition-all duration-300
                ${hoveredProject === project.title 
                  ? 'bg-amber-600 -translate-y-2 shadow-lg' 
                  : 'bg-white hover:shadow-md'}
              `}>
                {/* Project Icon */}
                <div className="mb-4">
                  <Code 
                    className={`w-8 h-8 ${
                      hoveredProject === project.title 
                        ? 'text-white' 
                        : 'text-amber-600'
                    }`}
                  />
                </div>

                {/* Project Info */}
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  hoveredProject === project.title ? 'text-white' : 'text-amber-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-2 transition-colors duration-300 ${
                  hoveredProject === project.title ? 'text-amber-100' : 'text-amber-700'
                }`}>
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4">
                  {project.language && (
                    <span className={`flex items-center gap-1 ${
                      hoveredProject === project.title ? 'text-amber-100' : 'text-amber-700'
                    }`}>
                      <Box className="w-4 h-4" />
                      {project.language}
                    </span>
                  )}
                  {project.stars > 0 && (
                    <span className={`flex items-center gap-1 ${
                      hoveredProject === project.title ? 'text-amber-100' : 'text-amber-700'
                    }`}>
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                        hoveredProject === project.title 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-amber-100 text-amber-800'
                      }`}
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
                    className={`inline-flex items-center transition-colors duration-300 ${
                      hoveredProject === project.title 
                        ? 'text-white hover:text-amber-200' 
                        : 'text-amber-700 hover:text-amber-900'
                    }`}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact CTA */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 bg-amber-200 opacity-10 rounded-3xl" />
          <div className="relative p-12 rounded-3xl">
            <Activity className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-amber-900">
              Let's Build Something Amazing
            </h2>
            <p className="text-amber-700 mb-6 max-w-lg mx-auto">
              Have an idea? Looking for a technical co-founder? Or just want to chat about technology?
              I'm always excited to connect and collaborate on interesting projects.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}