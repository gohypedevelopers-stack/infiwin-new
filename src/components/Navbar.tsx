"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react';


const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const PRODUCTS = [
  { name: "Folding Glass Balcony Systems", href: "/products#folding" },
  { name: "Insulated Glass Balcony Systems", href: "/products#insulated" },
  { name: "Sliding Glass Systems", href: "/products#sliding" },
  { name: "Shop Window Glass Systems", href: "/products#shop" },
  { name: "Guillotine Glass Systems", href: "/products#guillotine" },
  { name: "Walking Motor System", href: "/products#motor" },
  { name: "Fixed Glass Roof (Veranda) System", href: "/products#roof" },
  { name: "Windbreaker System", href: "/products#windbreaker" },
  { name: "Bioclimatic Pergola (IOT Smart Roof)", href: "/products#bioclimatic" }
];

const APPLICATIONS = [
  { name: "Balcony", icon: "Home" },
  { name: "Int. Partition", icon: "Building2" },
  { name: "Office space", icon: "Monitor" },
  { name: "Commercial", icon: "Building2" },
  { name: "Exterior", icon: "MapPin" },
  { name: "Terrace", icon: "Coffee" },
  { name: "Garden", icon: "Paintbrush" },
  { name: "Farm House", icon: "Home" }
];

export const Navbar = ({ isSolid = false }: { isSolid?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = isSolid || isScrolled || activeMenu;

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${showSolid
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-6'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="https://www.infiwindow.com/images/logo1.png"
              alt="INFIWIN"
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${showSolid ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 transition-all duration-500">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.name === "Products" && setActiveMenu('products')}
                onMouseLeave={() => item.name === "Products" && setActiveMenu(null)}
              >
                <a 
                  href={item.href} 
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 hover:text-brand-primary flex items-center gap-1 ${showSolid ? 'text-brand-dark' : 'text-white'}`}
                >
                  {item.name}
                  {item.name === "Products" && <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />}
                </a>

                {item.name === "Products" && (
                  <AnimatePresence>
                    {activeMenu === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl border border-neutral-100 py-4 z-[110]"
                      >
                        <div className="flex flex-col">
                          {PRODUCTS.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-brand-dark hover:bg-neutral-50 hover:text-brand-primary transition-all flex items-center justify-between group"
                            >
                              {product.name}
                              <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className={`hidden md:block px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${showSolid ? 'bg-brand-dark text-white hover:bg-brand-primary' : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white'}`}>
              Get Quote
            </button>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden h-10 w-10 flex items-center justify-center rounded-full transition-all duration-500 ${showSolid ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>


      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[150] lg:hidden p-8 flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-neutral-100 text-brand-dark"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-6 items-center w-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="flex flex-col items-center w-full">
                  <div className="flex items-center gap-4">
                    <a 
                      href={item.href} 
                      onClick={() => item.name !== "Products" && setIsMobileMenuOpen(false)}
                      className="text-4xl font-serif text-brand-dark hover:text-brand-primary transition-colors uppercase tracking-widest"
                    >
                      {item.name}
                    </a>
                    {item.name === "Products" && (
                      <button 
                        onClick={() => setActiveMenu(activeMenu === 'products-mobile' ? null : 'products-mobile')}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-50"
                      >
                        <ChevronDown className={`transition-transform duration-300 ${activeMenu === 'products-mobile' ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {item.name === "Products" && activeMenu === 'products-mobile' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="flex flex-col gap-4 mt-4 items-center bg-neutral-50 w-full py-6 rounded-2xl"
                    >
                      {PRODUCTS.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-bold text-brand-dark uppercase tracking-widest hover:text-brand-primary"
                        >
                          {product.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 flex gap-8">
              <a href="tel:+971542365212" className="h-14 w-14 flex items-center justify-center rounded-full bg-brand-dark text-white shadow-xl"><Phone size={24} /></a>
              <a href="https://wa.me/971542365212" target="_blank" className="h-14 w-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl"><Phone size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[90] flex gap-3">
        <a 
          href="tel:+971542365212" 
          className="flex-1 bg-brand-dark text-white h-14 rounded-full flex items-center justify-center gap-3 shadow-2xl font-bold uppercase tracking-widest text-[10px]"
        >
          <Phone size={16} /> Call
        </a>
        <a 
          href="https://wa.me/971542365212" 
          target="_blank"
          className="flex-1 bg-green-500 text-white h-14 rounded-full flex items-center justify-center gap-3 shadow-2xl font-bold uppercase tracking-widest text-[10px]"
        >
          <Phone size={16} /> WhatsApp
        </a>
        <a 
          href="#contact" 
          className="flex-1 bg-brand-primary text-white h-14 rounded-full flex items-center justify-center gap-3 shadow-2xl font-bold uppercase tracking-widest text-[10px]"
        >
          Quote
        </a>
      </div>

      {/* Floating WhatsApp Desktop (Only after scroll) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a 
            key="floating-phone"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            href="https://wa.me/971542365212" 
            target="_blank"
            className="hidden lg:flex fixed bottom-8 right-8 z-[90] h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform"
          >
            <Phone size={28} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

