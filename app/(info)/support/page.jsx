'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I know my size?',
    a: 'Go true to size for the daily pairs. Half a size up if you enjoy socks with personality. Full breakdown on the Size Guide page.'
  },
  {
    q: 'How long does shipping take?',
    a: 'India-wide delivery is free over ₹1,499. Most orders leave the warehouse in 1–3 business days.'
  },
  {
    q: 'What is your returns policy?',
    a: 'Try them on indoors. If the vibe is wrong, message us within 7 days of delivery and we\u2019ll sort it out.'
  },
  {
    q: 'Can I change or cancel an order?',
    a: 'Reach out as soon as possible through the help form below — we can usually amend an order before it ships.'
  },
  {
    q: 'Do you ship outside India?',
    a: 'Not yet. Closet Cleaned currently ships within India only, but international drops are on the roadmap.'
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="page support">
      <p className="eyebrow">
        <span></span>WE'RE VERY NORMAL ABOUT SHOES
      </p>
      <h1>
        HOW CAN WE
        <br />
        <em>HELP?</em>
      </h1>

      <div className="help-grid">
        <article>
          <span>01</span>
          <h2>SIZING</h2>
          <p>Go true to size for the daily pairs. Half a size up if you enjoy socks with personality.</p>
        </article>
        <article>
          <span>02</span>
          <h2>SHIPPING</h2>
          <p>India-wide delivery is free over ₹1,499. Most orders leave in 1–3 business days.</p>
        </article>
        <article>
          <span>03</span>
          <h2>RETURNS</h2>
          <p>Try them on indoors. If the vibe is wrong, message us within 7 days.</p>
        </article>
        <article>
          <span>04</span>
          <h2>REAL PERSON?</h2>
          <p>Tap below for the help form; we reply once we stop staring at shoes.</p>
          <a
            className="button lime"
            href="https://docs.google.com/forms/"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 16 }}
          >
            OPEN HELP FORM ↗
          </a>
        </article>
      </div>

      <p className="eyebrow" style={{ marginTop: 70 }}>
        <span></span>FREQUENTLY ASKED
      </p>
      <div className="faq">
        {FAQS.map((item, i) => (
          <div className="faq-item" key={item.q}>
            <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} aria-expanded={openIndex === i}>
              {item.q}
              <span>{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
