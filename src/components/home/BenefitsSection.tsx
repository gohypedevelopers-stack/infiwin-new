"use client";

import React from 'react';
import { Eye, CloudRain, VolumeDownFill, ShieldCheck } from 'react-bootstrap-icons';
import { motion } from 'motion/react';

const BENEFITS = [
  {
    id: 1,
    icon: <Eye className="w-7 h-7 text-brand-primary" />,
    title: "Unobstructed Views",
    desc: "No vertical frames between glass panels ensures completely transparent viewports and expanded natural light.",
  },
  {
    id: 2,
    icon: <CloudRain className="w-7 h-7 text-brand-primary" />,
    title: "100% Weather Shield",
    desc: "Blocks dust, wind, debris and monsoon rains. Custom rubber profiles keep balconies pristine through extreme climates.",
  },
  {
    id: 3,
    icon: <VolumeDownFill className="w-7 h-7 text-brand-primary" />,
    title: "Noise Dampening",
    desc: "Attenuate high-decibel street noise. Convert chaotic urban balconies into tranquil spaces for focus and relaxation.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-7 h-7 text-brand-primary" />,
    title: "10+ Year Warranty",
    desc: "ISO-certified manufacturing and premium aluminium hardware backed by a comprehensive long-term warranty.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary block mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            Design. Craft. Deliver. Perfect.
          </h2>
        </div>

        {/* 4-column icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-start gap-4 bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-13 h-13 flex items-center justify-center rounded-xl bg-brand-primary/8 p-3">
                {b.icon}
              </div>

              <div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
