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
    <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Premium Dynamic Image Display */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-150 aspect-[4/3] bg-zinc-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeVariant}
                  src={variants[activeVariant].img}
                  alt={variants[activeVariant].name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlapping Ribbon */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                <Sparkles size={12} />
                <span>MOST POPULAR</span>
              </div>
            </div>

            {/* Thumbs to click to switch */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <button
                onClick={() => setActiveVariant('A')}
                className={`rounded-2xl overflow-hidden border-2 aspect-[4/3] shadow-lg transition-all ${activeVariant === 'A' ? 'border-brand-primary scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={variants.A.img}
                  alt="Full Length Option Thumb"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveVariant('B')}
                className={`rounded-2xl overflow-hidden border-2 aspect-[4/3] shadow-lg transition-all ${activeVariant === 'B' ? 'border-brand-primary scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={variants.B.img}
                  alt="Half Length Option Thumb"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Copy & Interactive Tab Selector */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                BALCONY ENCLOSURE CATEGORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight mb-6">
              Slide & Turn System
            </h2>

            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
              Our iconic signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.
            </p>

            {/* Interactive Tab UI */}
            <div className="w-full bg-slate-50 p-6 rounded-3xl border border-neutral-100 mb-8">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-4">
                Interactive Variant Check:
              </h4>

              <div className="flex gap-2 sm:gap-3 mb-4">
                <button
                  onClick={() => setActiveVariant('A')}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold uppercase tracking-wider border transition-all ${activeVariant === 'A'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                >
                  Full Length <span className="hidden xs:inline">Option</span>
                </button>
                <button
                  onClick={() => setActiveVariant('B')}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold uppercase tracking-wider border transition-all ${activeVariant === 'B'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                >
                  Half Length <span className="hidden xs:inline">Option</span>
                </button>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-neutral-100/60 min-h-[100px] flex flex-col justify-center">
                <h5 className="text-sm font-bold text-brand-dark mb-2">
                  {variants[activeVariant].name}
                </h5>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {variants[activeVariant].desc}
                </p>
              </div>
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
      </div>
    </section>
  );
}
