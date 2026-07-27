'use client';

import { useEffect, useRef } from 'react';

export default function ButterflyCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Firework confetti explosion on page load
    const colors = ['#FAD0DD', '#E8A5B8', '#D47595', '#FFF0F5', '#FCE3EC', '#FFD1DC', '#B35272', '#FF69B4', '#FFB6C1'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 3;

    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '99';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${centerX}px`;
      confetti.style.top = `${centerY}px`;
      confetti.style.width = `${6 + Math.random() * 8}px`;
      confetti.style.height = `${6 + Math.random() * 8}px`;
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      confetti.style.boxShadow = '0 0 8px rgba(232, 165, 184, 0.6)';
      container.appendChild(confetti);

      const angle = Math.random() * 2 * Math.PI;
      const speed = 5 + Math.random() * 8;
      let t = 0;

      const interval = setInterval(() => {
        t += 1;
        const x = centerX + Math.cos(angle) * speed * t;
        const y = centerY + Math.sin(angle) * speed * t + (t * 0.5);
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.transform = `rotate(${t * 12}deg) scale(${Math.max(0.1, 1 - t / 65)})`;
        confetti.style.opacity = `${Math.max(0, 1 - t / 60)}`;

        if (t > 60 || y > window.innerHeight + 50 || x < -50 || x > window.innerWidth + 50) {
          confetti.remove();
          clearInterval(interval);
        }
      }, 16);
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true" />;
}
