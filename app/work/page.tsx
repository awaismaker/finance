import Navbar from '@/components/Navbar';
import { Footer } from '@/components/AboutServicesFAQ';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#080D0E] text-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <span className="text-xs font-bold uppercase tracking-widest text-[#A3E635]">Our Portfolio</span>
        <h1 className="text-4xl font-bold mt-2 mb-6">Featured Projects & Case Studies</h1>
        <p className="text-gray-400 mb-12">Explore how we help businesses scale with custom financial architectures and modern web apps.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0E181B] border border-[#1A282C] p-6 rounded-3xl">
            <div className="h-48 bg-gray-800 rounded-2xl mb-4 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600')` }} />
            <h3 className="text-xl font-bold">FinTech Wealth Dashboard</h3>
            <p className="text-sm text-gray-400 mt-2">Serverless Next.js platform integrating multi-currency investment tracking.</p>
          </div>
          <div className="bg-[#0E181B] border border-[#1A282C] p-6 rounded-3xl">
            <div className="h-48 bg-gray-800 rounded-2xl mb-4 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600')` }} />
            <h3 className="text-xl font-bold">Corporate Rebranding & Ledger System</h3>
            <p className="text-sm text-gray-400 mt-2">Comprehensive audit and automated accounting workflow implementation.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}