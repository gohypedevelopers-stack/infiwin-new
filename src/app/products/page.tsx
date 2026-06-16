"use client";

import { motion } from 'motion/react';
import { CheckCircle } from 'react-bootstrap-icons';
import React, { useState } from 'react';

const CATEGORIES = [
  {
    id: "balcony-system",
    name: "Balcony System",
    description: "Reclaim your outdoor space with our signature balcony systems. Enjoy 100% opening potential, excellent weather protection, and unobstructed views.",
    variants: [
      {
        id: "slide-turn",
        name: "Slide & Turn",
        tagline: "Premium space-saving slide and turn balcony partitions.",
        desc: "Our signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.",
        features: ["No vertical frames for unobstructed views", "100% opening potential", "Premium smooth-gliding tracks", "Individual panels stack neatly"],
        technical: { glass: "Toughened Safety Glass", sealing: "Transparent H-Gaskets", profiles: "Premium Aluminum Rails", opening: "100% Clear Opening" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
        availableColors: [
          { id: 'black', name: 'Black', hex: '#222222' },
          { id: 'white', name: 'White', hex: '#ffffff' },
          { id: 'anthracite', name: 'Anthracite', hex: '#383e42' }
        ]
      },
      {
        id: "guillotine",
        name: "Guillotine Glass System",
        tagline: "Motorized vertical sliding panels for maximum convenience.",
        desc: "Experience ultimate luxury with our motorized guillotine glass systems. Vertical sliding panels provide adjustable ventilation and a seamless connection with the outdoors at the touch of a button.",
        features: ["Motorized remote operation", "Adjustable height positioning", "Sleek vertical movement", "High wind resistance"],
        technical: { operation: "Motorized Vertical", glass: "Insulated Double Glazing", framing: "Thermal Break Aluminum", control: "Remote / Smart Home" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_50_39 PM.png"
      }
    ]
  },
  {
    id: "internal-partition",
    name: "Internal Partition",
    description: "Sleek separation zones for functional multi-use spaces. Experience super smooth gliding and rapid space transitions.",
    variants: [
      {
        id: "telescopic",
        name: "Telescopic Sliders",
        tagline: "Overlapping glazed sheets for continuous tracks.",
        desc: "Experience super smooth gliding with our telescopic sliding system. Multiple glass panels overlap and slide seamlessly to provide a wide, continuous opening, ideal for internal partitions.",
        features: ["Smooth multi-track sliding mechanism", "Overlapping panels for continuous tracking", "Slim profiles for minimalist design"],
        technical: { tracks: "Multiple Tracks", operation: "Telescopic Sliding", glass: "Toughened Safety Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png"
      },
      {
        id: "synchronized",
        name: "Synchronized Systems",
        tagline: "Panels partition left and right symmetrically.",
        desc: "A beautifully balanced system where panels split and fold to both left and right sides seamlessly. This symmetrical operation is perfect for wide interior openings.",
        features: ["Symmetrical split-fold operation", "Retains optimal balance for wide spans", "No vertical framing when closed"],
        technical: { operation: "Synchronized Sliding", glass: "Toughened Safety Glass", locking: "Secure Centre Lock" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_29_01 PM.png"
      },
      {
        id: "top-hang-bifold",
        name: "Top Hang Bi Fold",
        tagline: "Sleek folding structure for rapid partition transition zones.",
        desc: "Create dynamic and flexible spaces with our premium bi-fold glass system. Perfect for internal partitions, these connected panels fold concertina-style for rapid transitions without bottom floor tracks.",
        features: ["Top-hung clear floor operation", "Concertina-style folding mechanism", "Rapid and easy transitions"],
        technical: { operation: "Top Hung Bi-folding", hardware: "Heavy Duty Rollers", profiles: "Slimline Aluminum" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png"
      }
    ]
  },
  {
    id: "doors-windows",
    name: "Doors & Windows",
    description: "A reliable and classic range of sliding, openable, and foldable systems combining cost-effectiveness with signature premium hardware.",
    variants: [
      {
        id: "sliding-windows",
        name: "Sliding Windows & Doors",
        tagline: "Classic, cost-effective structural system layout.",
        desc: "A reliable and classic sliding system featuring multi-track layouts. It combines cost-effectiveness with our signature premium hardware, making it a versatile choice for standard doors and windows.",
        features: ["Classic multi-track sliding layout", "Cost-effective yet premium build", "Smooth and reliable rollers"],
        technical: { tracks: "2 or 3 Track Profiles", operation: "Parallel Sliding", glass: "Toughened Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png"
      },
      {
        id: "openable-windows",
        name: "Openable Windows & Doors",
        tagline: "Traditional hinged solutions for maximum ventilation.",
        desc: "Premium openable casement windows and doors designed for maximum airflow, energy efficiency, and superior acoustic insulation.",
        features: ["Maximum ventilation opening", "High acoustic insulation", "Multi-point locking security"],
        technical: { operation: "Hinged Casement", glass: "Double Glazed Options", sealing: "High-grade EPDM" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png"
      },
      {
        id: "foldable-doors",
        name: "Foldable Doors (Bi Fold)",
        tagline: "Expansive opening capability with sturdy folding mechanics.",
        desc: "Connect your indoor and outdoor living spaces seamlessly with our heavy-duty exterior bi-fold doors, built to withstand the elements while providing elegant aesthetics.",
        features: ["Heavy-duty exterior folding mechanism", "Weather-sealed tracks", "Expansive clear openings"],
        technical: { operation: "Bottom Rolling Bi-fold", hardware: "Corrosion Resistant", weather: "High Weather Rating" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png"
      }
    ]
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Maximize your bathroom layout with our sleek glass enclosures featuring premium hardware.",
    variants: [
      {
        id: "90-encloser",
        name: "90 Degree Encloser",
        tagline: "Corner shower enclosures for optimal space utilization.",
        desc: "Maximize your bathroom layout with our sleek 90-degree corner shower enclosures, featuring frameless or semi-frameless designs for a modern look.",
        features: ["Space-saving corner design", "Frameless aesthetics", "Easy-clean glass coating"],
        technical: { angle: "90 Degree Join", glass: "Tempered Safety Glass", hardware: "Premium Stainless Steel" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png"
      },
      {
        id: "sliding-enclouser",
        name: "Sliding Enclouser",
        tagline: "Space-saving sliding shower screens.",
        desc: "Perfect for compact bathrooms, our smooth-gliding sliding enclosures provide elegant access without requiring swing space.",
        features: ["Zero outward swing space required", "Ultra-smooth roller mechanism", "Minimalist track design"],
        technical: { operation: "Linear Sliding", rollers: "Exposed or Concealed", glass: "Tempered Safety Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png"
      },
      {
        id: "openable-bathroom",
        name: "Openable Door",
        tagline: "Hinged glass doors for modern bathroom aesthetics.",
        desc: "Classic and elegant, our hinged openable shower doors provide a wide, welcoming entry to your shower enclosure with premium heavy-duty hinges.",
        features: ["Wide clear entry", "Heavy-duty glass-to-wall hinges", "Magnetic seal closure"],
        technical: { operation: "Hinged Swing Door", hinges: "Solid Brass/Stainless", closure: "Magnetic Seals" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png"
      },
      {
        id: "fixed-partition",
        name: "Fixed Partition",
        tagline: "Minimalist fixed glass panels for walk-in showers.",
        desc: "Create a luxurious open walk-in shower experience with our minimalist fixed partition panels, custom cut for your specific space.",
        features: ["Ultimate minimalist aesthetic", "Zero moving parts", "Spacious walk-in feel"],
        technical: { installation: "U-Channel or Clamps", glass: "Thick Tempered Glass", support: "Stabilizing Bar" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png"
      }
    ]
  }
];

export default function ProductsPage() {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const handleColorChange = (variantId: string, hex: string) => {
    setSelectedColors(prev => ({ ...prev, [variantId]: hex }));
  };

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden bg-brand-dark pt-16">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-75 scale-105">
            <source src="/extracted_assets/Website/Concepts/glass slab animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-8xl text-white tracking-tighter leading-[0.9] mb-6 uppercase font-serif">Premium Architectural Glazing</h1>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-xl mx-auto">Explore our range of high-performance glass systems.</p>
          </motion.div>
        </div>
      </section>



      <div className="w-full py-16 md:py-24 space-y-24 md:space-y-40">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-32">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 px-6">
              <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">{category.name}</h2>
              <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">{category.description}</p>
            </div>
            <div className="relative pb-32">
              {category.variants.map((variant, index) => (
                <div 
                  key={variant.id} 
                  className={`sticky flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-white py-12 md:py-20 px-6 md:px-16 lg:px-32 border-t border-neutral-200 w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  style={{ 
                    top: `calc(100px + ${index * 20}px)`, 
                    zIndex: index + 10,
                    marginTop: index > 0 ? '4rem' : '0',
                    marginBottom: '4rem'
                  }}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                      <h3 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-4">{variant.name}</h3>
                      <p className="text-brand-primary text-lg font-medium mb-6">{variant.tagline}</p>
                      <p className="text-neutral-500 text-base leading-relaxed mb-8">{variant.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {variant.features.map((feature, i) => (
                          <div key={i} className="flex gap-3 items-start group">
                            <div className="h-5 w-5 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                              <CheckCircle className="h-3 w-3 text-brand-primary group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 grid grid-cols-2 gap-6 mb-8">
                        {Object.entries(variant.technical).map(([key, value], i) => (
                          <div key={i}>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">{key}</span>
                            <span className="text-sm font-semibold text-brand-dark">{value as string}</span>
                          </div>
                        ))}
                      </div>
                      {(variant as any).availableColors && (
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-brand-dark block mb-3 uppercase">Available Frame Finishes</span>
                          <div className="flex gap-4">
                            {(variant as any).availableColors.map((color: any) => {
                              const isSelected = (selectedColors[variant.id] || (variant as any).availableColors[0].hex) === color.hex;
                              return (
                                <button key={color.id} onClick={() => handleColorChange(variant.id, color.hex)} title={color.name} className={`w-8 h-8 rounded-full border-2 transition-all ${isSelected ? 'border-brand-primary scale-110 shadow-md' : 'border-neutral-200 hover:scale-105'}`} style={{ backgroundColor: color.hex }} />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
                      <img src={variant.img} alt={variant.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      {(variant as any).availableColors && (
                        <div className="absolute inset-0 pointer-events-none transition-colors duration-500" style={{ border: `12px solid ${selectedColors[variant.id] || (variant as any).availableColors[0].hex}`, opacity: 0.9 }} />
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
