"use client";

import { motion } from 'motion/react';
import { 
  Telephone as Phone, 
  Envelope as Mail, 
  GeoAlt as MapPin, 
  Clock, 
  Send,
  ChatDots as MessageCircle
} from 'react-bootstrap-icons';
import React, { useState } from 'react';

export default function ContactPage() {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ length: 10, height: 10 });

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const area = dimensions.length * dimensions.height;
    setEstimate(area * 1800);
  };

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png" 
            className="w-full h-full object-cover opacity-60"
            alt="Contact Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Start Your <br />
            <span className="text-brand-primary lowercase font-light">Project</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left: Contact Info & Form */}
            <div>
              <div className="grid sm:grid-cols-2 gap-12 mb-20">
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-2">Call Us</h4>
                    <p className="text-neutral-500 text-sm font-light">+91 73370 74370</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center text-brand-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-2">Email</h4>
                    <p className="text-neutral-500 text-sm font-light">hi@infiwindow.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-2">Headquarters</h4>
                    <p className="text-neutral-500 text-sm font-light">Corporate Office: H 195, Sector 63, Noida, Uttar Pradesh - 201309</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center text-brand-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-2">Working Hours</h4>
                    <p className="text-neutral-500 text-sm font-light">Mon - Sat: 9:00 - 18:00</p>
                    <p className="text-neutral-500 text-sm font-light">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 sm:p-12 rounded-sm">
                <h3 className="text-2xl text-brand-dark mb-8 uppercase tracking-widest">Inquiry Form</h3>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Full Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" placeholder="+91" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Subject</label>
                    <select className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors">
                      <option>General Inquiry</option>
                      <option>Request a Quote</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all flex items-center justify-center gap-3 group">
                    Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Estimator & Location */}
            <div className="space-y-12">
              <div className="bg-brand-dark p-6 sm:p-12 text-white rounded-sm shadow-2xl">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6 block">Immediate Tool</span>
                <h3 className="text-3xl font-serif mb-8">Cost Estimator</h3>
                <p className="text-white/50 text-sm font-light mb-10 leading-relaxed">
                  Get a quick, approximate cost for your project based on standard rates of ₹1800/sqft.
                </p>
                
                <form onSubmit={calculateEstimate} className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-2">Length (ft)</label>
                      <input
                        type="number"
                        value={dimensions.length}
                        onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })}
                        className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-2">Height (ft)</label>
                      <input
                        type="number"
                        value={dimensions.height}
                        onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
                        className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                    Calculate Estimate
                  </button>
                </form>

                {estimate && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 pt-12 border-t border-white/10"
                  >
                    <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Approximate Project Value</p>
                    <p className="text-4xl text-brand-primary mb-4 font-serif">₹{estimate.toLocaleString()}</p>
                    <div className="p-4 bg-white/5 rounded-sm">
                      <p className="text-[10px] text-white/40 leading-relaxed">
                        *This is a ballpark figure based on standard 10mm glass. Final quote may vary based on customization, transportation, and taxes.
                      </p>
                    </div>
                    <a href="https://wa.me/917337074370" target="_blank" className="mt-8 w-full py-4 border border-green-500 text-green-500 text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2">
                      <MessageCircle size={16} /> Confirm via WhatsApp
                    </a>
                  </motion.div>
                )}
              </div>

              <div className="aspect-square w-full bg-neutral-100 rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-brand-dark/0 transition-all duration-700 pointer-events-none z-10" />
                <img 
                  src="/global-presence-globe.svg" 
                  className="w-full h-full object-contain p-8"
                  alt="Global presence globe"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="h-12 w-12 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 border border-white/20 shadow-xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-2">Global Presence</h4>
                  <p className="text-neutral-500 text-xs font-light">Serving clients across GCC, India, and Southeast Asia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
