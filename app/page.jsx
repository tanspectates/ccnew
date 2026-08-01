'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollFloat from '../components/ScrollFloat';
import SpecularButton from '../components/SpecularButton';
import ProductGrid from '../components/ProductGrid';
import { products } from '../lib/products';

export default function HomePage() {
  const router = useRouter();

  return (
    <main>
      <section
        style={{
          minHeight: '78vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(85px,12vh,140px) clamp(25px,8vw,160px)',
          background:
            "linear-gradient(90deg,#050606 6%,#050606cc 38%,#05060615 87%), center/cover url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=2200&q=95')"
        }}
      >
        <p className="eyebrow">
          <span></span>DROP 02 / LIVE NOW
        </p>
        <ScrollFloat animationDuration={0.9} stagger={0.02} containerClassName="home-hero-title">
          SHOES WITH ISSUES.
        </ScrollFloat>
        <p style={{ maxWidth: 430, fontSize: 17, lineHeight: 1.55, margin: '28px 0' }}>
          Built for missed trains, long nights, questionable decisions, and every fit check in between.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SpecularButton
            size="lg"
            baseColor="#525252"
            lineColor="#ceff00"
            autoAnimate
            followMouse
            onClick={() => router.push('/runners')}
          >
            SHOP THE DROP ↗
          </SpecularButton>
          <Link className="button ghost" href="#featured">
            ENTER THE ROTATION
          </Link>
        </div>
      </section>

      <section id="featured" style={{ padding: '100px clamp(25px,8vw,160px)' }}>
        <p className="eyebrow">
          <span></span>THE CLEAN SLATE / 02
        </p>
        <h2 style={{ fontSize: 'clamp(50px,8vw,120px)', marginBottom: 40 }}>
          MADE FOR
          <br />
          THE <em>ROTATION.</em>
        </h2>
        <ProductGrid products={products.slice(0, 6)} />
        <Link className="button outline" href="/runners" style={{ margin: '0 auto', width: 'max-content', display: 'flex' }}>
          SEE ALL THE HEAT →
        </Link>
      </section>

      <section
        style={{
          padding: '110px clamp(25px,8vw,160px)',
          background: 'radial-gradient(circle at 25% 35%,#223465,transparent 28%), radial-gradient(circle at 74% 70%,#364d10,transparent 26%), #080a0b'
        }}
      >
        <p className="eyebrow">
          <span></span>SUPPORT, BUT MAKE IT HUMAN
        </p>
        <h2 style={{ fontSize: 'clamp(50px,8vw,120px)' }}>
          HELP?
          <br />
          <em>WE'RE HERE.</em>
        </h2>
        <p style={{ maxWidth: 420, lineHeight: 1.55, margin: '24px 0 30px' }}>
          Size question, shipping drama, existential footwear crisis — the Support page has FAQs and a help
          form.
        </p>
        <Link className="button lime" href="/support">
          GO TO SUPPORT ↗
        </Link>
      </section>

      <style>{`
        .home-hero-title .scroll-float-text {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(60px, 11vw, 170px);
          line-height: 0.86;
          letter-spacing: 1px;
          color: var(--ink);
        }
      `}</style>
    </main>
  );
}
