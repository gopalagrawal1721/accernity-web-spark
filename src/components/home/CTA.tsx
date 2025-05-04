
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-90"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-10 mx-auto max-w-2xl">
            Partner with us to create a stunning website and implement effective 
            digital marketing strategies that drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild className="text-white border-white hover:bg-white/10 text-lg py-6 px-8 rounded-full">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
