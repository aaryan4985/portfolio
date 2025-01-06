import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const skills = [
    { category: "Design", items: ["Web Design", "User Experience (UX)", "Prototyping"] },
    { category: "Tools", items: ["Visual Studio Code", "Git & GitHub", "Figma", "Postman"] },
    { 
      category: "Development", 
      items: [
        ["Frontend", ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "TailwindCSS"]],
        ["Backend", ["Node.js", "Python", "MongoDB", "SQL"]],
        ["Languages", ["C", "C++", "JavaScript", "Python"]]
      ] 
    }
  ];

  const experiences = [
    {
      company: "SRM-IST, Modinagar",
      role: "CSE Computer Science Engineering Undergraduate",
      period: "2023 - Present",
      description: "Computer Science Engineering."
    },
    {
      company: "Amity International School, Sector-46, Gurgaon",    
      role: "Student",
      period: "2013 - 2023",
      description: "Student."
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="absolute inset-0 bg-grid-amber-900/[0.02] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-amber-900 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-amber-800 text-xl leading-relaxed mb-10">
            I'm a second-year B.Tech student at SRM-IST, blending creativity and tech as a web developer, 
            DSA enthusiast, and AI/ML explorer. I thrive in hackathons, crafting innovative solutions. 
            With a passion for cybersecurity and impactful projects, I aim to merge tech and creativity 
            to build a future where ideas turn into transformative realities. 🚀
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            <Download className="mr-2 h-6 w-6" />
            <a 
              href="/CV.pdf" 
              download="Aaryan_CV.pdf" 
              className="relative z-10"
            >
              Download Resume
            </a>
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-amber-900 text-center">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="w-full h-64 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:scale-110 cursor-pointer group"
              >
                <div className="h-full w-full flex justify-center items-center opacity-100 transition-all duration-400 group-hover:h-0 group-hover:opacity-0 rounded-xl">
                  <span className="text-3xl font-extrabold text-white">{skillGroup.category}</span>
                </div>
                
                <div className="h-0 w-full opacity-0 flex flex-col justify-center items-center rounded-xl transition-all duration-400 group-hover:h-full group-hover:opacity-100 transform rotate-90 scale-y-[-1] group-hover:rotate-0 group-hover:scale-y-100">
                {skillGroup.category === "Development" ? (
  <div className="grid grid-cols-1 gap-2 p-4">
                    {skillGroup.items.map(([category, items]) => (
                      <div key={category} className="text-center">
                        <h4 className="text-white  bg-amber-600/30 px-2 py-1 rounded-full font-semibold mb-1">{category}</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {items.map(item => (
                            <span key={item} className="text-white font-bold text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="text-center space-y-2">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="text-white text-lg font-medium">{item}</li>
                    ))}
                  </ul>
                )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-amber-900 text-center">Education</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="border-l-4 border-amber-400 pl-8 relative hover:border-amber-600 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="absolute w-5 h-5 bg-white border-4 border-amber-500 rounded-full -left-[11px] top-0" 
                />
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-x-4">
                    <h3 className="text-2xl font-bold text-amber-900">{exp.company}</h3>
                    <span className="text-amber-500 text-xl">|</span>
                    <span className="text-amber-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-xl font-medium text-amber-800">{exp.role}</p>
                  <p className="text-amber-700 text-lg">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-amber-200 to-amber-300 p-12 md:p-16 rounded-3xl text-center shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
              Let's work together
            </h2>
            <p className="text-amber-800 text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <motion.button 
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}