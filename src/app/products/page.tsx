"use client";

import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'react-bootstrap-icons';
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

import { CATEGORIES, FRAME_COLORS } from '@/data/products';

export default function ProductsPage() {
  const isMobile = useIsMobile();
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [slideFrameColor, setSlideFrameColor] = useState(FRAME_COLORS[0]);

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
                  className={`${isMobile ? 'relative' : 'sticky'} flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-white py-12 md:py-20 px-6 md:px-16 lg:px-32 border-t border-neutral-200 w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  style={isMobile ? {
                    marginBottom: '4rem'
                  } : { 
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
                        <div className="w-full bg-slate-50 p-5 rounded-2xl border border-neutral-100">
                          <span className="text-[10px] font-bold tracking-widest text-neutral-400 block mb-4 uppercase">Frame Finish Selector</span>

                          {/* Colour swatches */}
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            {FRAME_COLORS.map((color) => (
                              <button
                                key={color.id}
                                onClick={() => setSlideFrameColor(color)}
                                title={color.name}
                                className="flex flex-col items-center gap-1"
                              >
                                <span
                                  className={`block w-8 h-8 rounded-full border-[3px] shadow-md transition-all duration-200 ${
                                    slideFrameColor.id === color.id
                                      ? 'scale-110 border-brand-primary ring-2 ring-brand-primary ring-offset-2'
                                      : 'border-neutral-300 hover:scale-105'
                                  }`}
                                  style={{ backgroundColor: color.swatch }}
                                />
                                <span className={`text-[8px] font-semibold uppercase tracking-wide ${
                                  slideFrameColor.id === color.id ? 'text-brand-primary' : 'text-neutral-400'
                                }`}>
                                  {color.id === 'white' ? 'White' : color.id === 'bronze' ? 'Bronze' : color.id === 'gold' ? 'Gold' : 'Anthracite'}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="relative rounded-3xl overflow-hidden"
                    >
                      {(variant as any).availableColors ? (
                        /* Frame image — swaps with colour selector */
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={slideFrameColor.id}
                            src={slideFrameColor.img}
                            alt={`${slideFrameColor.name} Slide & Turn frame`}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-auto object-contain"
                          />
                        </AnimatePresence>
                      ) : (
                        /* Regular product photo for all other variants */
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
                          <img
                            src={variant.img}
                            alt={variant.name}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        </div>
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
