'use client';

import { motion } from 'framer-motion';
import { Play, Star, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block bg-[#0E181B] border border-[#1A282C] px-4 py-1.5 rounded-full text-xs font-semibold text-[#A3E635]">
            Welcome To Optiby
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Where The Expertise Create A Solution
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-lg">
            Everything from branding to websites, storytelling, and videos with strategy and care.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#A3E635] text-[#080D0E] font-semibold px-7 py-3.5 rounded-full hover:bg-[#82c922] transition-all group"
            >
              <span>Let&apos;s Get Started</span>
              <span className="w-8 h-8 rounded-full bg-[#080D0E] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-[#1A282C] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">4.5</span>
              <div>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">(4.5/5) Positive Reviews From Our Customer</p>
              </div>
            </div>

            <div className="bg-[#0E181B] p-3.5 rounded-2xl border border-[#1A282C] flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-200">Guiding Financial Journey</p>
                <p className="text-[11px] text-gray-400">To Elevating Your Business</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#A3E635] text-[#080D0E] flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-full max-w-md bg-[#0E181B] border border-[#1A282C] rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="bg-[#A3E635] text-[#080D0E] p-5 rounded-2xl">
              <p className="text-xs uppercase font-semibold tracking-wider opacity-80">Total Balance</p>
              <h3 className="text-3xl font-extrabold mt-1">$5,364.00</h3>
            </div>
            
            <div className="bg-[#080D0E] p-4 rounded-xl border border-[#1A282C] space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Investment Return</span>
                <span className="text-[#A3E635] font-semibold">+18.4%</span>
              </div>
              <div className="h-16 w-full bg-[#A3E635]/10 rounded-lg flex items-end p-2 gap-1.5">
                {[40, 60, 45, 75, 90, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-[#A3E635] rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="orange-accent-line mt-16" />
    </section>
  );
}