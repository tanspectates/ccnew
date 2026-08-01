export const metadata = { title: 'Store Locator — Closet Cleaned' };

const STORES = [
  { city: 'Delhi', area: 'Khan Market', hours: '11 AM – 9 PM' },
  { city: 'Mumbai', area: 'Bandra West', hours: '11 AM – 9 PM' },
  { city: 'Bengaluru', area: 'Indiranagar', hours: '11 AM – 9 PM' }
];

export default function StoreLocatorPage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>COME SAY HI
      </p>
      <h1>
        FIND A
        <br />
        <em>STORE.</em>
      </h1>
      <p style={{ maxWidth: 560, color: '#b0b2ad', lineHeight: 1.6, marginBottom: 40 }}>
        Closet Cleaned is a fictional, experimental brand — these locations are for demo purposes only.
      </p>
      <div className="help-grid">
        {STORES.map((store, i) => (
          <article key={store.city}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h2>{store.city.toUpperCase()}</h2>
            <p>
              {store.area}
              <br />
              {store.hours}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
