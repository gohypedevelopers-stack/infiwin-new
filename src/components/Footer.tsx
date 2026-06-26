'use client';

import React from 'react';
import { Whatsapp, Telephone as Phone, Envelope as Mail, GeoAlt as MapPin } from 'react-bootstrap-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark border-t border-brand-dark/5 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20 mb-12 md:mb-24">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center mb-6 md:mb-10 group">
              <img src="https://www.infiwindow.com/images/logo1.png" alt="INFIWIN" className="h-16 w-auto hover:scale-105 transition-transform" />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 md:mb-10 font-semibold">
              Premium architectural glass and slide & turn frameless balcony structures designed for Indian climatic conditions.
            </p>
            <div className="flex gap-6">
              <a href="https://wa.me/917337074370?text=Hi%20Infiwin%2C%20I%20am%20interested%20in%20getting%20a%20Slide%20%26%20Turn%20Balcony%20System.%20Please%20share%20your%20product%20catalog!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Whatsapp size={20} className="text-neutral-400 hover:text-green-500 cursor-pointer transition-colors" />
              </a>
              <a href="tel:+917337074370" aria-label="Call Support">
                <Phone size={19} className="text-neutral-400 hover:text-brand-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
            {/* Column 1: 6 Product Lines */}
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 text-brand-dark">6 Product Lines</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest font-semibold">
                <li><Link href="/products#folding" className="hover:text-brand-primary transition-colors">Slide & Turn System</Link></li>
                <li><Link href="/products#sliding" className="hover:text-brand-primary transition-colors">Telescopic Slider System</Link></li>
                <li><Link href="/products#centre-open" className="hover:text-brand-primary transition-colors">Centre Open System</Link></li>
                <li><Link href="/products#bifold" className="hover:text-brand-primary transition-colors">Bi-fold Enclosures</Link></li>
                <li><Link href="/products#sliding-2track" className="hover:text-brand-primary transition-colors">2 Track Slider System</Link></li>
                <li><Link href="/products#sliding-3track" className="hover:text-brand-primary transition-colors">3 Track Slider System</Link></li>
              </ul>
            </div>
            
            {/* Column 2: Space Usages */}
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 text-brand-dark">Space Usages</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest font-semibold">
                <li><Link href="/applications#balcony" className="hover:text-brand-primary transition-colors">Balcony Glass</Link></li>
                <li><Link href="/applications#office" className="hover:text-brand-primary transition-colors">Office Glass Partitions</Link></li>
                <li><Link href="/applications#commercial" className="hover:text-brand-primary transition-colors">Commercial Facades</Link></li>
                <li><Link href="/applications#terrace" className="hover:text-brand-primary transition-colors">Terrace & Gardens</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 text-brand-dark">Contact Info</h5>
              <ul className="space-y-4 text-neutral-500 text-[11px] font-medium">
                <li className="flex items-start gap-2 text-neutral-500">
                  <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>
                    Corporate Office:<br />
                    H 195, Sector 63, Noida,<br />
                    Uttar Pradesh - 201309
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-brand-primary shrink-0" />
                  <a href="mailto:hi@infiwindow.com" className="hover:text-brand-primary transition-colors break-all">
                    hi@infiwindow.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-primary shrink-0" />
                  <a href="tel:+917337074370" className="hover:text-brand-primary transition-colors">
                    +91 73370 74370
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-neutral-400 flex-wrap gap-4">
          <p className="normal-case tracking-normal">
            Certified ISO 9001 | ISO 45001 | CE Compliant
          </p>
          <div className="flex gap-12">
            <Link href="/legal?tab=privacy" className="hover:text-neutral-500 transition-colors">Privacy</Link>
            <Link href="/legal?tab=terms" className="hover:text-neutral-500 transition-colors">Terms</Link>
            <Link href="/legal?tab=legal" className="hover:text-neutral-500 transition-colors">Legal</Link>
          </div>
        </div>
      </div>

      {/* Black Copyright Strip */}
      <div className="bg-black py-4 pb-20 md:pb-4 flex flex-col justify-center items-center px-4 text-center">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/45 leading-relaxed">
          © 2026 Infiwin Glazing Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
