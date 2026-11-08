'use client';

import { Play, TrendingUp, Target, ShieldCheck } from 'lucide-react';

export default function FeatureCards() {
  const cards = [
    {
      title: "How Does It Work?",
      desc: "Learn More",
      icon: <Play className="w-4 h-4 fill-current" />,
      highlight: true,
    },
    {
      title: "Operational Analysis",
      desc: "Identify inefficiencies and optimize workflow.",
      icon: <TrendingUp className="w-5 h-5 text-[#A3E635]" />,
    },
    {
      title: "Strategy Planning",
      desc: "Setting priorities and aligning business objectives.",
      icon: <Target className="w-5 h-5 text-[#A3E635]" />,
    },
    {
      title: "Financial Advising",
      desc: "Providing expert guidance on managing finances.",
      icon: <ShieldCheck className="w-5 h-5 text-[#A3E635]" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-20 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all ${
              card.highlight
                ? 'bg-[#0E181B] border-[#1A282C] text-white flex flex-col justify-between'
                : 'bg-[#0E181B] border-[#1A282C] text-white hover:border-[#A3E635]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#080D0E] border border-[#1A282C] flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
            <p className="text-xs text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}