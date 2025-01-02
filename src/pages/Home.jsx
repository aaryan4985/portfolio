    import { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Github, Linkedin, Instagram, ArrowDown, Mail, Download, ExternalLink } from 'lucide-react';
    import Navbar from '../components/Navbar';
    import { useNavigate } from 'react-router-dom';

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
        <span className="inline-block min-w-[300px] text-amber-500">
        {currentText}
        <span className="animate-blink">|</span>
        </span>
    );
    };

    const SkillPill = ({ skill }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-2 rounded-full text-sm font-medium text-amber-800"
    >
        {skill}
    </motion.div>
    );

    export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        
        // Update active section based on scroll position
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
        "React", "Node.js", "TypeScript", "Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL","git", 
        "MongoDB", "Next.js", "TailwindCSS"
    ];

    const projects = [
        {
        title: "Clubhouse",
        description: "A full-stack providing centralised platform for clubs and societies to manage events, memberships.",
        image: "/projects/clubhouse.png",
        type: "Full Stack Development",
        technologies: ["TypeScript", "JavaScript", "Firebase", "TailwindCSS"],
        demoLink: "https://clubhouse-sigma.vercel.app/",
        githubLink: "https://github.com/aaryan4985/ClubHouse"
        },
        {
        title: "Dyte",
        description: "Dyte is your go-to diet planning platform, offering personalized meal plans and fitness recommendations to help you achieve a healthier lifestyle.",
        image: "/projects/dyte.png",
        type: "Frontend Development",
        technologies: ["HTML5", "CSS", "JavaScript"],
        demoLink: "https://aaryan4985.github.io/Dyte/",
        githubLink: "https://github.com/aaryan4985/Dyte"
        },
        {
        title: "Message Saver",
        description: "Message Saver securely stores and organizes your important messages for easy access.",
        image: "/projects/msg.png",
        type: "Web Application",
        technologies: ["Python", "Flask", "TailwindCSS"],
        demoLink: "https://flask-message-saver.vercel.app/",
        githubLink: "https://github.com/aaryan4985/Flask-Message-Saver"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
        <Navbar scrollY={scrollY} activeSection={activeSection} />
        
        <main className="relative">
            {/* Hero Section */}
            <section id="hero" className="min-h-screen px-4 md:px-8 pt-24 pb-16 relative overflow-hidden">
            {/* Animated background elements */}
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
                <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
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

                <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                    onClick={() => navigate('/contact')}
                    className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-amber-200 transform hover:-translate-y-1"
                    >
                    <span className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Contact me
                    </span>
                    </button>
                    
                    <button className="group bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-amber-200 transition-all duration-300 text-lg font-medium hover:shadow-lg hover:shadow-amber-100 transform hover:-translate-y-1">
                    <span className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download CV
                    </span>
                    </button>
                </motion.div>

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

                <motion.div 
                className="relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full blur-3xl opacity-20 animate-pulse" />
    <div className="relative w-80 h-85 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <img
        src="/projects/pfp (1).jpg"
        alt="Aaryan Pradhan"
        className="w-full h-full object-cover"
    />
    </div>

                </motion.div>
            </div>

            <div className="mt-16 max-w-7xl mx-auto">
                <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg font-semibold text-gray-700 mb-4"
                >
                Technologies I work with
                </motion.h3>
                <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                >
                {skills.map((skill, index) => (
                    <SkillPill key={skill} skill={skill} />
                ))}
                </motion.div>
            </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-4 md:px-8 bg-white relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Featured Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg max-w-2xl mx-auto"
                >
                    Here are some of my recent works that showcase my skills and experience
                </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                    <div className="relative overflow-hidden group">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                            <div className="flex gap-3">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-300">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-300">
                                <Github className="w-4 h-4" /> Code
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
                        {project.type}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3><p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm">
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
                >
                <button
                    onClick={() => navigate('/works')}
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-amber-200 transition-colors duration-300"
                >
                    View All Projects
                    <ArrowDown className="w-4 h-4 transform rotate-90" />
                </button>
                </motion.div>
            </motion.div>
            </section>

            {/* Contact Section */}
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
                        link: "pradhanaaryan@gmail.com"
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
        </main>

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
                    {['Hero', 'projects', 'Contact'].map((item) => (
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
        </div>
    );
    }