
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              We Help Businesses <span className="gradient-text">Grow</span> in the Digital World
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Code N Content, we're passionate about helping businesses succeed online. 
              With over 4 years of experience and a team of skilled professionals, 
              we provide end-to-end digital solutions tailored to your specific needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Expert team with specialized skills in design, development, and marketing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Results-driven approach focused on achieving measurable business outcomes</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Transparent communication and collaborative working relationship</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Ongoing support and maintenance to ensure long-term success</p>
              </div>
            </div>
            
            <Button asChild className="gradient-bg text-white rounded-full py-6 px-8">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Digital marketing team at work" 
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg md:text-xl max-w-md">
                    To empower businesses with innovative digital solutions that drive growth and success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="font-bold text-3xl text-brand-blue mb-2">98%</div>
              <p className="text-gray-700">Client satisfaction rate with our services and results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
