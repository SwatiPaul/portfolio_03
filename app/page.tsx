import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <Hero />
      <Testimonials />
      <Projects />
      <About />
      <Services />
      <TechStack />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
