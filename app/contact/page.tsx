import Navbar from '@/components/Navbar';
import { ContactSection, Footer } from '@/components/AboutServicesFAQ';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}