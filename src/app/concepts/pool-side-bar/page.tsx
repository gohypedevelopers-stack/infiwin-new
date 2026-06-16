"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function PoolSideBarConceptPage() {
  return (
    <main className="bg-brand-dark min-h-screen pt-32 pb-20 text-white flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
        >
          Concept
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl uppercase font-serif mb-12"
        >
          Pool Side Bar
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl"
        >
          {/* Placeholder for Client Supplied Animated Video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-sm font-semibold tracking-widest uppercase">Animated Video We Will Supply</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
