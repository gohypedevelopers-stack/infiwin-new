"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stars as Sparkles, ArrowRight } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function BestSellingProductSection() {
  const [activeVariant, setActiveVariant] = useState<'A' | 'B'>('A');

  const variants = {
    A: {
      name: "Full Length Option",
      desc: "Floor to ceiling coverage structure. Spans continuously from the floor straight up to the concrete ceiling line, creating a stunning, seamless floor-to-ceiling glazed sunroom style with direct outdoor views.",
      img: "https://i.postimg.cc/R05g4PxJ/IMG-20250119-WA0011.jpg"
    },
    B: {
      name: "Half Length Option",
      desc: "Railing to ceiling / fixed system. Designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it.",
      img: "https://i.postimg.cc/x10dhQcV/Chat-GPT-Image-Jun-4-2026-03-02-04-PM.png"
    }
  };

  return (
    <section className="bg-white border-y border-neutral-100 overflow-hidden">
      {/* Full-bleed two-column: left = images, right = content */}
      <div className="grid lg:grid-cols-2 min-h-[700px] md:min-h-[780px]">

        {/* LEFT — Full-height image column */}
        <div className="relative bg-zinc-100 flex flex-col overflow-hidden min-h-[420px] lg:min-h-full p-4 md:p-6 gap-4">

          {/* Main large image — fills top ~70% */}
          <div className="relative flex-1 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeVariant}
                src={variants[activeVariant].img}
                alt={variants[activeVariant].name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Most Popular ribbon */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
              <Sparkles size={12} />
              <span>MOST POPULAR</span>
            </div>
          </div>

          {/* Thumbnail strip — bottom */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {(['A', 'B'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveVariant(key)}
                className={`relative rounded-2xl overflow-hidden border-2 aspect-[4/3] shadow-md transition-all ${
                  activeVariant === key
                    ? 'border-brand-primary scale-[1.02]'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={variants[key].img}
                  alt={variants[key].name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — All content, padded */}
        <div className="flex flex-col justify-center gap-7 py-16 md:py-24 px-8 md:px-14 lg:px-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">
              BALCONY ENCLOSURE CATEGORY
            </span>
          </div>

          {/* Heading + description */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight mb-4">
              Slide &amp; Turn System
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              Our iconic signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.
            </p>
          </div>

          {/* Interactive Tab UI */}
          <div className="w-full bg-slate-50 p-6 rounded-3xl border border-neutral-100">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-4">
              Interactive Variant Check:
            </h4>

            <div className="flex gap-2 sm:gap-3 mb-4">
              <button
                onClick={() => setActiveVariant('A')}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeVariant === 'A'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                Full Length Option
              </button>
              <button
                onClick={() => setActiveVariant('B')}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeVariant === 'B'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                Half Length Option
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeVariant + '-desc'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-4 bg-white rounded-2xl border border-neutral-100/60 min-h-[100px] flex flex-col justify-center"
              >
                <h5 className="text-sm font-bold text-brand-dark mb-2">
                  {variants[activeVariant].name}
                </h5>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {variants[activeVariant].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products#folding"
              className="group inline-flex items-center gap-2 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:bg-brand-primary transition-all duration-300"
            >
              Inspect Custom Variants
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#estimator"
              className="group inline-flex items-center gap-2 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full hover:bg-neutral-50 transition-all duration-300"
            >
              Calculate Approximate Quote
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
