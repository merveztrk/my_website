'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutEl = document.querySelector('#about');
    if (aboutEl) {
      const headerOffset = 85;
      const elementPosition = aboutEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Parallax Scroll calculations
  const progress = Math.min(1, scrollY / 450);
  const opacity = Math.max(0, 1 - progress * 1.3);
  const scale = 1 - progress * 0.05;
  const translateY = scrollY * 0.22;

  return (
    <section id="hero" className="relative py-12 md:py-16 overflow-hidden min-h-[calc(100vh-70px)] flex flex-col justify-center items-center">
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full space-y-6 transition-transform duration-75 ease-out"
        style={{
          opacity: opacity.toFixed(3),
          transform: `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`,
        }}
      >
        
        {/* Enlarged Quote Banner */}
        <div className="quote-card max-w-3xl mx-auto">
          <span className="quote-sparkle">✦</span>
          <div className="quote-stack">
            <blockquote className="quote-text">
              “Türk mühendislerinin alnında, Cumhuriyet istikbalini aydınlatan ışık parlar.”
            </blockquote>
            <span className="quote-author">M. Kemal Atatürk</span>
          </div>
          <span className="quote-sparkle">✦</span>
        </div>

        {/* Profile & Info Hero Card with Smooth Hover & Parallax */}
        <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl border border-white/90 max-w-xl mx-auto transition-all duration-300 hover:shadow-2xl flex flex-col items-center">
          
          {/* Profile Image Frame */}
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full border-[5px] border-[#FAD0DD] shadow-xl overflow-hidden bg-[#E6D7C3] mb-5 group">
            <img
              src="/assets1/profil.png"
              alt="Merve Öztürk Profil Fotoğrafı"
              className="w-full h-full object-cover object-[center_25%] scale-[1.18] group-hover:scale-[1.25] transition-transform duration-500"
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-[2.2rem] font-light text-[#4A202C] tracking-[0.12em] mb-2 uppercase leading-none">
            MERVE ÖZTÜRK
          </h1>

          {/* Solid Pink Title Badge: BİLGİSAYAR MÜHENDİSİ */}
          <div className="mt-1 inline-flex items-center px-6 py-2 rounded-full bg-[#FAD0DD] border border-[#E8A5B8] shadow-sm">
            <h2 className="text-xs md:text-sm font-medium text-[#4A202C] tracking-[0.22em] uppercase">
              BİLGİSAYAR MÜHENDİSİ
            </h2>
          </div>

        </div>

        {/* Natural Scroll Indicator */}
        <div className="pt-4 flex justify-center">
          <a
            href="#about"
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-1.5 text-brand-500 hover:text-brand-800 transition-colors cursor-pointer"
            aria-label="Aşağı Kaydır"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C3854]">Aşağı Kaydır</span>
            <div className="p-2 rounded-full bg-white/90 border border-brand-200 shadow-sm group-hover:translate-y-1 transition-transform">
              <ChevronDown className="w-5 h-5 animate-bounce text-[#8C3854]" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
