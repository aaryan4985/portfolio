import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { SkillPill } from './SkillPill';
import { useNavigate } from 'react-router-dom';

export const HeroSection = ({ skills }) => {
  const navigate = useNavigate();
  
  return (
    <section id="hero" className="min-h-screen px-4 md:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Background Blobs - unchanged */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -right-64 -top-64 w-96 h-96 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -left-64 -bottom-64 w-96 h-96 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Content Section */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium"
            >
              👋 Welcome to my portfolio
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Hey, I'm Aaryan
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              <TypewriterText words={[
                "Full Stack Developer",
                "Computer Science Undergraduate",    
                "DSA Enthusiast",
                "Problem Solver",
                "Hackathon Enthusiast",
                "Code Architect",
                "AI/ML Enthusiast"
              ]} />
            </h2>
            
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting digital experiences that combine technical excellence with creative innovation. 
              Let's build something extraordinary together.
            </motion.p>
          </div>

          {/* Action Buttons with Shimmer */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-amber-200 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              <span className="flex items-center gap-2 relative z-10">
                <Mail className="w-5 h-5" />
                Contact me
              </span>
            </button>
            
            <button className="group relative bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-amber-200 transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-amber-100 transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent animate-shimmer" />
              <span className="flex items-center gap-2 relative z-10">
                <Download className="w-5 h-5" />
                Download CV
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/aaryan4985", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/aaryanpradhan2611", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/aryn.026", label: "Instagram" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section - Simplified */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Card container */}
          <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            {/* Glass effect background */}
            <div 
              className="absolute inset-0 bg-white/40 backdrop-blur-xl z-10"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />

            {/* Image container */}
            <div className="relative z-20 w-full h-full p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-amber-400/20 to-amber-600/30" />
                <img
                  src="/projects/pfp (1).jpg"
                  alt="Aaryan Pradhan"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-7xl mx-auto"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Technologies I work with
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillPill key={skill} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;