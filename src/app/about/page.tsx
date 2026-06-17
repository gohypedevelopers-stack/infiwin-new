"use client";

import { motion } from 'motion/react';
import {
  Eye,
  Award,
  ShieldCheck,
  CheckCircle
} from 'react-bootstrap-icons';
import React from 'react';

export default function AboutPage() {
  const values = [
    {
      title: "Easy Maintenance & Zero Cleaning Cost",
      desc: "Designed for easy maintenance, reducing the need for frequent cleaning to save time and effort for homeowners and building managers.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Simple Operation",
      desc: "The slide & turn mechanism allows for easy opening and closing of the windows entirely from the inside, enhancing convenience and safety.",
      icon: <CheckCircle size={32} />
    },
    {
      title: "Connect Inside & Outside",
      desc: "Merge indoor and outdoor spaces seamlessly. Perfect for creating a more open, inviting atmosphere that enhances the overall experience.",
      icon: <Eye size={32} />
    },
    {
      title: "Shape Is Not An Issue",
      desc: "Slide through any shape - straight, L, or curved. This flexibility empowers tailored designs and ensures a perfect fit for diverse architectural layouts.",
      icon: <Award size={32} />
    }
  ];

  const milestones = [
    { year: "2010", title: "The Beginning", desc: "Started as a small architectural hardware supplier, laying the foundation for excellence." },
    { year: "2015", title: "Pioneering S&T", desc: "Introduced our signature Slide & Turn frameless balcony systems to the domestic market." },
    { year: "2018", title: "Commercial Expansion", desc: "Expanded operations to cover large-scale commercial facades and hotel projects." },
    { year: "2023", title: "Automated Luxury", desc: "Launched motorized guillotine systems and bioclimatic pergolas." }
  ];

  return (
    <main className="bg-white min-h-screen pb-24">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
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
            Behind the Brand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-4 leading-tight uppercase"
          >
            About Infiwin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm md:text-base tracking-wide max-w-2xl mx-auto font-medium"
          >
            Crafting Premium Frameless Glass Solutions Aligned with Global Standards of Architectural Excellence
          </motion.p>
        </div>
      </section>

      {/* 1. Our Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-4 block">
                1. Our Story
              </span>
              <h2 className="text-4xl md:text-6xl text-brand-dark font-bold mb-8 leading-tight tracking-tight">
                Beyond Boundaries
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6 font-light">
                Infi Window System is a pioneer in developing Slide & Turn Glass Window Systems in India. We have launched the "Slide And Turn Glass System" for the first time in India, totally home-grown under the brand name "INFIWIN".
              </p>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6 font-light">
                INFIWIN is a premium Foldable Glass Door and Window system for Exterior or Interior applications. Our innovative window, door, and movable glass wall systems are designed to maximize the efficiency of your existing space over conventional windows and doors, specially designed for full length panoramic views and full openings without any obstacles.
              </p>
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                Infiwin's Glass House. Crafted with precision and innovation. The frameless glass design offers unobstructed views, creating a sense of openness while providing protection from the elements. Whether used as a private retreat, a stylish entertainment area, or a contemporary workspace, the Infiwin Glass House is the ultimate expression of luxury and functionality for outdoor living.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <img
                src="/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png"
                alt="Infiwin Installation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Journey */}
      <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-4 block">
              2. Our Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
              A Decade of Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((stone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-neutral-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black text-brand-dark pointer-events-none transition-transform duration-500 group-hover:scale-110">
                  {stone.year.slice(2)}
                </div>
                <span className="text-brand-primary font-bold text-2xl block mb-4">{stone.year}</span>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{stone.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">
                  {stone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Sets Us Apart */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-4 block">
              3. What Sets Us Apart
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
              The Infiwin Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-8 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{val.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-sm mx-auto">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision */}
      <section className="py-24 md:py-40 bg-brand-dark text-white relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="absolute inset-0 z-0">
          <img src="/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png" alt="Vision Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6 block">
              4. Our Vision
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 leading-tight">
              Engineering the Future of Living Spaces
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12">
              We envision a world where architectural boundaries are invisible, where homes and offices seamlessly transition into the surrounding environment, protected entirely by unyielding, intelligent glass engineering.
            </p>
            <a href="/contact" className="inline-block px-12 py-5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-full shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
