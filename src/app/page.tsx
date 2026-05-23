"use client";

import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Monitor,
  Home,
  Coffee,
  Building2,
  HardHat,
  Paintbrush,
  CheckCircle,
  User,
  Brain,
  Flower2,
  Heart,
  MoreHorizontal,
  ArrowLeft,
  Mouse
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// --- Components ---



const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Panoramic Living",
      location: "DUBAI",
      tagline: "Create brighter living spaces with precision glass systems that open interiors to wide views, natural light, and a refined sense of calm.",
      price: "From $2,500",
      duration: "4-Week Turnkey",
      img: "/hero/one.png",
    },
    {
      id: 2,
      title: "Sereno Facade",
      location: "TUSCANY",
      tagline: "Bring timeless facades to life with modern glazing, clean profiles, and weather-ready performance designed for elegant residential architecture.",
      price: "From $4,200",
      duration: "6-Week Install",
      img: "/hero/two.png",
    },
    {
      id: 3,
      title: "Noir Workspace",
      location: "LONDON",
      tagline: "Shape focused work environments with premium partitions, acoustic comfort, and a polished architectural finish that supports productivity every day.",
      price: "From $3,100",
      duration: "3-Week Turnkey",
      img: "/hero/three.png",
    },
    {
      id: 4,
      title: "Atrium Divider",
      location: "LONDON",
      tagline: "Define open interiors without closing them off, using slim glass dividers that preserve daylight, visibility, and spatial flow.",
      price: "From $1,800",
      duration: "2-Week Install",
      img: "/hero/four.png",
    },
    {
      id: 5,
      title: "Glaze Pavilion",
      location: "SINGAPORE",
      tagline: "Build standout pavilions with structural glass detailing, seamless transitions, and durable systems made for premium indoor-outdoor experiences.",
      price: "From $5,500",
      duration: "8-Week Custom",
      img: "/hero/five.png",
    }
  ];

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isHovered]);

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-screen min-h-screen overflow-hidden bg-zinc-950 flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 lg:px-16"
    >
      {/* Structural ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Dynamic Immersive Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }, scale: { duration: 5.8, ease: "linear" } }}
            className="absolute inset-0"
          >
            <img
              src={slides[activeIndex].img}
              alt={slides[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Tagline */}
      <div className="relative z-20 self-start opacity-0 pointer-events-none transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-bold">
          INFIWIN ARCHITECTURAL SYSTEMS
        </span>
      </div>

      {/* Center Text Section */}
      <div className="absolute z-20 left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 max-w-[620px] flex flex-col items-start gap-3 md:gap-4">
        <div className="overflow-hidden">
          <motion.h1
            key={`title-${activeIndex}`}
            initial={{ y: 56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[0.98] font-sans drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)]"
          >
            {slides[activeIndex].title}
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p
            key={`tagline-${activeIndex}`}
            initial={{ y: 38, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/85 text-base sm:text-lg md:text-xl max-w-[560px] font-semibold leading-[1.55] drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]"
          >
            {slides[activeIndex].tagline}
          </motion.p>
        </div>

        <motion.div
          key={`actions-${activeIndex}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="hidden"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-brand-primary/25 hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300"
          >
            Consult Now <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <div className="flex flex-col text-[10px] text-white/50 tracking-wider font-semibold uppercase gap-0.5 border-l border-white/20 pl-4 sm:pl-6 py-0.5">
            <span className="text-white/80">{slides[activeIndex].location} SERIES</span>
            <span>{slides[activeIndex].duration}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar Controls */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-end justify-between gap-5 md:gap-8">
        {/* Left: Interactive Thumbnail Carousel */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full md:max-w-[58%] lg:max-w-[56%]">
          {slides.map((slide, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(i)}
                className={`relative shrink-0 overflow-hidden cursor-pointer transition-all duration-500 bg-neutral-900 border focus:outline-none rounded-[8px] ${
                  isActive
                    ? 'w-[122px] h-[70px] sm:w-[124px] sm:h-[70px] border-white shadow-2xl z-30 opacity-100'
                    : 'w-[122px] h-[70px] sm:w-[124px] sm:h-[70px] border-white/15 opacity-70 hover:opacity-100 hover:border-white/40'
                }`}
                style={{
                  transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/0' : 'bg-black/25'}`} />
                
                {/* Subtle hover status bar/border inside */}
                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 border-2 border-white rounded-[8px] z-40 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Dynamic Pagination Indicators & Circular Navigation Chevrons */}
        <div className="flex items-center gap-5 shrink-0 self-end">
          {/* Pagination Indicators (Dots / Pills) */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`focus:outline-none transition-all duration-500 cursor-pointer rounded-full ${
                    isActive
                      ? 'w-5 h-1.5 bg-white opacity-100'
                      : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/75'
                  }`}
                />
              );
            })}
          </div>

          {/* Navigation Buttons (Circular glassmorphic chevrons) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-10 h-10 rounded-full bg-white/20 border border-white/10 hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center cursor-pointer text-white focus:outline-none backdrop-blur-md"
            >
              <ChevronLeft size={18} className="stroke-[1.75]" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
              className="w-10 h-10 rounded-full bg-white/20 border border-white/10 hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center cursor-pointer text-white focus:outline-none backdrop-blur-md"
            >
              <ChevronRight size={18} className="stroke-[1.75]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BestSellingProduct = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden border-y border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* LEFT COLUMN: Takes 7 grid cols. Replicates the "Interior Design" overlapping side-by-side layout */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-end relative w-full">
            
            {/* Paragraph Block on the Left (aligned top) */}
            <div className="w-full md:w-[40%] self-start md:pt-12 mb-8 md:mb-20">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-neutral-500 text-xs md:text-sm leading-relaxed max-w-[280px]"
              >
                At INFIWIN, we believe that architectural spatial design is not just about how a space looks – it's about how it makes you feel.
              </motion.p>
            </div>

            {/* Video Container (Vertical aspect, right side) */}
            <div className="w-full md:w-[60%] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 rounded-[24px] border-4 border-white shadow-xl group relative"
              >
                <video
                  src="/extracted_assets/Website/Video/S&T/VID-20230316-WA0010.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Massive Overlapping Title: "Slide & Turn" */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Georgia, serif' }}
              className="absolute bottom-[-24px] md:bottom-[-40px] left-0 text-6xl md:text-8xl xl:text-[110px] font-light leading-[0.85] text-brand-dark tracking-tighter z-20 select-none"
            >
              Slide & <br />
              <span className="text-brand-primary">Turn</span>
            </motion.h2>
          </div>

          {/* RIGHT COLUMN: Takes 5 grid cols. Replicates the "Recent Work" and second picture column */}
          <div className="lg:col-span-5 flex flex-col gap-10 w-full mt-12 lg:mt-0">
            
            {/* Header Text Block */}
            <div className="flex flex-col items-start gap-4 max-w-md">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-brand-primary" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase">
                  Featured System
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-2xl md:text-3xl font-light text-brand-dark leading-snug tracking-tight"
              >
                We Will Make These Unique Tastes Of Yours A <span className="text-brand-primary">Design Reality!</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="pt-2"
              >
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-lg shadow-brand-primary/20 hover:bg-brand-dark hover:shadow-brand-dark/20 hover:scale-[1.02] transition-all duration-300"
                >
                  View Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Second Image Block (aligned below) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-full aspect-[4/3] overflow-hidden bg-neutral-100 rounded-[24px] border-4 border-white shadow-xl relative group"
            >
              <img
                src="/extracted_assets/Website/Images/S&T/Hotel Penensula/IMG-20230416-WA0001.jpg"
                alt="Slide & Turn System Showcase"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ApplicationsSection = () => {
  const apps = [
    {
      name: "Balcony",
      tag: "Panoramic Outer Spaces",
      number: "01",
      icon: <Home size={32} />,
      img: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20211126-WA0001.jpg"
    },
    {
      name: "Int. Partition",
      tag: "Frameless Glass Dividers",
      number: "02",
      icon: <Building2 size={32} />,
      img: "/extracted_assets/Website/Images/Offics/IMG-20260112-WA0007.jpg"
    },
    {
      name: "Office space",
      tag: "Corporate Acoustic Systems",
      number: "03",
      icon: <Monitor size={32} />,
      img: "/extracted_assets/Website/Images/Offics/IMG-20210310-WA0002.jpg"
    },
    {
      name: "Commercial",
      tag: "Storefront Glass Systems",
      number: "04",
      icon: <Building2 size={32} />,
      img: "/extracted_assets/Website/Images/S&T/Hotel Penensula/IMG-20230416-WA0001.jpg"
    },
    {
      name: "Exterior",
      tag: "Climatic Shield Enclosures",
      number: "05",
      icon: <MapPin size={32} />,
      img: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4395.JPG"
    },
    {
      name: "Terrace",
      tag: "All-Weather Glazing",
      number: "06",
      icon: <Coffee size={32} />,
      img: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20240605-WA0011.jpg"
    },
    {
      name: "Garden",
      tag: "Modern Spatial Boundaries",
      number: "07",
      icon: <Paintbrush size={32} />,
      img: "/extracted_assets/Website/Images/S&T/Open Tap/IMG-20231009-WA0004.jpg"
    },
    {
      name: "Farm House",
      tag: "Luxury Country Retreats",
      number: "08",
      icon: <Home size={32} />,
      img: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4402.JPG"
    }
  ];

  return (
    <section
      id="applications"
      className="py-16 md:py-20 bg-white relative overflow-visible"
    >
      {/* Soft Architectural Grid Background and Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-2 block">Usage</span>
          <h2 className="text-4xl md:text-5xl text-brand-dark tracking-tight">
            Applications
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-10px_rgba(67,133,245,0.15)] hover:scale-[1.02] p-5 md:p-6 flex flex-col justify-between items-start"
            >
              {/* Background Image with Zoom */}
              <img
                src={app.img}
                alt={app.name}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 -z-20"
              />

              {/* Dark Ambient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 group-hover:from-black/90 group-hover:via-black/55 group-hover:to-black/35 transition-all duration-500 -z-10" />

              {/* Header: Number and Styled Icon */}
              <div className="flex justify-between items-start w-full relative z-10">
                <span className="text-[11px] font-mono text-white/50 group-hover:text-brand-primary transition-colors font-medium">
                  {app.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/15 text-white backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-brand-primary group-hover:rotate-[360deg] group-hover:shadow-lg group-hover:shadow-brand-primary/30">
                  {React.cloneElement(app.icon, { size: 18 })}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="w-full relative z-10">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/60 font-bold group-hover:text-brand-primary transition-colors mb-1.5 block">
                  {app.tag}
                </span>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white transition-colors">
                  {app.name}
                </h4>
              </div>

              {/* Floating Action Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white group-hover:text-brand-primary z-10">
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadFormSection = () => {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ length: 10, height: 10 });

  const calculateEstimate = () => {
    const area = dimensions.length * dimensions.height;
    setEstimate(area * 1800);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#18181b] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block">Inquiry</span>
            <h2 className="text-5xl md:text-7xl mb-6 leading-tight">Start Your <br /><span className="text-brand-primary" style={{ textTransform: 'none' }}>Project</span></h2>

            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 border border-white/10 rounded-sm mb-6">
              <h4 className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">Quick Cost Estimator</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-white/50 block mb-1">Length (ft)</label>
                  <input
                    type="number"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-white/50 block mb-1">Height (ft)</label>
                  <input
                    type="number"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
              <button
                onClick={calculateEstimate}
                className="w-full py-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Calculate Estimate
              </button>

              {estimate && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Approximate Cost</p>
                  <p className="text-3xl text-brand-primary mb-2">₹{estimate.toLocaleString()} + Installation</p>
                  <p className="text-[8px] text-white/30">Excluding taxes & freight charges</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-sm text-brand-dark">
            <h3 className="text-2xl mb-4">Contact Information</h3>
            <form className="space-y-4">
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Full Name</label>
                <input type="text" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Phone Number</label>
                <input type="tel" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">City</label>
                <input type="text" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="pt-4 space-y-4">
                <button className="w-full py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all">
                  Submit Request
                </button>
                <a href="https://wa.me/971542365212" target="_blank" className="w-full py-5 border border-green-500 text-green-500 text-[10px] font-bold uppercase tracking-widest hover:bg-green-50 transition-all flex items-center justify-center gap-2">
                  <Phone size={14} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Consultation", desc: "Understanding your vision and spatial objectives." },
    { title: "Strategy", desc: "Meticulous planning and material curation." },
    { title: "Creation", desc: "Execution with uncompromising precision." },
    { title: "Curatorship", desc: "Final refinement and seamless handover." }
  ];

  return (
    <section className="py-24 bg-white border-y border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-neutral-100 text-8xl absolute -top-8 -left-4 z-0 select-none">
                0{i + 1}
              </span>
              <div className="relative z-10 pt-10">
                <h3 className="text-lg text-brand-dark mb-4 uppercase tracking-widest">{step.title}</h3>
                <p className="text-neutral-400 text-sm font-normal leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: "p1",
      title: "Folding Glass Balcony Systems",
      desc: "100% clear opening with seamless frameless views.",
      series: "BALCONY SERIES",
      img: "/hero/balcony.png",
    },
    {
      id: "p2",
      title: "Insulated Glass Balcony Systems",
      desc: "Superior thermal comfort for extreme climates.",
      series: "THERMAL SERIES",
      img: "/products/insulated.png",
    },
    {
      id: "p3",
      title: "Sliding Glass Systems",
      desc: "Smooth multi-track transitions for patios and terraces.",
      series: "SLIDER SERIES",
      img: "/products/sliding.png",
    },
    {
      id: "p4",
      title: "Guillotine Glass Systems",
      desc: "Motorized vertical sliding systems for modern cafes.",
      series: "MOTORIZED SERIES",
      img: "/products/guillotine.png",
    },
    {
      id: "p5",
      title: "Bioclimatic Pergola",
      desc: "IoT-enabled smart roof for ultimate light control.",
      series: "SMART ROOF",
      img: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4402.JPG",
    }
  ];

  return (
    <section id="products" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-brand-primary mb-2 block">Our Systems</span>
            <h2 className="text-4xl md:text-5xl text-brand-dark tracking-tight">
              Products Grid
            </h2>
          </div>
          <a href="/products" className="hidden md:flex items-center gap-4 px-8 py-3 border border-neutral-200 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-50 transition-all">
            View All <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Row: P1, P2, P3 */}
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
            {products.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === p.id ? 2 : hoveredId ? 0.6 : (i === 0 ? 1.5 : 0.8)
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-0"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 bg-white border border-neutral-100 shadow-md text-[9px] font-extrabold text-brand-dark rounded-full uppercase tracking-wider">
                    {p.series}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 text-white max-w-[280px]">
                  <h3 className="text-lg lg:text-xl mb-3 leading-tight font-semibold">{p.title}</h3>
                  {i === 0 && (
                    <motion.p
                      animate={{ opacity: hoveredId === p.id || !hoveredId ? 1 : 0 }}
                      className="text-white/60 text-[8px] uppercase tracking-widest font-normal hidden lg:block"
                    >
                      {p.desc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: P4, P5 */}
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[380px]">
            {products.slice(3, 5).map((p) => (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === p.id ? 1.5 : hoveredId ? 0.7 : 1
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-0"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 bg-white border border-neutral-100 shadow-md text-[9px] font-extrabold text-brand-dark rounded-full uppercase tracking-wider">
                    {p.series}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-lg lg:text-xl font-semibold">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: "p06",
      category: "Residential",
      title: "Balcony Glazing",
      location: "DUBAI, 2025",
      img: "/hero/balcony.png",
    },
    {
      id: "p07",
      category: "Villa",
      title: "Patio Glazing",
      location: "DUBAI, 2025",
      img: "/hero/patio.png",
    },
    {
      id: "p01",
      category: "Residential",
      title: "Panoramic Living Suite",
      location: "DUBAI, 2025",
      img: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4395.JPG",
    },
    {
      id: "p02",
      category: "Villa",
      title: "Sereno Facade",
      location: "TUSCANY, 2024",
      img: "/extracted_assets/Website/Images/S&T/Hotel Penensula/IMG-20230416-WA0001.jpg",
    },
    {
      id: "p03",
      category: "Commercial",
      title: "Noir Workspace",
      location: "LONDON, 2025",
      img: "/extracted_assets/Website/Images/Offics/IMG-20260112-WA0007.jpg",
    },
    {
      id: "p04",
      category: "Interior",
      title: "Serra Niche",
      location: "MALLORCA, 2024",
      img: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20250312-WA0028.jpg",
    },
    {
      id: "p05",
      category: "Partition",
      title: "Atrium Divider",
      location: "LONDON, 2025",
      img: "/extracted_assets/Website/Images/Offics/IMG-20210310-WA0002.jpg",
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollStep = 440; // Card width + gap
      const newScroll = direction === 'left'
        ? Math.max(scrollAmount - scrollStep, 0)
        : Math.min(scrollAmount + scrollStep, (filteredProjects.length * 440) - containerWidth);

      setScrollAmount(newScroll);
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#f0f7ff] overflow-hidden relative border-t border-neutral-50">
      {/* Architectural Background Sketch */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-[0.5] pointer-events-none select-none">
        <img
          src="/WhatsApp%20Image%202026-05-12%20at%205.30.55%20PM.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f0f7ff]" />
      </div>


      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-8">
          <div className="max-w-2xl relative">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary block">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-7xl text-brand-dark leading-[1] font-semibold">
              Excellence in <br />
              <span className="text-brand-primary">Execution</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {["All", "Commercial", "Residential", "Interior", "Villa"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveFilter(tab);
                  setScrollAmount(0);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0 });
                }}
                className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2 border rounded-full transition-all ${activeFilter === tab ? 'bg-brand-dark text-white border-brand-dark' : 'text-brand-dark border-neutral-300 hover:border-brand-primary hover:text-brand-primary hover:bg-white/50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4 -mx-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <motion.div
              drag="x"
              dragConstraints={carouselRef}
              className="flex gap-6 pb-4"
              style={{ width: 'max-content' }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[300px] md:w-[420px] aspect-[4/5] relative group/card cursor-pointer rounded-none overflow-hidden bg-neutral-100"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1.5 bg-white/95 text-[8px] font-bold uppercase tracking-widest text-brand-dark rounded-none shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-2 block">
                      {project.location}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-10 right-10 w-12 h-12 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500 -translate-y-4 group-hover/card:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Drag to explore</span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-none border border-neutral-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight size={18} className="rotate-180" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-none border border-neutral-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I wanted to take a moment to express my gratitude for the exemplary effort and dedication that you and your team put into completing our project (Gerard Cafe at Adnoc station - Ajman) successfully and efficiently. Your attention to detail, creativity, and design truly shone through every step of the way.",
      name: "Ahmad Masarani",
      role: "Gerard Cafe",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      logo: "https://mattermind.ae/wp-content/uploads/2023/06/gerard-logo.png"
    },
    {
      text: "Collaborating with INFIWIN has been truly seamless. Their expertise, attention to detail, and deep understanding of our vision have consistently stood out. Their professionalism and ease of working together make every project a delightful experience.",
      name: "Naseem Abdul Khader",
      role: "Al Rumooz Central Kitchen Equipment Installation LLC",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    },
    {
      text: "INFIWIN truly exceeded our expectations with their impeccable execution of the full fit out project of our new restaurant at Khalidiyah Mall. Their professionalism, creative approach, and timely completion showcased their commitment.",
      name: "Haris Kunnumpurath",
      role: "Tandooriya Dhaba",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: W (Cursive) + HAT (Gold) */}
            <div
              className="text-3xl md:text-5xl tracking-[0.1em] text-brand-primary flex justify-center items-center"
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal"
                style={{ textTransform: 'none' }}
              >
                W
              </motion.span>
              {"hat".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bottom Line: CUSTOMERS SAY (Black) */}
            <div
              className="text-4xl md:text-6xl tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
            >
              {"customers say".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block whitespace-pre"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:divide-x divide-brand-primary/30">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 flex flex-col items-start"
            >
              {/* Quote Mark */}
              <div className="mb-4 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-primary">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>

              <p className="text-brand-dark/80 text-sm leading-relaxed mb-6 text-left h-full">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-brand-primary/10 w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/20 shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-brand-primary font-bold text-sm leading-tight">{t.name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-normal">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-6 flex flex-col items-center bg-neutral-50/50 rounded-lg border border-neutral-100"
            >
              <div className="mb-4 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-primary">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed mb-6 text-center">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex flex-col items-center gap-4 mt-auto w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/20 shrink-0">
                  <img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h5 className="text-brand-primary font-bold text-sm leading-tight">{testimonials[currentIndex].name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-normal mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-brand-primary w-6' : 'bg-brand-primary/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = [
    { name: "Client 01", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-01.png" },
    { name: "Client 02", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-02.png" },
    { name: "Americana", logo: "https://mattermind.ae/wp-content/themes/meiveda/images/americana-logo-1.png" },
    { name: "Client 03", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-03.png" },
    { name: "Client 04", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-04.png" },
    { name: "Client 05", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-05.png" },
    { name: "Client 07", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-07.png" },
    { name: "Client 19", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-19.png" },
    { name: "Client 21", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-21.png" },
    { name: "CA Logo", logo: "https://mattermind.ae/wp-content/uploads/2024/12/ca-logo.png" },
    { name: "Client 17", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-17.png" },
    { name: "Client 18", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-18.png" },
    { name: "Client 08", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-08.png" },
    { name: "Client 13", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-13.png" },
    { name: "Client 14", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-14.png" },

  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-primary/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-32 relative">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block select-none leading-[0.85]"
            >
              {/* Top Line: O (Cursive) + UR (Gold) */}
              <div
                className="text-3xl md:text-5xl tracking-[0.1em] text-brand-primary flex justify-center items-center"
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-normal"
                  style={{ textTransform: 'none' }}
                >
                  O
                </motion.span>
                {"ur".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Bottom Line: CLIENTS (Black) */}
              <div
                className="text-4xl md:text-6xl tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
              >
                {"clients".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden border-y border-brand-dark/5 py-12 bg-white flex">
        <div className="flex w-max animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-12 md:px-20 group h-24"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-auto h-16 object-contain transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f9f9f8&color=c29d59&size=128`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestProjectsSection = () => {
  const projects = [
    { name: "ROLEX BOUTIQUE", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
    { name: "APPLE INNOVATION CENTER", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
    { name: "MINIMALIST DESIGN STUDIO", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { name: "COSTA COFFEE", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative gap-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: L (Cursive) + ATEST (Gold) */}
            <div
              className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-primary flex justify-start items-center"
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal"
                style={{ textTransform: 'none' }}
              >
                L
              </motion.span>
              {"atest".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bottom Line: PROJECTS (Black) */}
            <div
              className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-start items-center text-black"
            >
              {"PROJECTS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h2>

          <a href="#" className="flex items-center gap-4 text-brand-primary font-medium border-b border-brand-primary pb-1 group hover:text-black hover:border-black transition-all mb-4">
            View All Projects <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-x-0 bottom-8 text-center">
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-lg">{project.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PMCSection = () => {
  const steps = [
    { title: 'Project Strategy', desc: 'Comprehensive feasibility and fiscal planning.' },
    { title: 'Procurement', desc: 'Direct sourcing from an elite global network of artisans.' },
    { title: 'Technical Oversight', desc: 'Rigorous quality control and engineering precision.' }
  ];

  return (
    <section id="pmc" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-[1px] w-12 bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-primary block">
                Consultancy Excellence
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl mb-12 uppercase leading-[1] font-semibold"
            >
              The Science <br />
              <span className="text-neutral-500">of Execution</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-base md:text-lg font-normal leading-relaxed mb-16 max-w-xl"
            >
              Our Project Management Consultancy provides a singular point of accountability. we orchestrate every technical detail, ensuring your vision is realized without compromise.
            </motion.p>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-8 pb-8 border-b border-white/5 hover:border-brand-primary transition-colors duration-500"
                >
                  <span className="text-brand-primary text-2xl opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <div>
                    <h4 className="text-white text-lg mb-2 uppercase tracking-widest">{step.title}</h4>
                    <p className="text-neutral-500 text-sm font-normal">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img
              src="/extracted_assets/Website/Images/Offics/IMG-20210309-WA0018.jpg"
              alt="Engineering Precision"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brand-dark/20" />
            <div className="absolute top-10 right-10 flex flex-col items-end">
              <span className="text-[9px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-2">Technical Detail</span>
              <div className="h-[1px] w-12 bg-brand-primary/50" />
              <p className="text-white/60 text-[8px] mt-2 max-w-[120px] text-right leading-relaxed">
                Meticulous blueprinting and engineering oversight for complex retail fit-outs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GlazingSolutionsSection = () => {
  return (
    <section className="bg-white overflow-visible border-b border-neutral-100">
      <div className="w-full">

        {/* Card 1: Balcony Glazing */}
        <div className="sticky top-20 w-full bg-white border-b border-neutral-100 py-16 md:py-24 px-6 md:px-12 xl:px-16 transition-all duration-500 z-10">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-2 block">
                Architectural Series
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold text-brand-dark mb-5 leading-[1.1] tracking-tight">
                Balcony Glazing
              </h2>
              <p className="text-neutral-500 text-base md:text-lg font-normal leading-relaxed mb-6 max-w-md">
                Learn more about the INFIWIN Balcony Glazing. All the benefits, planning and see what other customers worldwide have done and get inspired.
              </p>
              <a
                href="/products#balcony"
                className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white bg-brand-primary px-10 py-4 rounded-full shadow-lg shadow-brand-primary/20 hover:bg-brand-dark hover:shadow-brand-dark/20 hover:scale-[1.02] transition-all"
              >
                Balcony Glazing <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Right: Image Container */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-primary/5 rounded-full blur-[80px] -z-10 animate-pulse" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[600px] aspect-[4/3] rounded-[24px] overflow-hidden border-4 border-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.15)] bg-neutral-100 group"
              >
                <img
                  src="/hero/balcony.png"
                  alt="Balcony Glazing"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Card 2: Patio Glazing */}
        <div className="sticky top-20 w-full bg-white border-b border-neutral-100 py-16 md:py-24 px-6 md:px-12 xl:px-16 transition-all duration-500 z-20">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-2 block">
                Outdoor Spatial Systems
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold text-brand-dark mb-5 leading-[1.1] tracking-tight">
                Patio Glazing
              </h2>
              <p className="text-neutral-500 text-base md:text-lg font-normal leading-relaxed mb-6 max-w-md">
                See how our glazing systems turn unused outdoor places into inspiring and stylish spaces to add more room for life in your home.
              </p>
              <a
                href="/products#patio"
                className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white bg-brand-primary px-10 py-4 rounded-full shadow-lg shadow-brand-primary/20 hover:bg-brand-dark hover:shadow-brand-dark/20 hover:scale-[1.02] transition-all"
              >
                Patio Glazing <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Right: Image Container */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-primary/5 rounded-full blur-[80px] -z-10 animate-pulse" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[600px] aspect-[4/3] rounded-[24px] overflow-hidden border-4 border-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.15)] bg-neutral-100 group"
              >
                <img
                  src="/hero/patio.png"
                  alt="Patio Glazing"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Main Page ---
export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-sans relative bg-white">
      <Hero isLoaded={true} />

      {/* Main Content Wrapper - No more sticky overlap */}
      <div className="relative z-10 bg-white">
        <BestSellingProduct />
        <GlazingSolutionsSection />
        <ProductsGrid />
        <PortfolioSection />
        <ApplicationsSection />
        <Testimonials />
        <LeadFormSection />
      </div>
    </div>
  );
}



