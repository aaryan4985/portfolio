// src/pages/About.jsx
import { Download } from 'lucide-react';

export default function About() {
  const skills = [
    { category: "Design", items: ["Web Design", "User Experience (UX)", "Prototyping"] },
    { category: "Tools", items: ["Visual Studio Code", "Git & GitHub", "Figma", "Postman"] },
    { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Node.js"] }
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
      description: "student."
    },
    
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-gray-600 text-lg mb-8">
          I'm a second-year B.Tech student at SRM-IST, blending creativity and tech as a web developer, DSA enthusiast, and AI/ML explorer. I thrive in hackathons, crafting innovative solutions. With a passion for cybersecurity and impactful projects, I aim to merge tech and creativity to build a future where ideas turn into transformative realities. 🚀
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </button>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="border-l-2 border-gray-200 pl-8 relative">
                <div className="absolute w-4 h-4 bg-white border-2 border-black rounded-full -left-[9px] top-0" />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-lg font-medium">{exp.role}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's work together
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}