"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import { ChatLeftText as MessageSquare } from 'react-bootstrap-icons';

export default function LeadFormSection() {
  const [dimensions, setDimensions] = useState({ length: 10, height: 10 });
  const [estimate, setEstimate] = useState<number | null>(null);

  const [form, setForm] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic cost calculation based on: Length x Height x 1800
  const area = dimensions.length * dimensions.height;
  const rawCost = area * 1800;

  // Auto calculate when sliders change
  useEffect(() => {
    setEstimate(rawCost);
  }, [dimensions.length, dimensions.height]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', city: '' };

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phone.trim().replace(/\D/g, ''))) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
      isValid = false;
    }
    if (!form.city.trim()) {
      newErrors.city = 'Please specify your delivery city';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          city: form.city,
          dimensions,
          estimate
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const message = `Hi Infiwin, I am interested in getting a Slide & Turn Balcony System. My approximate dimensions are:
Length: ${dimensions.length} ft
Height: ${dimensions.height} ft
Computed Area: ${area} sq.ft.
Projected Estimate: ₹${rawCost.toLocaleString()}.
Please share your product catalog!`;
    return `https://wa.me/917337074370?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#18181B] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Cost Estimator Column */}
          <div className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 block">
                Instant Pricing Guide
              </span>
              <h3 className="text-3xl font-bold mb-2">
                On-Page System Cost Estimator
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mb-8">
                Enter your customized window/balcony dimensions below. Our system instantly runs the correct calculations using the official formula matrix.
              </p>

              {/* Length Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-white/60 uppercase tracking-wider">📏 Length of Balcony / Window (ft)</span>
                  <span className="font-bold text-brand-primary text-sm">{dimensions.length} ft</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={dimensions.length}
                  onChange={(e) => setDimensions(prev => ({ ...prev, length: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>Min: 4 ft</span>
                  <span>Max: 50 ft</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-white/60 uppercase tracking-wider">📐 Height of Balcony / Window (ft)</span>
                  <span className="font-bold text-brand-primary text-sm">{dimensions.height} ft</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  value={dimensions.height}
                  onChange={(e) => setDimensions(prev => ({ ...prev, height: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>Min: 3 ft</span>
                  <span>Max: 15 ft</span>
                </div>
              </div>
            </div>

            {/* Display Calculated Cost */}
            {estimate !== null && (
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-4 border-b border-white/5 pb-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-0.5 font-bold">Calculated Area</div>
                    <div className="text-base font-bold text-white">{area} sq.ft.</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-0.5 font-bold">Base Unit Price</div>
                    <div className="text-base font-bold text-white">₹1,800 / sq.ft</div>
                  </div>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1 font-bold">
                  Your Approximate Cost:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3">
                  ₹{estimate.toLocaleString()}
                </div>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  <span className="text-white/70 font-semibold">Legalese Disclaimer Note:</span> + Installation Charges. All final quotes exclude regional local taxes & physical freight charges.
                </p>
              </div>
            )}
          </div>

          {/* Lead Form Column */}
          <div className="bg-white text-zinc-900 rounded-3xl p-8 flex flex-col justify-between border border-neutral-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-brand-primary" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-950 mb-2">Thank You! Request Received</h4>
                <p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                  Your custom estimation metrics have been logged successfully. An Infiwin executive will call you within 15 minutes to confirm logistics.
                </p>
                <div className="w-full border-t border-neutral-100 pt-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">OR CHAT DIRECTLY</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider py-4.5 px-8 rounded-full shadow-lg transition-all duration-300 w-full min-h-[48px]"
                  >
                    <MessageSquare size={16} /> Get Instant Price via WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                    Lock-In Your Deal Price
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Fill out this quick 3-field layout to request our premium catalog along with architectural assistance.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-transparent text-zinc-900 placeholder:text-neutral-350"
                      placeholder="eg. Rajesh Sharma"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone Input with Numeric Keypad */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Phone Number
                    </label>
                    <div className="flex items-center border-b border-neutral-200 focus-within:border-brand-primary transition-colors">
                      <span className="text-sm font-semibold text-neutral-500 pr-2 select-none">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={form.phone}
                        onChange={handleInputChange}
                        className="w-full py-3 text-sm focus:outline-none bg-transparent text-zinc-900 placeholder:text-neutral-350"
                        placeholder="73370 74370"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* City Input */}
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                      Your Location City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      className="w-full border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-transparent text-zinc-900 placeholder:text-neutral-350"
                      placeholder="eg. Noida, Delhi, Gurgaon"
                    />
                    {errors.city && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.city}</p>}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-brand-dark hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 min-h-[48px] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : '🚀 Request Quote & Call Back'}
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-neutral-100"></div>
                    <span className="flex-shrink mx-4 text-[9px] font-extrabold uppercase tracking-widest text-neutral-400">OR CHAT DIRECTLY</span>
                    <div className="flex-grow border-t border-neutral-100"></div>
                  </div>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4.5 border border-green-500 text-green-500 hover:bg-green-50 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <MessageSquare size={14} /> Get Instant Price via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
