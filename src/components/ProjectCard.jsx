import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ title, description, image, type }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{type}</p>
        <div className="mt-4 flex items-center text-sm">
          <span>View Project</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}