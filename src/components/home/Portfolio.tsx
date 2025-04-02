
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversion rates."
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    description: "Comprehensive SEO strategy that increased organic traffic by 150% within 6 months."
  },
  {
    title: "Mobile App Development",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Custom mobile application development with over 100,000 downloads in the first month."
  }
];

const Portfolio = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Recent <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore some of our recent projects and see how we've helped businesses achieve digital success.
            </p>
          </div>
          <Button asChild className="mt-6 md:mt-0 gradient-bg text-white rounded-full">
            <Link to="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium text-brand-blue bg-white/90 rounded-full py-1 px-3 inline-block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4 line-clamp-2">{project.description}</p>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center text-white hover:text-brand-blue transition-colors"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
