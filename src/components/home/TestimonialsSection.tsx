"use client";

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Devgn",
      role: "DLF Phase 5 Resident",
      text: "The Infiwin Slide & Turn system transformed our 12th-floor balcony in Delhi completely. We get absolute protection from heavy monsoon wind gusts and heavy dust while enjoying a 100% frameless visual landscape. Excellent execution team!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Aman Kapoor",
      role: "VP, Capital Commercial Hub",
      text: "Our office glass partitions look incredibly sleek. We chose the Centre Open system. Not only is the architectural glass high-grade, but the acoustic isolation is also fantastic during important executive board calls.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sneha Mehta",
      role: "Villa Owner, Pune",
      text: "Unbelievable execution. The cost estimator was accurate and the on-ground installers took extreme safety measures to finish the railing fixed glass + Slide & Turn setup in under 5 hours. Outstanding engineering standard.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
            Owner Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-tight">
            What Our Premium Clients Say
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-4">
            We have successfully completed installations spanning major residential developments in Mumbai, Delhi, Bangalore and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                {/* Quote Icon */}
                <span className="text-5xl text-brand-primary/20 font-serif leading-none block h-4 select-none">“</span>
                <p className="text-neutral-600 text-sm leading-relaxed mt-2">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-neutral-50 mt-auto">
                <img
                  src={t.avatar}
                  alt={`${t.name} Portrait`}
                  className="h-12 w-12 rounded-full object-cover border border-neutral-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-neutral-400 text-[10px] uppercase tracking-wider mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
