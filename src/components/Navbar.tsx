"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook, Menu, X } from 'lucide-react';


const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const PRODUCTS = [
  { name: "Slide & Turn System", desc: "Premium Balcony Enclosure" },
  { name: "Telescopic Slider", desc: "Smooth multi-track systems" },
  { name: "Bi-fold Doors", desc: "Panoramic wide openings" },
  { name: "2 Track Slider", desc: "Efficient door/window solutions" },
  { name: "3 Track Slider", desc: "Wide span sliding systems" },
  { name: "Centre Open System", desc: "Symmetrical sliding panels" }
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

export const Navbar = () => {
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

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || activeMenu
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-neutral-100 shadow-sm'
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
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${isScrolled || activeMenu ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 transition-all duration-500">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 hover:text-brand-primary ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className={`hidden md:block px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${isScrolled || activeMenu ? 'bg-brand-dark text-white hover:bg-brand-primary' : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white'}`}>
              Get Quote
            </button>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden h-10 w-10 flex items-center justify-center rounded-full transition-all duration-500 ${isScrolled || activeMenu ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
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

            <div className="flex flex-col gap-6 items-center">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-brand-dark hover:text-brand-primary transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </a>
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

