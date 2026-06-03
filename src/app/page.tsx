"use client";

import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Telephone as Phone,
  ChatLeftText as MessageSquare,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Display as Monitor,
  House as Home,
  CupHot as Coffee,
  Building as Building2,
  Brush as Paintbrush,
  CheckCircle,
  Shield,
  Layers,
  ChevronLeft,
  ChevronRight,
  Wind,
  ArrowsAngleExpand as Maximize2,
  Stars as Sparkles,
  Eye,
  Cloud,
  Lock,
  Grid3x3
} from 'react-bootstrap-icons';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- Hero Slide Configuration ---
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

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-sans relative bg-white overflow-x-hidden">
      <HeroSection />
      <div className="relative z-10 bg-white">
        <BenefitsSection />
        <BestSellingProductSection />
        <ProductsGridSection selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
        <ApplicationsSection selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
        <TestimonialsSection />
        <LeadFormSection />
        <FAQSection />
      </div>
    </div>
  );
}

// ==========================================
// 1. HERO SECTION
// ==========================================
function HeroSection() {
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-screen min-h-[600px] sm:min-h-[650px] overflow-hidden bg-zinc-950 flex flex-col justify-between pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-12 lg:px-16"
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

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-3">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${activeIndex === i ? 'w-8 bg-brand-primary' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Marquee absolute base at the bottom of Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-full bg-[#4385F5] text-white py-2 text-xs font-bold overflow-hidden select-none border-t border-white/10 shadow-lg">
        <div className="flex w-max animate-marquee">
          <span className="px-6">Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!</span>
          <span className="px-6">Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!</span>
          <span className="px-6">Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!</span>
          <span className="px-6">Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!</span>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. BENEFITS SECTION ("The Slide & Turn Edge")
// ==========================================
function BenefitsSection() {
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
      desc: "Attenuate high-decibel street noises by up to to . Convert chaotic urban balconies into tranquil spaces suited for deep focus and reading.",
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

// ==========================================
// 3. BEST SELLING PRODUCT SECTION
// ==========================================
// ==========================================
// 3. BEST SELLING PRODUCT SECTION
// ==========================================
function BestSellingProductSection() {
  const [activeVariant, setActiveVariant] = useState<'A' | 'B'>('A');

  const variants = {
    A: {
      name: "Full Length Option",
      desc: "Floor to ceiling coverage structure. Spans continuously from the floor straight up to the concrete ceiling line, creating a stunning, seamless floor-to-ceiling glazed sunroom style with direct outdoor views.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png"
    },
    B: {
      name: "Half Length Option",
      desc: "Railing to ceiling / fixed system. Designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png"
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
                <span>MOST POPULAR BEST SELLER</span>
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

const APPLICATION_RECOMMENDATIONS: Record<string, string[]> = {
  "Balcony": ["Slide & Turn System", "Telescopic Slider System"],
  "Int. Partition": ["Bi-fold Glass System", "Centre Open System"],
  "Commercial": ["Telescopic Slider System", "Slide & Turn System"],
  "Exterior": ["3 Track Slider", "Slide & Turn System"],
  "Terrace": ["Slide & Turn System", "Bi-fold Glass System"],
  "Farm House": ["Slide & Turn System", "3 Track Slider"],
  "Office Space": ["Centre Open System", "Bi-fold Glass System"],
  "Garden": ["3 Track Slider", "Telescopic Slider System"]
};

// ==========================================
// 4. PRODUCTS GRID (Vertical Card Stack)
// ==========================================
function ProductsGridSection({ selectedApp, setSelectedApp }: { selectedApp: string | null; setSelectedApp: (app: string | null) => void }) {
  const products = [
    {
      id: "p1",
      title: "Slide & Turn System",
      subtitle: "Balcony Enclosure",
      benefit: "Perfect view maximization with foldaway tracking system layout.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
      href: "/products#folding",
      popular: true,
      popularTag: "Best Seller"
    },
    {
      id: "p2",
      title: "Telescopic Slider System",
      subtitle: "Super Smooth Gliding",
      benefit: "Overlapping glazed sheets for continuous uninterrupted tracks.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_50_39 PM.png",
      href: "/products#sliding"
    },
    {
      id: "p3",
      title: "Centre Open System",
      subtitle: "Split-fold Symmetrical",
      benefit: "Panels partition left and right symmetrically to retain optimal balances.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_29_01 PM.png",
      href: "/products#insulated"
    },
    {
      id: "p4",
      title: "Bi-fold Glass System",
      subtitle: "Premium Partition",
      benefit: "Sleek folding structure for rapid internal partition transition zones.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
      href: "/products#bifold"
    },
    {
      id: "p5",
      title: "2 Track Slider",
      subtitle: "Doors & Windows",
      benefit: "Classic, cost-effective structural system layout with premium hardware profiles.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
      href: "/products#sliding-2track"
    },
    {
      id: "p6",
      title: "3 Track Slider",
      subtitle: "Doors & Windows",
      benefit: "Wider spans of clear structural views integrating bug mesh slider capability.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png",
      href: "/products#sliding-3track"
    }
  ];

  return (
    <section id="products-grid" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Our Product Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
              Explore All Architectural Glass Offerings
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-2xl">
              Select from our 6 major structural builds for standard window heights, door frames, or interior partition boundaries.
            </p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary border-b border-brand-primary/30 pb-1 hover:text-brand-dark hover:border-brand-dark transition-all shrink-0"
          >
            Explore Technical Specs
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Active Filter status banner */}
        {selectedApp && (
          <div className="mb-10 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-brand-dark">
              Displaying product recommendations suitable for: <span className="text-brand-primary font-bold">{selectedApp}</span>
            </p>
            <button
              onClick={() => setSelectedApp(null)}
              className="px-4 py-2 bg-white text-xs font-bold uppercase tracking-wider text-brand-primary border border-brand-primary/20 rounded-full hover:bg-brand-primary hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Show all systems
            </button>
          </div>
        )}

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => {
            const isRecommended = !selectedApp || APPLICATION_RECOMMENDATIONS[selectedApp]?.includes(p.title);
            return (
              <div
                key={p.id}
                className={`group bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${isRecommended
                  ? 'border-neutral-100 opacity-100 scale-100'
                  : 'border-transparent opacity-40 hover:opacity-60 scale-[0.98] blur-[0.5px]'
                  }`}
              >
                {/* Product Image Stack */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {p.popular && (
                    <div className="absolute top-4 left-4 bg-brand-primary text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {p.popularTag}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold text-brand-primary uppercase tracking-widest block mb-2">
                      {p.subtitle}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-2">
                      {p.title}
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {p.benefit}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between border-t border-neutral-50 pt-4 mt-auto">
                    <Link
                      href={p.href}
                      className="text-[10px] font-extrabold text-brand-dark hover:text-brand-primary uppercase tracking-wider transition-colors"
                    >
                      Variants
                    </Link>
                    <a
                      href="#estimator"
                      className="flex items-center gap-1 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all"
                    >
                      Get Price <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. APPLICATIONS SECTION
// ==========================================
function ApplicationsSection({ selectedApp, setSelectedApp }: { selectedApp: string | null; setSelectedApp: (app: string | null) => void }) {
  const apps = [
    {
      name: "Balcony",
      tag: "Residential",
      desc: "Unobstructed frameless premium safety glazing barriers.",
      icon: <Home size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_25_52%20PM.png"
    },
    {
      name: "Int. Partition",
      tag: "Residential",
      desc: "Sleek separation zones for functional multi-use spaces.",
      icon: <Layers size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_15_29%20PM.png"
    },
    {
      name: "Commercial",
      tag: "Commercial",
      desc: "High durability storefront facades & internal partition grids.",
      icon: <Building2 size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_52_36%20PM.png"
    },
    {
      name: "Exterior",
      tag: "Residential",
      desc: "Rigid wind resistance profile constructs for elevations.",
      icon: <Wind size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png"
    },
    {
      name: "Terrace",
      tag: "Residential",
      desc: "Convert open terraces into delightful year-round glass lounges.",
      icon: <Coffee size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png"
    },
    {
      name: "Farm House",
      tag: "Residential",
      desc: "Connect beautiful country landscaping with spacious interiors.",
      icon: <Sparkles size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_27_22%20PM.png"
    },
    {
      name: "Office Space",
      tag: "Commercial",
      desc: "Acoustically isolated conference cubes & manager cabins.",
      icon: <Monitor size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png"
    },
    {
      name: "Garden",
      tag: "Residential",
      desc: "Sleek verandas merging beautiful greenery with indoor thermal comfort.",
      icon: <Paintbrush size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png"
    }
  ];

  const handleAppClick = (appName: string) => {
    setSelectedApp(appName);
    // Smooth scroll to products-grid to see the highlighted offerings
    const el = document.getElementById('products-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Interactive Recommendation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
              Explore Recommended Usages
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-2xl">
              Tap on an application below to immediately highlight the exact glass system variant recommended for that architectural space.
            </p>
          </div>
        </div>

        {/* Active interactive filter status message */}
        {selectedApp && (
          <div className="mb-8 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-brand-dark">
              Displaying product recommendations suitable for: <span className="text-brand-primary font-bold">{selectedApp}</span>
            </p>
            <button
              onClick={() => setSelectedApp(null)}
              className="px-4 py-2 bg-white text-xs font-bold uppercase tracking-wider text-brand-primary border border-brand-primary/20 rounded-full hover:bg-brand-primary hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Show all systems
            </button>
          </div>
        )}

        {/* 8-Application Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {apps.map((a, idx) => {
            const isActive = selectedApp === a.name;
            return (
              <div
                key={idx}
                onClick={() => handleAppClick(a.name)}
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-sm flex flex-col justify-between p-4 sm:p-6 cursor-pointer border transition-all duration-300 bg-zinc-950 ${isActive ? 'border-brand-primary scale-[1.03] ring-4 ring-brand-primary/20' : 'border-neutral-800 hover:scale-[1.01]'
                  }`}
                style={{ backgroundColor: '#09090b' }}
              >
                {/* Image with overlay */}
                <img
                  src={a.img}
                  alt={`${a.name} Application`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-108 z-0 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 group-hover:via-black/45 transition-all duration-300" />

                {/* Icon Container */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center self-end relative z-20">
                  {React.cloneElement(a.icon, { size: 20, className: "text-white" })}
                </div>

                {/* Text Meta (Max 2 lines description) */}
                <div className="relative z-20 mt-auto">
                  <span className="text-[8px] sm:text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-1">
                    {a.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-1">
                    {a.name}
                  </h4>
                  <p className="text-white/80 text-[10px] sm:text-xs leading-snug line-clamp-2 font-medium">
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Base Action CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#estimator"
            className="group inline-flex items-center gap-2 bg-brand-dark text-white hover:bg-brand-primary px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            Get Custom Enclosure Quote For Your Space
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 6. TESTIMONIALS SECTION
// ==========================================
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Devgn",
      role: "DLF Phase 5 Resident",
      text: "The Infiwin Slide & Turn system transformed our 12th-floor balcony in Delhi completely. We get absolute protection from heavy monsoon wind gusts and heavy dust while enjoying a 100% frameless visual landscape. Excellent execution team!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Aman Kapoor",
      role: "VP, Capital Commercial Hub",
      text: "Our office glass partitions look incredibly sleek. We chose the Centre Open system. Not only is the architectural glass high-grade, but the acoustic isolation is also fantastic during important executive board calls.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sneha Mehta",
      role: "Villa Owner, Pune",
      text: "Unbelievable execution. The cost estimator was accurate and the on-ground installers took extreme safety measures to finish the railing fixed glass + Slide & Turn setup in under 5 hours. Outstanding engineering standard.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
            Owner Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            What Our Premium Clients Say
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            We have successfully completed installations spanning major residential developments in Mumbai, Delhi, Bangalore and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                {/* Quote Icon */}
                <span className="text-5xl text-brand-primary/20 font-serif leading-none block h-4 select-none">“</span>
                <p className="text-neutral-600 text-sm leading-relaxed mt-2">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-neutral-50 mt-auto">
                <img
                  src={t.avatar}
                  alt={`${t.name} Portrait`}
                  className="h-12 w-12 rounded-full object-cover border border-neutral-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-neutral-400 text-[10px] uppercase tracking-wider mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. LEAD FORM & COST ESTIMATOR
// ==========================================
function LeadFormSection() {
  const [dimensions, setDimensions] = useState({ length: 10, height: 10 });
  const [estimate, setEstimate] = useState<number | null>(null);

  const [form, setForm] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  // Dynamic cost calculation based on: Length x Height x 1800
  const area = dimensions.length * dimensions.height;
  const rawCost = area * 1800;

  // Auto calculate when sliders change
  useEffect(() => {
    setEstimate(rawCost);
  }, [dimensions.length, dimensions.height]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', city: '' };

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phone.trim().replace(/\D/g, ''))) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
      isValid = false;
    }
    if (!form.city.trim()) {
      newErrors.city = 'Please specify your delivery city';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate submission / trigger success state
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const message = `Hi Infiwin, I am interested in getting a Slide & Turn Balcony System. My approximate dimensions are:
Length: ${dimensions.length} ft
Height: ${dimensions.height} ft
Computed Area: ${area} sq.ft.
Projected Estimate: ₹${rawCost.toLocaleString()}.
Please share your product catalog!`;
    return `https://wa.me/917337074370?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#18181B] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Cost Estimator Column */}
          <div className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
                Instant Pricing Guide
              </span>
              <h3 className="text-3xl font-bold mb-2">
                On-Page System Cost Estimator
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mb-8">
                Enter your customized window/balcony dimensions below. Our system instantly runs the correct calculations using the official formula matrix.
              </p>

              {/* Length Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-white/60 uppercase tracking-wider">📏 Length of Balcony / Window (ft)</span>
                  <span className="font-bold text-brand-primary text-sm">{dimensions.length} ft</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={dimensions.length}
                  onChange={(e) => setDimensions(prev => ({ ...prev, length: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>Min: 4 ft</span>
                  <span>Max: 50 ft</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-white/60 uppercase tracking-wider">📐 Height of Balcony / Window (ft)</span>
                  <span className="font-bold text-brand-primary text-sm">{dimensions.height} ft</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  value={dimensions.height}
                  onChange={(e) => setDimensions(prev => ({ ...prev, height: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>Min: 3 ft</span>
                  <span>Max: 15 ft</span>
                </div>
              </div>
            </div>

            {/* Display Calculated Cost */}
            {estimate !== null && (
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-4 border-b border-white/5 pb-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-0.5 font-bold">Calculated Area</div>
                    <div className="text-base font-bold text-white">{area} sq.ft.</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-0.5 font-bold">Base Unit Price</div>
                    <div className="text-base font-bold text-white">₹1,800 / sq.ft</div>
                  </div>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1 font-bold">
                  Your Approximate Cost:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3">
                  ₹{estimate.toLocaleString()}
                </div>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  <span className="text-white/70 font-semibold">Legalese Disclaimer Note:</span> + Installation Charges. All final quotes exclude regional local taxes & physical freight charges.
                </p>
              </div>
            )}
          </div>

          {/* Lead Form Column */}
          <div className="bg-white text-zinc-900 rounded-3xl p-8 flex flex-col justify-between border border-neutral-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-brand-primary" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-950 mb-2">Thank You! Request Received</h4>
                <p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                  Your custom estimation metrics have been logged successfully. An Infiwin executive will call you within 15 minutes to confirm logistics.
                </p>
                <div className="w-full border-t border-neutral-100 pt-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">OR CHAT DIRECTLY</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider py-4.5 px-8 rounded-full shadow-lg transition-all duration-300 w-full min-h-[48px]"
                  >
                    <MessageSquare size={16} /> Get Instant Price via WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                    Lock-In Your Deal Price
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Fill out this quick 3-field layout to request our premium catalog along with architectural assistance.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-transparent text-zinc-900 placeholder:text-neutral-350"
                      placeholder="eg. Rajesh Sharma"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone Input with Numeric Keypad */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Phone Number
                    </label>
                    <div className="flex items-center border-b border-neutral-200 focus-within:border-brand-primary transition-colors">
                      <span className="text-sm font-semibold text-neutral-500 pr-2 select-none">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={form.phone}
                        onChange={handleInputChange}
                        className="w-full py-3 text-sm focus:outline-none bg-transparent text-zinc-900 placeholder:text-neutral-350"
                        placeholder="73370 74370"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* City Input */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Your Location City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-transparent text-zinc-900 placeholder:text-neutral-350"
                      placeholder="eg. Noida, Delhi, Gurgaon"
                    />
                    {errors.city && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.city}</p>}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-brand-dark hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 min-h-[48px] cursor-pointer"
                  >
                    🚀 Request Quote & Call Back
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-neutral-100"></div>
                    <span className="flex-shrink mx-4 text-[9px] font-extrabold uppercase tracking-widest text-neutral-400">OR CHAT DIRECTLY</span>
                    <div className="flex-grow border-t border-neutral-100"></div>
                  </div>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4.5 border border-green-500 text-green-500 hover:bg-green-50 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <MessageSquare size={14} /> Get Instant Price via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. FAQ ACCORDION SECTION
// ==========================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the standard base price for installation of Slide & Turn glass?",
      a: "Our baseline starting price for premium architectural systems is approximately ₹1,800/sq.ft. This calculation incorporates elite double-tempered structural safety glass, premium heavy-gauge aluminum support rails, customized weatherproof locking rubber seals, and baseline engineering fitting charges. Freight and government taxes are determined additionally based on shipping distance."
    },
    {
      q: "How do Full Length versus Half Length variants differ?",
      a: "Full Length structures span continuously from the floor straight up to the concrete ceiling line. Half Length systems are designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it."
    },
    {
      q: "Are frameless glass structures totally waterproof during heavy monsoon seasons?",
      a: "Yes! Infiwin systems feature inter-pane H-profiles containing customized translucent polymer seals designed to block intense windblown rain completely. Our design profiles feature integrated lower drain holes that successfully transport any minor moisture out towards the exterior facade."
    },
    {
      q: "What type of glass is used in fabrication?",
      a: "We use high-grade 10mm or 12mm double-tempered structural glass sheets that are extremely robust. This glass is structurally rated to withstand massive high-altitude wind pressure loads and is impact-resistant for complete home safety."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
            Common Queries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            Everything you need to know about Infiwin product specifications, warranties, and structural calculations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-neutral-100 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-dark pr-4">
                    {faq.q}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
