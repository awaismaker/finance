import Navbar from '@/components/Navbar';
import { ServicesSection, Footer } from '@/components/AboutServicesFAQ';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white">
      <Navbar />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}