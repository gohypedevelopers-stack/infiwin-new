"use client";

import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle,
} from 'react-bootstrap-icons';
import React from 'react';

const products = [
  {
    id: "folding",
    title: "Slide & Turn System",
    tagline: "Perfect view maximization with foldaway tracking system layout.",
    desc: "Our iconic signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.",
    features: [
      "No vertical frames for unobstructed views",
      "100% opening potential",
      "Premium smooth-gliding tracks",
      "Individual panels stack neatly",
      "Excellent weather protection"
    ],
    technical: {
      glass: "Toughened Safety Glass",
      sealing: "Transparent H-Gaskets",
      profiles: "Premium Aluminum Rails",
      opening: "100% Clear Opening"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
    category: "Balcony Enclosure"
  },
  {
    id: "sliding",
    title: "Telescopic Slider System",
    tagline: "Overlapping glazed sheets for continuous uninterrupted tracks.",
    desc: "Experience super smooth gliding with our telescopic sliding system. Multiple glass panels overlap and slide seamlessly to provide a wide, continuous opening, ideal for large architectural spans and balcony enclosures.",
    features: [
      "Smooth multi-track sliding mechanism",
      "Overlapping panels for continuous tracking",
      "Slim profiles for minimalist design",
      "High-performance roller technology",
      "Space-efficient operation"
    ],
    technical: {
      tracks: "Multiple Tracks",
      operation: "Telescopic Sliding",
      glass: "Toughened Safety Glass",
      hardware: "Premium Rollers"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_50_39 PM.png",
    category: "Super Smooth Gliding"
  },
  {
    id: "centre-open",
    title: "Centre Open System",
    tagline: "Panels partition left and right symmetrically to retain optimal balances.",
    desc: "A beautifully balanced system where panels split and fold to both left and right sides. This symmetrical operation is perfect for wide openings, ensuring structural stability and an elegant aesthetic.",
    features: [
      "Symmetrical split-fold operation",
      "Retains optimal balance for wide spans",
      "No vertical framing when closed",
      "Easy and secure locking mechanisms",
      "Seamless indoor-outdoor flow"
    ],
    technical: {
      operation: "Centre Opening / Split Fold",
      glass: "Toughened Safety Glass",
      profiles: "Symmetrical Aluminum Framing",
      locking: "Secure Centre Lock"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_29_01 PM.png",
    category: "Split-fold Symmetrical"
  },
  {
    id: "bifold",
    title: "Bi-fold Glass System",
    tagline: "Sleek folding structure for rapid internal partition transition zones.",
    desc: "Create dynamic and flexible spaces with our premium bi-fold glass system. Perfect for internal partitions or external boundaries, these connected panels fold concertina-style for rapid transitions.",
    features: [
      "Concertina-style folding mechanism",
      "Rapid and easy transitions",
      "Sleek and modern aesthetic",
      "Excellent acoustic dampening for partitions",
      "High-quality hinged hardware"
    ],
    technical: {
      operation: "Bi-folding Panels",
      hardware: "Heavy Duty Hinges",
      glass: "Safety Glass Options",
      profiles: "Slimline Aluminum"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
    category: "Premium Partition"
  },
  {
    id: "sliding-2track",
    title: "2 Track Slider",
    tagline: "Classic, cost-effective structural system layout with premium hardware profiles.",
    desc: "A reliable and classic sliding system featuring a 2-track layout. It combines cost-effectiveness with our signature premium hardware, making it a versatile choice for standard doors and windows.",
    features: [
      "Classic 2-track sliding layout",
      "Cost-effective yet premium build",
      "Smooth and reliable rollers",
      "Excellent weather sealing",
      "Customizable for various spaces"
    ],
    technical: {
      tracks: "2 Track Profile",
      operation: "Parallel Sliding",
      glass: "Toughened Glass",
      sealing: "Weather-resistant EPDM"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
    category: "Doors & Windows"
  },
  {
    id: "sliding-3track",
    title: "3 Track Slider",
    tagline: "Wider spans of clear structural views integrating bug mesh slider capability.",
    desc: "Expand your horizons with our 3-track sliding system. Designed for wider architectural spans, it offers the added benefit of integrating a dedicated bug mesh slider, providing fresh air without the insects.",
    features: [
      "3-track layout for wider openings",
      "Integrated bug mesh capability",
      "Maximizes natural ventilation",
      "Sturdy structural view profiles",
      "Smooth parallel sliding action"
    ],
    technical: {
      tracks: "3 Track Profile",
      mesh: "Integrated Bug Mesh Option",
      glass: "Toughened Glass",
      hardware: "Premium Roller System"
    },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png",
    category: "Doors & Windows"
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden bg-brand-dark">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png" 
            alt="Architectural Excellence" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] text-brand-primary mb-4 md:mb-8 block uppercase">Our solutions</span>
            <h1 className="text-4xl md:text-8xl text-white tracking-tighter leading-[0.9] mb-6 md:mb-12 select-none">
              Premium <br />
              <span className="text-white/40 font-semibold" style={{ textTransform: 'none' }}>Architectural</span> <br />
              <span className="text-white/40 font-semibold" style={{ textTransform: 'none' }}>Glazing</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-semibold leading-relaxed max-w-xl">
              Explore our range of high-performance glass systems designed to redefine spatial boundaries across the GCC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12 md:space-y-32 py-12 md:py-32">
        {products.map((product, index) => (
          <section 
            id={product.id} 
            key={product.id}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Content Side */}
            <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-primary mb-2 md:mb-4 block">
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight mb-4 md:mb-6">
                  {product.title}
                </h2>
                <p className="text-brand-primary font-medium mb-4 md:mb-8 text-lg">
                  {product.tagline}
                </p>
                <p className="text-neutral-600 text-base md:text-lg font-semibold leading-relaxed mb-6 md:mb-12 max-w-xl">
                  {product.desc}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-12">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start group">
                      <div className="h-5 w-5 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                        <CheckCircle className="h-3 w-3 text-brand-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm text-neutral-500 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specs Card */}
                <div className="bg-neutral-50 p-4 sm:p-8 rounded-2xl border border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  {Object.entries(product.technical).map(([key, value], i) => (
                    <div key={i}>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                        {key}
                      </span>
                      <span className="text-sm font-medium text-brand-dark">{value as string}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="mt-6 md:mt-12 group inline-flex items-center gap-4 px-10 py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10">
                  Contact us <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="lg:w-5/12 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-none overflow-hidden shadow-xl group"
              >
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent opacity-40" />
                

              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-12 md:py-24 bg-brand-dark text-white text-center">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-6 md:mb-12">Ready to start <br /> <span className="text-neutral-500 font-semibold" style={{ textTransform: 'none' }}>your project?</span></h2>
          <a href="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-brand-primary text-white rounded-full text-[12px] font-bold tracking-widest hover:scale-105 transition-all">
            Contact engineering team <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
