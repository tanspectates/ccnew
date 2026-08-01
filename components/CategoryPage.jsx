import Link from 'next/link';
import ScrollFloat from './ScrollFloat';
import ProductGrid from './ProductGrid';
import { productsByCategory, categories } from '../lib/products';

export default function CategoryPage({ slug, title, blurb }) {
  const products = productsByCategory(slug);

  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>THE ROTATION / {String(products.length).padStart(2, '0')} PAIRS
      </p>
      <ScrollFloat animationDuration={0.8} stagger={0.02}>
        {title}
      </ScrollFloat>
      {blurb && <p style={{ maxWidth: 560, color: '#b0b2ad', lineHeight: 1.6, margin: '20px 0 40px' }}>{blurb}</p>}
      <div className="filters">
        {categories.map(c => (
          <Link key={c.slug} href={`/${c.slug}`} className={c.slug === slug ? 'selected' : ''}>
            {c.label}
          </Link>
        ))}
      </div>
      <ProductGrid products={products} />
    </main>
  );
}
