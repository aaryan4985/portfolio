import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // Sample project data - you can move this to a separate data file
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, and secure payments.",
      image: "/projects/clubhouse.png",
      type: "Full Stack Development"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS, featuring responsive design and smooth animations.",
      image: "/projects/portfolio.png",
      type: "Frontend Development"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using React and Firebase.",
      image: "/projects/taskapp.png",
      type: "Web Application"
    }
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Projects Section */}
        <section className="px-4 md:px-8 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg">Here are some of my recent works</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  type={project.type}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium">
              Get in Touch
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Aaryan Pradhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}