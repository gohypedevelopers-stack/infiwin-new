"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PaletteFill } from 'react-bootstrap-icons';
import Link from 'next/link';

const FRAME_COLORS = [
  {
    id: 'white',
    name: 'Arctic White',
    label: 'White',
    swatch: '#dcdcdc',
    border: '#b0b0b0',
    description: 'A timeless, clean finish that brightens any balcony. Arctic White pairs effortlessly with modern minimalist interiors and light-toned exteriors.',
    img: '/frame/ChatGPT_Image_Jun_16__2026__05_44_44_PM-removebg-preview.png',
  },
  {
    id: 'bronze',
    name: 'Rose Bronze',
    label: 'Bronze',
    swatch: '#a87060',
    border: '#8a5a4c',
    description: 'A warm, earthy metallic finish inspired by Mediterranean architecture. Rose Bronze brings premium depth and a luxurious character to your space.',
    img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_14 AM (3).png',
  },
  {
    id: 'gold',
    name: 'Champagne Gold',
    label: 'Gold',
    swatch: '#c0963a',
    border: '#9e7a28',
    description: 'Gleaming and opulent, Champagne Gold adds a statement-making richness. Ideal for high-end residential and hospitality projects that demand prestige.',
    img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_14 AM (2).png',
  },
  {
    id: 'anthracite',
    name: 'Anthracite Grey',
    label: 'Anthracite',
    swatch: '#3a3a3a',
    border: '#222222',
    description: 'Sleek, bold and contemporary. Anthracite Grey is the go-to choice for industrial-modern aesthetics, creating sharp visual contrast against light surroundings.',
    img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_13 AM (1).png',
  },
];

export default function FrameFinishSection() {
  const [activeColor, setActiveColor] = useState(FRAME_COLORS[0]);

  return (
    <section className="bg-white border-y border-neutral-100 overflow-hidden">
      {/* Full-bleed two-column: left = content, right = tall image */}
      <div className="grid lg:grid-cols-2 min-h-[700px] md:min-h-[780px]">

        {/* LEFT — All content, padded */}
        <div className="flex flex-col justify-center gap-8 py-16 md:py-24 px-8 md:px-14 lg:px-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">
              SLIDE &amp; TURN SYSTEM — AVAILABLE FRAME FINISHES
            </span>
          </div>

          {/* Heading + description */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight mb-4">
              Choose Your Frame Colour
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Our signature Slide &amp; Turn system glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either corner — offering 100% opening potential. Now available in four premium powder-coated aluminium finishes.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            {[
              '100% Opening Potential',
              'Toughened Safety Glass',
              'Ultra-Smooth Tracks',
              'No Vertical Frames',
            ].map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                {feat}
              </span>
            ))}
          </div>

          {/* MOBILE IMAGE (Visible only < lg) */}
          <div className="lg:hidden relative bg-neutral-50 flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[450px] -mx-8 md:-mx-14 border-y border-neutral-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeColor.id}
                src={activeColor.img}
                alt={`${activeColor.name} Slide & Turn frame`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-contain absolute inset-0 p-8"
              />
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
              {FRAME_COLORS.map((color) => (
                <button
                  key={`mob-${color.id}`}
                  onClick={() => setActiveColor(color)}
                  title={color.name}
                  className={`rounded-full transition-all duration-300 ${
                    activeColor.id === color.id ? 'w-8 h-3' : 'w-3 h-3 opacity-40 hover:opacity-70'
                  }`}
                  style={{ backgroundColor: color.swatch }}
                />
              ))}
            </div>
          </div>

          {/* Colour Swatches */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-brand-dark">Select Colour</span>
            <div className="flex items-center gap-5">
              {FRAME_COLORS.map((color) => {
                const isActive = activeColor.id === color.id;
                return (
                  <motion.button
                    key={color.id}
                    onClick={() => setActiveColor(color)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    title={color.name}
                    className="relative focus:outline-none"
                  >
                    <span
                      className={`block w-12 h-12 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'ring-2 ring-offset-2 ring-neutral-400 shadow-md'
                          : 'opacity-80 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: color.swatch }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Description Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeColor.id + '-desc'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="block w-5 h-5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: activeColor.swatch }}
                />
                <h3 className="text-brand-dark font-bold text-base tracking-tight">
                  {activeColor.name}
                </h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {activeColor.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products#balcony-system"
              className="group inline-flex items-center gap-2 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full shadow-lg hover:bg-brand-primary transition-all duration-300"
            >
              <PaletteFill size={13} />
              Explore All Finishes
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#estimator"
              className="group inline-flex items-center gap-2 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full hover:bg-neutral-50 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* RIGHT — Full-height image column (Desktop only) */}
        <div className="hidden lg:flex relative bg-neutral-50 items-center justify-center overflow-hidden lg:min-h-full border-l border-neutral-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeColor.id}
              src={activeColor.img}
              alt={`${activeColor.name} Slide & Turn frame`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-contain absolute inset-0 p-8 md:p-12"
            />
          </AnimatePresence>

          {/* Dot strip — bottom centre */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {FRAME_COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => setActiveColor(color)}
                title={color.name}
                className={`rounded-full transition-all duration-300 ${
                  activeColor.id === color.id ? 'w-8 h-3' : 'w-3 h-3 opacity-40 hover:opacity-70'
                }`}
                style={{ backgroundColor: color.swatch }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
