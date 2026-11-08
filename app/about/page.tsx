import Navbar from '@/components/Navbar';
import { AboutSection } from '@/components/AboutServicesFAQ';
import { Footer } from '@/components/AboutServicesFAQ';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}