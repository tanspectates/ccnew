import Link from 'next/link';

export const metadata = { title: 'Wishlist — Closet Cleaned' };

export default function WishlistPage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>SAVED FOR LATER
      </p>
      <h1>
        THE
        <br />
        <em>WISHLIST.</em>
      </h1>
      <p className="empty-note">
        Tap the heart on any product card to save it here. <Link href="/runners">Start browsing →</Link>
      </p>
    </main>
  );
}
