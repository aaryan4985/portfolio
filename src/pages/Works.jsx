import { useState, useEffect } from 'react';
import { Github, Activity, Star, Calendar, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Works() {
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const CACHE_KEY = 'github_projects';
  const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      setError(null);

      // Check if cached data exists and is valid
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setAllProjects(data);
          setIsLoading(false);
          return;
        }
      }

      const headers = {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.REACT_APP_GITHUB_TOKEN && {
          'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        })
      };

      try {
        const response = await fetch('https://api.github.com/users/aaryan4985/repos', {
          headers
        });

        if (response.status === 403) {
          throw new Error('Rate limit exceeded. Please try again later or add a GitHub token.');
        }

        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const repos = await response.json();

        if (!Array.isArray(repos)) {
          throw new Error('Received invalid data format from GitHub API');
        }

        const sortedRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        const formattedProjects = sortedRepos.map(repo => ({
          title: repo.name,
          description: repo.description || 'No description provided.',
          githubLink: repo.html_url,
          stars: repo.stargazers_count,
          language: repo.language,
          tags: repo.topics || [],
          created_at: new Date(repo.created_at).toLocaleDateString(),
          watchers: repo.watchers_count,
          languages_url: repo.languages_url
        }));

        const projectsWithLanguages = await Promise.all(
          formattedProjects.map(async (project) => {
            try {
              const langResponse = await fetch(project.languages_url, { headers });
              if (!langResponse.ok) {
                return { ...project, languages: [] };
              }
              const languages = await langResponse.json();
              return {
                ...project,
                languages: Object.keys(languages)
              };
            } catch (error) {
              return { ...project, languages: [] };
            }
          })
        );

        // Save to cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: projectsWithLanguages,
            timestamp: Date.now()
          })
        );

        setAllProjects(projectsWithLanguages);
      } catch (error) {
        setError(error.message);
        setAllProjects([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);


  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-green-400',
      HTML: 'bg-orange-400',
      CSS: 'bg-pink-400',
      PHP: 'bg-purple-400',
      Java: 'bg-red-400',
      'C++': 'bg-blue-500',
      Ruby: 'bg-red-500',
      default: 'bg-gray-400'
    };
    return colors[language] || colors.default;
  };

  if (error) {
    return (
      <div className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-amber-100 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Unable to load projects</h1>
          <p className="text-amber-800 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-amber-100 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-amber-900">
            My Works
          </h1>
          <p className="text-amber-800 text-xl">
            Crafting digital experiences through code and creativity.
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : allProjects.length === 0 ? (
          <div className="text-center text-amber-800">
            <p>No projects found. Please make sure your GitHub username is correct.</p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card */}
                <div className="w-full bg-[#011522] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Window Controls */}
                  <div className="flex items-center p-3 border-b border-gray-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-[#ff605c] rounded-full" />
                      <div className="w-3 h-3 bg-[#ffbd44] rounded-full" />
                      <div className="w-3 h-3 bg-[#00ca4e] rounded-full" />
                    </div>
                    <div className="ml-4 font-mono text-xs text-amber-100/70 truncate">
                      {project.title}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-amber-100">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-amber-200/80 text-sm mb-6 line-clamp-3 min-h-[4.5rem]">
                      {project.description}
                    </p>

                    {/* Languages */}
                    <div className="mb-4">
                      <h4 className="text-amber-300 text-xs mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.languages.map((lang) => (
                          <span
                            key={lang}
                            className="flex items-center gap-1.5 text-xs text-amber-100"
                          >
                            <span className={`w-2 h-2 rounded-full ${getLanguageColor(lang)}`} />
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-amber-300/80 text-xs">
                        <Calendar className="w-4 h-4" />
                        {project.created_at}
                      </div>
                      <div className="flex items-center gap-2 text-amber-300/80 text-xs">
                        <Star className="w-4 h-4" />
                        {project.stars} stars
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-amber-900/30 text-amber-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        View Source
                      </a>
                      <div className="flex items-center gap-2 text-amber-300/80">
                        <Eye className="w-4 h-4" />
                        {project.watchers}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {!isLoading && !error && allProjects.length > 0 && (
          <div className="mt-32">
            <div className="bg-[#011522] rounded-2xl p-12 shadow-xl">
              <div className="text-center">
                <Activity className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6 text-amber-100">
                  Let's Create Something Extraordinary
                </h2>
                <p className="text-amber-200/80 mb-8 max-w-2xl mx-auto text-lg">
                  Whether you have a groundbreaking idea or need a technical collaborator,
                  I'm here to turn your vision into reality.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-10 py-4 bg-amber-500 text-white rounded-full 
                           hover:bg-amber-600 transition-all duration-300 
                           transform hover:-translate-y-1 hover:shadow-xl
                           font-semibold text-lg"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}