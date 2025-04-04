
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured projects
  const featuredProjects = [
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
    }
  ];

  // Skills list
  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Web Development", percentage: 90 },
    { name: "Responsive Design", percentage: 98 },
    { name: "Adobe Creative Suite", percentage: 85 },
    { name: "Figma", percentage: 92 },
    { name: "React & TypeScript", percentage: 88 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-gray-600">
              I'm a passionate web designer with expertise in creating stunning, 
              user-friendly websites that drive results. With years of experience in 
              UX/UI design and front-end development, I help businesses establish 
              a strong online presence.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center border border-primary text-primary bg-white hover:bg-primary hover:text-white px-6 py-3 font-medium rounded-md transition-colors"
              >
                Learn More About Me
                <ArrowDown size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl mb-6 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-10 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-secondary">{skill.name}</span>
                  <span className="text-primary">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out some of my recent work. Each project is unique and 
              crafted with attention to detail and user experience in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-6 py-3 font-medium rounded-md transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Ready to Start Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's collaborate to bring your vision to life. I'm always excited 
              to work on new challenges and create exceptional digital experiences.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-secondary hover:bg-gray-100 px-8 py-3 font-bold rounded-md transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
