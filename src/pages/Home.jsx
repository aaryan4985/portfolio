import { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import Navbar  from '../components/Navbar';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "React", "Node.js", "TypeScript", "Python", "C", "C++", "Java", "JavaScript", 
    "HTML", "CSS", "SQL", "git", "MongoDB", "Next.js", "TailwindCSS"
  ];

  const projects = [
    {
        id: 1,
        title: "Clubhouse",
        description: "A platform to manage hackathons and club events, with features like team matchmaking, leaderboards, and real-time chat.",
        type: "Full Stack Application",
        image: "/projects/clubhouse.png", 
        technologies: ["React", "Tailwind CSS", "TypeScript", "Firebase"],
        demoLink: "https://clubhouse-sigma.vercel.app/", 
        githubLink: "https://github.com/aaryan4985/clubhouse", 
      },
      {
        id: 2,
        title: "Dyte",
        description: "A platform to provide diet plans and workout routines, with features like calorie tracking, meal planning, and progress tracking.",
        image: "/projects/dyte.png", 
        type: "Web Application",
        technologies: ["HTML5", "CSS","JavaScript"],
        demoLink: "https://aaryan4985.github.io/Dyte/", 
        githubLink: "https://github.com/aaryan4985/dyte", 
      },
      {
        id: 3,
        title: "Message Saver",
        description: "A platform to save and organize messages, with features like message categorization, search, and export to PDF.",
        image: "/projects/msg.png", 
        type: "Web Application",
        technologies: ["Python", "Tailwind CSS","Flask"],
        demoLink: "https://flask-message-saver.vercel.app/", 
        githubLink: "https://github.com/aaryan4985/Flask-Message-Saver", 
      },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar scrollY={scrollY} activeSection={activeSection} />
      <main className="relative">
        <HeroSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}