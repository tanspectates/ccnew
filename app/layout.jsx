import { Bebas_Neue, Space_Grotesk, DM_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../components/CartProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const display = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const body = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata = {
  title: 'Closet Cleaned — Imaginary World',
  description: 'A fictional, experimental sneaker storefront.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
