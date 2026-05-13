"use client";

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Maximize, 
  Wind, 
  ShieldCheck, 
  Settings,
  ChevronRight
} from 'lucide-react';
import React from 'react';
import { Navbar } from '../../components/Navbar';

const products = [
  {
    id: "slide-turn",
    title: "Slide & Turn System",
    tagline: "Frameless Panoramic Living",
    desc: "Our flagship frameless glass system that offers a 100% clear opening. Ideal for balconies, terraces, and interior partitions where unobstructed views are paramount.",
    features: [
      "No vertical profiles for maximum transparency",
      "Panels slide and fold to one side",
      "Toughened 8mm or 10mm safety glass",
      "Custom panel widths from 600mm to 850mm",
      "Height up to 2700mm"
    ],
    technical: {
      glass: "8mm / 10mm Toughened",
      maxHeight: "2700mm",
      maxWidth: "850mm per panel",
      opening: "100% Clear Opening"
    },
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Balcony & Terrace"
  },
  {
    id: "bifold",
    title: "Bi-fold Doors",
    tagline: "The Architectural Classic",
    desc: "Precision-engineered folding doors that bridge the gap between indoor and outdoor spaces. Available with 2 to 6 leaves to suit any span.",
    features: [
      "Smooth roller mechanism for effortless operation",
      "High-performance weather sealing",
      "Slim aluminum profiles for modern aesthetics",
      "Multiple configuration options",
      "Thermal break options for energy efficiency"
    ],
    technical: {
      leaves: "2 to 6 foldable leaves",
      profiles: "Powder-coated Aluminum",
      operation: "Bottom-weighted or Top-hung",
      weather: "Acoustic & Weather Guard"
    },
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop",
    category: "Exterior Openings"
  },
  {
    id: "telescopic",
    title: "Tophang / Telescopic Sliders",
    tagline: "Seamless Interior Transitions",
    desc: "Ideal for internal partitions where a bottom track is not desired. These systems preserve your flooring while providing high-end spatial division.",
    features: [
      "No bottom track required",
      "Telescopic opening for wide spans",
      "Soft-close mechanism available",
      "Minimalist hardware design",
      "Quiet and smooth movement"
    ],
    technical: {
      type: "Top-hung sliding",
      tracks: "Multiple synchronized tracks",
      glass: "10mm / 12mm Toughened",
      hardware: "Stainless Steel / Anodized"
    },
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    category: "Internal Partitions"
  },
  {
    id: "movable-partition",
    title: "Movable Partitions",
    tagline: "Dynamic Space Management",
    desc: "Versatile wall systems that allow you to reconfigure your space in minutes. Perfect for offices, cafes, and multi-functional residential areas.",
    features: [
      "High sound insulation properties",
      "Individual panels for flexible stacking",
      "Various finish options available",
      "Semi-automatic seals for acoustic performance",
      "Fire-rated options"
    ],
    technical: {
      insulation: "Up to 50dB acoustic rating",
      finishes: "Glass, Fabric, Veneer",
      tracking: "Heavy-duty aluminum track",
      storage: "Custom stacking pockets"
    },
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    category: "Commercial & Office"
  },
  {
    id: "fabric-glass",
    title: "Fabric Glass Sliders",
    tagline: "Decorative Art in Motion",
    desc: "A unique fusion of textile and glass. Decorative fabrics are interlayered within the glass panels to provide privacy and a distinct aesthetic touch.",
    features: [
      "Custom fabric patterns and colors",
      "Laminated safety glass construction",
      "Privacy without losing light transmission",
      "UV protection for the interior",
      "Maintenance-free design"
    ],
    technical: {
      type: "Laminated Fabric Glass",
      thickness: "12mm to 16mm",
      fabric: "Premium Silk / Synthetic Mesh",
      durability: "UV Resistant Interlayer"
    },
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
    category: "Interior Design"
  },
  {
    id: "centre-open",
    title: "Centre Open System",
    tagline: "Perfect Symmetry",
    desc: "A symmetrical sliding solution where panels move from the center to both sides simultaneously. Ideal for grand entrances and wide architectural openings.",
    features: [
      "Simultaneous bi-parting movement",
      "Perfect for large spans up to 12 meters",
      "Synchronized tracking technology",
      "Available in both framed and frameless options",
      "Heavy-duty rollers for large panels"
    ],
    technical: {
      movement: "Synchronized Bi-parting",
      maxSpan: "Up to 12 meters",
      glass: "10mm / 12mm Toughened",
      hardware: "Commercial Grade Stainless Steel"
    },
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    category: "Grand Openings"
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Products Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-4 block"
          >
            Engineering Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Our Architectural <br />
            <span className="text-brand-primary italic lowercase font-light">Systems</span>
          </motion.h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-48">
            {products.map((product, i) => (
              <div key={product.id} className={`grid lg:grid-cols-2 gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={i % 2 !== 0 ? 'order-2 lg:order-1' : 'order-2'}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6 block">
                    {product.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl text-brand-dark mb-4 uppercase leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-brand-primary italic text-lg mb-8">{product.tagline}</p>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-10">
                    {product.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-4 border-b border-neutral-100 pb-2">Key Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs text-neutral-400">
                            <CheckCircle size={14} className="text-brand-primary mt-0.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-4 border-b border-neutral-100 pb-2">Technical Specs</h4>
                      <div className="space-y-4">
                        {Object.entries(product.technical).map(([key, value], idx) => (
                          <div key={idx}>
                            <p className="text-[9px] uppercase tracking-widest text-neutral-300 mb-1">{key}</p>
                            <p className="text-xs text-neutral-500 font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark border-b border-brand-dark/20 pb-2 hover:border-brand-primary transition-all group"
                  >
                    Request a Quote <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl ${i % 2 !== 0 ? 'order-1 lg:order-2' : 'order-1'}`}
                >
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-dark/5" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-brand-dark uppercase mb-8">Need a Custom Solution?</h2>
          <p className="text-neutral-500 text-lg font-light mb-12">
            Our engineering team specializes in bespoke architectural glass solutions tailored to your specific spatial requirements.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/contact" className="px-12 py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all">
              Consult Our Team
            </a>
            <a href="/Infi brochure.pdf" target="_blank" className="px-12 py-5 border border-brand-dark text-brand-dark text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-brand-dark text-white/40 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.4em]">© 2026 INFIWIN Systems. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
