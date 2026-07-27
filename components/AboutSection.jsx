'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-800 tracking-tight mb-6">
          💫 Hakkımda
        </h2>

        <div className="glass-card rounded-3xl p-8 md:p-10 shadow-lg border border-brand-200/50">
          <p className="text-brand-800 leading-relaxed text-base md:text-lg">
            Ben Merve ÖZTÜRK. Sağlık teknolojileri, sürdürülebilirlik ve günlük hayat problemlerine odaklanan yenilikçi mobil uygulamalar geliştiriyorum.
            Ağırlıklı olarak Flutter ile mobil uygulama geliştirme üzerine çalışıyor; bunun yanı sıra yapay zeka, makine öğrenmesi, derin öğrenme ve görüntü işleme alanlarında uzmanlaşmaya devam ediyorum. Özellikle görüntü verileri üzerinde modeller eğiterek bu modelleri geliştirdiğim mobil uygulamalara entegre ediyorum.
            Gerçek hayattan ilham alan fikirleri kullanıcı odaklı yazılım çözümlerine dönüştürmek ve geliştirdiğim teknolojilerle insanların hayatına dokunmak en büyük motivasyon kaynağımdır.
            Sağlık teknolojileri alanında yürüttüğüm TÜSEB destekli projemde, görüntü verileri üzerinde eğittiğim yapay zeka modelini mobil uygulamaya entegre ederek uçtan uca yapay zeka destekli bir sağlık çözümü sunuyorum. Bu süreçte araştırma, model geliştirme, mobil mimari ve proje yönetimi alanlarında aktif deneyim kazanıyorum.
            Bunun yanında savunma sanayii alanındaki gelişmeleri yakından takip ediyor, düzenlenen eğitim ve etkinliklerle bilgi birikimimi sürekli artırıyorum.
            Uzun vadeli hedefim; analitik düşünme becerilerimi ve mühendislik bakış açımı sürekli geliştirerek farklı disiplinlerde değer üreten, gerçek dünya problemlerine yenilikçi çözümler sunan yetkin bir mühendis olmaktır.
          </p>
        </div>
      </div>
    </section>
  );
}
