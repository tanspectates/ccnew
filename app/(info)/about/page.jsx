import Link from 'next/link';

export const metadata = { title: 'About — Closet Cleaned' };

export default function AboutPage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>HOW IT STARTED
      </p>
      <h1>
        A LITTLE TOO
        <br />
        <em>ONLINE.</em>
      </h1>
      <p style={{ maxWidth: 720, fontSize: 'clamp(19px,2.2vw,26px)', lineHeight: 1.4, margin: '38px 0 60px' }}>
        Closet Cleaned began with a simple belief: the shoes make the outfit, and nobody needs another pair that
        says nothing.
      </p>
      <div style={{ display: 'grid', gap: 40, maxWidth: 720 }}>
        <div>
          <h2 style={{ fontSize: 'clamp(36px,6vw,64px)', marginBottom: 16 }}>
            WE MAKE SHOES FOR THE <em>BEFORE &amp; AFTER.</em>
          </h2>
          <p style={{ lineHeight: 1.55, color: '#c9c8c3' }}>
            Before: "I have nothing to wear." After: "Actually, the shoes are doing most of the work." Our
            fictional factory sits somewhere between a late-night mood board and the part of your brain that
            knows the fit is right.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(36px,6vw,64px)', marginBottom: 16 }}>
            FOR THE ONES WHO <em>NOTICE.</em>
          </h2>
          <p style={{ lineHeight: 1.55, color: '#c9c8c3' }}>
            Closet Cleaned is a concept for people who notice the shoes before the outfit, and know that both
            can be true at the same time.
          </p>
        </div>
      </div>
      <Link className="button light" href="/runners" style={{ marginTop: 50 }}>
        SHOP THE EVIDENCE ↗
      </Link>
    </main>
  );
}
