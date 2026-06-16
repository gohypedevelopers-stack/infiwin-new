"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';
import React from 'react';

const CONCEPTS = [
  {
    id: "facade",
    title: "Façade",
    desc: "Animated Video showcase of our architectural facade solutions.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png",
    href: "/concepts/facade"
  },
  {
    id: "restaurant",
    title: "Restaurant",
    desc: "Animated Video showcase for elegant and functional restaurant settings.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png",
    href: "/concepts/restaurant"
  },
  {
    id: "pool-side-bar",
    title: "Pool Side Bar",
    desc: "Animated Video showcase for luxurious pool side bars.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png",
    href: "/concepts/pool-side-bar"
  }
];

export default function ConceptsPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
          >
            Visionary Designs
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Our <br />
            <span className="text-brand-primary lowercase font-light">Concepts</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {CONCEPTS.map((concept, i) => (
              <motion.div 
                key={concept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <img src={concept.img} alt={concept.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-all duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-2xl text-brand-dark mb-4 uppercase tracking-widest">{concept.title}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                    {concept.desc}
                  </p>
                  <Link href={concept.href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-dark transition-colors">
                    View Concept <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
