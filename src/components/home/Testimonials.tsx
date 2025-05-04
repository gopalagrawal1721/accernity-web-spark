
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Umang Taneja",
    company: "Nadi Astrology",
    position: "CEO",
    quote: "Working with the team has been a transformative experience for our online astrology platform. Their performance marketing strategies brought in a consistent flow of high-intent leads and significantly improved our online visibility. We've seen a 60% increase in consultations month-over-month. Truly grateful for their dedication and deep understanding of our niche!",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=ExampleSeed03"
  },
  {
    name: "Nirmal Daga",
    company: "Bratma Crafts",
    position: "Founder",
    quote: "We were struggling to get quality traffic that actually converted. After partnering for performance marketing, we saw a dramatic boost in ROI—our conversion rate doubled within the first two months! They really understood our audience and crafted campaigns that delivered real results. Highly recommended!",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=ExampleSeed03"
  },
  {
    name: "Bode Venkatraman",
    company: "V & V Infra",
    position: "Founder",
    quote: "Performance marketing has completely changed the way we generate leads for our real estate projects. The campaigns were precise, well-targeted, and brought us qualified buyers consistently. Their data-driven approach helped us close more deals faster than ever before.",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=ExampleSeed03"
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
