
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Globe, LineChart, Megaphone, Search, MessageSquare, Code, Smartphone, Lightbulb, Share2, ShoppingCart, Camera } from "lucide-react";

const detailedServices = [
  {
    title: "Website Development",
    icon: <Globe className="h-12 w-12 text-brand-blue" />,
    description: "Custom websites built to convert visitors into customers. We focus on user experience, performance, and responsive design.",
    features: [
      "Responsive design for all devices",
      "Custom UI/UX design",
      "E-commerce functionality",
      "Content management systems",
      "Website maintenance & support"
    ]
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-12 w-12 text-brand-purple" />,
    description: "Strategic digital marketing campaigns that increase brand awareness, generate leads, and drive revenue growth.",
    features: [
      "Marketing strategy development",
      "PPC advertising campaigns",
      "Email marketing",
      "Social media marketing",
      "Campaign performance analysis"
    ]
  },
  {
    title: "SEO Optimization",
    icon: <Search className="h-12 w-12 text-brand-blue" />,
    description: "Data-driven SEO strategies that improve search rankings and drive targeted organic traffic to your website.",
    features: [
      "Keyword research & analysis",
      "On-page optimization",
      "Technical SEO improvements",
      "Content strategy",
      "Rank tracking & reporting"
    ]
  },
  {
    title: "Content Creation",
    icon: <MessageSquare className="h-12 w-12 text-brand-purple" />,
    description: "Engaging, high-quality content that resonates with your audience and establishes you as an industry authority.",
    features: [
      "Blog posts & articles",
      "Copywriting for websites",
      "Social media content",
      "Email newsletters",
      "Infographics & visual content"
    ]
  },
  {
    title: "Social Media Management",
    icon: <Share2 className="h-12 w-12 text-brand-blue" />,
    description: "Comprehensive social media management that builds your brand, engages your audience, and drives traffic to your website.",
    features: [
      "Social media strategy",
      "Content creation & scheduling",
      "Community management",
      "Social media advertising",
      "Performance analytics"
    ]
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="h-12 w-12 text-brand-purple" />,
    description: "Custom e-commerce websites and strategies that optimize the shopping experience and increase sales.",
    features: [
      "E-commerce website development",
      "Shopping cart optimization",
      "Payment gateway integration",
      "Product catalog management",
      "Conversion rate optimization"
    ]
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-12 w-12 text-brand-blue" />,
    description: "Custom mobile applications that enhance user engagement and provide value to your customers.",
    features: [
      "iOS and Android development",
      "UI/UX design for mobile",
      "App testing & quality assurance",
      "App store optimization",
      "App maintenance & support"
    ]
  },
  {
    title: "Brand Strategy",
    icon: <Lightbulb className="h-12 w-12 text-brand-purple" />,
    description: "Strategic brand development that communicates your unique value proposition and connects with your target audience.",
    features: [
      "Brand identity development",
      "Positioning strategy",
      "Brand messaging",
      "Visual identity design",
      "Brand guidelines"
    ]
  },
  {
    title: "Analytics & Reporting",
    icon: <LineChart className="h-12 w-12 text-brand-blue" />,
    description: "Comprehensive analytics and reporting that provide insights into your digital performance and guide strategy optimization.",
    features: [
      "Data tracking setup",
      "Performance dashboards",
      "Regular reporting",
      "Data analysis & insights",
      "Recommendations for improvement"
    ]
  },
  {
    title: "Video Production",
    icon: <Camera className="h-12 w-12 text-brand-purple" />,
    description: "High-quality video content that engages your audience and effectively communicates your brand message.",
    features: [
      "Video strategy development",
      "Promotional videos",
      "Product demonstrations",
      "Social media video content",
      "Video advertising"
    ]
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive digital solutions tailored to help your business thrive in the online world.
              </p>
              <Button asChild className="gradient-bg text-white rounded-full py-6 px-8">
                <Link to="/contact">
                  Request a Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-8">
                    <div className="mb-5">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full gradient-bg text-white">
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600">
                We follow a proven process to ensure we deliver exceptional results for every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">We learn about your business, goals, and target audience to understand your needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-gray-600">We develop a tailored strategy based on your goals and our expertise.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">We execute the strategy with precision and attention to detail.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Results & Refinement</h3>
                <p className="text-gray-600">We measure results and continuously optimize for better performance.</p>
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
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-10 mx-auto max-w-2xl">
                Contact us today to discuss your project and how we can help you achieve your digital goals.
              </p>
              <Button asChild className="bg-white text-brand-purple hover:bg-gray-100 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  Schedule a Consultation
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

export default ServicesPage;
