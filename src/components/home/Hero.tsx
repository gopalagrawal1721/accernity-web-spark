
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, FileText, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-purple p-6 rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-300">
              <div className="absolute inset-0 bg-white opacity-10 rounded-xl"></div>
              <Code className="text-white" size={36} />
              <div className="relative mx-1">
                <Zap className="text-white absolute -top-2 left-1/2 transform -translate-x-1/2" size={14} />
                <span className="text-white font-montserrat font-bold text-2xl">n</span>
                <Sparkles className="text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2" size={14} />
              </div>
              <FileText className="text-white" size={36} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold leading-tight mb-6 animate-fade-in">
            Transform Your Digital <span className="gradient-text">Presence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 mx-auto max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
            At Code n Content, we craft stunning websites and implement powerful digital marketing strategies 
            that drive growth and convert visitors into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
            <Button asChild className="gradient-bg text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-lg py-6 px-8 rounded-full border-2 border-gray-300 hover:border-brand-blue transition-all">
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up opacity-0" style={{ animationDelay: '900ms' }}>
          <div className="p-4">
            <div className="font-bold text-3xl md:text-4xl text-brand-blue mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-3xl md:text-4xl text-brand-purple mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-3xl md:text-4xl text-brand-blue mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-4">
            <div className="font-bold text-3xl md:text-4xl text-brand-purple mb-2">250+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
