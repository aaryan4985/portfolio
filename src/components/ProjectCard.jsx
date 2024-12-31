import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ title, description, image, type }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden perspective-1000 transition-all duration-500 ease-out hover:scale-[1.02]">
      {/* Image container */}
      <div className="absolute inset-0 bg-gray-50">
        <img 
          src={image} 
          alt={title} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Overlay that slides up */}
      <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="h-full p-6 flex flex-col text-white">
          <div className="flex-1">
            <p className="text-amber-300 text-sm font-medium mb-2">{type}</p>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
          </div>
          
          <div className="mt-auto flex items-center text-sm text-white group/link">
            <span className="font-medium">View Project</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}