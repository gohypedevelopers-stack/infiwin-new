"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Person, Telephone, GeoAlt, Calculator, Clock, Check2Circle, Envelope, ShieldLock } from 'react-bootstrap-icons';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'leads' | 'inquiries'>('leads');
  const [leads, setLeads] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simple hardcoded auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setAuthError('Invalid password. Try admin123');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const leadsRes = await fetch('/api/leads');
      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        // Sort newest first
        setLeads(leadsData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      }
      
      const inqRes = await fetch('/api/inquiries');
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#18181B] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md w-full max-w-md">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldLock size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-white/50 text-sm">Enter the access token to continue.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setAuthError(''); }}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors text-center tracking-widest"
                placeholder="PASSWORD"
              />
              {authError && <p className="text-red-400 text-xs mt-2 text-center">{authError}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-brand-primary hover:bg-brand-primary/80 text-white font-bold uppercase tracking-widest rounded-lg transition-all"
            >
              Unlock Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#18181B] text-white pt-24 pb-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-3 block">
              Control Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Executive Dashboard
            </h1>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={fetchData}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Clock size={14} /> Refresh Data
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-6 mb-8">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'leads' ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(var(--brand-primary),0.3)]' : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            Cost Estimator Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'inquiries' ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(var(--brand-primary),0.3)]' : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            General Inquiries ({inquiries.length})
          </button>
        </div>

        {loading ? (
          <div className="py-32 flex justify-center">
            <div className="animate-spin h-12 w-12 border-4 border-brand-primary border-t-transparent rounded-full" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {activeTab === 'leads' && (
              <motion.div
                key="leads"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {leads.length === 0 ? (
                  <div className="col-span-full py-24 text-center text-white/40">No leads captured yet.</div>
                ) : (
                  leads.map((lead) => (
                    <div key={lead.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-brand-primary/50 transition-colors group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Calculator size={80} />
                      </div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                            <Person size={18} className="text-brand-primary" /> {lead.name}
                          </h3>
                          <p className="text-white/40 text-xs">{new Date(lead.createdAt).toLocaleString()}</p>
                        </div>
                        <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20">
                          New Lead
                        </span>
                      </div>
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3 text-sm">
                          <Telephone className="text-brand-primary" /> {lead.phone}
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <GeoAlt className="text-brand-primary" /> {lead.city}
                        </div>
                        <div className="bg-black/30 p-4 rounded-xl mt-6 border border-white/5">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <span className="text-[10px] text-white/40 uppercase block mb-1">Dimensions</span>
                              <span className="font-bold">{lead.dimensions?.length}ft x {lead.dimensions?.height}ft</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-white/40 uppercase block mb-1">Area</span>
                              <span className="font-bold">{(lead.dimensions?.length || 0) * (lead.dimensions?.height || 0)} sq.ft</span>
                            </div>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <span className="text-[10px] text-brand-primary uppercase font-bold block mb-1">Projected Estimate</span>
                            <span className="text-2xl font-bold text-white">₹{lead.estimate?.toLocaleString() || 'N/A'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </motion.div>
            )}

            {activeTab === 'inquiries' && (
              <motion.div
                key="inquiries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-6 grid-cols-1 md:grid-cols-2"
              >
                {inquiries.length === 0 ? (
                  <div className="col-span-full py-24 text-center text-white/40">No inquiries received yet.</div>
                ) : (
                  inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-brand-primary/50 transition-colors flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block mb-2">{inquiry.subject}</span>
                            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                              {inquiry.name}
                            </h3>
                            <p className="text-white/40 text-xs">{new Date(inquiry.createdAt).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="bg-black/30 p-6 rounded-2xl border border-white/5 mb-6 text-sm text-white/80 leading-relaxed italic">
                          "{inquiry.message}"
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                         <div className="flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-full">
                          <Telephone className="text-brand-primary" /> {inquiry.phone}
                        </div>
                        <a href={`tel:${inquiry.phone}`} className="flex items-center gap-2 text-sm bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest transition-colors">
                          <Check2Circle /> Mark Contacted
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
