"use client";

import { motion } from 'motion/react';
import { 
  House as Home, 
  Building as Building2, 
  Display as Monitor, 
  CupHot as Coffee, 
  Brush as Paintbrush,
  Layers,
  Wind,
  Stars as Sparkles,
  ArrowRight
} from 'react-bootstrap-icons';
import React from 'react';

const applications = [
  {
    id: "balcony",
    title: "Balcony",
    desc: "Unobstructed frameless premium safety glazing barriers. Reclaim your outdoor space with systems that protect against dust, rain, and noise.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
    icon: <Home size={32} />
  },
  {
    id: "partition",
    title: "Int. Partition",
    desc: "Sleek separation zones for functional multi-use spaces. Create flexible living and working environments without visual barriers.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png",
    icon: <Layers size={32} />
  },
  {
    id: "commercial",
    title: "Commercial",
    desc: "High durability storefront facades & internal partition grids. Invite customers in with wide-open, secure, and visually arresting storefronts.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png",
    icon: <Building2 size={32} />
  },
  {
    id: "exterior",
    title: "Exterior",
    desc: "Rigid wind resistance profile constructs for elevations. Protect your building's exterior while maintaining premium aesthetic appeal.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png",
    icon: <Wind size={32} />
  },
  {
    id: "terrace",
    title: "Terrace",
    desc: "Convert open terraces into delightful year-round glass lounges. Enjoy the outdoors in any weather with our robust glazing systems.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png",
    icon: <Coffee size={32} />
  },
  {
    id: "farm-house",
    title: "Farm House",
    desc: "Connect beautiful country landscaping with spacious interiors. Create stunning glass pavilions that can be fully opened during pleasant weather.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
    icon: <Sparkles size={32} />
  },
  {
    id: "office",
    title: "Office Space",
    desc: "Acoustically isolated conference cubes & manager cabins. Modern executive environments designed for focus and seamless collaboration.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png",
    icon: <Monitor size={32} />
  },
  {
    id: "garden",
    title: "Garden",
    desc: "Sleek verandas merging beautiful greenery with indoor thermal comfort. Blend your architecture with nature effortlessly.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png",
    icon: <Paintbrush size={32} />
  }
];

export default function ApplicationsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png" 
            className="w-full h-full object-cover animate-pulse-slow"
            alt="Applications Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
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
            <span className="text-brand-primary lowercase font-light">Applications</span>
          </motion.h1>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-12 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {applications.map((app, i) => (
              <motion.div 
                id={app.id}
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer scroll-mt-24"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden mb-4 md:mb-8 shadow-xl">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-all duration-500" />
                  <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-full text-brand-primary">
                    {app.icon}
                  </div>
                </div>
                <h3 className="text-2xl text-brand-dark mb-2 md:mb-4 uppercase tracking-widest">{app.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4 md:mb-6">
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
      <section className="py-20 md:py-32 lg:py-48 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase mb-6 md:mb-12 leading-tight">Every Space Has <br /><span className="text-brand-primary font-light lowercase">Potential</span></h2>
          <p className="text-white/60 text-lg font-light mb-8 md:mb-16">
            Whether it's a high-rise balcony or a boutique office, our systems are engineered to transform and elevate your environment.
          </p>
          <a href="/contact" className="px-12 py-5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
