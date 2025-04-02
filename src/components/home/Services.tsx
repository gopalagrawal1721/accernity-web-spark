
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, LineChart, Megaphone, Search, MessageSquare, Code } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    description: "Custom-built, responsive websites that drive conversions and provide exceptional user experiences.",
    icon: <Globe className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies that increase brand awareness and generate qualified leads.",
    icon: <Megaphone className="h-10 w-10 text-brand-purple" />,
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO tactics that improve search rankings and drive organic traffic to your website.",
    icon: <Search className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Content Creation",
    description: "Engaging content that resonates with your audience and establishes you as an industry leader.",
    icon: <MessageSquare className="h-10 w-10 text-brand-purple" />,
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed analytics and insights to measure performance and optimize your digital strategies.",
    icon: <LineChart className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "App Development",
    description: "Custom mobile and web applications built with cutting-edge technologies for optimal performance.",
    icon: <Code className="h-10 w-10 text-brand-purple" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md card-hover">
              <CardContent className="p-6">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center font-medium text-brand-blue hover:text-brand-purple transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-lg font-medium text-brand-blue hover:text-brand-purple transition-colors"
          >
            View all services <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
