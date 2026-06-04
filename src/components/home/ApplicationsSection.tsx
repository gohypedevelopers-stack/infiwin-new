"use client";

import React from 'react';
import { House as Home, Layers, Building as Building2, Wind, CupHot as Coffee, Stars as Sparkles, Display as Monitor, Brush as Paintbrush, ArrowRight } from 'react-bootstrap-icons';

export default function ApplicationsSection({ selectedApp, setSelectedApp }: { selectedApp: string | null; setSelectedApp: (app: string | null) => void }) {
  const apps = [
    {
      name: "Balcony",
      tag: "Residential",
      desc: "Unobstructed frameless premium safety glazing barriers.",
      icon: <Home size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_25_52%20PM.png"
    },
    {
      name: "Int. Partition",
      tag: "Residential",
      desc: "Sleek separation zones for functional multi-use spaces.",
      icon: <Layers size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_15_29%20PM.png"
    },
    {
      name: "Commercial",
      tag: "Commercial",
      desc: "High durability storefront facades & internal partition grids.",
      icon: <Building2 size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_52_36%20PM.png"
    },
    {
      name: "Exterior",
      tag: "Residential",
      desc: "Rigid wind resistance profile constructs for elevations.",
      icon: <Wind size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png"
    },
    {
      name: "Terrace",
      tag: "Residential",
      desc: "Convert open terraces into delightful year-round glass lounges.",
      icon: <Coffee size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png"
    },
    {
      name: "Farm House",
      tag: "Residential",
      desc: "Connect beautiful country landscaping with spacious interiors.",
      icon: <Sparkles size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_27_22%20PM.png"
    },
    {
      name: "Office Space",
      tag: "Commercial",
      desc: "Acoustically isolated conference cubes & manager cabins.",
      icon: <Monitor size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png"
    },
    {
      name: "Garden",
      tag: "Residential",
      desc: "Sleek verandas merging beautiful greenery with indoor thermal comfort.",
      icon: <Paintbrush size={28} className="text-white" />,
      img: "/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png"
    }
  ];

  const handleAppClick = (appName: string) => {
    setSelectedApp(appName);
    const el = document.getElementById('products-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Interactive Recommendation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
              Explore Recommended Usages
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-2xl">
              Tap on an application below to immediately highlight the exact glass system variant recommended for that architectural space.
            </p>
          </div>
        </div>

        {/* Active interactive filter status message */}
        {selectedApp && (
          <div className="mb-8 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-brand-dark">
              Displaying product recommendations suitable for: <span className="text-brand-primary font-bold">{selectedApp}</span>
            </p>
            <button
              onClick={() => setSelectedApp(null)}
              className="px-4 py-2 bg-white text-xs font-bold uppercase tracking-wider text-brand-primary border border-brand-primary/20 rounded-full hover:bg-brand-primary hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Show all systems
            </button>
          </div>
        )}

        {/* 8-Application Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {apps.map((a, idx) => {
            const isActive = selectedApp === a.name;
            return (
              <div
                key={idx}
                onClick={() => handleAppClick(a.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleAppClick(a.name);
                  }
                }}
                role="button"
                tabIndex={0}
                className={`relative aspect-[4/5] md:aspect-[5/4] rounded-3xl overflow-hidden group shadow-sm flex flex-col justify-between p-4 md:p-7 cursor-pointer border transition-all duration-300 bg-zinc-950 outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/20 ${isActive ? 'border-brand-primary md:scale-[1.03] ring-4 ring-brand-primary/20' : 'border-neutral-800 md:hover:scale-[1.015]'
                  }`}
                style={{ backgroundColor: '#09090b' }}
              >
                {/* Image with overlay */}
                <img
                  src={a.img}
                  alt={`${a.name} Application`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 md:group-hover:scale-108 z-0 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 md:group-hover:via-black/50 transition-all duration-300" />
 
                {/* Icon Container */}
                <div className="h-9 w-9 md:h-13 md:w-13 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center self-end relative z-20">
                  {React.cloneElement(a.icon, { size: undefined, className: "text-white w-4 h-4 sm:w-5 sm:h-5" })}
                </div>
 
                {/* Text Meta (Max 2 lines description) */}
                <div className="relative z-20 mt-auto">
                  <span className="text-[7px] sm:text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-0.5">
                    {a.tag}
                  </span>
                  <h4 className="text-[11px] sm:text-sm md:text-base font-extrabold text-white uppercase tracking-wider mb-0.5 leading-tight">
                    {a.name}
                  </h4>
                  <p className="text-white/80 text-[10px] sm:text-xs leading-snug line-clamp-2 font-medium mt-1 md:max-h-0 md:overflow-hidden md:opacity-0 md:translate-y-2 md:transition-all md:duration-300 md:ease-out md:group-hover:max-h-10 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-visible:max-h-10 md:group-focus-visible:opacity-100 md:group-focus-visible:translate-y-0">
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Base Action CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <a
            href="#estimator"
            className="group inline-flex items-center justify-center gap-2 bg-brand-dark text-white hover:bg-brand-primary px-5 py-3 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-center max-w-full"
          >
            <span>Get Custom Enclosure Quote <span className="hidden xs:inline">For Your Space</span></span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
