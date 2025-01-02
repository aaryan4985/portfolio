import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ContactSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white opacity-50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full blur-3xl opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-gray-600 text-lg mb-12">
            Whether you have a project in mind or just want to chat about technology and innovation,
            I'm always excited to connect and explore new opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "pradhanaaryan@gmail.com",
                link: "mailto:pradhanaaryan@gmail.com"
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                content: "Connect with me",
                link: "https://www.linkedin.com/in/aaryanpradhan2611"
              },
              {
                icon: Github,
                title: "GitHub",
                content: "Check my repos",
                link: "https://github.com/aaryan4985"
              }
            ].map(({ icon: Icon, title, content, link }) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <Icon className="w-8 h-8 text-amber-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 group-hover:text-amber-600 transition-colors duration-300">
                  {content}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-amber-200 transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
