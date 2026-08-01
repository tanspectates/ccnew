import Link from 'next/link';

export const metadata = { title: 'Account — Closet Cleaned' };

export default function AccountPage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>WELCOME BACK
      </p>
      <h1>
        YOUR
        <br />
        <em>ACCOUNT.</em>
      </h1>
      <div className="help-grid">
        <article>
          <span>01</span>
          <h2>ORDERS</h2>
          <p>Track current and past orders.</p>
          <Link className="button lime" href="/orders" style={{ marginTop: 16 }}>
            VIEW ORDERS ↗
          </Link>
        </article>
        <article>
          <span>02</span>
          <h2>WISHLIST</h2>
          <p>Everything you've saved for later.</p>
          <Link className="button lime" href="/wishlist" style={{ marginTop: 16 }}>
            VIEW WISHLIST ↗
          </Link>
        </article>
        <article>
          <span>03</span>
          <h2>BAG</h2>
          <p>Pick up where you left off.</p>
          <Link className="button lime" href="/cart" style={{ marginTop: 16 }}>
            VIEW BAG ↗
          </Link>
        </article>
        <article>
          <span>04</span>
          <h2>SUPPORT</h2>
          <p>Sizing, shipping, returns, real humans.</p>
          <Link className="button lime" href="/support" style={{ marginTop: 16 }}>
            GET HELP ↗
          </Link>
        </article>
      </div>
    </main>
  );
}
