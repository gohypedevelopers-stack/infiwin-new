"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  X, 
  ArrowsAngleExpand as Maximize2, 
  ChevronRight, 
  FileEarmarkPlay as FileVideo, 
  Image as ImageIcon, 
  Layers, 
  ArrowRight,
  Eye,
  InfoCircle as Info,
  Calendar,
  GeoAlt as MapPin,
  Activity
} from 'react-bootstrap-icons';

// --- DATA STRUCTURES ---

const CONCEPTS = [
  {
    id: "shatter",
    title: "INFIWIN Branded Engineering Concept",
    desc: "A stylized 3D stress-testing simulation showcasing structural resilience, material toughness, and safety glass engineering.",
    video: "/extracted_assets/Website/Concepts/infiwin shatter animation.mp4",
    duration: "0:12",
    specs: {
      type: "Material Dynamics",
      software: "Blender 3D Render",
      focus: "Tempered Glass Shatter Simulation",
      application: "Glazing Safety Research"
    }
  },
  {
    id: "glass-slab",
    title: "Automated Glass Slab & Moving Roof",
    desc: "An innovative concept animation demonstrating motorized heavy-duty horizontal sliding glass panels moving seamlessly to create dramatic spatial transitions.",
    video: "/extracted_assets/Website/Concepts/glass slab animation.mp4",
    duration: "1:05",
    specs: {
      type: "Motorized Slab Glazing",
      hardware: "Walk-on Glazing Systems",
      movement: "Electric Parallel Linear Drive",
      application: "Luxury Penthouses & Atriums"
    }
  },
  {
    id: "facade",
    title: "Panoramic Structural Facade Concept",
    desc: "A premium 3D visualization illustrating continuous frameless architectural glazing wrapped around modern residential facades.",
    video: "/extracted_assets/Website/Concepts/Facade.mp4",
    duration: "1:02",
    specs: {
      type: "Structural Glass Facade",
      profiles: "Ultra-slim Concealed Framing",
      view: "100% Unobstructed Panoramic",
      application: "High-end Coastal & Cliffside Villas"
    }
  },
  {
    id: "pool",
    title: "Infinity Pool Retractable Glazing Enclosure",
    desc: "A stunning concept showcasing a modular sliding glass enclosure that encapsulates an infinity pool deck, blending indoor comfort with outdoor skylines.",
    video: "/extracted_assets/Website/Concepts/Pool.mp4",
    duration: "1:02",
    specs: {
      type: "Telescopic Pool Enclosure",
      glazing: "Double-Insulated Climatic Glass",
      tracks: "Multi-track Flush Floor Rails",
      application: "High-latitude & Extreme Weather Estates"
    }
  },
  {
    id: "terrace",
    title: "Grand Terrace Grand Enclosure",
    desc: "A cinematic rendering of massive slide-and-stack frameless panels enclosing a modern luxury veranda deck.",
    video: "/extracted_assets/Website/Concepts/Terrece Large.mp4",
    duration: "1:28",
    specs: {
      type: "High-Span Slide & Stack",
      glass: "12mm Toughened Clear Glass",
      hardware: "Reinforced Heavy Duty Rollers",
      application: "Penthouse Patios & Restaurant Verandas"
    }
  }
];

const EXECUTION_VIDEOS = [
  {
    id: "v-st-1",
    title: "Slide & Turn Double Glazed System - Operational Flow",
    category: "S&T",
    video: "/extracted_assets/Website/Video/S&T/VID-20230316-WA0010.mp4",
    desc: "Demonstration of the smooth folding, sliding, and stacking mechanism of double-glazed systems in a high-end villa balcony.",
    location: "Dubai Marina"
  },
  {
    id: "v-st-2",
    title: "Frameless Slide & Turn Folding Action",
    category: "S&T",
    video: "/extracted_assets/Website/Video/S&T/VID-20230416-WA0013.mp4",
    desc: "Observing the space-saving stacking mechanism where all panels gather neatly on the side, creating a 100% opening.",
    location: "Palm Jumeirah"
  },
  {
    id: "v-st-3",
    title: "Slide & Turn Weatherproofing Test",
    category: "S&T",
    video: "/extracted_assets/Website/Video/S&T/VID-20230416-WA0017.mp4",
    desc: "Close-up detailing the tight overlapping seals and UV-resistant weather stripping that protect against dust and heavy rain.",
    location: "Riyadh District"
  },
  {
    id: "v-st-4",
    title: "F&B Glass Partition Stacking",
    category: "S&T",
    video: "/extracted_assets/Website/Video/S&T/VID-20251210-WA0013.mp4",
    desc: "A modern commercial restaurant utilizing Slide & Turn system to seamlessly connect indoor dining with a scenic street veranda.",
    location: "Gerard Cafe, Ajman"
  },
  {
    id: "v-tel-1",
    title: "Telescopic Parallel Sliding Multi-Track",
    category: "Telescopic",
    video: "/extracted_assets/Website/Video/Telescopic/VID-20230912-WA0001.mp4",
    desc: "A multi-track sliding panel system opening telescopically where each panel pulls the next one in a smooth, synchronized motion.",
    location: "Jumeirah Golf Estates"
  },
  {
    id: "v-tel-2",
    title: "Telescopic Patio Glazing Transition",
    category: "Telescopic",
    video: "/extracted_assets/Website/Video/Telescopic/VID-20260128-WA0009.mp4",
    desc: "Showing a modern terrace boundary transitioning into a protective glass wall, operating on flush track profiles.",
    location: "Al Barsha Villa"
  },
  {
    id: "v-bath-1",
    title: "Premium Frameless Shower Glass Execution",
    category: "Bathroom",
    video: "/extracted_assets/Website/Video/Bathroom/VID-20250630-WA0003.mp4",
    desc: "A beautiful residential master bath installation featuring premium brass hardware and 10mm toughened glass screen.",
    location: "Downtown Penthouse"
  },
  {
    id: "v-bath-2",
    title: "Sliding Bathroom Glass Enclosure",
    category: "Bathroom",
    video: "/extracted_assets/Website/Video/Bathroom/VID-20260128-WA0010.mp4",
    desc: "A space-efficient sliding shower door system featuring smooth anti-vibration damping rails and water-repellent coating.",
    location: "Emirates Hills Residence"
  }
];

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

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'concepts' | 'videos' | 'photos'>('concepts');
  
  // Concept Theater State
  const [selectedConcept, setSelectedConcept] = useState(CONCEPTS[0]);
  const theaterVideoRef = useRef<HTMLVideoElement>(null);
  
  // Video Category Filter
  const [videoFilter, setVideoFilter] = useState<'All' | 'S&T' | 'Telescopic' | 'Bathroom'>('All');
  
  // Photo Category Filter
  const [photoFilter, setPhotoFilter] = useState<string>('All');
  
  // Full-Screen Modal States
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalDesc, setModalDesc] = useState<string>('');

  // Handle concept video transition smoothly
  useEffect(() => {
    if (theaterVideoRef.current) {
      theaterVideoRef.current.load();
      theaterVideoRef.current.play().catch(err => console.log("Auto play prevented", err));
    }
  }, [selectedConcept]);

  const filteredVideos = videoFilter === 'All' 
    ? EXECUTION_VIDEOS 
    : EXECUTION_VIDEOS.filter(v => v.category === videoFilter);

  const photoCategories = ["All", "Villas & Farmhouses", "Hotels & Commercial", "Offices & Partitions", "Terraces & Balconies", "Telescopic Systems"];
  const filteredPhotos = photoFilter === 'All'
    ? IMAGES
    : IMAGES.filter(img => img.category === photoFilter);

  return (
    <main className="bg-[#030712] text-white min-h-screen font-sans selection:bg-brand-primary selection:text-white pb-12 md:pb-32 overflow-x-hidden w-full max-w-[100vw]">
      
      {/* Cinematic Hero Header */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Looping Brand Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-80 scale-105"
          >
            <source src="/extracted_assets/Website/Concepts/infiwin shatter animation.mp4" type="video/mp4" />
          </video>
          {/* Radial dark gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/70 via-transparent to-[#030712]/70" />
          <div className="absolute inset-0 bg-[#030712]/10" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.6em] text-brand-primary mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-none backdrop-blur-md text-center max-w-full">
              <Activity size={10} className="text-brand-primary animate-pulse shrink-0" /> 
              <span className="truncate">Interactive Media Center</span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl tracking-tighter uppercase font-serif mb-6 md:mb-8 leading-none">
              Cinematic <br />
              <span className="text-brand-primary font-light lowercase font-signature">Showcase</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Explore the pinnacle of spatial architecture. Review stunning 3D design concepts, operational execution videos, and a high-resolution portfolio of our regional installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Tab Controller */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-12 -mt-6 md:-mt-10 relative z-20 w-full">
        <div className="bg-[#0b0f19] border border-white/10 p-2 flex flex-col md:flex-row gap-2 justify-between items-center backdrop-blur-xl shadow-2xl rounded-none w-full">
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            {[
              { id: 'concepts', label: '3D Concepts', icon: <Layers size={14} /> },
              { id: 'videos', label: 'Video Realizations', icon: <FileVideo size={14} /> },
              { id: 'photos', label: 'Portfolio', icon: <ImageIcon size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none w-full sm:w-auto relative ${
                  activeTab === tab.id 
                    ? 'text-white bg-brand-primary' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3 px-6 text-neutral-500 text-[10px] uppercase tracking-widest border-l border-white/10 h-10">
            <span>INFIWIN ARCHITECTURAL ARCHIVE</span>
          </div>
        </div>
      </section>

      {/* Tab Contents */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-12 py-8 md:py-20 w-full">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: CONCEPTS & 3D RENDERS */}
          {activeTab === 'concepts' && (
            <motion.div
              key="concepts-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 md:space-y-16 w-full"
            >
              {/* Theater Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-[#070b13] border border-white/5 p-4 md:p-10 rounded-none shadow-2xl w-full">
                
                {/* Main Player Area (8 Cols) */}
                <div className="lg:col-span-8 space-y-4 md:space-y-6">
                  <div className="relative aspect-video bg-black overflow-hidden border border-white/10 group">
                    <video
                      ref={theaterVideoRef}
                      controls
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={selectedConcept.video}
                    />
                    
                    {/* Floating Info Pill */}
                    <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">4K Render Preview</span>
                    </div>

                    {/* Expand Theater Option */}
                    <button 
                      onClick={() => {
                        setModalVideoUrl(selectedConcept.video);
                        setModalTitle(selectedConcept.title);
                        setModalDesc(selectedConcept.desc);
                      }}
                      className="absolute bottom-3 right-3 md:bottom-6 md:right-6 p-3 bg-brand-primary hover:scale-105 transition-transform text-white rounded-none opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      title="Expand Cinema Player"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  {/* Operational Details */}
                  <div className="border-t border-white/10 pt-4 md:pt-8 flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                    <div className="max-w-xl">
                      <h3 className="text-2xl md:text-3xl text-white font-semibold mb-2 md:mb-4 tracking-tight">
                        {selectedConcept.title}
                      </h3>
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                        {selectedConcept.desc}
                      </p>
                    </div>
                    
                    {/* Tech Specs Block */}
                    <div className="bg-[#0c101a] border border-white/10 p-4 md:p-6 md:w-80 shrink-0">
                      <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <Info size={12} /> System Specifications
                      </h4>
                      <div className="space-y-4 text-xs">
                        {Object.entries(selectedConcept.specs).map(([key, val], i) => (
                          <div key={i} className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2 gap-1 sm:gap-4">
                            <span className="text-neutral-500 capitalize shrink-0">{key}</span>
                            <span className="font-semibold text-neutral-300 sm:text-right text-left break-words">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Concept Playlist Sidebar (4 Cols) */}
                <div className="lg:col-span-4 space-y-4 lg:space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                  <div>
                    <h3 className="text-xs font-bold text-brand-primary uppercase tracking-[0.4em] mb-2">Design Concepts</h3>
                    <p className="text-neutral-500 text-xs font-light">Select a conceptual animation to view full rendering details.</p>
                  </div>

                  <div className="space-y-2 md:space-y-4 overflow-y-auto max-h-[600px] pr-2 no-scrollbar">
                    {CONCEPTS.map((concept) => (
                      <button
                        key={concept.id}
                        onClick={() => setSelectedConcept(concept)}
                        className={`w-full text-left p-3 md:p-5 border transition-all duration-300 flex gap-4 items-center group rounded-none ${
                          selectedConcept.id === concept.id
                            ? 'bg-brand-primary/10 border-brand-primary'
                            : 'bg-[#0b0f19]/40 border-white/5 hover:border-white/20 hover:bg-[#0b0f19]/80'
                        }`}
                      >
                        <div className="w-16 h-16 bg-neutral-900 border border-white/10 shrink-0 flex items-center justify-center relative overflow-hidden">
                          <Play size={16} className={`text-neutral-400 group-hover:scale-110 transition-transform ${selectedConcept.id === concept.id ? 'text-brand-primary' : ''}`} />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <span className="text-[9px] font-bold tracking-widest text-brand-primary uppercase block">CONCEPT RENDER</span>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-brand-primary transition-colors truncate">
                            {concept.title}
                          </h4>
                          <p className="text-[10px] text-neutral-500 font-light truncate">
                            {concept.desc}
                          </p>
                        </div>
                        <ChevronRight size={14} className="ml-auto text-neutral-600 shrink-0 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>

                  {/* Consultation Banner */}
                  <div className="bg-gradient-to-r from-brand-primary/20 to-transparent p-4 md:p-6 border-l-2 border-brand-primary space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Have a custom architectural vision?</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                      Our engineering division specializes in fabricating custom, heavy-duty structural glazing and automated mechanisms. Let's consult.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-white transition-colors group">
                      Consult Engineering Team <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: EXECUTION VIDEOS */}
          {activeTab === 'videos' && (
            <motion.div
              key="videos-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-12"
            >
              {/* Secondary Category Filters */}
              <div className="flex flex-wrap gap-2 md:gap-3 border-b border-white/5 pb-4 md:pb-8">
                {['All', 'S&T', 'Telescopic', 'Bathroom'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setVideoFilter(cat as any)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border transition-all flex-1 sm:flex-none ${
                      videoFilter === cat 
                        ? 'bg-brand-primary text-white border-brand-primary' 
                        : 'text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {cat === 'All' ? 'All Systems' : cat === 'S&T' ? 'Slide & Turn' : cat === 'Telescopic' ? 'Telescopic Systems' : 'Bathroom Enclosures'}
                  </button>
                ))}
              </div>

              {/* Video Masonry Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 w-full">
                {filteredVideos.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-[#070b13] border border-white/5 overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Hover Looping Video Preview */}
                    <div 
                      className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                      onClick={() => {
                        setModalVideoUrl(item.video);
                        setModalTitle(item.title);
                        setModalDesc(item.desc);
                      }}
                    >
                      <video
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                      
                      {/* Play Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white rounded-none">
                          <Play size={20} className="fill-white translate-x-[2px]" />
                        </div>
                      </div>
                      
                      {/* Category Pill */}
                      <span className="absolute top-4 left-4 bg-brand-primary text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1">
                        {item.category} SYSTEM
                      </span>
                    </div>

                    {/* Metadata Card Info */}
                    <div className="p-4 space-y-3 md:p-6 md:space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-neutral-500 text-[9px] font-bold uppercase tracking-widest">
                          <MapPin size={10} className="text-brand-primary" /> {item.location}
                        </div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider line-clamp-1 group-hover:text-brand-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-neutral-500 text-[11px] font-light leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                      
                      <button 
                        onClick={() => {
                          setModalVideoUrl(item.video);
                          setModalTitle(item.title);
                          setModalDesc(item.desc);
                        }}
                        className="w-full py-3 bg-[#0c101a] hover:bg-brand-primary hover:text-white text-neutral-400 text-[9px] font-bold uppercase tracking-widest transition-all border border-white/5 flex items-center justify-center gap-2"
                      >
                        <Play size={10} className="fill-current" /> Watch Execution
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: EXECUTION PORTFOLIO PHOTOS */}
          {activeTab === 'photos' && (
            <motion.div
              key="photos-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-12"
            >
              {/* Portfolio Filters */}
              <div className="flex flex-wrap gap-2 md:gap-3 border-b border-white/5 pb-4 md:pb-8">
                {photoCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPhotoFilter(cat)}
                    className={`px-3 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border transition-all flex-grow sm:flex-grow-0 ${
                      photoFilter === cat 
                        ? 'bg-brand-primary text-white border-brand-primary' 
                        : 'text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
                {filteredPhotos.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative group cursor-pointer aspect-[3/4] bg-[#070b13] border border-white/5 overflow-hidden"
                    onClick={() => {
                      setModalImageUrl(item.src);
                      setModalTitle(item.title);
                      setModalDesc(`Category: ${item.category} | Location: ${item.location}`);
                    }}
                  >
                    {/* Rendered Image */}
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Shimmer Ambient Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                    
                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-bold text-white uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Metadata Info */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white space-y-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-primary/95 flex items-center gap-1.5">
                        <MapPin size={10} /> {item.location}
                      </span>
                      <h4 className="text-sm font-semibold uppercase tracking-wider truncate">
                        {item.title}
                      </h4>
                      <p className="text-[9px] text-neutral-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View installation detail
                      </p>
                    </div>

                    {/* Hover Zoom Eye Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                      <Eye size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* --- LIGHTBOX MEDIA MODALS --- */}
      <AnimatePresence>
        
        {/* VIDEO LIGHTBOX MODAL */}
        {modalVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-6"
            onClick={() => setModalVideoUrl(null)}
          >
            <button 
              onClick={() => setModalVideoUrl(null)} 
              className="absolute top-4 right-4 md:top-8 md:right-8 h-10 w-10 md:h-12 md:w-12 z-50 flex items-center justify-center rounded-none bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl bg-[#070b13] border border-white/10 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-black">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  src={modalVideoUrl}
                />
              </div>
              <div className="p-8 space-y-2 bg-[#0b0f19]">
                <span className="text-[9px] font-bold text-brand-primary tracking-[0.3em] uppercase block">INFIWIN LIVE STREAM</span>
                <h3 className="text-xl md:text-2xl text-white font-semibold tracking-tight uppercase">{modalTitle}</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed max-w-3xl">{modalDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* IMAGE LIGHTBOX MODAL */}
        {modalImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-6"
            onClick={() => setModalImageUrl(null)}
          >
            <button 
              onClick={() => setModalImageUrl(null)} 
              className="absolute top-4 right-4 md:top-8 md:right-8 h-10 w-10 md:h-12 md:w-12 z-50 flex items-center justify-center rounded-none bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl bg-[#070b13] border border-white/10 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] bg-black flex justify-center items-center overflow-hidden">
                <img 
                  className="w-auto h-auto max-w-full max-h-[70vh] object-contain" 
                  src={modalImageUrl}
                  alt={modalTitle}
                />
              </div>
              <div className="p-8 space-y-2 bg-[#0b0f19]">
                <span className="text-[9px] font-bold text-brand-primary tracking-[0.3em] uppercase block">HIGH-RESOLUTION CAPTURE</span>
                <h3 className="text-xl text-white font-semibold tracking-tight uppercase">{modalTitle}</h3>
                <p className="text-neutral-400 text-[11px] font-light leading-relaxed uppercase tracking-wider">{modalDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}
