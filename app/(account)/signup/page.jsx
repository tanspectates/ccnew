'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    router.push('/account');
  };

  return (
    <main className="page">
      <div className="auth-card">
        <p className="eyebrow">
          <span></span>NEW HERE?
        </p>
        <h1 style={{ fontSize: 'clamp(50px,10vw,90px)' }}>
          SIGN
          <br />
          <em>UP.</em>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">NAME</label>
            <input id="name" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          </div>
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
            CREATE ACCOUNT ↗
          </button>
        </form>
        <p className="switch">
          Already have an account? <Link href="/login">Log in →</Link>
        </p>
      </div>
    </main>
  );
}
