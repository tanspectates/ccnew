'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    // Fictional storefront — no real auth backend. Just route to account.
    router.push('/account');
  };

  return (
    <main className="page">
      <div className="auth-card">
        <p className="eyebrow">
          <span></span>WELCOME BACK
        </p>
        <h1 style={{ fontSize: 'clamp(50px,10vw,90px)' }}>
          LOG
          <br />
          <em>IN.</em>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button className="button lime" type="submit">
            LOG IN ↗
          </button>
        </form>
        <p className="switch">
          New here? <Link href="/signup">Create an account →</Link>
        </p>
      </div>
    </main>
  );
}
