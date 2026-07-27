function createButterfly() {
  const butterfly = document.createElement('img');
  butterfly.src = 'assets1/butterfly.png'; // Kelebek görselini ekle
  butterfly.className = 'butterfly';
  butterfly.style.left = Math.random() * window.innerWidth + 'px';
  butterfly.style.top = window.innerHeight + 'px';
  document.getElementById('butterflies').appendChild(butterfly);

  // Animasyon
  let posY = window.innerHeight;
  const interval = setInterval(() => {
    posY -= 3 + Math.random() * 2;
    if (posY < -50) {
      butterfly.remove();
      clearInterval(interval);
    }
  }, 16);
}

function createConfetti() {
  const colors = ['#FAD0DD', '#E8A5B8', '#D47595', '#FFF0F5', '#FCE3EC', '#FFD1DC', '#B35272'];
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top = '-20px';
  confetti.style.width = 8 + Math.random() * 10 + 'px';
  confetti.style.height = 8 + Math.random() * 10 + 'px';
  confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
  document.getElementById('butterflies').appendChild(confetti);

  // Animasyon
  let posY = -20;
  let posX = parseInt(confetti.style.left);
  const angle = (Math.random() - 0.5) * 2;
  const speed = 2 + Math.random() * 3;
  const interval = setInterval(() => {
    posY += speed;
    posX += angle * 2;
    confetti.style.top = posY + 'px';
    confetti.style.left = posX + 'px';
    confetti.style.transform = `rotate(${posY * angle * 5}deg)`;
    if (posY > window.innerHeight + 30) {
      confetti.remove();
      clearInterval(interval);
    }
  }, 16);
}

function createFireworkConfetti() {
  const container = document.getElementById('butterflies');
  if (!container) return;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const colors = ['#FAD0DD', '#E8A5B8', '#D47595', '#FFF0F5', '#FCE3EC', '#FFD1DC', '#B35272', '#FF69B4', '#FFB6C1'];

  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = centerX + 'px';
    confetti.style.top = centerY + 'px';
    confetti.style.width = (8 + Math.random() * 10) + 'px';
    confetti.style.height = (8 + Math.random() * 10) + 'px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    container.appendChild(confetti);

    const angle = Math.random() * 2 * Math.PI;
    const speed = 7 + Math.random() * 10;
    let t = 0;

    const interval = setInterval(() => {
      t += 1;
      const x = centerX + Math.cos(angle) * speed * t;
      const y = centerY + Math.sin(angle) * speed * t + (t * 0.6);
      confetti.style.left = x + 'px';
      confetti.style.top = y + 'px';
      confetti.style.transform = `rotate(${t * 12}deg) scale(${Math.max(0.2, 1 - t / 70)})`;
      confetti.style.opacity = `${Math.max(0, 1 - t / 65)}`;

      if (t > 65 || y > window.innerHeight + 50 || x < -50 || x > window.innerWidth + 50) {
        confetti.remove();
        clearInterval(interval);
      }
    }, 16);
  }
}

window.onload = function() {
  const siteContent = document.getElementById('site-content');
  const butterflies = document.getElementById('butterflies');

  // 1. Önce ekranın tam ortasından konfeti havai fişeği patlasın
  createFireworkConfetti();

  // 2. Konfeti patlaması yayıldıktan sonra (0.8 saniye) sayfa süzülerek açılsın
  setTimeout(() => {
    if (siteContent) {
      siteContent.style.display = 'block';
      setTimeout(() => {
        siteContent.classList.add('loaded');
      }, 50);
    }
  }, 800);
};

// Proje detaylarını açma / kapama fonksiyonu
function toggleDetails(btn) {
  const card = btn.closest('.project-card');
  const isActive = card.classList.contains('active');
  
  if (isActive) {
    card.classList.remove('active');
    btn.innerHTML = 'Detaylar ✨';
  } else {
    card.classList.add('active');
    btn.innerHTML = 'Kapat ✖';
  }
}

// Doğal ve Akıcı Kaydırma Efektleri (Natural Scroll Reveal & Hero Parallax)
document.addEventListener('DOMContentLoaded', function() {
  // 1. Doğal Scroll Reveal (Bölümlerin kaydırdıkça organik belirmesi)
  const revealElements = document.querySelectorAll('.hero-landing, section');

  revealElements.forEach(el => {
    el.classList.add('natural-reveal');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Doğal Hero Parallax (Kaydırdıkça ilk bakış alanının yumuşakça süzülmesi)
  const heroLanding = document.querySelector('.hero-landing');
  if (heroLanding) {
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      const heroHeight = heroLanding.offsetHeight || (window.innerHeight * 0.8);
      
      if (scrollY <= heroHeight * 1.2) {
        const progress = Math.min(1, scrollY / heroHeight);
        const opacity = Math.max(0, 1 - progress * 1.25);
        const scale = 1 - progress * 0.04;
        const translateY = scrollY * 0.22;

        heroLanding.style.opacity = opacity.toFixed(3);
        heroLanding.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      }
    }, { passive: true });
  }

  // 3. Doğal Kaydırma Göstergesi Buton Tıklaması
  const naturalIndicator = document.querySelector('.natural-scroll-indicator');
  if (naturalIndicator) {
    naturalIndicator.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutEl = document.querySelector('#about');
      if (aboutEl) {
        const headerOffset = 85;
        const elementPosition = aboutEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Navigasyon bağlantıları için akıllı yumuşak kaydırma
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.top-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      if (targetId === '#about') {
        // Hakkımda: Üst menünün hemen altına hizala
        const headerOffset = 85;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Yetenekler, Projeler, İletişim: Ekranın tam ortasına denk getir
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });
});

// İletişim Formu Arka Planda E-posta Gönderme Fonksiyonu (Web3Forms & Mailto Fallback)
async function sendEmail(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('send-btn');
  const status = document.getElementById('form-status');

  if (!form) return;

  const originalBtnContent = btn ? btn.innerHTML : '<span>Mesaj Gönder ✨</span>';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Gönderiliyor... ⏳</span>';
  }
  if (status) {
    status.style.color = '#4A202C';
    status.innerHTML = '';
  }

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    });

    const result = await response.json();

    if (result.success) {
      if (status) {
        status.style.color = '#137333';
        status.innerHTML = '✓ Mesajınız başarıyla iletildi! Teşekkürler. ✨';
      }
      form.reset();
    } else {
      // Access Key henüz tanımlanmadıysa doğrudan mailto adresinize yönlendirir
      const name = document.getElementById('sender-name')?.value || '';
      const email = document.getElementById('sender-email')?.value || '';
      const message = document.getElementById('sender-message')?.value || '';
      const mailtoUrl = `mailto:merveozturk0105@gmail.com?subject=Portfolyo Mesajı - ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n--------------------\nGönderen: ' + name + '\nE-posta: ' + email)}`;
      window.location.href = mailtoUrl;
      if (status) {
        status.style.color = '#137333';
        status.innerHTML = '✓ E-posta uygulamanız açılıyor... Teşekkürler!';
      }
    }
  } catch (error) {
    const name = document.getElementById('sender-name')?.value || '';
    const email = document.getElementById('sender-email')?.value || '';
    const message = document.getElementById('sender-message')?.value || '';
    const mailtoUrl = `mailto:merveozturk0105@gmail.com?subject=Portfolyo Mesajı - ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n--------------------\nGönderen: ' + name + '\nE-posta: ' + email)}`;
    window.location.href = mailtoUrl;
    if (status) {
      status.style.color = '#137333';
      status.innerHTML = '✓ E-posta uygulamanız açılıyor... Teşekkürler!';
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalBtnContent;
    }
  }
}

// Mobil Menü Açma / Kapama Fonksiyonu
function toggleMobileMenu() {
  const nav = document.querySelector('.top-nav');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (!nav || !toggleBtn) return;

  const isActive = nav.classList.contains('active');
  const hamburger = toggleBtn.querySelector('.hamburger-icon');
  const close = toggleBtn.querySelector('.close-icon');

  if (isActive) {
    nav.classList.remove('active');
    hamburger.style.display = 'block';
    close.style.display = 'none';
  } else {
    nav.classList.add('active');
    hamburger.style.display = 'none';
    close.style.display = 'block';
  }
}

// Mobil menüden bir linke tıklandığında menüyü otomatik kapat
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.top-nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.top-nav');
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (toggleBtn) {
          toggleBtn.querySelector('.hamburger-icon').style.display = 'block';
          toggleBtn.querySelector('.close-icon').style.display = 'none';
        }
      }
    });
  });
});