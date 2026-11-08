'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-900 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">About Us</div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              The Best Finance Consultant In Town
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a dedicated finance consulting firm committed to helping individuals and businesses achieve financial success. With expert guidance in wealth management, investment strategies, and financial planning, we provide tailored solutions to meet your unique goals.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-gray-800">Join us to achieve sustainable growth and reach your financial goals with the right strategies.</span>
              <a href="#contact" className="bg-[#A3E635] text-[#080D0E] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#82c922] transition-all flex items-center gap-2 flex-shrink-0">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-200 h-80">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800')` }} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
          <div>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-1">25+</h3>
            <p className="text-xs text-gray-500">A legacy of expertise spanning 25+ years.</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-1">150K+</h3>
            <p className="text-xs text-gray-500">Increased financial literacy for 1000+ individuals.</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-1">95%</h3>
            <p className="text-xs text-gray-500">Achieved a 95% client retention rate.</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-1">$40M+</h3>
            <p className="text-xs text-gray-500">In assets with an average annual return of 8%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    { title: "Business Strategies", desc: "We offer expert business strategy consulting to help optimize operations." },
    { title: "General Accounting", desc: "Accurate financial bookkeeping and ledger management." },
    { title: "Financial Planning", desc: "Crafting structured roadmaps for long-term capital security." },
  ];

  return (
    <section id="services" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">Financial Services To Grow And Secure Your Wealth</h2>
          </div>
          <a href="#contact" className="mt-4 md:mt-0 bg-[#A3E635] text-[#080D0E] font-semibold px-6 py-3 rounded-full hover:bg-[#82c922] transition-all inline-block">
            Get Started
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 rounded-2xl mb-6 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600')` }} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
                <a href="#contact" className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:text-[#528a0e]">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What services does your branding agency offer?", a: "We provide end-to-end financial consulting, wealth management, and brand identity solutions." },
    { q: "What is the process for creating a brand identity?", a: "Our process starts with deep discovery, followed by strategy, execution, and continuous monitoring." },
    { q: "How long does it take to develop a brand identity?", a: "Typically timelines range between 2 to 4 weeks depending on the scope of the project." },
    { q: "Do you offer rebranding services for businesses?", a: "Yes, we specialize in modernizing legacy business structures and financial models." }
  ];

  return (
    <section id="faq" className="py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Help Section</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">Frequently Asked Question</h2>
          <p className="text-gray-500 text-sm mt-2">With our transparent and results-driven approach, we help you navigate financial complexities with confidence.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0E181B] text-white rounded-2xl overflow-hidden border border-[#1A282C]">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between font-semibold"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180 text-[#A3E635]' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-sm text-gray-400 border-t border-[#1A282C] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 bg-[#0E181B] text-white p-6 rounded-3xl grid md:grid-cols-3 gap-6 border border-[#1A282C]">
          <div>
            <p className="text-xs text-gray-400">Phone Number</p>
            <p className="text-sm font-bold mt-1">(+123) 355-789-386</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Email Address</p>
            <p className="text-sm font-bold mt-1">optiby@example.site</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Office Location</p>
            <p className="text-sm font-bold mt-1">Jl. Raya Chartered No.70 Street, Denpasar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#080D0E] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#A3E635]">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-1 mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-sm mb-6">In need of help? Together, let&apos;s approach it and make sure we succeed at every turn. How could I be of assistance?</p>
            <div className="rounded-3xl overflow-hidden h-64 bg-cover bg-center border border-[#1A282C]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600')` }} />
          </div>

          <div className="bg-[#0E181B] border border-[#1A282C] p-8 rounded-3xl space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400">First Name</label>
                <input type="text" placeholder="First Name" className="w-full mt-1 bg-[#080D0E] border border-[#1A282C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3E635]" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full mt-1 bg-[#080D0E] border border-[#1A282C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3E635]" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400">Email Address</label>
              <input type="email" placeholder="Email Address" className="w-full mt-1 bg-[#080D0E] border border-[#1A282C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3E635]" />
            </div>
            <div>
              <label className="text-xs text-gray-400">Phone Number</label>
              <input type="text" placeholder="Phone Number" className="w-full mt-1 bg-[#080D0E] border border-[#1A282C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3E635]" />
            </div>
            <div>
              <label className="text-xs text-gray-400">Message</label>
              <textarea rows={3} placeholder="Write your message here..." className="w-full mt-1 bg-[#080D0E] border border-[#1A282C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3E635]" />
            </div>
            <button className="w-full bg-[#A3E635] text-[#080D0E] font-bold py-3.5 rounded-xl hover:bg-[#82c922] transition-colors flex items-center justify-center gap-2">
              Send Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#080D0E] border-t border-[#1A282C] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-bold tracking-tight text-white">
            optiby<span className="text-[#A3E635]">.</span>
          </span>
          <p className="text-xs text-gray-400 mt-2">We transform ideas into designs and strategies for branding, web design, and marketing.</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white">About Us</a>
          <a href="#services" className="hover:text-white">Service</a>
          <a href="#faq" className="hover:text-white">Faq</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}