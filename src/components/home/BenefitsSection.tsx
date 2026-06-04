"use client";

import React from 'react';
import { Eye, Cloud, Lock } from 'react-bootstrap-icons';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Unobstructed Panoramic Views",
      desc: "No vertical frames between glass structures ensures completely transparent viewports, expanding visual horizons and natural luxury lighting levels instantly.",
      icon: <Eye className="h-6 w-6 text-brand-primary" />
    },
    {
      id: 2,
      title: "100% Weather Shield Protection",
      desc: "Blocks dust, windstorms, flying debris, and intense monsoon rains. Fully customized rubber profiles keep balconies immaculate through extreme climates.",
      icon: <Cloud className="h-6 w-6 text-brand-primary" />
    },
    {
      id: 3,
      title: "Noise Dampening Isolation",
      desc: "Attenuate high-decibel street noises significantly. Convert chaotic urban balconies into tranquil spaces suited for deep focus and reading.",
      icon: <Lock className="h-6 w-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            The Premium Slide & Turn Edge
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            Discover why modern homeowners and commercial spaces are replacing conventional iron grills with custom frameless folding structures.
          </p>
        </div>

        {/* Benefits Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.id}
              className="relative bg-white border border-neutral-100 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-[280px]"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {b.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
