import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import OurHotels from "@/components/home/OurHotels";
import NearbyAttractions from "@/components/home/NearbyAttractions";
import WhyChoose from "@/components/home/WhyChoose";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    const hash = location.hash.slice(1); // Remove the '#' character
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure DOM is ready
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <Hero />
      <OurHotels />
      <NearbyAttractions />
      <WhyChoose />
      <ContactForm />
      <Footer />
    </div>
  );
}
