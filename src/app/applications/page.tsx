"use client";

import { motion } from 'motion/react';
import { 
  Home, 
  Building2, 
  Monitor, 
  MapPin, 
  Coffee, 
  Paintbrush,
  ArrowRight
} from 'lucide-react';
import React from 'react';
import { Navbar } from '../../components/Navbar';

const applications = [
  {
    title: "Balcony & Terrace",
    desc: "Reclaim your outdoor space. Our systems protect against dust, rain, and noise while maintaining a perfect panoramic view.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    icon: <Home size={32} />
  },
  {
    title: "Interior Partitions",
    desc: "Create flexible living and working environments. Our frameless glass partitions provide sound insulation without visual barriers.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    icon: <Building2 size={32} />
  },
  {
    title: "Office Spaces",
    desc: "Modern executive environments designed for focus and collaboration. Seamlessly divide conference rooms and private offices.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000",
    icon: <Monitor size={32} />
  },
  {
    title: "Commercial & Retail",
    desc: "Invite customers in with wide-open storefronts. Our systems are durable, secure, and visually arresting for any retail space.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    icon: <Building2 size={32} />
  },
  {
    title: "Garden & Farmhouses",
    desc: "Blend your architecture with nature. Create stunning glass pavilions and winter gardens that can be fully opened during pleasant weather.",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",
    icon: <MapPin size={32} />
  },
  {
    title: "Hospitality",
    desc: "Cafes, restaurants, and hotels can maximize their seating capacity and offer guests a unique 'alfresco' experience year-round.",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000",
    icon: <Coffee size={32} />
  }
];

export default function ApplicationsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Applications Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block"
          >
            Versatile Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Spatial <br />
            <span className="text-brand-primary italic lowercase font-light">Applications</span>
          </motion.h1>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {applications.map((app, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden mb-8 shadow-xl">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-all duration-500" />
                  <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-full text-brand-primary">
                    {app.icon}
                  </div>
                </div>
                <h3 className="text-2xl text-brand-dark mb-4 uppercase tracking-widest">{app.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                  {app.desc}
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Discuss Project <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Callout */}
      <section className="py-48 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl uppercase mb-12 leading-tight">Every Space Has <br /><span className="text-brand-primary italic font-light lowercase">Potential</span></h2>
          <p className="text-white/60 text-lg font-light mb-16">
            Whether it's a high-rise balcony or a boutique office, our systems are engineered to transform and elevate your environment.
          </p>
          <a href="/contact" className="px-12 py-5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Get a Free Consultation
          </a>
        </div>
      </section>

      <footer className="py-20 bg-brand-dark text-white/40 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.4em]">© 2026 INFIWIN Systems. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
