"use client";

import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Shield, FileText, Scale, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'legal'>('privacy');

  // Sync with query param ?tab=privacy/terms/legal if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as 'privacy' | 'terms' | 'legal';
      if (tabParam && ['privacy', 'terms', 'legal'].includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield size={18} /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText size={18} /> },
    { id: 'legal', label: 'Legal Disclaimers', icon: <Scale size={18} /> }
  ];

  return (
    <main className="bg-neutral-50 min-h-screen pt-32 pb-24 font-sans selection:bg-brand-primary selection:text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-brand-primary transition-colors mb-10 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to home
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-primary mb-3 block">Corporate Governance</span>
          <h1 className="text-4xl md:text-6xl text-brand-dark uppercase tracking-tight font-semibold">
            Legal & Compliance
          </h1>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-80 flex flex-col gap-3 bg-white p-6 border border-neutral-100 rounded-2xl shadow-sm shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  if (typeof window !== 'undefined') {
                    window.history.pushState(null, '', `/legal?tab=${tab.id}`);
                  }
                }}
                className={`flex items-center gap-4 px-5 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all w-full ${
                  activeTab === tab.id
                    ? 'text-white bg-brand-primary shadow-lg shadow-brand-primary/20'
                    : 'text-neutral-400 hover:text-brand-dark hover:bg-neutral-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Content Window */}
          <div className="flex-1 w-full bg-white border border-neutral-100 p-8 md:p-12 rounded-2xl shadow-sm min-h-[500px]">
            {activeTab === 'privacy' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-neutral-100 pb-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-dark mb-2">Privacy Policy</h2>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Last Updated: May 22, 2026</p>
                </div>

                <div className="space-y-6 text-sm text-neutral-500 font-light leading-relaxed">
                  <p>
                    At INFIWIN SYSTEMS, we value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how we collect, use, and process your personal data in connection with your use of our website and spatial solutions services.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">1. Information We Collect</h3>
                  <p>
                    We collect personal information that you voluntarily provide to us when you fill out inquiry forms, request cost estimates, or contact us. This may include your full name, email address, phone number, location, and specific project dimensions or requirements.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">2. How We Use Your Information</h3>
                  <p>
                    We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, and compliance with our legal obligations. This includes providing project estimates, contacting you regarding spatial consultations, delivering custom-engineered installations, and sending industry newsletter updates if consented to.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">3. Information Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted partners who assist us in operating our website, conducting our business, or servicing your spatial installation, so long as those parties agree to keep this information strictly confidential.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">4. Security Measures</h3>
                  <p>
                    We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your details. Your data is stored on secure, encrypted networks accessible only by a limited number of authorized personnel.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'terms' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-neutral-100 pb-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-dark mb-2">Terms of Service</h2>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Last Updated: May 22, 2026</p>
                </div>

                <div className="space-y-6 text-sm text-neutral-500 font-light leading-relaxed">
                  <p>
                    By accessing and using this website, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully. If you do not agree with these terms, you should not use this site or request services.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">1. Acceptance of Agreement</h3>
                  <p>
                    You agree to the terms and conditions outlined in this Terms of Service Agreement with respect to our site. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">2. Spatial Consultations & Estimates</h3>
                  <p>
                    All project calculations, ballpark figures, and cost estimations provided by our online calculators are purely speculative and serve as initial planning figures based on regional standards. A formal binding quote is subject to physical site inspection, engineering review, layout complexity, shipping, and local customs duties.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">3. Material Customization</h3>
                  <p>
                    Because architectural glass and motorized systems are custom-fabricated based on millimetric specifications, all verified orders approved for manufacturing are non-refundable and cannot be cancelled or modified once profiling and toughening procedures have commenced.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">4. Proprietary Rights</h3>
                  <p>
                    The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'legal' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-neutral-100 pb-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-dark mb-2">Legal Disclaimers</h2>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Last Updated: May 22, 2026</p>
                </div>

                <div className="space-y-6 text-sm text-neutral-500 font-light leading-relaxed">
                  <p>
                    The information contained in this website is for general information purposes only. The information is provided by INFIWIN SYSTEMS, and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">1. Engineering Disclaimer</h3>
                  <p>
                    Architectural glazing, frameless glass systems, and heavy-duty motorized tracks require specialized mechanical engineering. INFIWIN SYSTEMS assumes no liability for custom installations carried out by independent contracting agencies or external handlers who deviate from our official engineering manuals and safety parameters.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">2. Performance Metrics</h3>
                  <p>
                    Thermal comfort, wind load resistance, dust insulation, and acoustic damping performance levels vary depending on local environmental factors, building orientation, height coordinates, and glazing choice (e.g. single 10mm toughened glass vs. double-glazed profiles). Standard metrics advertised reflect internal lab-tested conditions.
                  </p>

                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mt-8">3. Limitation of Liability</h3>
                  <p>
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our installations.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
