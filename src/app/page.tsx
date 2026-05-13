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
  ChevronRight,
  ArrowUpRight,
  Monitor,
  Home,
  Coffee,
  Building2,
  HardHat,
  Paintbrush,
  CheckCircle
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
      tagline: "Unobstructed horizons meet minimalist precision.",
      price: "From $2,500",
      duration: "4-Week Turnkey",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Sereno Facade",
      location: "TUSCANY",
      tagline: "Harmonizing classic villa aesthetics with modern technology.",
      price: "From $4,200",
      duration: "6-Week Install",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Noir Workspace",
      location: "LONDON",
      tagline: "Moody, executive environments architected for focus.",
      price: "From $3,100",
      duration: "3-Week Turnkey",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Atrium Divider",
      location: "LONDON",
      tagline: "Sculpting internal spaces through light and transparency.",
      price: "From $1,800",
      duration: "2-Week Install",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Glaze Pavilion",
      location: "SINGAPORE",
      tagline: "Luxury pavilions defined by structural glass perfection.",
      price: "From $5,500",
      duration: "8-Week Custom",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
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

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark flex items-center">
      {/* Dynamic Immersive Background */}
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[activeIndex].img}
            alt={slides[activeIndex].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Expanded Horizontal / Stacked Carousel */}
      <motion.div
        animate={{ width: isHovered ? 1300 : 240 }}
        className="absolute bottom-16 right-16 z-30 hidden lg:block h-[320px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full">
          <AnimatePresence initial={false}>
            {slides.map((slide, i) => {
              // Calculate stack position relative to activeIndex
              let index = i - activeIndex;
              if (index < 0) index += slides.length;

              // Show all on hover, top 4 when stacked
              if (!isHovered && index > 3) return null;

              return (
                <motion.div
                  key={slide.id}
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{
                    x: isHovered ? index * -260 : index * -20,
                    y: isHovered ? 0 : index * -15,
                    scale: isHovered ? 1 : 1 - index * 0.05,
                    zIndex: slides.length - index,
                    opacity: isHovered ? 1 : 1 - index * 0.2,
                  }}
                  exit={{ opacity: 0, x: -100, scale: 0.5 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: isHovered ? index * 0.02 : 0
                  }}
                  className="absolute bottom-0 right-0 w-[240px] h-[320px] cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl group"
                >
                  <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top Right Index */}
                  <div className="absolute top-6 right-8">
                    <span className="text-4xl font-bold text-white/40 group-hover:text-brand-primary transition-colors">
                      {slide.id}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl font-bold text-white leading-none">{slide.price.split(' ')[1]}</span>
                      <span className="text-[10px] text-white/40 line-through tracking-tighter">$8,500</span>
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest leading-tight mb-1">
                      {slide.title}
                    </h4>
                    <p className="text-[8px] text-white/40 uppercase tracking-[0.2em]">
                      Architectural Series
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Progress Line (Mobile) */}
      <div className="lg:hidden absolute bottom-6 left-6 right-6 h-[1px] bg-white/10 z-30">
        <motion.div
          className="h-full bg-brand-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Corporate Design Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-[8px] font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">
                  Case Study: Corporate HQ
                </span>
              </div>
            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square bg-brand-dark p-8 hidden md:flex flex-col justify-end">
              <span className="text-brand-primary text-4xl mb-4">01</span>
              <p className="text-white text-xs font-light leading-relaxed">
                Architecting the future of high-performance retail and corporate environments.
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8 block"
            >
              The Foundation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl text-brand-dark mb-10 leading-tight uppercase"
            >
              Defining the <br />
              <span className="text-brand-primary font-light italic" style={{ textTransform: 'none' }}>Spatial Narrative</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-neutral-500 text-base md:text-lg font-light leading-relaxed mb-12"
            >
              At INFIWIN, we don't just build spaces; we architect experiences. Our approach to architectural spatial design is rooted in the fusion of precision and ergonomics—ensuring every project we create is as functional as it is visually arresting.
            </motion.p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Vision</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">To redefine the standard of luxury interiors across the GCC.</p>
              </div>
              <div>
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Mission</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Delivering turnkey excellence through innovation and artisan craft.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { title: "Visual Space", desc: "Maximize your panoramic views without bulky frames.", icon: <Monitor size={24} /> },
    { title: "Sound Proof", desc: "Enjoy tranquility with high-performance acoustic glass.", icon: <Coffee size={24} /> },
    { title: "Weather Guard", desc: "Protection against dust, rain, and extreme heat.", icon: <MapPin size={24} /> },
    { title: "Safety First", desc: "Toughened glass systems for ultimate security.", icon: <CheckCircle size={24} /> }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100"
            >
              <div className="text-brand-primary mb-6">{b.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3">{b.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellingProduct = () => {
  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8 block"
            >
              Featured System
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl text-brand-dark mb-12 leading-[0.9] uppercase"
            >
              Slide & <br />
              <span className="text-brand-primary italic font-light lowercase">Turn System</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-neutral-500 text-base md:text-lg font-light leading-relaxed mb-16 max-w-md"
            >
              At INFIWIN, we believe that architectural spatial design is not just about how a space looks – it's about how it makes you feel. Our signature Slide & Turn system reclaim your outdoor space with frameless precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="/products" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark border-b border-brand-dark/20 pb-2 hover:border-brand-primary transition-all">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Images */}
          <div className="order-1 lg:order-2 flex items-start gap-8">
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0, y: -20 }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[70%] aspect-[3/4] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                alt="Slide & Turn Main"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0, y: -20 }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-[45%] aspect-square mt-20 rounded-sm overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Slide & Turn Detail"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplicationsSection = () => {
  const [hoveredApp, setHoveredApp] = useState<null | number>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const apps = [
    {
      name: "Balcony",
      icon: <Home size={32} />,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
    },
    {
      name: "Int. Partition",
      icon: <Building2 size={32} />,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Office space",
      icon: <Monitor size={32} />,
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000"
    },
    {
      name: "Commercial",
      icon: <Building2 size={32} />,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
    },
    {
      name: "Exterior",
      icon: <MapPin size={32} />,
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
    },
    {
      name: "Terrace",
      icon: <Coffee size={32} />,
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000"
    },
    {
      name: "Garden",
      icon: <Paintbrush size={32} />,
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000"
    },
    {
      name: "Farm House",
      icon: <Home size={32} />,
      img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="applications"
      className="py-24 bg-white relative overflow-visible"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block">Usage</span>
          <h2 className="text-3xl md:text-5xl text-brand-dark uppercase">Applications</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHoveredApp(i)}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex flex-col items-center p-8 bg-neutral-50 rounded-sm group cursor-pointer transition-all duration-300 hover:bg-neutral-100"
            >
              <div className="text-brand-primary mb-4 group-hover:scale-110 transition-all duration-500">
                {app.icon}
              </div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark text-center">
                {app.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Cursor Image */}
      <AnimatePresence>
        {hoveredApp !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 20, // Offset to the right of cursor
              y: mousePos.y + 20  // Offset below cursor
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
              mass: 0.5,
              opacity: { duration: 0.15 }
            }}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '320px',
              height: '220px',
              pointerEvents: 'none',
              zIndex: 9999, // Ensure it's above everything
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
            }}
          >
            <img
              src={apps[hoveredApp].img}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>



  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Is the glass safe?", a: "Yes, we use 10mm or 12mm toughened safety glass which is highly resistant to impact." },
    { q: "Is it waterproof?", a: "Our systems are designed to be weather-resistant, effectively keeping out rain and wind." },
    { q: "How long is the warranty?", a: "We provide a comprehensive 5-year warranty on all our hardware and mechanisms." },
    { q: "Can it be installed in rentals?", a: "Yes, our installations are minimally invasive and can often be approved for high-end rentals." }
  ];

  return (
    <section id="faqs" className="py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block">Knowledge Hub</span>
          <h2 className="text-3xl md:text-5xl text-brand-dark uppercase">Frequently Asked</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-sm border border-neutral-200 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-neutral-50 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">{faq.q}</span>
                <ChevronRight size={16} className="group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-neutral-500 text-sm leading-relaxed border-t border-neutral-100">
                {faq.a}
              </div>
            </details>
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
    <section id="contact" className="py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-8 block">Inquiry</span>
            <h2 className="text-5xl md:text-7xl mb-10 leading-tight">Start Your <br /><span className="text-brand-primary italic" style={{ textTransform: 'none' }}>Project</span></h2>

            <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 rounded-sm mb-12">
              <h4 className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">Quick Cost Estimator</h4>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-white/50 block mb-2">Length (ft)</label>
                  <input
                    type="number"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-white/50 block mb-2">Height (ft)</label>
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
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-[9px] uppercase tracking-widest text-white/50 mb-2">Approximate Cost</p>
                  <p className="text-3xl text-brand-primary mb-2">₹{estimate.toLocaleString()} + Installation</p>
                  <p className="text-[8px] text-white/30 italic">Excluding taxes & freight charges</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-12 rounded-sm text-brand-dark">
            <h3 className="text-2xl mb-8">Contact Information</h3>
            <form className="space-y-6">
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">Phone Number</label>
                <input type="tel" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">City</label>
                <input type="text" className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="pt-8 space-y-4">
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
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{step.desc}</p>
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
      title: "Slide & Turn System",
      desc: "100% clear opening for seamless views.",
      series: "S1 SERIES",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "Telescopic Slider",
      desc: "Smooth multi-track sliding for wide spans.",
      series: "T1 SERIES",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Bi-fold Doors",
      desc: "Classic folding panels for architectural beauty.",
      series: "B1 SERIES",
      img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop",
    },
    {
      id: "p4",
      title: "2 Track Slider",
      desc: "Space-efficient sliding for windows and doors.",
      series: "T2 SERIES",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
    },
    {
      id: "p5",
      title: "3 Track Slider",
      desc: "Enhanced flexibility with triple track versatility.",
      series: "T3 SERIES",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    }
  ];

  return (
    <section id="products" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block">Our Systems</span>
            <h2 className="text-4xl md:text-6xl text-brand-dark uppercase tracking-tight">
              Products Grid
            </h2>
          </div>
          <a href="/products" className="hidden md:flex items-center gap-4 px-8 py-3 border border-neutral-200 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-50 transition-all">
            View All <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {/* Top Row: P1, P2, P3 */}
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[600px]">
            {products.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === p.id ? 2 : hoveredId ? 0.6 : (i === 0 ? 1.5 : 0.8)
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer rounded-[2.5rem] overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-0"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white rounded-full uppercase tracking-widest">
                    {p.series}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 text-white max-w-[280px]">
                  <h3 className="text-2xl lg:text-3xl mb-3 italic leading-tight">{p.title}</h3>
                  {i === 0 && (
                    <motion.p
                      animate={{ opacity: hoveredId === p.id || !hoveredId ? 1 : 0 }}
                      className="text-white/60 text-[10px] uppercase tracking-widest font-light hidden lg:block"
                    >
                      {p.desc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: P4, P5 */}
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[450px]">
            {products.slice(3, 5).map((p) => (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === p.id ? 1.5 : hoveredId ? 0.7 : 1
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer rounded-[2.5rem] overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-0"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white rounded-full uppercase tracking-widest">
                    {p.series}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl lg:text-3xl italic">{p.title}</h3>
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
      id: "p01",
      category: "Residential",
      title: "Panoramic Living Suite",
      location: "DUBAI, 2025",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      id: "p02",
      category: "Villa",
      title: "Sereno Facade",
      location: "TUSCANY, 2024",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "p03",
      category: "Commercial",
      title: "Noir Workspace",
      location: "LONDON, 2025",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "p04",
      category: "Interior",
      title: "Serra Niche",
      location: "MALLORCA, 2024",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    },
    {
      id: "p05",
      category: "Partition",
      title: "Atrium Divider",
      location: "LONDON, 2025",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
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
    <section id="projects" className="pt-32 md:pt-48 pb-16 md:pb-24 bg-[#f0f7ff] overflow-hidden relative">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-6 block">Selected Works</span>
            <h2 className="text-4xl md:text-6xl text-brand-dark uppercase leading-tight">
              Excellence in <br />
              <span className="text-neutral-300 font-light italic" style={{ textTransform: 'none' }}>Execution</span>
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
                className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2 border rounded-full transition-all ${activeFilter === tab ? 'bg-brand-dark text-white border-brand-dark' : 'text-neutral-400 border-neutral-100 hover:border-brand-primary hover:text-brand-primary'}`}
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
              className="flex gap-8 pb-6"
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
                  className="w-[300px] md:w-[420px] aspect-[4/5] relative group/card cursor-pointer rounded-2xl overflow-hidden bg-neutral-100"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1.5 bg-white/95 text-[8px] font-bold uppercase tracking-widest text-brand-dark rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-[10px] font-light tracking-[0.2em] uppercase text-white/60 mb-2 block">
                      {project.location}
                    </span>
                    <h3 className="text-xl md:text-2xl italic font-light">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500 -translate-y-4 group-hover/card:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation Hint */}
          <div className="flex items-center justify-between mt-4 border-t border-brand-primary/10 pt-4">
            <div className="flex gap-4">
              {/* Simplified Nav Dots */}
              <div className="flex gap-2">
                <div className="w-12 h-[2px] bg-brand-primary" />
                <div className="w-4 h-[2px] bg-brand-primary/20" />
                <div className="w-4 h-[2px] bg-brand-primary/20" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Drag to explore</span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight size={18} className="rotate-180" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all active:scale-95"
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-32 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: W (Cursive) + HAT (Gold) */}
            <div
              className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-primary flex justify-center items-center"
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal italic"
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
              className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
            >
              {"CUSTOMERS SAY".split("").map((char, i) => (
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
              className="px-8 flex flex-col items-start"
            >
              {/* Quote Mark */}
              <div className="mb-6 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-primary">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>

              <p className="text-brand-dark/80 text-sm leading-relaxed mb-12 text-left h-full italic">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-brand-primary/10 w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/20 shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-brand-primary font-bold text-sm leading-tight">{t.name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-medium">{t.role}</p>
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
              className="px-6 py-8 flex flex-col items-center bg-neutral-50/50 rounded-lg border border-neutral-100"
            >
              <div className="mb-6 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-primary">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed mb-10 text-center italic">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex flex-col items-center gap-4 mt-auto w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/20 shrink-0">
                  <img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h5 className="text-brand-primary font-bold text-sm leading-tight">{testimonials[currentIndex].name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-medium mt-1">{testimonials[currentIndex].role}</p>
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
                className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-primary flex justify-center items-center"
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-normal italic"
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
                className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
              >
                {"CLIENTS".split("").map((char, i) => (
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
                className="font-normal italic"
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
    <section id="pmc" className="py-32 md:py-48 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-primary mb-10 block"
            >
              Consultancy Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl mb-12 uppercase leading-tight"
            >
              The Science <br />
              <span className="text-neutral-500 font-light italic" style={{ textTransform: 'none' }}>of Execution</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-16 max-w-xl"
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
                    <p className="text-neutral-500 text-sm font-light">{step.desc}</p>
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
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop"
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

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark py-24 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-sm">
            <a href="#" className="flex items-center mb-10 group">
              <img src="https://www.infiwindow.com/images/logo1.png" alt="INFIWIN" className="h-20 w-auto hover:scale-105 transition-transform" />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-light">
              Reclaiming space through architectural innovation and high-performance spatial solutions across the GCC.
            </p>
            <div className="flex gap-8">
              <Instagram size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Facebook size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Registry</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Methods</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Inquiry</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Hubs</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li>Abu Dhabi</li>
                <li>Dubai</li>
                <li>London</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          <p>© 2026 INFIWIN. All protocols reserved.</p>
          <div className="flex gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-neutral-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
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
        <AboutSection />
        <BenefitsSection />
        <BestSellingProduct />
        <ProductsGrid />
        <PortfolioSection />
        <ApplicationsSection />
        <Testimonials />
        <LeadFormSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
