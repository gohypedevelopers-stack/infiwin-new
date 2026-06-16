"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Envelope as Mail, Telephone as Phone, ChevronDown, ArrowRight, List as Menu, X, Search, ChevronRight, Whatsapp } from 'react-bootstrap-icons';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Concepts", href: "/concepts" },
  { name: "About Us", href: "/about" },
];

const PRODUCTS = [
  // Balcony System
  { name: "Slide & Turn", href: "/products#slide-turn", category: "Balcony System", desc: "Premium space-saving slide and turn balcony partitions", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png" },
  { name: "Guillotine Glass System", href: "/products#guillotine", category: "Balcony System", desc: "Motorized vertical sliding panels for maximum convenience", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_50_39 PM.png" },
  // Internal Partition
  { name: "Telescopic Sliders", href: "/products#telescopic", category: "Internal Partition", desc: "Overlapping glazed sheets for continuous tracks", img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png" },
  { name: "Synchronized Systems", href: "/products#synchronized", category: "Internal Partition", desc: "Panels partition left and right symmetrically", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_29_01 PM.png" },
  { name: "Top Hang Bi Fold", href: "/products#top-hang-bifold", category: "Internal Partition", desc: "Sleek folding structure for rapid partition transition zones", img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png" },
  // Doors & Windows
  { name: "Sliding Windows & Doors", href: "/products#sliding-windows", category: "Doors & Windows", desc: "Classic, cost-effective structural system layout", img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png" },
  { name: "Openable Windows & Doors", href: "/products#openable-windows", category: "Doors & Windows", desc: "Traditional hinged solutions for maximum ventilation", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png" },
  { name: "Foldable Doors (Bi Fold)", href: "/products#foldable-doors", category: "Doors & Windows", desc: "Expansive opening capability with sturdy folding mechanics", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png" },
  // Bathroom
  { name: "90 Degree Encloser", href: "/products#90-encloser", category: "Bathroom", desc: "Corner shower enclosures for optimal space utilization", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png" },
  { name: "Sliding Enclouser", href: "/products#sliding-enclouser", category: "Bathroom", desc: "Space-saving sliding shower screens", img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png" },
  { name: "Openable Door", href: "/products#openable-bathroom", category: "Bathroom", desc: "Hinged glass doors for modern bathroom aesthetics", img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png" },
  { name: "Fixed Partition", href: "/products#fixed-partition", category: "Bathroom", desc: "Minimalist fixed glass panels for walk-in showers", img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png" }
];

const APPLICATIONS = [
  { name: "Balcony", href: "/applications#balcony", category: "Residential Applications", desc: "Full Length, Bottom fix, Curved, L Shape, U Shape Etc", img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png" },
  { name: "Terrace", href: "/applications#terrace", category: "Residential Applications", desc: "Show Glass House, Glass Roof, Etc", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png" },
  { name: "Farmhouse", href: "/applications#farmhouse", category: "Residential Applications", desc: "Show Slide & Turn connecting country landscaping", img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png" },
  { name: "Display Window", href: "/applications#display-window", category: "Commercial Applications", desc: "Showroom Display window Slide & Turn", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png" }
];

const CONCEPTS = [
  { name: "Façade", href: "/concepts/facade", category: "Concepts", desc: "Animated Video showcase of facade solutions", img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png" },
  { name: "Restaurant", href: "/concepts/restaurant", category: "Concepts", desc: "Animated Video showcase for restaurant settings", img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png" },
  { name: "Pool Side Bar", href: "/concepts/pool-side-bar", category: "Concepts", desc: "Animated Video showcase for pool side bars", img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png" }
];

const ALL_SEARCH_ITEMS = [
  ...PRODUCTS.map(p => ({ ...p, type: 'Product' })),
  ...APPLICATIONS.map(a => ({ ...a, type: 'Application' })),
  ...CONCEPTS.map(c => ({ ...c, type: 'Concept' }))
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

  const defaultWhatsAppUrl = "https://wa.me/917337074370?text=Hi%20Infiwin%2C%20I%20am%20interested%20in%20getting%20a%20Slide%20%26%20Turn%20Balcony%20System.%20Please%20share%20your%20product%20catalog!";

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${showSolid
            ? 'w-full bg-white/90 backdrop-blur-md py-4 px-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border-b border-neutral-100'
            : 'w-full bg-white/10 backdrop-blur-md py-4 px-6 border-b border-white/10 shadow-sm'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-4">
            <img
              src="https://www.infiwindow.com/images/logo1.png"
              alt="INFIWIN"
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${showSolid ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-sans absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.name === "Products" || item.name === "Applications" || item.name === "Concepts";
              const isDropdownActive = activeMenu === item.name.toLowerCase();

              return (
                <div
                  key={item.name}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && setActiveMenu(item.name.toLowerCase())}
                >
                  <Link
                    href={item.href}
                    className={`text-[14px] font-semibold tracking-wide transition-colors duration-300 hover:text-brand-primary flex items-center gap-1.5 relative py-1 ${showSolid ? 'text-brand-dark' : 'text-white'}`}
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
            <div ref={searchContainerRef} className="relative w-full max-w-[200px] xl:max-w-[250px]">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${isSearchFocused
                  ? 'bg-white border-brand-primary shadow-sm ring-2 ring-brand-primary/10 text-brand-dark'
                  : showSolid
                    ? 'bg-neutral-100 border-neutral-200 text-brand-dark'
                    : 'bg-white/10 border-white/20 text-white'
                  }`}
              >
                <Search size={16} className={isSearchFocused ? 'text-brand-primary' : showSolid ? 'text-neutral-400' : 'text-white/60'} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search..."
                  className={`bg-transparent border-none outline-none text-xs w-full focus:ring-0 focus:outline-none p-0 transition-colors duration-300 ${isSearchFocused || showSolid
                      ? 'text-brand-dark placeholder:text-neutral-400'
                      : 'text-white placeholder:text-white/60'
                    }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className={`transition-colors duration-300 ${isSearchFocused || showSolid
                        ? 'text-neutral-400 hover:text-neutral-600'
                        : 'text-white/60 hover:text-white'
                      }`}
                  >
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
                    className="absolute top-[110%] right-0 w-[340px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-4 overflow-hidden z-[120]"
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

            {/* Header Call-to-Action (CTA) */}
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm shrink-0 ${showSolid
                ? 'bg-brand-primary text-white hover:bg-brand-dark'
                : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white'
                }`}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Navigation Toggle - Guaranteed 48x48px target */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              className={`h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 ${showSolid ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* ======================================= */}
        {/* MYNTRA-STYLE FLOATING MEGA DROPDOWNS  */}
        {/* ======================================= */}
        <AnimatePresence>
          {activeMenu === 'products' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[110%] left-1/2 -translate-x-1/2 w-screen max-w-[95vw] lg:max-w-6xl bg-white shadow-2xl border border-neutral-100 rounded-3xl py-8 px-8 z-[110]"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1: Balcony System */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Balcony System</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Balcony System").map((prod) => (
                      <Link key={prod.name} href={prod.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={prod.img} alt={prod.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{prod.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{prod.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Internal Partition */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Internal Partition</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Internal Partition").map((prod) => (
                      <Link key={prod.name} href={prod.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={prod.img} alt={prod.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{prod.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{prod.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Doors & Windows */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Doors & Windows</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Doors & Windows").map((prod) => (
                      <Link key={prod.name} href={prod.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={prod.img} alt={prod.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{prod.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{prod.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 4: Bathroom */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Bathroom</h5>
                  <div className="flex flex-col gap-3">
                    {PRODUCTS.filter(p => p.category === "Bathroom").map((prod) => (
                      <Link key={prod.name} href={prod.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={prod.img} alt={prod.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{prod.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{prod.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
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
              className="absolute top-[110%] left-1/2 -translate-x-1/2 w-screen max-w-[95vw] lg:max-w-6xl bg-white shadow-2xl border border-neutral-100 rounded-3xl py-8 px-8 z-[110]"
              onMouseEnter={() => setActiveMenu('applications')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="grid grid-cols-2 gap-10">
                {/* Column 1: Applications */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Applications</h5>
                  <div className="flex flex-col gap-3">
                    {APPLICATIONS.map((app) => (
                      <Link key={app.name} href={app.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={app.img} alt={app.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{app.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{app.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Featured Partition Banner */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-100 flex flex-col justify-end p-6 group bg-neutral-900">
                  <img
                    src="/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png"
                    alt="Office partition"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-brand-primary text-white font-bold uppercase tracking-widest mb-2 inline-block">Modern Workspaces</span>
                    <h6 className="text-sm font-bold text-white mb-1">Acoustic Glazing Partitions</h6>
                    <p className="text-[11px] text-neutral-300 line-clamp-2 leading-tight mb-3">Sleek visual frames designed to create acoustic comfort and premium aesthetics.</p>
                    <Link href="/applications" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">
                      Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === 'concepts' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[110%] left-1/2 -translate-x-1/2 w-screen max-w-[95vw] lg:max-w-4xl bg-white shadow-2xl border border-neutral-100 rounded-3xl py-8 px-8 z-[110]"
              onMouseEnter={() => setActiveMenu('concepts')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="grid grid-cols-2 gap-10">
                {/* Column 1: Concepts */}
                <div>
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Design Concepts</h5>
                  <div className="flex flex-col gap-3">
                    {CONCEPTS.map((concept) => (
                      <Link key={concept.name} href={concept.href} onClick={() => setActiveMenu(null)} className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200/60 shadow-sm relative">
                          <img src={concept.img} alt={concept.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-semibold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">{concept.name}</div>
                          <div className="text-[10px] text-neutral-400 leading-tight mt-1 line-clamp-1">{concept.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Featured Concept Video Placeholder */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-100 flex flex-col justify-end p-6 group bg-neutral-900">
                  <img
                    src="/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png"
                    alt="Concept Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-brand-primary text-white font-bold uppercase tracking-widest mb-2 inline-block">Visionary Designs</span>
                    <h6 className="text-sm font-bold text-white mb-1">Explore Our Concepts</h6>
                    <p className="text-[11px] text-neutral-300 line-clamp-2 leading-tight mb-3">Immerse yourself in our animated concepts for Façade, Restaurant, and Pool Side Bars.</p>
                    <Link href="/concepts/facade" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">
                      Watch Video <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Navigation Menu - Transition <300ms, Tap targets min 48px */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }} // 250ms (<300ms)
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
                className="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-100 text-brand-dark"
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Link list: Home, Products, Applications, About Us, FAQs */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-5 pr-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Applications", href: "/applications" },
                { name: "Concepts", href: "/concepts" },
                { name: "About Us", href: "/about" }
              ].map((item) => (
                <div key={item.name} className="flex flex-col border-b border-neutral-100 pb-3">
                  <div className="flex items-center justify-between min-h-[48px]">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-brand-dark hover:text-brand-primary transition-colors py-2 flex-1 block"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Drawer CTAs */}
            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-100 pt-6">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-primary text-white h-12 rounded-full font-semibold text-xs tracking-wider uppercase transition-colors min-h-[48px]"
              >
                Request Design Quote
              </a>
              <a
                href="tel:+917337074370"
                className="flex items-center justify-center gap-2 bg-neutral-100 text-brand-dark border border-neutral-200 h-12 rounded-full font-semibold text-xs tracking-wider uppercase transition-colors min-h-[48px]"
              >
                <Phone size={14} /> Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Mobile CTA Bar (High-Visibility Viewport Lock) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="mobile-sticky-cta"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-[140] bg-white border-t border-neutral-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] flex justify-between items-stretch h-16"
          >
            <a
              href="tel:+917337074370"
              className="flex-1 bg-white hover:bg-neutral-50 text-neutral-800 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-[10px] border-r border-neutral-200 min-h-[48px]"
            >
              <Phone size={13} className="text-neutral-700" /> Call Now
            </a>
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-[10px] min-h-[48px]"
            >
              <Whatsapp size={13} className="text-white" /> WhatsApp
            </a>
            <a
              href="#estimator"
              className="flex-1 bg-brand-primary hover:bg-brand-dark text-white flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-[10px] min-h-[48px]"
            >
              Get Quote <ArrowRight size={12} className="text-white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Desktop WhatsApp Trigger on bottom right */}
      <AnimatePresence>
        {(isScrolled || showSolid) && (
          <motion.a
            key="floating-whatsapp"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex fixed bottom-8 right-8 z-[90] h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Chat on WhatsApp"
          >
            <Whatsapp size={28} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};
