"use client";

import { motion } from 'motion/react';
import { 
  Plus, 
  Dash as Minus, 
  QuestionCircle as HelpCircle, 
  ChatDots as MessageCircle, 
  Telephone as Phone,
  ChevronRight
} from 'react-bootstrap-icons';
import React, { useState } from 'react';

const faqCategories = [
  {
    name: "Common Queries",
    faqs: [
      {
        q: "What is the standard base price for installation of Slide & Turn glass?",
        a: "Our baseline starting price for premium architectural systems is approximately ₹1,800/sq.ft. This calculation incorporates elite double-tempered structural safety glass, premium heavy-gauge aluminum support rails, customized weatherproof locking rubber seals, and baseline engineering fitting charges. Freight and government taxes are determined additionally based on shipping distance."
      },
      {
        q: "How do Full Length versus Half Length variants differ?",
        a: "Full Length structures span continuously from the floor straight up to the concrete ceiling line. Half Length systems are designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it."
      },
      {
        q: "Are frameless glass structures totally waterproof during heavy monsoon seasons?",
        a: "Yes! Infiwin systems feature inter-pane H-profiles containing customized translucent polymer seals designed to block intense windblown rain completely. Our design profiles feature integrated lower drain holes that successfully transport any minor moisture out towards the exterior facade."
      },
      {
        q: "What type of glass is used in fabrication?",
        a: "We use high-grade 10mm or 12mm double-tempered structural glass sheets that are extremely robust. This glass is structurally rated to withstand massive high-altitude wind pressure loads and is impact-resistant for complete home safety."
      }
    ]
  },
  {
    name: "Safety & Quality",
    faqs: [
      { q: "Is the glass safe?", a: "Yes, we use 8mm, 10mm, or 12mm toughened safety glass which is highly resistant to impact. If it were to break, it shatters into small, blunt granules to prevent injury." },
      { q: "What is the warranty period?", a: "We provide a comprehensive 5-year warranty on all our hardware, rollers, and moving mechanisms, and a lifetime warranty against glass spontaneous breakage (conditions apply)." },
      { q: "Is it weather-resistant?", a: "Our systems are specifically designed for extreme climates. They are wind-tested and feature high-quality seals to keep out dust, rain, and heat." }
    ]
  },
  {
    name: "Installation & Maintenance",
    faqs: [
      { q: "How long does installation take?", a: "Most residential balcony installations are completed within 1-2 working days. Larger commercial projects depend on the scope." },
      { q: "Can it be installed in rental properties?", a: "Yes, our systems are minimally invasive. We can often install them with minimal drilling, and they can be uninstalled if you move." },
      { q: "How do I clean the system?", a: "The panels slide and fold, allowing you to clean both sides of the glass from inside the balcony or room, making maintenance extremely safe and easy." }
    ]
  },
  {
    name: "Pricing & Customization",
    faqs: [
      { q: "How much does it cost?", a: "Our pricing starts at approximately ₹1800/sqft. However, the final cost depends on glass thickness, profile finish, and site conditions." },
      { q: "Are custom colors available?", a: "Yes, our aluminum profiles can be powder-coated in any RAL color to match your existing architecture or interior design." },
      { q: "Can I use double glazing?", a: "While our standard systems use single toughened glass for a slim look, we do have specialized series that accommodate double-glazed units for enhanced thermal performance." }
    ]
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png" 
            className="w-full h-full object-cover opacity-60"
            alt="FAQ Hero"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-4 block"
          >
            Support Center
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl text-white uppercase font-serif"
          >
            Frequently Asked <br />
            <span className="text-brand-primary lowercase font-light">Questions</span>
          </motion.h1>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Common Queries
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight uppercase font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm md:text-base mt-4 font-light">
              Everything you need to know about Infiwin product specifications, warranties, and structural calculations.
            </p>
          </div>
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-10 md:mb-20">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-4 md:mb-10 border-b border-neutral-100 pb-4">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIdx) => {
                  const id = `${catIdx}-${faqIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={id} className="border border-neutral-100 rounded-sm overflow-hidden bg-neutral-50/50">
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                      >
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">{faq.q}</span>
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                          <Plus size={18} className="text-brand-primary" />
                        </div>
                      </button>
                      <motion.div 
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-neutral-500 text-sm leading-relaxed font-light border-t border-neutral-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-12 md:py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HelpCircle size={48} className="text-brand-primary mx-auto mb-4 md:mb-8" />
          <h2 className="text-3xl text-brand-dark uppercase mb-4 md:mb-6">Still Have Questions?</h2>
          <p className="text-neutral-400 text-base font-light mb-6 md:mb-12">
            Our expert team is ready to help you with any technical or design inquiries you may have.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:+917337074370" className="flex items-center gap-3 px-8 py-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all">
              <Phone size={14} /> Call Support
            </a>
            <a href="https://wa.me/917337074370" target="_blank" className="flex items-center gap-3 px-8 py-4 border border-green-500 text-green-500 text-[10px] font-bold uppercase tracking-widest hover:bg-green-50 transition-all">
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
