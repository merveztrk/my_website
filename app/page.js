'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ButterflyCanvas from '@/components/ButterflyCanvas';

export default function Home() {
  const [siteLoaded, setSiteLoaded] = useState(false);

  useEffect(() => {
    // 1. Confetti explodes in center at t=0
    // 2. After 750ms as confetti spreads, site süzülerek reveals
    const timer = setTimeout(() => {
      setSiteLoaded(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative text-[#4A202C]">
      {/* Hardware-accelerated fixed theme background layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 245, 248, 0.32) 100%), url('/assets1/theme.jpg')`,
        }}
      />

      {/* Particle & Butterfly Canvas - Explodes immediately on load */}
      <ButterflyCanvas />

      {/* Main Content Wrapper - Fades in smoothly after confetti explosion */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-700 ease-out ${
          siteLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Navigation Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
