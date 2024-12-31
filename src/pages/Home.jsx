import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const TypewriterText = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    if (!isDeleting && currentText === word) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : word.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-[300px]">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollY={scrollY} />
      <main>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section className="px-4 md:px-8 py-24 mt-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-64 -top-64 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    Hey, I'm Aaryan
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    <TypewriterText words={[
                      "Web Developer",
                      "Computer Science Graduate",
                      "DSA Enthusiast",
                      "Hackathon Enthusiast",
                      "AI/ML Explorer",
                      "Problem Solver",
                      "Innovative Thinker"
                    ]} />
                  </h2>
                  <motion.p 
                    className="text-gray-600 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    I care a lot about using design for positive impact, and enjoy creating 
                    user-centric, delightful, and human experiences.
                  </motion.p>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="group bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium relative overflow-hidden">
                    <span className="relative z-10">Contact me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                  <div className="flex items-center space-x-6">
                    {[
                      { Icon: Github, href: "https://github.com/aaryan4985" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/aaryanpradhan2611" },
                      { Icon: Instagram, href: "https://www.instagram.com/aryn.026" }
                    ].map(({ Icon, href }, index) => (
                      <motion.a
                        key={href}
                        href={href}
                        className="text-gray-700 hover:text-black transition-colors duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      >
                        <Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute bg-amber-300 rounded-xl transform -rotate-3 w-[300px] h-[300px] animate-float" />
                <div className="relative rounded-xl overflow-hidden shadow-xl w-[250px] h-[250px] transform rotate-3 transition-transform duration-300 hover:rotate-0">
                  <img
                    src="/projects/Aaryan_pradhan (2).png"
                    alt="Aaryan Pradhan"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </motion.div>
          </section>
        </motion.div>

        {/* Projects Section */}
        <motion.section 
          className="px-4 md:px-8 py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg">Here are some of my recent works</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="px-4 md:px-8 py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute left-0 top-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <button className="group bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium relative overflow-hidden">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="px-4 md:px-8 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Aaryan Pradhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

