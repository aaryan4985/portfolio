import { Github, Linkedin, Instagram } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 py-24 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Hey, I'm Aaryan
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Web Developer & Computer Science Graduate
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I care a lot about using design for positive impact, and enjoy creating 
              user-centric, delightful, and human experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium">
              Contact me
            </button>
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/aaryan4985" 
                className="text-gray-700 hover:text-black transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aaryanpradhan2611" 
                className="text-gray-700 hover:text-black transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/aryn.026" 
                className="text-gray-700 hover:text-black transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Yellow Background */}
          <div className="absolute bg-amber-300 rounded-xl transform -rotate-3 w-[300px] h-[300px]"></div>
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl w-[250px] h-[250px]">
            <img
              src="/projects/Aaryan_pradhan (2).png"
              alt="Aaryan Pradhan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
