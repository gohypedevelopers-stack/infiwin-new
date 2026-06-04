"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
            Common Queries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            Everything you need to know about Infiwin product specifications, warranties, and structural calculations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-neutral-100 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-dark pr-4">
                    {faq.q}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
