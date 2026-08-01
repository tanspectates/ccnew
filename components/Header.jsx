'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartProvider';

const NAV = [
  { href: '/', label: 'HOME' },
  { href: '/runners', label: 'SHOP' },
  { href: '/drops', label: 'DROPS' },
  { href: '/support', label: 'SUPPORT' },
  { href: '/orders', label: 'ORDERS' }
];

export default function Header() {
  const pathname = usePathname();
  const { bag } = useCart();

  return (
    <>
      <div className="announcement">
        <div className="ticker">
          <span>FREE SHIPPING OVER ₹1499 ✦</span>
          <span>NO BORING SHOES ALLOWED ✦</span>
          <span>NEW DROP: CLEAN SLATE 02 ✦</span>
        </div>
      </div>
      <header className="site-header">
        <Link className="brand" href="/">
          <i>CC</i>
          <span>
            CLOSET
            <br />
            CLEANED
          </span>
        </Link>
        <nav className="site-nav">
          {NAV.map(item => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="bag" href="/cart">
          BAG <b>{bag.length}</b>
        </Link>
      </header>
    </>
  );
}
