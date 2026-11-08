'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080D0E]/80 backdrop-blur-md border-b border-[#1A282C]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            optiby<span className="text-[#A3E635]">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/service" className="hover:text-white transition-colors">Service</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/faq" className="hover:text-white transition-colors">Faq</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-[#A3E635] text-[#080D0E] font-semibold px-6 py-2.5 rounded-full hover:bg-[#82c922] transition-all transform hover:scale-105"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}