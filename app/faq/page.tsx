import Navbar from '@/components/Navbar';
import { FAQSection, Footer } from '@/components/AboutServicesFAQ';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white">
      <Navbar />
      <div className="pt-24">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}