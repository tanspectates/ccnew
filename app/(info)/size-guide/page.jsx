export const metadata = { title: 'Size Guide — Closet Cleaned' };

const SIZES = [
  { uk: 6, us: 7, eu: 40, cm: 25.4 },
  { uk: 7, us: 8, eu: 41, cm: 26.0 },
  { uk: 8, us: 9, eu: 42, cm: 26.7 },
  { uk: 9, us: 10, eu: 43, cm: 27.6 },
  { uk: 10, us: 11, eu: 44, cm: 28.3 },
  { uk: 11, us: 12, eu: 45, cm: 29.0 }
];

export default function SizeGuidePage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>GET THE FIT RIGHT
      </p>
      <h1>
        SIZE
        <br />
        <em>GUIDE.</em>
      </h1>
      <p style={{ maxWidth: 560, color: '#b0b2ad', lineHeight: 1.6, marginBottom: 40 }}>
        Go true to size for the daily pairs. Half a size up if you enjoy socks with personality. If you're
        between sizes, size up.
      </p>
      <table style={{ width: '100%', maxWidth: 640, borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', font: '10px var(--font-mono), monospace', color: '#9a9d9a' }}>
            <th style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>UK</th>
            <th style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>US</th>
            <th style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>EU</th>
            <th style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>CM</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map(row => (
            <tr key={row.uk} style={{ fontSize: 15 }}>
              <td style={{ padding: '14px 0', borderBottom: '1px solid #222' }}>{row.uk}</td>
              <td style={{ padding: '14px 0', borderBottom: '1px solid #222' }}>{row.us}</td>
              <td style={{ padding: '14px 0', borderBottom: '1px solid #222' }}>{row.eu}</td>
              <td style={{ padding: '14px 0', borderBottom: '1px solid #222' }}>{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
