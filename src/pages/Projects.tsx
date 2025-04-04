
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // All projects data
  const allProjects = [
    {
      id: 1,
      title: "Artisan E-commerce Platform",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "A responsive e-commerce platform for artisans to showcase and sell their handcrafted products."
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "A comprehensive finance dashboard with intuitive data visualization and user-friendly interface."
    },
    {
      id: 3,
      title: "Travel Blog",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "A modern, responsive travel blog with advanced content management system and user engagement features."
    },
    {
      id: 4,
      title: "Fitness App UI",
      category: "Mobile Design",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "A clean and intuitive mobile app design for fitness tracking and workout planning."
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "An elegant website for a high-end restaurant featuring online reservations and menu showcase."
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "A comprehensive educational platform with course management, video lessons, and student progress tracking."
    }
  ];

  // Categories for filtering
  const categories = ["All", "Web Design", "Web Development", "UI/UX Design", "Mobile Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore my portfolio of web design and development projects.
              Each project represents my commitment to creating beautiful,
              functional, and user-centered digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-secondary border border-gray-200 hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  imageUrl={project.imageUrl}
                  description={project.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-secondary">
                No projects found in this category.
              </h3>
              <p className="text-gray-500 mt-2">
                Please try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
