import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Calendar, User, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const experiences = [
    {
      company: "Creative Solutions Agency",
      position: "Senior Web Designer",
      period: "2021 - Present",
      description: "Lead the design team in creating responsive websites and digital experiences for clients across various industries."
    },
    {
      company: "Digital Innovations Studio",
      position: "UX/UI Designer",
      period: "2018 - 2021",
      description: "Designed user interfaces for web and mobile applications, focusing on user experience and accessibility."
    },
    {
      company: "Tech Startups Inc.",
      position: "Web Developer",
      period: "2016 - 2018",
      description: "Developed frontend interfaces and implemented responsive designs for various startup clients."
    }
  ];

  const education = [
    {
      institution: "Tech College",
      degree: "Bachelor's in Computer Science",
      period: "2010 - 2014",
      description: "Studied web development, programming fundamentals, and design principles."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-gray-300">
              Learn more about my background, skills, and professional journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Photo & Info */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-secondary">Bony Onyango</h2>
                  <p className="text-primary font-medium">Web Designer & Developer</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <User size={18} className="text-primary mr-3" />
                      <span>Age: 30</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={18} className="text-primary mr-3" />
                      <span>7+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-primary mr-3" />
                      <span>Available for Freelance</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-primary mr-3" />
                      <span>Award-winning Designer</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-6 py-3 font-medium rounded-md transition-colors w-full justify-center"
                    >
                      <Download size={18} className="mr-2" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Bio & Experience */}
            <div className="lg:col-span-3">
              {/* Bio */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Hello! I'm <span className="text-primary">Bony Onyango</span>
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                  I'm a passionate web designer and developer with over 7 years of experience 
                  creating beautiful, functional websites and applications. My approach combines 
                  creative design thinking with technical expertise to deliver exceptional 
                  digital experiences.
                </p>
                <p className="text-gray-700 mb-4 text-lg">
                  I specialize in responsive web design, UI/UX development, and creating 
                  intuitive interfaces that delight users. With a strong foundation in both 
                  design principles and front-end development, I bridge the gap between 
                  aesthetics and functionality.
                </p>
                <p className="text-gray-700 text-lg">
                  My goal is to help businesses establish a strong online presence through 
                  thoughtful design and seamless user experiences. I'm constantly learning 
                  and staying updated with the latest design trends and technologies to 
                  deliver cutting-edge solutions.
                </p>
              </div>
              
              {/* Experience */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Work Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex justify-between flex-wrap">
                        <h4 className="text-xl font-semibold text-secondary">{exp.position}</h4>
                        <span className="text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-gray-500 mt-1">{exp.company}</p>
                      <p className="mt-3 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex justify-between flex-wrap">
                        <h4 className="text-xl font-semibold text-secondary">{edu.degree}</h4>
                        <span className="text-primary font-medium">{edu.period}</span>
                      </div>
                      <p className="text-gray-500 mt-1">{edu.institution}</p>
                      <p className="mt-3 text-gray-700">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl mb-6">
              Interested in Working <span className="text-primary">Together</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I'm currently available for freelance projects and open to new opportunities. 
              Let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-8 py-3 font-bold rounded-md transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
