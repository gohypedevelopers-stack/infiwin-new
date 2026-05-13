'use client';

import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-10 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-sm">
            <a href="/" className="flex items-center mb-10 group">
              <img src="https://www.infiwindow.com/images/logo1.png" alt="INFIWIN" className="h-20 w-auto hover:scale-105 transition-transform" />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-semibold">
              Reclaiming space through architectural innovation and high-performance spatial solutions across the GCC.
            </p>
            <div className="flex gap-8">
              <Instagram size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
              <Facebook size={18} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Registry</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li><a href="/products" className="hover:text-brand-primary transition-colors">Methods</a></li>
                <li><a href="/#projects" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-brand-primary transition-colors">Inquiry</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Hubs</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li>Abu Dhabi</li>
                <li>Dubai</li>
                <li>London</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex justify-end items-center text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          <div className="flex gap-12">
            <a href="#" className="hover:text-neutral-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Legal</a>
          </div>
        </div>
      </div>

      {/* Black Copyright Strip */}
      <div className="bg-black py-4 flex justify-center items-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
          © 2026 INFIWIN SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
