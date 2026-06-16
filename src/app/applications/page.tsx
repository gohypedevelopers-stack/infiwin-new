"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
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

      {/* Immersive Application Sections */}
      <div className="w-full py-16 md:py-24 space-y-24 md:space-y-40 relative pb-32">
        {applications.map((app, index) => (
          <section 
            id={app.id} 
            key={app.id} 
            className={`sticky flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-white py-12 md:py-24 px-6 md:px-16 lg:px-32 w-full border-t border-neutral-100 ${index % 2 !== 0 ? 'lg:flex-row-reverse bg-neutral-50' : ''}`}
            style={{ 
              top: `calc(100px + ${index * 20}px)`, 
              zIndex: index + 10,
              marginTop: index > 0 ? '4rem' : '0',
              marginBottom: '4rem'
            }}
          >
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                <div className="p-4 bg-brand-primary/10 rounded-full text-brand-primary w-fit mb-6 md:mb-8">
                  {app.icon}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight uppercase">
                  {app.title}
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-8 md:mb-12 max-w-2xl">
                  {app.desc}
                </p>
                <Link 
                  href={`/applications/${app.id}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all duration-300"
                >
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <Link href={`/applications/${app.id}`}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-500" />
                </motion.div>
              </Link>
            </div>
          </section>
        ))}
      </div>

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
    </main>
  );
}
