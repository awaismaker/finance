import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import { AboutSection, ServicesSection, FAQSection, ContactSection, Footer } from '@/components/AboutServicesFAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white selection:bg-[#A3E635] selection:text-black">
      <Navbar />
      <Hero />
      <FeatureCards />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}