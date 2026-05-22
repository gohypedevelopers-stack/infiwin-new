"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, ArrowRight, Menu, X, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  { name: "Folding Glass Balcony Systems", href: "/products#folding", category: "Balcony Systems", desc: "100% opening frameless balcony spatial solution" },
  { name: "Insulated Glass Balcony Systems", href: "/products#insulated", category: "Balcony Systems", desc: "Premium insulated double-glazed thermal spatial systems" },
  { name: "Sliding Glass Systems", href: "/products#sliding", category: "Balcony Systems", desc: "Minimalist sliding multi-track panoramic doors" },
  { name: "Slide & Turn Systems", href: "/products#slide-turn", category: "Balcony Systems", desc: "Premium space-saving slide and turn balcony partitions" },
  { name: "Guillotine Glass Systems", href: "/products#guillotine", category: "Advanced Glass Systems", desc: "Vertical motorized smart glass panels for commercial use" },
  { name: "Walking Motor System", href: "/products#motor", category: "Advanced Glass Systems", desc: "Motorized folding sliding glass spatial solution" },
  { name: "Shop Window Glass Systems", href: "/products#shop", category: "Advanced Glass Systems", desc: "High-exposure frameless storefront glass dividers" },
  { name: "Fixed Glass Roof (Veranda) System", href: "/products#roof", category: "Roof & Cover Systems", desc: "Custom transparent architectural glass roofs" },
  { name: "Windbreaker System", href: "/products#windbreaker", category: "Roof & Cover Systems", desc: "Adjustable height wind barrier glass guards" },
  { name: "Bioclimatic Pergola (IOT Smart Roof)", href: "/products#bioclimatic", category: "Roof & Cover Systems", desc: "Smart louvered aluminum climate control roofs" }
];

const APPLICATIONS = [
  { name: "Balcony", href: "/applications#balcony", category: "Residential Applications", desc: "Transform your home balcony into a panoramic oasis" },
  { name: "Exterior", href: "/applications#exterior", category: "Residential Applications", desc: "Seamless integration between home indoor and outdoor spaces" },
  { name: "Terrace", href: "/applications#terrace", category: "Residential Applications", desc: "Widescreen panoramic views for structural terrace covers" },
  { name: "Garden", href: "/applications#garden", category: "Residential Applications", desc: "Custom aesthetic framing solutions for green surroundings" },
  { name: "Farm House", href: "/applications#farm-house", category: "Residential Applications", desc: "Grand glass entries and structural verandas for country homes" },
  { name: "Interior Partition", href: "/applications#partition", category: "Commercial Applications", desc: "Modern acoustic glass dividers for home or office partitions" },
  { name: "Office space", href: "/applications#office", category: "Commercial Applications", desc: "Sleek professional conference room walls and workspace panels" },
  { name: "Commercial", href: "/applications#commercial", category: "Commercial Applications", desc: "Robust high-exposure entries for restaurants and retail fronts" }
];

const ALL_SEARCH_ITEMS = [
  ...PRODUCTS.map(p => ({ ...p, type: 'Product' })),
  ...APPLICATIONS.map(a => ({ ...a, type: 'Application' }))
];

export const Navbar = ({ isSolid = false }: { isSolid?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside search component to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showSolid = isSolid || isScrolled || activeMenu !== null;

  const filteredSearchItems = ALL_SEARCH_ITEMS.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${showSolid
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-neutral-100'
            : 'bg-white/10 backdrop-blur-md py-4 border-b border-white/10 shadow-sm'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-4">
            <img
              src="https://www.infiwindow.com/images/logo1.png"
              alt="INFIWIN"
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${showSolid ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.name === "Products" || item.name === "Applications";
              const isDropdownActive = activeMenu === item.name.toLowerCase();

              return (
                <div
                  key={item.name}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && setActiveMenu(item.name.toLowerCase())}
                >
                  <Link
                    href={item.href}
                    className={`text-[14px] font-medium tracking-wide transition-colors duration-300 hover:text-brand-primary flex items-center gap-1.5 relative py-1 ${showSolid ? 'text-brand-dark' : 'text-white'}`}
                  >
                    {item.name}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isDropdownActive ? 'rotate-180 text-brand-primary' : ''}`}
                      />
                    )}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 hover-trigger-line group-hover:w-full" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Row: Search & Button */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 max-w-sm xl:max-w-md justify-end relative">
            {/* Myntra-Style Interactive Search Bar */}
            <div ref={searchContainerRef} className="relative w-full max-w-[240px] xl:max-w-[300px]">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${isSearchFocused
                    ? 'bg-white border-brand-primary shadow-sm ring-2 ring-brand-primary/10'
                    : showSolid
                      ? 'bg-neutral-100 border-neutral-200 text-brand-dark'
                      : 'bg-white/10 border-white/20 text-white placeholder-white/60'
                  }`}
              >
                <Search size={16} className={isSearchFocused ? 'text-brand-primary' : showSolid ? 'text-neutral-400' : 'text-white/60'} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search products, systems..."
                  className="bg-transparent border-none outline-none text-xs w-full focus:ring-0 focus:outline-none p-0"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-neutral-400 hover:text-neutral-600">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown Card */}
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-[340px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-4 overflow-hidden z-[120]"
                  >
                    <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      {searchQuery ? `Search Results (${filteredSearchItems.length})` : 'Popular Searches'}
                    </div>

                    <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto pr-1">
                      {searchQuery ? (
                        filteredSearchItems.length > 0 ? (
                          filteredSearchItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsSearchFocused(false)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{item.name}</span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-medium">{item.type}</span>
                                </div>
                                <div className="text-[10px] text-neutral-400 line-clamp-1">{item.desc}</div>
                              </div>
                              <ChevronRight size={14} className="text-neutral-300 group-hover:text-brand-primary transition-colors self-center" />
                            </Link>
                          ))
                        ) : (
                          <div className="text-xs text-neutral-400 py-6 text-center">No systems found matching &quot;{searchQuery}&quot;</div>
                        )
                      ) : (
                        // Default Trending / Quick suggestions
                        ALL_SEARCH_ITEMS.slice(0, 5).map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsSearchFocused(false)}
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 transition-colors group"
                          >
                            <div>
                              <span className="text-xs font-medium text-brand-dark group-hover:text-brand-primary transition-colors">{item.name}</span>
                              <span className="text-[9px] text-neutral-400 block">{item.category}</span>
                            </div>
                            <ChevronRight size={14} className="text-neutral-300 group-hover:text-brand-primary transition-colors" />
                          </Link>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Quote Button */}
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm shrink-0 ${showSolid
                  ? 'bg-brand-primary text-white hover:bg-brand-dark'
                  : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white'
                }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 ${showSolid ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* ======================================= */}
          {/* MYNTRA-STYLE WIDESCREEN MEGA DROPDOWNS  */}
          {/* ======================================= */}
          <AnimatePresence>
            {activeMenu === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-neutral-100 py-10 px-12 z-[110] grid grid-cols-4 gap-8 max-w-[1600px] mx-auto"
                onMouseEnter={() => setActiveMenu('products')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Column 1: Balcony Systems */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Balcony Systems</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Balcony Systems").map((prod) => (
                      <Link key={prod.name} href={prod.href} className="group block">
                        <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{prod.name}</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">{prod.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Advanced Glass Systems */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Advanced Glass Systems</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Advanced Glass Systems").map((prod) => (
                      <Link key={prod.name} href={prod.href} className="group block">
                        <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{prod.name}</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">{prod.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Roof & Cover Systems */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Roof & Cover Systems</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Roof & Cover Systems").map((prod) => (
                      <Link key={prod.name} href={prod.href} className="group block">
                        <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{prod.name}</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">{prod.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 4: Premium Visual Showcase Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-100 flex flex-col justify-end p-6 group aspect-[4/3] bg-neutral-900">
                  <img
                    src="https://www.infiwindow.com/images/gallery/balcony/large/balcony1.jpg"
                    alt="Premium Showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-brand-primary text-white font-bold uppercase tracking-widest mb-2 inline-block">Featured</span>
                    <h6 className="text-sm font-bold text-white mb-1">Architectural Solutions</h6>
                    <p className="text-[11px] text-neutral-300 line-clamp-2 leading-tight mb-3">Reclaim and redefine your spaces with modern high-performance glazing.</p>
                    <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">
                      Explore Series <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMenu === 'applications' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-neutral-100 py-10 px-12 z-[110] grid grid-cols-3 gap-10 max-w-[1600px] mx-auto"
                onMouseEnter={() => setActiveMenu('applications')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Column 1: Residential Applications */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Residential Applications</h5>
                  <div className="flex flex-col gap-3">
                    {APPLICATIONS.filter(a => a.category === "Residential Applications").map((app) => (
                      <Link key={app.name} href={app.href} className="group block">
                        <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{app.name} Space</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">{app.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Commercial Applications */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Commercial Applications</h5>
                  <div className="flex flex-col gap-3">
                    {APPLICATIONS.filter(a => a.category === "Commercial Applications").map((app) => (
                      <Link key={app.name} href={app.href} className="group block">
                        <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{app.name}</div>
                        <div className="text-[11px] text-neutral-400 leading-tight mt-0.5 line-clamp-1">{app.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Featured Partition Banner */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-100 flex flex-col justify-end p-6 group bg-neutral-900">
                  <img
                    src="https://www.infiwindow.com/images/gallery/office/large/office1.jpg"
                    alt="Office partition"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-brand-primary text-white font-bold uppercase tracking-widest mb-2 inline-block">Modern Workspaces</span>
                    <h6 className="text-sm font-bold text-white mb-1">Acoustic Glazing Partitions</h6>
                    <p className="text-[11px] text-neutral-300 line-clamp-2 leading-tight mb-3">Sleek visual frames designed to create acoustic comfort and premium aesthetics.</p>
                    <Link href="/applications" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">
                      Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[150] lg:hidden p-8 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <img
                src="https://www.infiwindow.com/images/logo1.png"
                alt="INFIWIN"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-100 text-brand-dark"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links List */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-6 pr-2">
              {NAV_ITEMS.map((item) => {
                const hasDropdown = item.name === "Products" || item.name === "Applications";
                const isDropdownActive = activeMenu === `${item.name.toLowerCase()}-mobile`;

                return (
                  <div key={item.name} className="flex flex-col border-b border-neutral-100 pb-4">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                        className="text-xl font-medium text-brand-dark hover:text-brand-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      {hasDropdown && (
                        <button
                          onClick={() => setActiveMenu(isDropdownActive ? null : `${item.name.toLowerCase()}-mobile`)}
                          className="h-9 w-9 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-500"
                        >
                          <ChevronDown className={`transition-transform duration-300 ${isDropdownActive ? 'rotate-180 text-brand-primary' : ''}`} size={18} />
                        </button>
                      )}
                    </div>

                    {/* Submenu on Mobile */}
                    {hasDropdown && isDropdownActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-3 mt-3 pl-4 bg-neutral-50 py-3 rounded-xl"
                      >
                        {item.name === "Products" ? (
                          PRODUCTS.map((prod) => (
                            <Link
                              key={prod.name}
                              href={prod.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs font-medium text-neutral-600 hover:text-brand-primary block py-1"
                            >
                              {prod.name}
                            </Link>
                          ))
                        ) : (
                          APPLICATIONS.map((app) => (
                            <Link
                              key={app.name}
                              href={app.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs font-medium text-neutral-600 hover:text-brand-primary block py-1"
                            >
                              {app.name} Space
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer Contact CTAs */}
            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-100 pt-6">
              <a
                href="tel:+971542365212"
                className="flex items-center justify-center gap-2 bg-brand-dark text-white py-3 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-brand-primary transition-colors"
              >
                <Phone size={14} /> Call Office
              </a>
              <a
                href="https://wa.me/971542365212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-green-600 transition-colors"
              >
                <Phone size={14} /> Connect WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[90] flex gap-3">
        <a
          href="tel:+971542365212"
          className="flex-1 bg-brand-dark text-white h-14 rounded-full flex items-center justify-center gap-2 shadow-2xl font-bold uppercase tracking-wider text-[10px]"
        >
          <Phone size={14} /> Call
        </a>
        <a
          href="https://wa.me/971542365212"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white h-14 rounded-full flex items-center justify-center gap-2 shadow-2xl font-bold uppercase tracking-wider text-[10px]"
        >
          <Phone size={14} /> WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-brand-primary text-white h-14 rounded-full flex items-center justify-center gap-2 shadow-2xl font-bold uppercase tracking-wider text-[10px]"
        >
          Quote
        </Link>
      </div>

      {/* Floating Desktop WhatsApp Trigger */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            key="floating-whatsapp"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            href="https://wa.me/971542365212"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex fixed bottom-8 right-8 z-[90] h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <Phone size={28} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};
