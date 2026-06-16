"use client";

import { motion, AnimatePresence } from 'motion/react';
import {
  House as Home,
  Building as Building2,
  Display as Monitor,
  CupHot as Coffee,
  Brush as Paintbrush,
  Layers,
  Wind,
  Stars as Sparkles,
  ArrowRight,
  X
} from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';

const IMAGES = [
  // --- Farmhouses & Villas ---
  {
    id: "img-fh-1",
    title: "Luxury Farmhouse Glass Pavilion",
    category: "Villas & Farmhouses",
    src: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4402.JPG",
    location: "Al Awir Estate"
  },
  {
    id: "img-fh-2",
    title: "Slide & Turn Farmhouse Veranda",
    category: "Villas & Farmhouses",
    src: "/extracted_assets/Website/Images/S&T/Farmhouse/WhatsApp Image 2021-02-20 at 5.28.31 PM.jpeg",
    location: "Khawaneej Sanctuary"
  },
  {
    id: "img-fh-3",
    title: "High-Span Frameless Glass Walls",
    category: "Villas & Farmhouses",
    src: "/extracted_assets/Website/Images/S&T/Farmhouse/IMG_4395.JPG",
    location: "Al Ain Private Estate"
  },
  // --- Hotels & F&B ---
  {
    id: "img-hp-1",
    title: "Commercial Facade - Hotel Peninsula",
    category: "Hotels & Commercial",
    src: "/extracted_assets/Website/Images/S&T/Hotel Penensula/IMG-20230416-WA0001.jpg",
    location: "Peninsula Hotel Plaza"
  },
  {
    id: "img-hp-2",
    title: "F&B Multi-Stack Glass Frontage",
    category: "Hotels & Commercial",
    src: "/extracted_assets/Website/Images/S&T/Hotel Penensula/IMG-20230416-WA0015.jpg",
    location: "Marina Walk Café"
  },
  {
    id: "img-ot-1",
    title: "Open Tap Gastrobar Glass Divider",
    category: "Hotels & Commercial",
    src: "/extracted_assets/Website/Images/S&T/Open Tap/IMG-20231009-WA0004.jpg",
    location: "Open Tap Lounge"
  },
  {
    id: "img-ot-2",
    title: "Weather-Tight Restaurant Glazing",
    category: "Hotels & Commercial",
    src: "/extracted_assets/Website/Images/S&T/Open Tap/IMG-20231009-WA0008.jpg",
    location: "Open Tap Outdoor Deck"
  },
  // --- Offices & Partitions ---
  {
    id: "img-off-1",
    title: "Executive Office Glass Partition",
    category: "Offices & Partitions",
    src: "/extracted_assets/Website/Images/Offics/IMG-20260112-WA0007.jpg",
    location: "DIFC Financial Offices"
  },
  {
    id: "img-off-2",
    title: "Minimalist Double-Glazed Dividers",
    category: "Offices & Partitions",
    src: "/extracted_assets/Website/Images/Offics/IMG-20210310-WA0002.jpg",
    location: "Silicon Oasis Tech Hub"
  },
  {
    id: "img-off-3",
    title: "Acoustic Sealing Glass Meeting Room",
    category: "Offices & Partitions",
    src: "/extracted_assets/Website/Images/Offics/IMG-20260112-WA0009.jpg",
    location: "DMCC Trade Office"
  },
  // --- Terraces ---
  {
    id: "img-ter-1",
    title: "Scenic High-Rise Balcony Protection",
    category: "Terraces & Balconies",
    src: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20211126-WA0001.jpg",
    location: "Downtown Boulevard Apt"
  },
  {
    id: "img-ter-2",
    title: "Penthouse Panoramic Sliding Glass",
    category: "Terraces & Balconies",
    src: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20240605-WA0011.jpg",
    location: "Business Bay Penthouse"
  },
  {
    id: "img-ter-3",
    title: "Veranda Weatherproof Glass Screening",
    category: "Terraces & Balconies",
    src: "/extracted_assets/Website/Images/Offics/Terrece/IMG-20240605-WA0015.jpg",
    location: "Palm Residence Terrace"
  },
  // --- Telescopic ---
  {
    id: "img-tel-1",
    title: "Multi-Track Telescopic Sliding Setup",
    category: "Telescopic Systems",
    src: "/extracted_assets/Website/Images/Telescopic/IMG-20230722-WA0025.jpg",
    location: "Arabian Ranches Villa"
  },
  {
    id: "img-tel-2",
    title: "Telescopic Overlapping Precision Glass",
    category: "Telescopic Systems",
    src: "/extracted_assets/Website/Images/Telescopic/IMG-20240809-WA0015.jpg",
    location: "Jumeirah Mansion"
  }
];

const applications = [
  {
    id: "balcony",
    title: "Balcony",
    desc: "Dedicate full page. Showcase our full range of balcony solutions including Full Length, Bottom fix, Curved, L Shape, U Shape, and more. Reclaim your outdoor space with premium safety glazing barriers.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png",
    icon: <Home size={32} />,
    galleryCategory: "Terraces & Balconies"
  },
  {
    id: "terrace",
    title: "Terrace",
    desc: "Show Glass House, Glass Roof, Etc. Convert open terraces into delightful year-round glass lounges. Enjoy the outdoors in any weather with our robust glazing systems.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png",
    icon: <Coffee size={32} />,
    galleryCategory: "Terraces & Balconies"
  },
  {
    id: "farmhouse",
    title: "Farmhouse",
    desc: "Show Slide & Turn. Connect beautiful country landscaping with spacious interiors. Create stunning glass pavilions that can be fully opened during pleasant weather.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png",
    icon: <Sparkles size={32} />,
    galleryCategory: "Villas & Farmhouses"
  },
  {
    id: "display-window",
    title: "Display Window",
    desc: "Showroom Display window Slide & Turn. High durability storefront facades & internal partition grids. Invite customers in with wide-open, secure, and visually arresting storefronts.",
    img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png",
    icon: <Monitor size={32} />,
    galleryCategory: "Hotels & Commercial"
  }
];

export default function ApplicationsPage() {
  const [selectedApp, setSelectedApp] = useState<typeof applications[0] | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedApp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedApp]);

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/extracted_assets/Website/Concepts/Terrece Large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
          >
            Versatile Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white uppercase font-serif"
          >
            Spatial <br />
            <span className="text-brand-primary lowercase font-light">Applications</span>
          </motion.h1>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-12 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {applications.map((app, i) => (
              <motion.div
                id={app.id}
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer scroll-mt-24 flex flex-col h-full"
                onClick={() => setSelectedApp(app)}
              >
                <div className="relative aspect-video rounded-sm overflow-hidden mb-4 md:mb-8 shadow-xl shrink-0">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-all duration-500" />
                  <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-full text-brand-primary">
                    {app.icon}
                  </div>
                </div>
                <h3 className="text-2xl text-brand-dark mb-2 md:mb-4 uppercase tracking-widest">{app.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4 md:mb-6 flex-grow">
                  {app.desc}
                </p>
                <button className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 w-fit">
                  View Gallery <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Callout */}
      <section className="py-20 md:py-32 lg:py-48 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/infiwin images new/ChatGPT Image May 23, 2026, 03_18_04 PM.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase mb-6 md:mb-12 leading-tight">Every Space Has <br /><span className="text-brand-primary font-light lowercase">Potential</span></h2>
          <p className="text-white/60 text-lg font-light mb-8 md:mb-16">
            Whether it's a high-rise balcony or a boutique office, our systems are engineered to transform and elevate your environment.
          </p>
          <a href="/contact" className="px-12 py-5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Interactive Gallery Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0b0f19] border border-white/10 rounded-sm w-full max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl relative custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedApp(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 hover:bg-white text-white hover:text-black border border-white/20 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 border-b border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-full">
                    {selectedApp.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary block mb-1">
                      Execution Gallery
                    </span>
                    <h2 className="text-3xl md:text-5xl text-white font-serif tracking-tight">
                      {selectedApp.title}
                    </h2>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                  {selectedApp.desc}
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="p-8 md:p-12 bg-[#070b13]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {IMAGES.filter(img => img.category === selectedApp.galleryCategory).map((img, idx) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative aspect-square overflow-hidden bg-black border border-white/5"
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-1">
                          {img.location}
                        </span>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                          {img.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {IMAGES.filter(img => img.category === selectedApp.galleryCategory).length === 0 && (
                  <div className="text-center py-12 text-neutral-500 font-light text-sm">
                    No gallery images available for this specific category yet.
                  </div>
                )}

                <div className="mt-12 text-center">
                  <a href="/gallery" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                    View Full Gallery <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
