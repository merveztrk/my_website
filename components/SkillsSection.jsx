'use client';

export default function SkillsSection() {
  const skills = [
    'Flutter & Dart',
    'Python',
    'Yapay Zeka & ML',
    'Derin Öğrenme',
    'Görüntü İşleme (OpenCV)',
    'Java & C#',
    'State Management',
    'UI/UX Tasarım',
    'HTML5 & CSS3',
  ];

  return (
    <section id="skills" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-800 tracking-tight mb-6">
          🚀 Yetenekler
        </h2>

        <div className="glass-card rounded-3xl p-6 md:p-10 shadow-lg border border-brand-200/50">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 md:gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-white text-brand-800 border border-brand-200 shadow-sm hover:border-brand-400 hover:bg-brand-50 hover:scale-105 transition-all duration-200 text-center flex items-center justify-center min-h-[44px] ${
                  idx === skills.length - 1 && skills.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
