// Product catalog shared across every /(store) category route.
// Note: the original app.js shipped with several broken image hosts
// (e.g. "imageplash.com", "images.unsplasm", "images.unsplash" with no TLD,
// and two URLs missing the "https://images.unsplash.com/" prefix entirely).
// Those are corrected here so every product image actually resolves.

export const products = [
  {
    id: 'void-runner',
    name: 'VOID RUNNER 01',
    price: 1299,
    was: 1999,
    tag: 'YOU GOT LUCKY',
    category: 'runners',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'chrome-dust',
    name: 'CHROME DUST',
    price: 2499,
    was: 3299,
    tag: 'MIDNIGHT DROP',
    category: 'drops',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'night-shift',
    name: 'NIGHT SHIFT 3M',
    price: 1999,
    was: 2799,
    tag: 'LOW BATTERY',
    category: 'trail-runners',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'offline-high',
    name: 'OFFLINE HIGH',
    price: 3999,
    was: 4999,
    tag: 'TOUCH GRASS',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'concrete-baby',
    name: 'CONCRETE BABY',
    price: 799,
    was: 1299,
    tag: 'LAST PAIR ENERGY',
    category: 'skate',
    image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'silver-lining',
    name: 'SILVER LINING',
    price: 8777,
    was: 10499,
    tag: 'MAIN CHARACTER',
    category: 'classics',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'court-call',
    name: 'COURT CALL',
    price: 2199,
    was: 2899,
    tag: 'NET GAINS',
    category: 'court',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'iron-set',
    name: 'IRON SET',
    price: 2699,
    was: 3499,
    tag: 'LEG DAY LORE',
    category: 'training',
    image: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'grass-stain',
    name: 'GRASS STAIN 02',
    price: 3199,
    was: 3999,
    tag: 'STUDDED',
    category: 'cleats',
    image: 'https://images.unsplash.com/photo-1517094495321-9c7f56f8e4a9?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'easy-exit',
    name: 'EASY EXIT',
    price: 1599,
    was: 1999,
    tag: 'NO LACES NO DRAMA',
    category: 'slip-ons',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'root-recycled',
    name: 'ROOT / RECYCLED',
    price: 2899,
    was: 3599,
    tag: 'LOW IMPACT',
    category: 'sustainable',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=85'
  }
];

export const categories = [
  { slug: 'runners', label: 'RUNNERS' },
  { slug: 'trail-runners', label: 'TRAIL RUNNERS' },
  { slug: 'court', label: 'COURT' },
  { slug: 'training', label: 'TRAINING' },
  { slug: 'cleats', label: 'CLEATS' },
  { slug: 'lifestyle', label: 'LIFESTYLE' },
  { slug: 'slip-ons', label: 'SLIP-ONS' },
  { slug: 'skate', label: 'SKATE' },
  { slug: 'drops', label: 'DROPS' },
  { slug: 'classics', label: 'CLASSICS' },
  { slug: 'sustainable', label: 'SUSTAINABLE' }
];

export const money = n => '₹' + n.toLocaleString('en-IN');

export function productsByCategory(category) {
  return products.filter(p => p.category === category);
}
