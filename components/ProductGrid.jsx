'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { money } from '../lib/products';
import { useCart } from './CartProvider';

export default function ProductGrid({ products }) {
  const { bag, addToBag, removeFromBag } = useCart();
  const [saved, setSaved] = useState([]);
  const router = useRouter();

  const toggleSave = id => {
    setSaved(current => (current.includes(id) ? current.filter(x => x !== id) : [...current, id]));
  };

  const buyNow = id => {
    addToBag(id);
    router.push('/cart');
  };

  if (!products.length) {
    return (
      <p className="empty-note">
        Nothing landed in this rotation yet. <a href="/runners">Browse everything →</a>
      </p>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <article className="product" key={p.id}>
          <div className="product-img" style={{ backgroundImage: `url('${p.image}')` }}>
            <span className="tag">{p.tag}</span>
            <button
              className={`heart${saved.includes(p.id) ? ' saved' : ''}`}
              onClick={() => toggleSave(p.id)}
              aria-label={`Save ${p.name}`}
            >
              {saved.includes(p.id) ? '♥' : '♡'}
            </button>
          </div>
          <div className="product-info">
            <span className="product-code">
              {String(i + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
            </span>
            <h3>{p.name}</h3>
            <div className="price-row">
              <div>
                <span className="price">{money(p.price)}</span>
                <span className="was">{money(p.was)}</span>
              </div>
              <button className="buy" onClick={() => (bag.includes(p.id) ? router.push('/cart') : buyNow(p.id))}>
                {bag.includes(p.id) ? 'IN BAG ↗' : 'GET IT ↗'}
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
