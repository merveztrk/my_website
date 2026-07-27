'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ac3d5e58-8c96-49d2-8979-d728c21e84fc',
          subject: `Portfolyo İletişim Mesajı - ${formData.name}`,
          from_name: 'Merve Öztürk Portfolyo Formu',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          message: '✓ Mesajınız başarıyla iletildi! En kısa sürede size dönüş yapılacaktır. ✨',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        triggerMailto();
      }
    } catch (error) {
      triggerMailto();
    }
  };

  const triggerMailto = () => {
    const mailtoUrl = `mailto:merveozturk0105@gmail.com?subject=Portfolyo Mesajı - ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message + '\n\n--------------------\nGönderen: ' + formData.name + '\nE-posta: ' + formData.email
    )}`;
    window.location.href = mailtoUrl;
    setStatus({
      loading: false,
      success: true,
      message: '✓ E-posta uygulamanız açılıyor... Teşekkürler! ✨',
    });
  };

  const contactItems = [
    {
      title: 'E-posta',
      value: 'merveozturk0105@gmail.com',
      href: 'mailto:merveozturk0105@gmail.com',
      icon: Mail,
    },
    {
      title: 'Telefon',
      value: '+90 551 024 57 85',
      href: 'tel:+905510245785',
      icon: Phone,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/merveztrk',
      href: 'https://linkedin.com/in/merveztrk',
      icon: Linkedin,
      external: true,
    },
    {
      title: 'GitHub',
      value: 'github.com/merveztrk',
      href: 'https://github.com/merveztrk',
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Intro Text */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A202C] tracking-tight mb-2">
          📫 İletişim
        </h2>

        <p className="text-[#4A202C] font-semibold text-sm md:text-base mb-6 leading-relaxed">
          Projelerim, iş birlikleri veya sorularınız için bana aşağıdaki kanallardan ulaşabilir ya da doğrudan mesaj gönderebilirsiniz.
        </p>

        {/* Layout Grid aligned to equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Side: 4 Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {contactItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 border border-brand-200/50 hover:border-brand-400 hover:shadow-md transition-all duration-300 group flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-100/70 text-brand-700 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-brand-500 uppercase tracking-wider">
                      {item.title}
                    </div>
                    <div className="text-sm font-bold text-brand-800 truncate group-hover:text-brand-600 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right Side: Message Form Box */}
          <div className="lg:col-span-7 flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-6 md:p-7 border border-brand-200/50 shadow-lg flex-1 flex flex-col justify-between space-y-4"
            >
              <h3 className="text-base font-bold text-brand-800">
                ✉️ Bize Ulaşın
              </h3>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-brand-300 text-[#4A202C] placeholder-[#69263D] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-500 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta Adresiniz"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-brand-300 text-[#4A202C] placeholder-[#69263D] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-500 transition-all shadow-sm"
                  />
                </div>

                <div className="flex-1">
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız..."
                    required
                    className="w-full h-full min-h-[90px] px-4 py-2.5 rounded-xl bg-white/90 border border-brand-300 text-[#4A202C] placeholder-[#69263D] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-500 transition-all resize-none shadow-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-800 to-brand-500 hover:from-brand-700 hover:to-brand-400 shadow-md hover:shadow-lg disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {status.loading ? (
                  <span>Gönderiliyor... ⏳</span>
                ) : (
                  <>
                    <span>Mesaj Gönder ✨</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    status.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
