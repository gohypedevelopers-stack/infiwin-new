"use client";

import { motion } from 'motion/react';
import {
  ClockHistory as History,
  Bullseye as Target,
  Eye,
  Award,
  People as Users,
  ShieldCheck
} from 'react-bootstrap-icons';
import React from 'react';

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Completed", value: "2500+" },
    { label: "Happy Clients", value: "1800+" },
    { label: "Design Awards", value: "12" }
  ];

  const values = [
    {
      title: "Innovation First",
      desc: "Continually testing new technologies—such as our smart-sensor Bioclimatic Pergolas and motorized Walking Motor Systems—to stay at the forefront of automated luxury glazing.",
      icon: <Eye size={32} />
    },
    {
      title: "Uncompromising Integrity",
      desc: "Providing honest, transparent quotes with zero hidden charges. All our baseline estimations are calculated using a uniform, area-based cost formulation at ₹1,800/sq.ft.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Client-Centric Customization",
      desc: "Working closely with architects, interior designers, and estate managers to bring custom spatial visions to life.",
      icon: <Award size={32} />
    }
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          >
            <source src="/extracted_assets/Website/Concepts/Facade.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/75 z-10" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
          >
            The Infiwin Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold mb-4 leading-tight"
          >
            Redefining Views, Engineering Safety: The Infiwin Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm md:text-base tracking-wide max-w-2xl mx-auto font-medium"
          >
            Crafting India’s Premier Frameless Glass Solutions Aligned with Global Standards of Architectural Excellence
          </motion.p>
        </div>
      </section>

      {/* Brand Manifesto & Mission */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl text-brand-dark font-bold mb-6 leading-tight">
                Beyond Boundaries
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                At Infiwin, we believe that your connection to the outside world should never be obstructed by bulky metal frames, nor should it be compromised by extreme weather. Our mission is simple: To expand your functional living space while providing absolute protection.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                We manufacture, deliver, and install India's most advanced Slide & Turn glass systems, motorized vertical barriers, and smart structural roofs. By blending high-luxury minimalist designs with rugged, heavy-gauge materials, we turn underutilized balconies, terraces, and commercial spaces into pristine, year-round sanctuaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png"
                  className="w-full h-full object-cover"
                  alt="Our Work"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Infiwin Genesis */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png"
                  className="w-full h-full object-cover"
                  alt="Genesis Context"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-5xl text-brand-dark font-bold mb-6 leading-tight">
                Born to Conquer the Extreme Indian Climate
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                The concept of Infiwin was born out of a clear structural gap in modern Indian architecture. Standard balconies, patios, and terraces across high-rise residential projects and commercial hubs in cities like Delhi NCR, Noida, Mumbai, and Bangalore frequently sit unused.
              </p>

              <div className="mb-4">
                <p className="text-brand-dark font-bold text-xs uppercase tracking-wider mb-2">Homeowners find themselves locked indoors due to:</p>
                <ul className="list-disc pl-5 text-neutral-500 text-xs space-y-1">
                  <li>Scorching summer heatwaves exceeding 45 degree.</li>
                  <li>Intense monsoon downpours and high-altitude wind pressures.</li>
                  <li>High levels of urban noise pollution and heavy dust layers.</li>
                </ul>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed">
                Traditional sliding doors rely on wide aluminum partitions that disrupt beautiful panoramic views. On the other hand, leaving outdoor spaces completely open invites dust, rain, and safety hazards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-brand-dark text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-extrabold text-brand-primary mb-3">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block">What Sets Us Apart</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-dark font-bold">Our Core Differentiators</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFC] p-8 rounded-3xl border border-neutral-100 group hover:border-brand-primary transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 uppercase tracking-wider">{v.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-32 bg-brand-dark text-white text-center">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-4 block"
          >
            Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif leading-tight mb-8"
          >
            To transform structural constraints into limitless spatial experiences.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed"
          >
            We envision a world where architecture embraces the outdoors seamlessly. Through continuous innovation, robust engineering, and an uncompromising dedication to luxury, we aim to be the paramount choice for architectural glazing across residential and commercial landscapes.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
