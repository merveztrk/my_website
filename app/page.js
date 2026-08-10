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
    // Force browser to always scroll to top on page load/refresh
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    // Instant site reveal for super fast page load
    setSiteLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative text-[#4A202C]">
      {/* Hardware-accelerated fixed theme background layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-68"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(253, 246, 248, 0.58) 100%), url('/assets1/theme.jpg')`,
        }}
      />

      {/* Particle & Butterfly Canvas - Explodes immediately on load */}
      <ButterflyCanvas />

      {/* Main Content Wrapper - Instant smooth display */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ease-out ${
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
