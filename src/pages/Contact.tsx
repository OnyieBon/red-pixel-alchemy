import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Contact <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">Email</h3>
                      <p className="text-gray-600">onyangobony@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">Location</h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-secondary p-6 border-b">Office Hours</h2>
                <div className="p-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-secondary p-6 border-b">
                  Send Me a Message
                </h2>
                <div className="p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Find <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Nairobi, Kenya
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-lg text-gray-600">
                Map placeholder - In a real project, an interactive map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
