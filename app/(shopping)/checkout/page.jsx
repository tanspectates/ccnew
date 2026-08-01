'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../components/CartProvider';
import SpecularButton from '../../../components/SpecularButton';
import { products, money } from '../../../lib/products';

export default function CheckoutPage() {
  const { bag, clearBag } = useCart();
  const router = useRouter();

  const items = useMemo(() => bag.map(id => products.find(p => p.id === id)).filter(Boolean), [bag]);
  const total = useMemo(() => items.reduce((sum, p) => sum + p.price, 0), [items]);

  const placeOrder = () => {
    clearBag();
    router.push('/orders');
  };

  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>LAST STEP
      </p>
      <h1>
        PRETEND
        <br />
        <em>CHECKOUT.</em>
      </h1>
      {items.length === 0 ? (
        <p className="empty-note">
          Nothing to check out. <Link href="/runners">Go find something →</Link>
        </p>
      ) : (
        <div className="checkout-layout">
          <div>
            {items.map(p => (
              <article className="checkout-item" key={p.id}>
                <img src={p.image} alt={p.name} />
                <div>
                  <span>IN YOUR BAG</span>
                  <h3>{p.name}</h3>
                  <p>{money(p.price)}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary">
            <p className="eyebrow">TOTAL DUE (FICTIONAL)</p>
            <div className="total">
              <span>TOTAL</span>
              <b>{money(total)}</b>
            </div>
            <SpecularButton
              size="md"
              baseColor="#525252"
              lineColor="#ceff00"
              autoAnimate
              onClick={placeOrder}
              className="place-order-cta"
            >
              PLACE FICTIONAL ORDER ↗
            </SpecularButton>
            <small style={{ display: 'block', marginTop: 14 }}>
              No real payment is processed. This clears your bag and drops a mock order into /orders.
            </small>
          </aside>
        </div>
      )}
      <style jsx>{`
        .place-order-cta {
          width: 100%;
          margin: 17px 0;
        }
      `}</style>
    </main>
  );
}
