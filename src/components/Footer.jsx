import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aaryan Pradhan</h3>
            <p className="text-gray-600">
              Full Stack Developer passionate about creating impactful digital experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Hero', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/aaryan4985" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/aaryanpradhan2611" },
                { Icon: Instagram, href: "https://www.instagram.com/aryn.026" }
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Aaryan Pradhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};