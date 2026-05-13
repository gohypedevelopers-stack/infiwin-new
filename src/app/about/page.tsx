"use client";

import { motion } from 'motion/react';
import { 
  History, 
  Target, 
  Eye, 
  Award, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
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
      title: "Precision",
      desc: "Every millimeter matters. Our engineering team ensures that every installation is perfectly aligned and functionally flawless.",
      icon: <Target size={32} />
    },
    {
      title: "Innovation",
      desc: "We stay ahead of architectural trends, bringing the latest global glass technologies to our local clients.",
      icon: <Eye size={32} />
    },
    {
      title: "Quality",
      desc: "We use only the highest grade toughened glass and premium hardware to ensure longevity and safety.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="About Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Architecting <br />
            <span className="text-brand-primary italic lowercase font-light">Experiences</span>
          </motion.h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl text-brand-dark uppercase mb-12 leading-tight">
                Beyond <br /><span className="text-brand-primary italic font-light lowercase">Boundaries</span>
              </h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed mb-8">
                At INFIWIN, we believe that architectural spatial design is not just about how a space looks – it's about how it makes you feel. Our mission is to reclaim your outdoor and indoor spaces with frameless precision and unparalleled aesthetics.
              </p>
              <p className="text-neutral-400 text-base font-light leading-relaxed mb-12">
                Founded with a vision to redefine luxury interiors, we have grown into a leading provider of high-performance glass systems. Our approach combines artisan craft with modern technology, ensuring every project is a masterpiece of light and transparency.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-neutral-100">
                <div>
                  <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Vision</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">To be the global benchmark for architectural glass innovation and spatial excellence.</p>
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Mission</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Delivering turnkey excellence through meticulous design and uncompromising quality.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Our Work"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-primary p-12 text-white hidden md:block">
                <p className="text-5xl font-serif mb-2">15+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Legacy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-dark text-white">
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
                <p className="text-5xl md:text-7xl font-serif text-brand-primary mb-4">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-6xl text-brand-dark uppercase">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-sm shadow-sm border border-neutral-100 group hover:border-brand-primary transition-all duration-500"
              >
                <div className="text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl text-brand-dark mb-6 uppercase tracking-widest">{v.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
