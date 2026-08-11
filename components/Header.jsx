'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Yetenekler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-brand-200/60 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-brand-100 py-3.5'
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* Left Aligned: Logo & Title */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <img
            src="/assets1/logo.jpeg"
            alt="Site Logosu"
            className="h-10 w-auto rounded-lg border border-[#E8A5B8] shadow-sm object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-bold text-lg text-[#4A202C] tracking-tight group-hover:text-brand-500 transition-colors">
            Merve Öztürk
          </span>
        </a>

        {/* Right Aligned: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-200/60 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 text-sm font-bold text-brand-800 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/90 border border-brand-200 text-brand-800 hover:text-brand-500 focus:outline-none shadow-sm"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-brand-100 px-6 py-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-base font-semibold text-brand-800 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
