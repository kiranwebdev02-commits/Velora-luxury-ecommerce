export const categories = [
  { id: 'jewellery', name: 'Jewellery', description: 'The Art of Detail', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop' },
  { id: 'watches', name: 'Watches', description: 'Time, Refined', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop' },
  { id: 'bags', name: 'Bags', description: 'Carry Your Identity', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop' },
  { id: 'shoes', name: 'Shoes', description: 'Walk Different', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop' },
  { id: 'accessories', name: 'Accessories', description: 'The Finishing Touch', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop' }
];

export const collections = [
  { id: 'signature', name: 'The Signature Edit', description: 'Iconic pieces that define the VELORA aesthetic.', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop' },
  { id: 'new', name: 'New Arrivals', description: 'The latest pieces, curated for the new season.', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop' },
  { id: 'campaign', name: 'Less Ordinary', description: 'Explore the new campaign.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop' }
];

export const products = [
  // Jewellery - Rings
  {
    id: 'j-r-1',
    name: 'Signature Sculpted Ring',
    category: 'Jewellery',
    subcategory: 'Rings',
    price: 850,
    originalPrice: 850,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A bold statement piece crafted from solid 18k gold.',
    material: '18k Solid Gold',
    sizes: ['5', '6', '7', '8'],
    colors: ['Gold', 'White Gold'],
    isNew: true,
    discount: 0,
    tags: ['signature', 'bestseller']
  },
  {
    id: 'j-r-2',
    name: 'Eternity Diamond Band',
    category: 'Jewellery',
    subcategory: 'Rings',
    price: 2100,
    originalPrice: 2400,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A continuous circle of brilliance, featuring pavé-set diamonds.',
    material: 'Platinum, VVS1 Diamonds',
    sizes: ['5', '6', '7', '8', '9'],
    colors: ['Platinum', 'Gold'],
    isNew: false,
    discount: 12,
    tags: ['diamond', 'wedding']
  },
  // Jewellery - Necklaces
  {
    id: 'feat-1',
    name: 'The Sovereign Diamond Necklace',
    category: 'Jewellery',
    subcategory: 'Necklaces',
    price: 3450,
    originalPrice: 3450,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A masterpiece of fine jewellery designed to lay perfectly on the collarbone.',
    material: '18k Solid Gold, VVS1 Diamonds',
    sizes: ['16"', '18"'],
    colors: ['Gold', 'White Gold', 'Rose Gold'],
    isNew: true,
    discount: 0,
    tags: ['featured', 'diamond']
  },
  {
    id: 'j-n-2',
    name: 'Minimalist Chain Necklace',
    category: 'Jewellery',
    subcategory: 'Necklaces',
    price: 450,
    originalPrice: 450,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'An essential piece for everyday elegance.',
    material: '14k Gold',
    sizes: ['18"', '20"'],
    colors: ['Gold'],
    isNew: false,
    discount: 0,
    tags: ['everyday', 'minimalist']
  },
  // Watches
  {
    id: 'sig-2',
    name: 'Heritage Chronograph',
    category: 'Watches',
    subcategory: 'Classic',
    price: 4200,
    originalPrice: 4200,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A timeless timepiece featuring a complicated chronograph movement and sapphire crystal.',
    material: 'Stainless Steel, Sapphire Crystal',
    sizes: [],
    colors: ['Silver/Black', 'Silver/Blue'],
    isNew: true,
    discount: 0,
    tags: ['signature', 'watch']
  },
  {
    id: 'w-2',
    name: 'Modern Automatic Watch',
    category: 'Watches',
    subcategory: 'Modern',
    price: 2800,
    originalPrice: 3100,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Sleek, minimalist design with a reliable automatic movement.',
    material: 'Titanium, Leather',
    sizes: [],
    colors: ['Black', 'Brown'],
    isNew: false,
    discount: 9,
    tags: ['modern', 'automatic']
  },
  // Bags
  {
    id: 'sig-3',
    name: 'Velvet Evening Bag',
    category: 'Bags',
    subcategory: 'Handbags',
    price: 1250,
    originalPrice: 1250,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Elegant velvet clutch with gold hardware, perfect for evening wear.',
    material: 'Premium Velvet, Gold-tone Brass',
    sizes: [],
    colors: ['Black', 'Burgundy'],
    isNew: true,
    discount: 0,
    tags: ['evening', 'velvet']
  },
  {
    id: 'b-2',
    name: 'Everyday Leather Tote',
    category: 'Bags',
    subcategory: 'Handbags',
    price: 890,
    originalPrice: 890,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Spacious and durable full-grain leather tote.',
    material: 'Full-grain Italian Leather',
    sizes: [],
    colors: ['Tan', 'Black', 'Olive'],
    isNew: false,
    discount: 0,
    tags: ['everyday', 'leather']
  },
  // Shoes
  {
    id: 's-1',
    name: 'Sculpted Stiletto Heels',
    category: 'Shoes',
    subcategory: 'Heels',
    price: 650,
    originalPrice: 650,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Classic stiletto profile redefined with architectural lines.',
    material: 'Patent Leather',
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Black', 'Nude'],
    isNew: true,
    discount: 0,
    tags: ['heels', 'evening']
  },
  {
    id: 's-2',
    name: 'Minimalist Leather Sneakers',
    category: 'Shoes',
    subcategory: 'Sneakers',
    price: 420,
    originalPrice: 420,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Clean lines and premium comfort for the modern commuter.',
    material: 'Calf Leather, Rubber Sole',
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['White', 'Black'],
    isNew: false,
    discount: 0,
    tags: ['sneakers', 'casual']
  },
  // Accessories
  {
    id: 'a-1',
    name: 'Oversized Cat-Eye Sunglasses',
    category: 'Accessories',
    subcategory: 'Sunglasses',
    price: 320,
    originalPrice: 380,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Vintage-inspired silhouette with modern UV protection.',
    material: 'Acetate, CR-39 Lenses',
    sizes: [],
    colors: ['Tortoise', 'Black'],
    isNew: false,
    discount: 15,
    tags: ['sunglasses', 'summer']
  },
  {
    id: 'a-2',
    name: 'VELORA Signature Perfume',
    category: 'Accessories',
    subcategory: 'Perfume',
    price: 185,
    originalPrice: 185,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'An intoxicating blend of bergamot, oud, and vanilla.',
    material: 'Eau de Parfum, 50ml',
    sizes: [],
    colors: [],
    isNew: true,
    discount: 0,
    tags: ['fragrance', 'signature']
  }
];
