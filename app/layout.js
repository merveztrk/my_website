import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata = {
  title: 'Merve Öztürk | Bilgisayar Mühendisi & Mobil / Yapay Zekâ Geliştirici',
  description: 'Merve Öztürk - Bilgisayar Mühendisi kişisel web sitesi ve portfolyosu. Flutter mobil uygulama geliştirme, yapay zeka, derin öğrenme ve görüntü işleme projeleri.',
  keywords: ['Merve Öztürk', 'Bilgisayar Mühendisi', 'Flutter', 'Yapay Zeka', 'Machine Learning', 'Derin Öğrenme', 'Portfolyo'],
  authors: [{ name: 'Merve Öztürk' }],
  icons: {
    icon: [
      { url: '/assets1/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets1/logo.png', type: 'image/png' },
    ],
    shortcut: '/assets1/favicon.svg',
    apple: '/assets1/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="antialiased selection:bg-brand-200 selection:text-brand-800">
        {children}
      </body>
    </html>
  );
}
