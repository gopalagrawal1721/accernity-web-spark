
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    position: "CEO",
    quote: "Accernity transformed our online presence completely. Their team delivered a stunning website and implemented a marketing strategy that has doubled our leads within 3 months.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "David Chen",
    company: "Innovative Retail",
    position: "Marketing Director",
    quote: "The SEO campaign Accernity developed for us exceeded all expectations. We're now ranking on the first page for all our key terms, and our organic traffic has never been higher.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Parker",
    company: "GrowFast Agency",
    position: "Founder",
    quote: "Working with Accernity has been game-changing for our business. Their strategic approach to digital marketing has helped us reach new markets and achieve our growth targets.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md card-hover">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-brand-blue/20 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
