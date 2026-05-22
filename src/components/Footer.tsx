'use client';

import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-10 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center mb-10 group">
              <img src="https://www.infiwindow.com/images/logo1.png" alt="INFIWIN" className="h-20 w-auto hover:scale-105 transition-transform" />
            </Link>
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
                <li><Link href="/products" className="hover:text-brand-primary transition-colors">Methods</Link></li>
                <li><Link href="/#projects" className="hover:text-brand-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Inquiry</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Hubs</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li>
                  <a
                    href="https://maps.google.com/?q=Abu+Dhabi,+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Abu Dhabi
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Business+Bay,+Dubai,+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=London,+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    London
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex justify-end items-center text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          <div className="flex gap-12">
            <Link href="/legal?tab=privacy" className="hover:text-neutral-500 transition-colors">Privacy</Link>
            <Link href="/legal?tab=terms" className="hover:text-neutral-500 transition-colors">Terms</Link>
            <Link href="/legal?tab=legal" className="hover:text-neutral-500 transition-colors">Legal</Link>
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
