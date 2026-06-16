"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'react-bootstrap-icons';
import React from 'react';

const IMAGES = [
  "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
  "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png",
  "/infiwin images new/ChatGPT Image May 23, 2026, 01_22_03 PM.png"
];

const CONFIGURATIONS = [
  { name: "Slide & Turn Systems", desc: "Our signature frameless glazing system that glides effortlessly and stacks away, eliminating boundaries." },
  { name: "Unobstructed Views", desc: "No vertical frames interrupt the panoramic vistas of your beautiful country landscaping." },
  { name: "Weather Resistance", desc: "Engineered to withstand heavy winds and rain, protecting your interior furnishings." },
  { name: "Spacious Integration", desc: "Seamlessly connects large living spaces with the outdoors, creating stunning, airy pavilions." }
];

export default function FarmhouseApplicationPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Link href="/applications" className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-primary transition-colors text-sm font-medium mb-12">
          <ArrowLeft size={16} /> Back to Applications
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-4 block">
              Application Profile
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 tracking-tight">
              Farmhouse & Villas
            </h1>
            <p className="text-xl text-neutral-500 font-light leading-relaxed mb-8">
              Connect beautiful country landscaping with spacious interiors using our premium Slide & Turn systems. Create stunning glass pavilions that can be fully opened during pleasant weather to merge indoor comfort with outdoor beauty.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {CONFIGURATIONS.map((config, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block text-sm mb-1">{config.name}</strong>
                    <span className="text-xs text-neutral-500">{config.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={IMAGES[0]} alt="Farmhouse Slide & Turn" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center uppercase tracking-widest">Execution Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {IMAGES.slice(1).map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-video rounded-[2rem] overflow-hidden shadow-xl">
                <img src={img} alt="Farmhouse Glazing Example" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
