"use client";

import React, { useState, useEffect } from 'react';

// Components
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import BestSellingProductSection from '@/components/home/BestSellingProductSection';
import FrameFinishSection from '@/components/home/FrameFinishSection';
import ProductsGridSection from '@/components/home/ProductsGridSection';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LeadFormSection from '@/components/home/LeadFormSection';

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-sans relative bg-white overflow-x-hidden">
      <HeroSection />
      <div className="relative z-10 bg-white">
        <BenefitsSection />
        <BestSellingProductSection />
        <FrameFinishSection />
        <ProductsGridSection selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
        <ApplicationsSection selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
        <TestimonialsSection />
        <LeadFormSection />
      </div>
    </div>
  );
}
