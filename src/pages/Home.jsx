import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Clubhouse",
      type: "Centralised platform for all your club activities",
      image: ".src/images/IMG_20241219_093041.jpg"
    },
    {
      title: "Dyte",
      type: "Diet and Nutrition App",
      image: "./Screenshot 2024-12-23 173343.png"
    },
    {
      title: "Tribe.so Admin",
      type: "Admin Dashboard",
      image: "/images/tribe-admin.png"
    },
    {
      title: "Promd3 Dashboard",
      type: "Analytics Dashboard",
      image: "/images/promd3.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}