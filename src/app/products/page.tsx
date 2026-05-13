"use client";

import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle,
  Maximize,
} from 'lucide-react';
import React from 'react';
import { Navbar } from '../../components/Navbar';

const products = [
  {
    id: "folding",
    title: "Folding glass balcony systems",
    tagline: "Unobstructed views & seamless protection",
    desc: "Learn more about the INFIWIN folding balcony glazing. All the benefits, planning and see what other customers worldwide have done and get inspired. Perfect for creating a 100% clear opening.",
    features: [
      "No vertical profiles for maximum transparency",
      "Protects against dust, wind, and rain",
      "Reduces noise levels significantly",
      "Toughened 8mm or 10mm safety glass",
      "Panels slide and fold to the side easily"
    ],
    technical: {
      glass: "8mm / 10mm Toughened",
      sealing: "UV-Resistant Gaskets",
      profiles: "Minimalist Aluminum Rails",
      opening: "100% Clear Opening"
    },
    img: "/hero/balcony.png",
    category: "Balcony systems"
  },
  {
    id: "insulated",
    title: "Insulated glass balcony systems",
    tagline: "Thermal comfort for every climate",
    desc: "Engineered with advanced thermal break technology, the INFIWIN insulated glass balcony system keeps your living space comfortable year-round, regardless of extreme temperatures.",
    features: [
      "Advanced thermal-break aluminum profiles",
      "Double or triple glazing options",
      "Superior energy efficiency and insulation",
      "Enhanced acoustic dampening",
      "High weather resistance for extreme heat/cold"
    ],
    technical: {
      glass: "Double Glazed / Low-E",
      uValue: "Low Thermal Transmittance",
      sealing: "Multi-layered EPDM",
      insulation: "Thermal Break Profiles"
    },
    img: "/products/insulated.png",
    category: "Balcony systems"
  },
  {
    id: "sliding",
    title: "Sliding glass systems",
    tagline: "Effortless spatial transitions",
    desc: "Transform your unused outdoor places into inspiring and stylish spaces. The INFIWIN sliding glass system provides smooth movement and a sleek, modern aesthetic for terraces and patios.",
    features: [
      "Smooth multi-track sliding mechanism",
      "Slim profiles for minimalist design",
      "Space-efficient operation (no folding space needed)",
      "High-performance roller technology",
      "Perfect for large architectural spans"
    ],
    technical: {
      tracks: "2, 3, 4, or 5 Track options",
      operation: "Telescopic / Parallel Sliding",
      glass: "10mm / 12mm Toughened",
      hardware: "Stainless Steel Rollers"
    },
    img: "/products/sliding.png",
    category: "Sliding systems"
  },
  {
    id: "shop",
    title: "Shop window glass systems",
    tagline: "Maximum visibility, maximum security",
    desc: "Designed specifically for commercial storefronts, INFIWIN shop window systems provide crystal-clear visibility for merchandise while offering robust security and easy access.",
    features: [
      "Large-scale glass panels for maximum display",
      "Heavy-duty security locking mechanisms",
      "Frameless or slim-frame commercial designs",
      "Easy maintenance and high durability",
      "Customizable configurations for grand entrances"
    ],
    technical: {
      use: "Retail / Commercial Fronts",
      security: "Multi-point locking",
      glass: "12mm+ Toughened / Laminated",
      profiles: "Commercial Grade Aluminum"
    },
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    category: "Commercial"
  },
  {
    id: "guillotine",
    title: "Guillotine glass systems",
    tagline: "The future of motorized glazing",
    desc: "A remote-controlled vertical sliding glass system. The INFIWIN guillotine system acts as a glass railing when open and a full enclosure when closed, making it ideal for cafes and luxury patios.",
    features: [
      "Fully motorized IoT-enabled operation",
      "Remote control and mobile app integration",
      "Acts as a safety railing in 'half-open' state",
      "Quiet and smooth vertical movement",
      "High wind resistance and stability"
    ],
    technical: {
      motor: "SOMFY / Premium Electric Drive",
      control: "Remote / App / Smart Home",
      glass: "8mm / 10mm / Double Glazed",
      safety: "Automatic Stop Sensors"
    },
    img: "/products/guillotine.png",
    category: "Motorized systems"
  },
  {
    id: "motor",
    title: "Walking motor system",
    tagline: "Precision engineering in motion",
    desc: "An innovative motorized solution designed for specialized glass movements. The walking motor ensures precise and silent operation for complex architectural glazing requirements.",
    features: [
      "High torque with silent operation",
      "Designed for heavy-duty glass panels",
      "Precise positioning technology",
      "Long-term reliability and low maintenance",
      "Seamless integration with INFIWIN systems"
    ],
    technical: {
      type: "Architectural Grade Motor",
      capacity: "Heavy-duty Load Bearing",
      integration: "Plug-and-play with INFIWIN systems",
      durability: "Tested for 100,000+ cycles"
    },
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    category: "Accessories & automation"
  },
  {
    id: "roof",
    title: "Fixed glass roof",
    tagline: "Let the light in, keep the weather out",
    desc: "High-performance veranda roof systems that provide permanent protection while allowing maximum natural light. Engineered for durability and high-end aesthetics.",
    features: [
      "Structural glass panels for permanent roofs",
      "Integrated drainage and gutter systems",
      "Self-cleaning glass options available",
      "High load-bearing aluminum structure",
      "UV protection for the space below"
    ],
    technical: {
      structure: "Reinforced Aluminum Beam",
      glass: "Laminated Safety / Double Glazed",
      loading: "Engineered for Wind & Snow",
      sealing: "Traction-fit Sealing Technology"
    },
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Roof systems"
  },
  {
    id: "windbreaker",
    title: "Windbreaker system",
    tagline: "Stylish protection for outdoor areas",
    desc: "Protect your outdoor seating from wind and noise without losing the view. Ideal for garden terraces and restaurant patios in windy environments.",
    features: [
      "Adjustable height options",
      "Easy-to-use manual or motorized adjustment",
      "Clear view with high-quality safety glass",
      "Stable even in high wind conditions",
      "Modern minimalist design"
    ],
    technical: {
      type: "Adjustable Glass Shield",
      height: "Variable up to 1800mm",
      glass: "Toughened Safety Glass",
      base: "Heavy-duty Floor Mount"
    },
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    category: "Outdoor protection"
  },
  {
    id: "bioclimatic",
    title: "Bioclimatic pergola",
    tagline: "The ultimate outdoor living space",
    desc: "An IoT-enabled smart roof system with rotatable aluminum slats. The INFIWIN bioclimatic pergola offers perfect light control, ventilation, and full rain protection.",
    features: [
      "Motorized rotating aluminum louvers",
      "Built-in LED lighting and heating options",
      "Fully watertight when slats are closed",
      "Smart sensors for rain and wind protection",
      "Compatible with all INFIWIN glass wall systems"
    ],
    technical: {
      roof: "IoT Smart Rotating Slats",
      control: "Somfy Smart Home / App",
      structure: "Extruded Aluminum T6063",
      lighting: "Integrated RGB/White LED"
    },
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    category: "Roof systems"
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar isSolid={false} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-brand-dark">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
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
            <span className="text-[10px] font-bold tracking-[0.6em] text-brand-primary mb-8 block uppercase">Our solutions</span>
            <h1 className="text-5xl md:text-8xl text-white tracking-tighter leading-[0.9] mb-12 select-none">
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
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-32 py-32">
        {products.map((product, index) => (
          <section 
            id={product.id} 
            key={product.id}
            className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Content Side */}
            <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-primary mb-4 block">
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight mb-6">
                  {product.title}
                </h2>
                <p className="text-brand-primary font-medium mb-8 text-lg">
                  {product.tagline}
                </p>
                <p className="text-neutral-600 text-base md:text-lg font-semibold leading-relaxed mb-12 max-w-xl">
                  {product.desc}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
                <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 grid grid-cols-2 gap-8">
                  {Object.entries(product.technical).map(([key, value], i) => (
                    <div key={i}>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                        {key}
                      </span>
                      <span className="text-sm font-medium text-brand-dark">{value as string}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 group flex items-center gap-4 px-10 py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10">
                  Request technical info <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </button>
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
                
                {/* Product Detail Badge */}
                <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                  <Maximize className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-12">Ready to start <br /> <span className="text-neutral-500 font-semibold" style={{ textTransform: 'none' }}>your project?</span></h2>
          <a href="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-brand-primary text-white rounded-full text-[12px] font-bold tracking-widest hover:scale-105 transition-all">
            Contact engineering team <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
