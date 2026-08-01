# Closet Cleaned — Next.js Storefront

Next.js 14 App Router rebuild of the static Closet Cleaned site, with e-commerce
routing, a cart, and two React Bits components wired in.

## Setup

```bash
npm install
npm run dev
```

Requires `gsap` and `ogl` (already listed in `package.json`) for the two
React Bits components.

## Route map

Route groups (`(store)`, `(shopping)`, `(account)`, `(info)`) are Next.js
organizational folders — the parentheses mean they do **not** appear in the
URL, so the site matches your spec exactly:

```
/                      home
(store)
  /runners /trail-runners /court /training /cleats
  /lifestyle /slip-ons /skate /drops /classics /sustainable
(shopping)
  /cart /checkout /wishlist
(account)
  /account /orders /login /signup
(info)
  /support /about /size-guide /store-locator
```

All 11 store category pages render through one shared
`components/CategoryPage.jsx` + `components/ProductGrid.jsx`, filtered by a
`category` field on each product in `lib/products.js`. Add a product there
and it shows up on its category page automatically.

`app/layout.jsx` wraps every route in `CartProvider` + `Header` + `Footer`,
so the header/nav/bag-count/footer persist across every page without any
per-page wiring — that's just how Next.js layouts work.

## Cart / checkout flow

- `CartProvider` (`components/CartProvider.jsx`) holds bag state in React
  context, synced to `localStorage`, so it survives refreshes and stays in
  sync between the header bag count, product grids, and `/cart`.
- `/cart` computes subtotal/total live, supports the `SECXRET11` coupon
  (halves the price of `concrete-baby`, same as the original `app.js`), and
  removing items.
- `/checkout` is fictional — no payment processing, matches the original
  disclaimer. Placing an order clears the bag and redirects to `/orders`.
- `/orders` currently shows sample order data; wiring it to orders actually
  placed through checkout needs a backend or a persisted orders list, which
  is a reasonable next step once you have real accounts.

## React Bits components — fixes applied

Both components were written assuming a plain CRA/Vite app (implicit access
to `window`, no server render step). Dropped into Next.js App Router as-is,
they'd fail because App Router components are **Server Components by
default** — no `window`, no `useEffect` timing, no DOM.

**`SpecularButton`** (`components/SpecularButton.jsx`)
- Added `'use client'` at the top. Without it, Next throws at build/render
  because the component uses `useRef`, `useEffect`, `window`,
  `ResizeObserver`, and WebGL via `ogl` — none of which exist on the server.
- No other logic changes; used on the home hero CTA and the cart's
  "Proceed to Checkout" button.
- Because a native `<button>` can't legally contain an `<a>` (invalid HTML
  content model — both are "interactive content"), it's never used wrapping
  a `<Link>`. Navigation goes through `onClick` + `router.push(...)` instead.

**`ScrollFloat`** (`components/ScrollFloat.jsx`)
- Added `'use client'` for the same reason (uses `gsap`/`ScrollTrigger`,
  which touch `window`).
- `gsap.registerPlugin(ScrollTrigger)` is now guarded behind a
  `typeof window !== 'undefined'` check.
- **Fixed a cleanup bug**: the original effect created a `ScrollTrigger`
  but never killed it on unmount. That's invisible in a static site because
  nothing ever unmounts, but Next.js App Router unmounts a page's component
  tree on every client-side navigation — without cleanup, every visit to a
  page using `ScrollFloat` would leak another `ScrollTrigger` bound to a DOM
  node that no longer exists. The effect now captures the tween and calls
  `tween.scrollTrigger?.kill()` / `tween.kill()` in its cleanup function.
- Used for the home page hero headline.

## Other fixes made while porting

- `lib/products.js`: several product image URLs in the original `app.js`
  were broken (`imageplash.com`, `images.unsplasm`, `images.unsplash` with
  no TLD, and two URLs missing the `https://images.unsplash.com/` prefix
  entirely). All corrected to valid Unsplash URLs.
- `next.config.js` allows `images.unsplash.com` as a remote image host if
  you later swap the plain `<img>` tags for `next/image`.

## Known simplifications (fictional storefront, not production commerce)

- Login/signup don't hit a real auth backend — they're client-side forms
  that redirect to `/account`. Wire up NextAuth or your provider of choice
  when you're ready for real accounts.
- Wishlist saves are currently in-memory per product grid session, not
  persisted — same fix pattern as the cart (localStorage + context) would
  extend it.
- Checkout has no payment processor, matching the original site's explicit
  "fictional checkout" disclaimer.
