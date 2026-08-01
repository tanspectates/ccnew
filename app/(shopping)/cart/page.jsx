'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../../components/CartProvider';
import SpecularButton from '../../../components/SpecularButton';
import { products, money } from '../../../lib/products';

const COUPON_CODE = 'SECXRET11';
const COUPON_ITEM_ID = 'concrete-baby';

export default function CartPage() {
  const { bag, removeFromBag } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponMessage, setCouponMessage] = useState('Try SECXRET11 if you know, you know.');
  const [couponApplied, setCouponApplied] = useState(false);

  const items = useMemo(() => bag.map(id => products.find(p => p.id === id)).filter(Boolean), [bag]);

  const subtotal = useMemo(
    () =>
      items.reduce((sum, p) => {
        const half = couponApplied && p.id === COUPON_ITEM_ID;
        return sum + (half ? p.price / 2 : p.price);
      }, 0),
    [items, couponApplied]
  );

  const applyCoupon = e => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === COUPON_CODE) {
      setCouponApplied(true);
      setCouponMessage('Applied. Half price on your Concrete Baby, if it\u2019s in your bag.');
    } else {
      setCouponMessage('That code is either expired or already redeemed.');
    }
  };

  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>YOUR CURRENT OBSESSION(S)
      </p>
      <h1>
        THE
        <br />
        <em>BAG.</em>
      </h1>
      <div className="checkout-layout">
        <div>
          {items.length === 0 ? (
            <p className="empty-note">
              Your bag is suspiciously empty. <Link href="/runners">Fix that →</Link>
            </p>
          ) : (
            items.map(p => {
              const half = couponApplied && p.id === COUPON_ITEM_ID;
              return (
                <article className="checkout-item" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <div>
                    <span>{half ? 'SPECIAL GUEST / HALF PRICE' : 'IN YOUR BAG'}</span>
                    <h3>{p.name}</h3>
                    <p>
                      {money(half ? p.price / 2 : p.price)}
                      {half && <del>{money(p.price)}</del>}
                    </p>
                  </div>
                  <button onClick={() => removeFromBag(p.id)} aria-label={`Remove ${p.name}`}>
                    ×
                  </button>
                </article>
              );
            })
          )}
        </div>
        <aside className="summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div>
            <span>SUBTOTAL</span>
            <b>{money(subtotal)}</b>
          </div>
          <div>
            <span>SHIPPING</span>
            <b>FREE*</b>
          </div>
          <form onSubmit={applyCoupon}>
            <label htmlFor="coupon">GOT A SECRET?</label>
            <div>
              <input
                id="coupon"
                placeholder="COUPON CODE"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
              />
              <button type="submit">APPLY</button>
            </div>
            <small>{couponMessage}</small>
          </form>
          <div className="total">
            <span>TOTAL</span>
            <b>{money(subtotal)}</b>
          </div>
          <SpecularButton
            size="md"
            baseColor="#525252"
            lineColor="#ceff00"
            disabled={items.length === 0}
            onClick={() => (window.location.href = '/checkout')}
            className="cart-checkout-cta"
          >
            PROCEED TO CHECKOUT ↗
          </SpecularButton>
          <small style={{ display: 'block', marginTop: 14 }}>
            *Free shipping is also fictional. Everything here is vibes.
          </small>
        </aside>
      </div>
      <style jsx>{`
        .cart-checkout-cta {
          width: 100%;
          margin: 17px 0;
        }
      `}</style>
    </main>
  );
}
