'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleDetails = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projects = [
    {
      id: 'tuseb',
      title: 'Çocuklarda Göz Tembelliğinin Erken Tespiti İçin Yapay Zekâ Destekli Tarama Testi Uygulaması',
      image: '/assets1/tuseb.jpeg',
      details: 'TÜSEB(Türkiye Sağlık Enstitüleri Başkanlığı) tarafından desteklenen çocuklarda göz tembelliğinin erken tespitine katkı sağlamak için geliştirilen yapay zeka destekli mobil uygulama.',
    },
    {
      id: 'cevre',
      title: 'Sürdürülebilir Çevre ve Geri Dönüşüm Uygulaması',
      image: '/assets1/cevre.png',
      details: 'Çevreye iyilik yap sloganıyla tasarlanmış, doğa dostu alışkanlıkları teşvik eden mobil uygulama.',
    },
    {
      id: 'yurt',
      title: 'KYK Çamaşırhane Randevu Sistemi',
      image: '/assets1/yurt.jpeg',
      details: 'Yurtta kalan öğrencilerin çamaşırhane kullanımını kolaylaştıran mobil uygulama.',
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-800 tracking-tight mb-6">
          💻 Projeler
        </h2>

        {/* Side-by-Side 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => {
            const isExpanded = !!expandedCards[project.id];
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden shadow-lg border border-brand-200/50 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Smart Frame: Full Uncropped Image + Ambient Blurred Backdrop */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden flex items-center justify-center border-b border-brand-100/60 bg-brand-50/80 p-2">
                    {/* Blurred background image to eliminate empty/white gaps */}
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-125 opacity-40 select-none pointer-events-none"
                    />
                    {/* Full uncropped image in front */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500 rounded-lg drop-shadow-md"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="text-base font-bold text-brand-800 leading-snug mb-3 min-h-[3.5rem] flex items-center">
                      {project.title}
                    </h3>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="mt-3 p-3 rounded-2xl bg-brand-50 border border-brand-100 text-xs text-brand-800 animate-in fade-in duration-200">
                        <p>{project.details}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => toggleDetails(project.id)}
                    className="w-full py-2 px-4 rounded-full text-xs font-bold text-brand-800 bg-white hover:bg-brand-50 border border-brand-200 shadow-sm transition-all duration-200"
                  >
                    {isExpanded ? 'Kapat' : 'Detaylar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
