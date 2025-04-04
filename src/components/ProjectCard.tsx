
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const ProjectCard = ({ id, title, category, imageUrl, description }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4">
            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
              {category}
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-secondary">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex justify-end">
          <Link 
            to={`/projects/${id}`} 
            className="flex items-center text-primary hover:underline"
          >
            View details
            <ArrowUpRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
