"use client";

import React, { use, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, ArrowRight, Whatsapp } from 'react-bootstrap-icons';
import { getVariantById, getCategoryByVariantId, FRAME_COLORS } from '@/data/products';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const isMobile = useIsMobile();

  const variant = getVariantById(id);
  const category = getCategoryByVariantId(id);

  const [slideFrameColor, setSlideFrameColor] = useState(FRAME_COLORS[0]);

  if (!variant || !category) {
    notFound();
  }

  // Pre-filled WhatsApp message
  const whatsappUrl = `https://wa.me/917337074370?text=${encodeURIComponent(`Hi Infiwin, I am interested in the ${variant.name} (${category.name}). Please share more details and pricing!`)}`;

  // Related products from the same category
  const relatedProducts = category.variants.filter((v) => v.id !== id);

  return (
    <main className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold text-neutral-400 mb-6 md:mb-8 tracking-wider uppercase">
          <Link href="/products" className="hover:text-brand-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={12} /> All Products
          </Link>
          <span>/</span>
          <span className="text-brand-dark">{category.name}</span>
          <span>/</span>
          <span className="text-brand-primary">{variant.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          
          {/* Left: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 md:pt-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-brand-dark tracking-tight mb-3 md:mb-4">{variant.name}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-brand-primary font-medium mb-4 md:mb-6">{variant.tagline}</p>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10">{variant.desc}</p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                {variant.features.map((feature, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-3 items-start group"
                  >
                    <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                      <CheckCircle className="h-3.5 w-3.5 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-neutral-700 font-medium pt-0.5">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                <Link href="/contact" className="w-full sm:w-auto text-center px-6 md:px-8 py-3.5 bg-brand-primary text-white rounded-full font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg hover:shadow-xl hover:bg-brand-dark hover:-translate-y-0.5 transition-all">
                  Request Free Quote
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 md:px-8 py-3.5 bg-green-500 text-white rounded-full font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:-translate-y-0.5 transition-all">
                  <Whatsapp size={18} /> Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Visuals & Interactivity */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-neutral-50 border border-neutral-100 shadow-xl md:shadow-2xl"
            >
              <div className="aspect-square sm:aspect-[4/3] relative flex items-center justify-center p-4 md:p-8">
                {variant.availableColors ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slideFrameColor.id}
                      src={slideFrameColor.img}
                      alt={`${slideFrameColor.name} Frame`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.45 }}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </AnimatePresence>
                ) : (
                  <img
                    src={variant.img}
                    alt={variant.name}
                    className="w-full h-full object-cover rounded-2xl shadow-sm"
                  />
                )}
              </div>
            </motion.div>

            {/* Frame Finish Selector */}
            {variant.availableColors && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 md:mt-8 bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col items-center sm:flex-row sm:justify-between gap-4 md:gap-6 text-center sm:text-left">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 block mb-1 uppercase">Interactive View</span>
                  <span className="text-brand-dark font-semibold text-sm">Select Frame Finish</span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                  {FRAME_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSlideFrameColor(color)}
                      title={color.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <span
                        className={`block w-10 h-10 rounded-full border-[3px] shadow-sm transition-all duration-300 ${
                          slideFrameColor.id === color.id
                            ? 'scale-110 border-brand-primary ring-4 ring-brand-primary/20 ring-offset-2'
                            : 'border-neutral-200 group-hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.swatch }}
                      />
                      <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${
                        slideFrameColor.id === color.id ? 'text-brand-primary' : 'text-neutral-400'
                      }`}>
                        {color.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Technical Specifications Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 bg-neutral-900 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-primary/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">Technical Specifications</h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12">Engineered with precision. Discover the structural components that make up the {variant.name}.</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {Object.entries(variant.technical).map(([key, value], i) => (
                <div key={i} className="border-l-2 border-brand-primary/30 pl-4 md:border-l md:border-neutral-700 md:pl-6">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-brand-primary block mb-1 md:mb-2">{key}</span>
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Related Products / Explore Category */}
        {relatedProducts.length > 0 && (
          <section className="mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-6 md:mb-8">More from {category.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <Link key={prod.id} href={`/products/${prod.id}`} className="group bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-extrabold text-brand-primary uppercase tracking-widest block mb-2">{prod.tagline}</span>
                    <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{prod.name}</h4>
                    <p className="text-neutral-500 text-sm line-clamp-2">{prod.desc}</p>
                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-primary transition-colors gap-2">
                      View System <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
