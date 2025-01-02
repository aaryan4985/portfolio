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
    // Your project data here
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