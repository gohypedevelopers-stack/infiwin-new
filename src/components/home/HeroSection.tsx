"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Grid3x3 } from 'react-bootstrap-icons';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Frameless Panoramic Living",
    subtitle: "INFIWIN SYSTEMS",
    tagline: "Experience open-air freedom with premium folding glass balcony systems. Reclaim your space with 100% clear openings and uninterrupted views.",
    badge: "100% Clear Opening",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png",
  },
  {
    id: 2,
    title: "Slide & Turn Systems",
    subtitle: "BEST-SELLING SYSTEM",
    tagline: "Unmatched flexibility for balconies and terraces. Individual panels slide and pivot to stack neatly out of sight against the wall.",
    badge: "Most Popular",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png",
  },
  {
    id: 3,
    title: "Acoustic Office Partitions",
    subtitle: "CORPORATE GLASSHOUSES",
    tagline: "Create focused work environments with premium frameless partitions. Elegant aesthetics met with high acoustic control.",
    badge: "Toughened Safety Glass",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png",
  },
  {
    id: 4,
    title: "Smart Bioclimatic Pergolas",
    subtitle: "OUTDOOR ARCHITECTURE",
    tagline: "All-weather comfort with IOT-integrated motorized smart roofs. Complete control over ventilation, sunlight, and rain protection.",
    badge: "ISO 9001 Certified",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section
      className="relative w-full h-screen min-h-[600px] sm:min-h-[650px] overflow-hidden bg-zinc-950 flex flex-col justify-between pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-12 lg:px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 6, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[activeIndex].img}
              alt="Infiwin Frameless Glazing"
              className="w-full h-full object-cover brightness-[0.6]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-[750px] mt-4 md:mt-8">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-primary bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold self-start mb-4 md:mb-6">
          Frameless Glazing Redefined
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Breathtaking Views,<br />
          Uncompromised Protection
        </h1>

        <p className="text-white/90 text-sm sm:text-lg md:text-xl font-medium leading-[1.5] max-w-[620px] mb-6 md:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          Infiwin manufactures premier Slide & Turn frameless glass balcony enclosures. Extend your home space with architectural glass walls.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2 md:mt-4">
          <a
            href="#estimator"
            className="group inline-flex items-center justify-center gap-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-brand-primary/20 hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Calculate Cost Instantly
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a
            href="#products-grid"
            className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 sm:px-6 sm:py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            <Grid3x3 size={13} className="text-white group-hover:text-black" />
            Explore Products
          </a>
        </div>
      </div>

      {/* Carousel Dots & Trust Badges */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4 mt-4 pb-12 md:pb-12">
        {/* Trust Indicators / Live Proof Statistics */}
        <div className="grid grid-cols-3 gap-2 w-full md:flex md:w-auto md:flex-wrap md:items-center md:gap-12 text-white">
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-wider font-bold">Starting Price</span>
            <span className="text-sm sm:text-xl font-extrabold text-brand-primary">₹1,800</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-wider font-bold">Rain & Wind</span>
            <span className="text-sm sm:text-xl font-extrabold text-brand-primary">100%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-wider font-bold">Warranty</span>
            <span className="text-sm sm:text-xl font-extrabold text-brand-primary">10+ Yrs</span>
          </div>
        </div>

        {/* Carousel Indicators (Thumbnails) */}
        <div className="flex items-center justify-center gap-3 md:gap-4">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 cursor-pointer border-2 ${
                activeIndex === i 
                  ? 'w-20 h-16 sm:w-32 sm:h-20 border-brand-primary scale-110 shadow-lg z-10' 
                  : 'w-16 h-12 sm:w-24 sm:h-16 border-white/20 hover:border-white/60 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Slide ${i + 1}`}
            >
              <img 
                src={slide.img} 
                alt={`Thumbnail ${i + 1}`} 
                className="w-full h-full object-cover"
              />
              {activeIndex !== i && (
                <div className="absolute inset-0 bg-black/40" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Marquee absolute base at the bottom of Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-full bg-[#4385F5] text-white py-2 text-xs font-bold overflow-hidden select-none border-t border-white/10 shadow-lg">
        <div className="flex w-max animate-marquee">
          {Array.from({ length: 16 }).map((_, idx) => (
            <span key={idx} className="px-6 whitespace-nowrap shrink-0">
              Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
