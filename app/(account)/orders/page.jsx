import Link from 'next/link';

export const metadata = { title: 'Orders — Closet Cleaned' };

const MOCK_ORDERS = [
  { id: 'CC-10482', item: 'NIGHT SHIFT 3M', status: 'delivered', total: '\u20b91,999', date: '18 Jul 2026' },
  { id: 'CC-10501', item: 'OFFLINE HIGH', status: 'transit', total: '\u20b93,999', date: '27 Jul 2026' },
  { id: 'CC-10512', item: 'VOID RUNNER 01', status: 'processing', total: '\u20b91,299', date: '31 Jul 2026' }
];

const STATUS_LABEL = {
  delivered: 'DELIVERED',
  transit: 'IN TRANSIT',
  processing: 'PROCESSING'
};

export default function OrdersPage() {
  return (
    <main className="page">
      <p className="eyebrow">
        <span></span>CURRENT &amp; PAST
      </p>
      <h1>
        YOUR
        <br />
        <em>ORDERS.</em>
      </h1>
      <div className="order-list">
        {MOCK_ORDERS.map(order => (
          <div className="order-row" key={order.id}>
            <div>
              <span className="oid">{order.id} · {order.date}</span>
              <h3>{order.item}</h3>
            </div>
            <span className={`status ${order.status}`}>{STATUS_LABEL[order.status]}</span>
            <span>{order.total}</span>
            <Link href="/support" style={{ fontSize: 13, color: '#ceff00', textDecoration: 'none' }}>
              Need help? →
            </Link>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 40, color: '#888', fontSize: 13 }}>
        Placed an order just now through the fictional checkout? It'll show up here on your next visit once
        order history is wired up to your account. For now this list is sample data.
      </p>
    </main>
  );
}
