import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/">
        <i>CC</i>
        <span>
          CLOSET
          <br />
          CLEANED
        </span>
      </Link>
      <div>
        <p>THE GOOD STUFF</p>
        <Link href="/runners">Shop all</Link>
        <Link href="/about">Our lore</Link>
        <Link href="/size-guide">Size guide</Link>
      </div>
      <div>
        <p>YOUR ACCOUNT</p>
        <Link href="/account">Account</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/wishlist">Wishlist</Link>
      </div>
      <div>
        <p>NO SPAM, JUST DROPS</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            e.currentTarget.innerHTML = '<strong>YOU\u2019RE ON THE LIST.</strong>';
          }}
          style={{ display: 'flex', borderBottom: '1px solid #777' }}
        >
          <input
            placeholder="your@email.com"
            aria-label="Email"
            style={{ width: '100%', background: 'none', border: 0, color: '#fff', padding: '10px 0' }}
          />
          <button style={{ background: 'none', border: 0, color: 'var(--lime)' }}>→</button>
        </form>
      </div>
      <small>© 2026 CLOSET CLEANED. MADE FOR THE GROUP CHAT.</small>
    </footer>
  );
}
