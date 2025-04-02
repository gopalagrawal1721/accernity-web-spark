
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years in digital marketing and web development, Alex leads our team with vision and expertise.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    position: "Creative Director",
    bio: "Sarah brings 10+ years of design experience, creating stunning visuals that captivate and convert.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    position: "Technical Lead",
    bio: "A seasoned developer with expertise in the latest web technologies and a passion for clean, efficient code.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Jessica Miller",
    position: "Marketing Strategist",
    bio: "Jessica's data-driven approach to marketing has helped countless clients achieve remarkable growth.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "David Wilson",
    position: "SEO Specialist",
    bio: "David's deep understanding of search algorithms helps our clients dominate search rankings.",
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    name: "Emma Thompson",
    position: "Content Director",
    bio: "Emma crafts compelling narratives that engage audiences and drive meaningful connections with brands.",
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Excellence",
    description: "We are committed to delivering exceptional quality and exceeding client expectations in everything we do."
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and strong ethical principles in all our business dealings."
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, treating their business as our own and ensuring their success."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="gradient-text">Accernity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a team of digital experts passionate about helping businesses succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2013, Accernity began with a simple mission: to help businesses succeed in the digital world. What started as a small team of passionate digital marketers and web developers has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Over the years, we've helped hundreds of businesses transform their online presence, increase their visibility, and achieve significant growth through strategic digital marketing and innovative web solutions.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to evolve and adapt to the ever-changing digital landscape, staying at the forefront of industry trends and technologies to provide our clients with the most effective digital solutions.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Accernity team" 
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
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-gray-600">
                These core principles guide everything we do and shape our approach to serving our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-gray-600">
                The talented professionals behind our success. Experts in their fields, passionate about delivering results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-brand-purple font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Why Choose <span className="gradient-text">Accernity</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  When you partner with us, you get more than just a service provider. You get a dedicated team committed to your success.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><span className="font-semibold">Expertise:</span> Our team of specialists brings deep knowledge and experience across all digital disciplines.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><span className="font-semibold">Results-Driven:</span> We focus on delivering measurable results that impact your bottom line.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><span className="font-semibold">Transparency:</span> Clear communication and complete visibility into our process and your results.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><span className="font-semibold">Innovation:</span> We stay ahead of industry trends to provide cutting-edge solutions.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><span className="font-semibold">Partnership:</span> We view ourselves as an extension of your team, deeply invested in your success.</p>
                  </div>
                </div>
                
                <Button asChild className="gradient-bg text-white rounded-full py-6 px-8">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-blue mb-2">10+</div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-purple mb-2">500+</div>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-blue mb-2">250+</div>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-purple mb-2">98%</div>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-90"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-xl text-white/90 mb-10 mx-auto max-w-2xl">
                Contact us today to discuss how we can help your business grow with our digital marketing and web development expertise.
              </p>
              <Button asChild className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
