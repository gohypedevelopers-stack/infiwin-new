"use client";

import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle,
} from 'react-bootstrap-icons';
import React, { useState } from 'react';

const products = [
  {
    id: "balcony-system",
    title: "Balcony System",
    category: "Exterior Solutions",
    tagline: "Premium space-saving balcony partitions.",
    desc: "Reclaim your outdoor space with our signature balcony systems. Whether you prefer a frameless slide & turn system or a motorized guillotine, our solutions offer 100% opening potential, excellent weather protection, and unobstructed views.",
    features: ["No vertical frames for unobstructed views", "Premium smooth-gliding tracks", "Motorized remote operation options", "Excellent weather protection"],
    technical: { glass: "Toughened Safety Glass / Double Glazing", framing: "Premium Aluminum Rails", opening: "100% Clear Opening" },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
    variants: [
      { id: "slide-turn", name: "Slide & Turn" },
      { id: "guillotine", name: "Guillotine Glass System" }
    ],
    availableColors: [
      { id: 'black', name: 'Black', hex: '#222222' },
      { id: 'white', name: 'White', hex: '#ffffff' },
      { id: 'anthracite', name: 'Anthracite', hex: '#383e42' }
    ]
  },
  {
    id: "internal-partition",
    title: "Internal Partition",
    category: "Interior Solutions",
    tagline: "Sleek separation zones for functional multi-use spaces.",
    desc: "Experience super smooth gliding and rapid space transitions with our internal partition systems. From overlapping telescopic sliders to perfectly balanced synchronized systems and clear-floor top-hang bi-folds.",
    features: ["Smooth multi-track sliding mechanism", "Symmetrical split-fold operation", "Top-hung clear floor operation", "Slim profiles for minimalist design"],
    technical: { operation: "Telescopic / Synchronized / Bi-fold", glass: "Toughened Safety Glass", hardware: "Heavy Duty Rollers" },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png",
    variants: [
      { id: "telescopic", name: "Telescopic Sliders" },
      { id: "synchronized", name: "Synchronized Systems" },
      { id: "top-hang-bifold", name: "Top Hang Bi Fold" }
    ]
  },
  {
    id: "doors-windows",
    title: "Doors & Windows",
    category: "Structural Openings",
    tagline: "Classic, robust structural system layouts.",
    desc: "A reliable and classic range of sliding, openable, and foldable systems. Combining cost-effectiveness with signature premium hardware, making them a versatile choice for standard doors and windows.",
    features: ["Classic multi-track sliding layout", "Maximum ventilation opening", "Heavy-duty exterior folding mechanism", "High acoustic insulation"],
    technical: { tracks: "2 or 3 Track Profiles", operation: "Parallel / Casement / Bi-fold", glass: "Double Glazed Options" },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
    variants: [
      { id: "sliding", name: "Sliding Windows & Doors" },
      { id: "openable", name: "Openable Windows & Doors" },
      { id: "foldable", name: "Foldable Doors (Bi Fold)" }
    ]
  },
  {
    id: "bathroom",
    title: "Bathroom",
    category: "Sanitary Enclosures",
    tagline: "Optimal space utilization with premium hardware.",
    desc: "Maximize your bathroom layout with our sleek glass enclosures. Whether you need a space-saving corner 90-degree enclosure, a smooth sliding screen, an elegant openable door, or a minimalist fixed partition.",
    features: ["Space-saving corner design", "Zero outward swing space options", "Wide clear entry", "Frameless aesthetics"],
    technical: { glass: "Tempered Safety Glass", hardware: "Premium Stainless Steel / Brass", sealing: "Magnetic Seals" },
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png",
    variants: [
      { id: "90-encloser", name: "90 Degree Encloser" },
      { id: "sliding-enclouser", name: "Sliding Enclouser" },
      { id: "openable-door", name: "Openable Door" },
      { id: "fixed-partition", name: "Fixed Partition" }
    ]
  }
];

export default function ProductsPage() {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const handleVariantChange = (productId: string, variantId: string) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: variantId }));
  };

  const handleColorChange = (productId: string, colorHex: string) => {
    setSelectedColors(prev => ({ ...prev, [productId]: colorHex }));
  };

  return (
    <main className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden bg-brand-dark pt-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-75 scale-105"
          >
            <source src="/extracted_assets/Website/Concepts/glass slab animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] text-brand-primary mb-4 md:mb-8 block uppercase">Our solutions</span>
            <h1 className="text-5xl md:text-8xl text-white tracking-tighter leading-[0.9] mb-6 md:mb-12 select-none uppercase font-serif">
              Premium <br />
              <span className="text-white/90 font-semibold lowercase font-signature" style={{ textTransform: 'none' }}>Architectural</span> <br />
              <span className="text-brand-primary font-light uppercase" style={{ textTransform: 'none' }}>Glazing</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
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

                {/* Variants & Color Palette */}
                <div className="mb-6 md:mb-10 space-y-6">
                  {/* Variant Selector */}
                  {(product as any).variants && (
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 block mb-3 uppercase">
                        Select Variant
                      </span>
                      <div className="flex gap-3 flex-wrap">
                        {(product as any).variants.map((v: any) => {
                          const isSelected = (selectedVariants[product.id] || (product as any).variants[0].id) === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => handleVariantChange(product.id, v.id)}
                              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
                                isSelected
                                  ? 'border-brand-primary bg-brand-primary text-white'
                                  : 'border-neutral-200 text-neutral-600 hover:border-brand-primary hover:text-brand-primary'
                              }`}
                            >
                              {v.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Color Palette */}
                  {((product as any).availableColors && (!selectedVariants[product.id] || selectedVariants[product.id] === 'slide-turn')) && (
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 block mb-3 uppercase">
                        Frame Color
                      </span>
                      <div className="flex gap-4">
                        {(product as any).availableColors.map((color: any) => {
                          const isSelected = (selectedColors[product.id] || (product as any).availableColors[0].hex) === color.hex;
                          return (
                            <button
                              key={color.id}
                              onClick={() => handleColorChange(product.id, color.hex)}
                              title={color.name}
                              className={`w-8 h-8 rounded-full border-2 transition-all ${
                                isSelected ? 'border-brand-primary scale-110 shadow-md' : 'border-neutral-200 hover:scale-105'
                              }`}
                              style={{ backgroundColor: color.hex }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

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
                style={{
                  border: (product as any).availableColors 
                    ? `12px solid ${selectedColors[product.id] || (product as any).availableColors[0].hex}` 
                    : 'none',
                  transition: 'border-color 0.3s ease'
                }}
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

    </main>
  );
}
