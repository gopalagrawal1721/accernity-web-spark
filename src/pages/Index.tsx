
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import CTA from "../components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
