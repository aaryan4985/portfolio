    import { Github, Linkedin, Instagram } from 'lucide-react';

    export default function HeroSection() {
    return (
        <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hey, I'm Aaryan, a web-developer with a btech degree in computer science.
            </h1>
            <p className="text-gray-600">
                I care a lot about using design for positive impact, and enjoy creating 
                user-centric, delightful, and human experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                Contact me
                </button>
                <div className="flex space-x-4">
                <a href="https://github.com/aaryan4985" className="hover:text-gray-600"><Github /></a>
                <a href="https://www.linkedin.com/in/aaryanpradhan2611" className="hover:text-gray-600"><Linkedin /></a>
                <a href="https://www.instagram.com/aryn.026" className="hover:text-gray-600"><Instagram /></a>
                </div>
            </div>
            </div>
            <div className="bg-amber-300 rounded-2xl overflow-hidden">
            <img
                src="src/assets/IMG_20241219_093041.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
            />
            </div>
        </div>
        </section>
    );
    }