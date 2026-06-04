"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'react-bootstrap-icons';

export const APPLICATION_RECOMMENDATIONS: Record<string, string[]> = {
  "Balcony": ["Slide & Turn System", "Telescopic Slider System"],
  "Int. Partition": ["Bi-fold Glass System", "Centre Open System"],
  "Commercial": ["Telescopic Slider System", "Slide & Turn System"],
  "Exterior": ["3 Track Slider", "Slide & Turn System"],
  "Terrace": ["Slide & Turn System", "Bi-fold Glass System"],
  "Farm House": ["Slide & Turn System", "3 Track Slider"],
  "Office Space": ["Centre Open System", "Bi-fold Glass System"],
  "Garden": ["3 Track Slider", "Telescopic Slider System"]
};

export default function ProductsGridSection({ selectedApp, setSelectedApp }: { selectedApp: string | null; setSelectedApp: (app: string | null) => void }) {
  const products = [
    {
      id: "p1",
      title: "Slide & Turn System",
      subtitle: "Balcony Enclosure",
      benefit: "Perfect view maximization with foldaway tracking system layout.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
      href: "/products#folding",
      popular: true,
      popularTag: "Best Seller"
    },
    {
      id: "p2",
      title: "Telescopic Slider System",
      subtitle: "Super Smooth Gliding",
      benefit: "Overlapping glazed sheets for continuous uninterrupted tracks.",
      img: "https://i.postimg.cc/VkZcgrpr/Chat-GPT-Image-Jun-4-2026-03-28-30-PM.png",
      href: "/products#sliding"
    },
    {
      id: "p3",
      title: "Centre Open System",
      subtitle: "Split-fold Symmetrical",
      benefit: "Panels partition left and right symmetrically to retain optimal balances.",
      img: "https://i.postimg.cc/cLRn8Wbm/Chat-GPT-Image-Jun-4-2026-03-32-39-PM.png",
      href: "/products#centre-open"
    },
    {
      id: "p4",
      title: "Bi-fold Glass System",
      subtitle: "Premium Partition",
      benefit: "Sleek folding structure for rapid internal partition transition zones.",
      img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
      href: "/products#bifold"
    },
    {
      id: "p5",
      title: "2 Track Slider",
      subtitle: "Doors & Windows",
      benefit: "Classic, cost-effective structural system layout with premium hardware profiles.",
      img: "https://i.postimg.cc/MKQS5pxX/Chat-GPT-Image-Jun-4-2026-03-45-34-PM.png",
      href: "/products#sliding-2track"
    },
    {
      id: "p6",
      title: "3 Track Slider",
      subtitle: "Doors & Windows",
      benefit: "Wider spans of clear structural views integrating bug mesh slider capability.",
      img: "https://i.postimg.cc/MKSYX9s0/Chat-GPT-Image-Jun-4-2026-04-02-14-PM.png",
      href: "/products#sliding-3track"
    }
  ];

  return (
    <section id="products-grid" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Our Product Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
              Explore All Architectural Glass Offerings
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 max-w-2xl">
              Select from our 6 major structural builds for standard window heights, door frames, or interior partition boundaries.
            </p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary border-b border-brand-primary/30 pb-1 hover:text-brand-dark hover:border-brand-dark transition-all shrink-0"
          >
            Explore Technical Specs
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Active Filter status banner */}
        {selectedApp && (
          <div className="mb-10 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex flex-wrap items-center justify-between gap-4">
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

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => {
            const isRecommended = !selectedApp || APPLICATION_RECOMMENDATIONS[selectedApp]?.includes(p.title);
            return (
              <div
                key={p.id}
                className={`group bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:relative md:h-[500px] md:block ${isRecommended
                  ? 'border-neutral-100 opacity-100 scale-100'
                  : 'border-transparent opacity-40 hover:opacity-60 scale-[0.98] blur-[0.5px]'
                  }`}
              >
                {/* Product Image Stack */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 md:absolute md:inset-x-0 md:top-0 md:aspect-auto md:h-full md:transition-[height] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:h-[70%]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {p.popular && (
                    <div className="absolute top-4 left-4 bg-brand-primary text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {p.popularTag}
                    </div>
                  )}

                  <div className="hidden md:block absolute inset-x-0 bottom-0 p-6 md:p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-1">
                    <span className="text-[9px] font-extrabold text-white/80 uppercase tracking-widest block mb-2">
                      {p.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-sm">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-1 flex-col justify-between bg-white md:absolute md:inset-x-0 md:bottom-0 md:h-[30%] md:p-4 md:px-5 md:py-4 md:translate-y-full md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-y-0">
                  <div>
                    <span className="text-[9px] font-extrabold text-brand-primary uppercase tracking-widest block mb-1.5">
                      {p.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 md:hidden">
                      {p.title}
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-[13px] leading-snug">
                      {p.benefit}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex shrink-0 items-center justify-between border-t border-neutral-50 pt-2 mt-2">
                    <Link
                      href={p.href}
                      className="text-[10px] font-extrabold text-brand-dark hover:text-brand-primary uppercase tracking-wider transition-colors"
                    >
                      Variants
                    </Link>
                    <a
                      href="#estimator"
                      className="flex items-center gap-1 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all"
                    >
                      Get Price <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
