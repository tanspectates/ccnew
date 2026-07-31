# Closet Cleaned

A static, multi-page fictional sneaker storefront.

Open `index.html` in a browser to view it. The site has no build step or package installation requirement.

## Discord purchase flow

Every **BUY ON DISCORD** button copies a product-specific order message, then opens the configured Discord profile:

`

Discord profile URLs cannot pre-fill a direct message from a website. The shop now uses a fictional checkout/bag flow instead, with no payment processing.

The Help buttons currently use the generic Google Forms URL (`https://docs.google.com/forms/`). Replace that URL in `index.html` and `support.html` with your own published form link.

## Replace later

- Product names, prices and images are all in `app.js`.
- Page content is in the individual HTML files.
- The visual system and responsive layout are in `styles.css`.
