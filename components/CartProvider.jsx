'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'cc-bag';

export function CartProvider({ children }) {
  const [bag, setBag] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  // Load persisted bag once on mount (localStorage is only available client-side).
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(stored)) setBag(stored);
    } catch {
      // ignore malformed storage
    }
  }, []);

  const persist = useCallback(next => {
    setBag(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const showToast = useCallback(message => {
    setToastMessage(message);
    const timer = setTimeout(() => setToastMessage(''), 2200);
    return () => clearTimeout(timer);
  }, []);

  const addToBag = useCallback(
    id => {
      setBag(current => {
        if (current.includes(id)) {
          showToast('ALREADY IN YOUR BAG.');
          return current;
        }
        const next = [...current, id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        showToast('ADDED TO YOUR BAG.');
        return next;
      });
    },
    [showToast]
  );

  const removeFromBag = useCallback(
    id => {
      setBag(current => {
        const next = current.filter(itemId => itemId !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const clearBag = useCallback(() => persist([]), [persist]);

  return (
    <CartContext.Provider value={{ bag, addToBag, removeFromBag, clearBag, toastMessage }}>
      {children}
      <div className={`toast${toastMessage ? ' show' : ''}`}>{toastMessage}</div>
      <style jsx>{`
        .toast {
          position: fixed;
          z-index: 50;
          bottom: 25px;
          left: 50%;
          transform: translate(-50%, 100px);
          background: var(--lime);
          color: #000;
          padding: 15px 20px;
          font: 10px var(--font-mono), monospace;
          letter-spacing: 1px;
          transition: 0.3s;
        }
        .toast.show {
          transform: translate(-50%, 0);
        }
      `}</style>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a <CartProvider>');
  return ctx;
}
